import { storage } from "../storage";

interface ProductionData {
  timestamp: Date;
  machineId: number;
  productionRate: number;
  qualityScore: number;
  wastePercentage: number;
  temperature?: number;
  pressure?: number;
  speed?: number;
}

interface MLPrediction {
  predictedRate: number;
  qualityForecast: number;
  maintenanceAlert: boolean;
  confidence: number;
  recommendations: string[];
}

interface AnomalyDetection {
  isAnomaly: boolean;
  anomalyScore: number;
  affectedMetrics: string[];
  severity: 'low' | 'medium' | 'high';
  recommendations: string[];
}

class MachineLearningService {
  private productionHistory: ProductionData[] = [];
  private readonly HISTORY_LIMIT = 1000;

  /**
   * تحليل بيانات الإنتاج وإضافتها للسجل التاريخي
   */
  async addProductionData(data: ProductionData): Promise<void> {
    this.productionHistory.push(data);
    
    // الحفاظ على حد أقصى للبيانات التاريخية
    if (this.productionHistory.length > this.HISTORY_LIMIT) {
      this.productionHistory = this.productionHistory.slice(-this.HISTORY_LIMIT);
    }
  }

  /**
   * التنبؤ بأداء الإنتاج باستخدام خوارزميات التعلم الآلي
   */
  async predictProductionPerformance(machineId: number, hoursAhead: number = 24): Promise<MLPrediction> {
    try {
      const machineData = this.productionHistory.filter(d => d.machineId === machineId);
      
      if (machineData.length < 10) {
        return {
          predictedRate: 0,
          qualityForecast: 0,
          maintenanceAlert: false,
          confidence: 0,
          recommendations: [
            '⚠️ غير قادر على التنبؤ - بيانات غير كافية',
            `يحتاج إلى ${10 - machineData.length} نقطة بيانات إضافية على الأقل`,
            'قم بتشغيل الماكينة لفترة أطول لجمع بيانات رقابية'
          ]
        };
      }

      // حساب المتوسطات المتحركة
      const recentData = machineData.slice(-24); // آخر 24 نقطة بيانات
      const avgRate = recentData.reduce((sum, d) => sum + (d.productionRate || 0), 0) / Math.max(recentData.length, 1);
      const avgQuality = recentData.reduce((sum, d) => sum + (d.qualityScore || 0), 0) / Math.max(recentData.length, 1);
      const avgWaste = recentData.reduce((sum, d) => sum + (d.wastePercentage || 0), 0) / Math.max(recentData.length, 1);

      // اكتشاف الاتجاهات
      const trend = this.calculateTrend(recentData.map(d => d.productionRate || 0));
      const qualityTrend = this.calculateTrend(recentData.map(d => d.qualityScore || 0));

      // التنبؤ بناءً على الاتجاهات
      const predictedRate = Math.max(0, Math.min(100, avgRate + (trend * hoursAhead / 24)));
      const qualityForecast = Math.max(0, Math.min(100, avgQuality + (qualityTrend * hoursAhead / 24)));

      // تحديد حاجة الصيانة
      const maintenanceAlert = avgWaste > 8 || avgQuality < 80 || predictedRate < 70;

      // حساب مستوى الثقة
      const dataVariance = this.calculateVariance(recentData.map(d => d.productionRate || 0));
      const confidence = Math.max(0.1, Math.min(1.0, 1 - (dataVariance / 100)));

      const recommendations = this.generateRecommendations(
        predictedRate, qualityForecast, avgWaste, maintenanceAlert
      );

      return {
        predictedRate: isNaN(predictedRate) ? 0 : predictedRate,
        qualityForecast: isNaN(qualityForecast) ? 0 : qualityForecast,
        maintenanceAlert,
        confidence: isNaN(confidence) ? 0 : confidence,
        recommendations
      };
    } catch (error) {
      console.error('Error in predictProductionPerformance:', error);
      return {
        predictedRate: 0,
        qualityForecast: 0,
        maintenanceAlert: false,
        confidence: 0,
        recommendations: ['حدث خطأ في تحليل بيانات الإنتاج']
      };
    }
  }

  /**
   * اكتشاف الشذوذ في بيانات الإنتاج
   */
  async detectAnomalies(data: ProductionData): Promise<AnomalyDetection> {
    try {
      const machineData = this.productionHistory.filter(d => d.machineId === data.machineId);
      
      if (machineData.length < 20) {
        return {
          isAnomaly: false,
          anomalyScore: 0,
          affectedMetrics: [],
          severity: 'low',
          recommendations: [
            '⚠️ لا يمكن فحص الشذوذ - بيانات غير كافية',
            `يحتاج إلى ${20 - machineData.length} نقطة بيانات إضافية لاكتشاف الشذوذ`
          ]
        };
      }

    const recentData = machineData.slice(-50);
    const anomalies: string[] = [];
    let totalAnomalyScore = 0;

    // فحص معدل الإنتاج
    const avgRate = recentData.reduce((sum, d) => sum + d.productionRate, 0) / recentData.length;
    const rateStdDev = this.calculateStandardDeviation(recentData.map(d => d.productionRate));
    const rateZScore = rateStdDev > 0 ? Math.abs((data.productionRate - avgRate) / rateStdDev) : 0;
    
    if (rateZScore > 2) {
      anomalies.push('معدل الإنتاج');
      totalAnomalyScore += rateZScore;
    }

    // فحص جودة المنتج
    const avgQuality = recentData.reduce((sum, d) => sum + d.qualityScore, 0) / recentData.length;
    const qualityStdDev = this.calculateStandardDeviation(recentData.map(d => d.qualityScore));
    const qualityZScore = qualityStdDev > 0 ? Math.abs((data.qualityScore - avgQuality) / qualityStdDev) : 0;
    
    if (qualityZScore > 2) {
      anomalies.push('مؤشر الجودة');
      totalAnomalyScore += qualityZScore;
    }

    // فحص نسبة الهدر
    const avgWaste = recentData.reduce((sum, d) => sum + d.wastePercentage, 0) / recentData.length;
    const wasteStdDev = this.calculateStandardDeviation(recentData.map(d => d.wastePercentage));
    const wasteZScore = wasteStdDev > 0 ? Math.abs((data.wastePercentage - avgWaste) / wasteStdDev) : 0;
    
    if (wasteZScore > 2) {
      anomalies.push('نسبة الهدر');
      totalAnomalyScore += wasteZScore;
    }

    const isAnomaly = anomalies.length > 0;
    const anomalyScore = totalAnomalyScore / 3;
    
    let severity: 'low' | 'medium' | 'high' = 'low';
    if (anomalyScore > 3) severity = 'high';
    else if (anomalyScore > 2.5) severity = 'medium';

    const recommendations = this.generateAnomalyRecommendations(anomalies, severity);

      return {
        isAnomaly,
        anomalyScore,
        affectedMetrics: anomalies,
        severity,
        recommendations
      };
    } catch (error) {
      console.error('Error in detectAnomalies:', error);
      return {
        isAnomaly: false,
        anomalyScore: 0,
        affectedMetrics: [],
        severity: 'low',
        recommendations: ['حدث خطأ في تحليل الشذوذ']
      };
    }
  }

  /**
   * تحليل أنماط الإنتاج وتحديد أوقات الذروة
   */
  async analyzeProductionPatterns(): Promise<{
    peakHours: number[];
    optimalShifts: string[];
    seasonalTrends: any[];
    efficiencyInsights: string[];
  }> {
    try {
      if (this.productionHistory.length < 100) {
        return {
          peakHours: [],
          optimalShifts: [],
          seasonalTrends: [],
          efficiencyInsights: [
            '⚠️ غير قادر على تحليل الأنماط - بيانات غير كافية',
            `يحتاج إلى ${100 - this.productionHistory.length} نقطة بيانات إضافية`,
            'قم بتشغيل المعدات لجمع بيانات كافية'
          ]
        };
      }

      // تحليل أوقات الذروة
      const hourlyPerformance: { [key: number]: number[] } = {};
      
      this.productionHistory.forEach(data => {
        if (data.timestamp && typeof data.timestamp.getHours === 'function') {
          const hour = data.timestamp.getHours();
          if (!hourlyPerformance[hour]) hourlyPerformance[hour] = [];
          hourlyPerformance[hour].push(data.productionRate || 0);
        }
      });

      const peakHours = Object.entries(hourlyPerformance)
        .map(([hour, rates]) => ({
          hour: parseInt(hour),
          avgRate: rates.length > 0 ? rates.reduce((sum, rate) => sum + rate, 0) / rates.length : 0
        }))
        .sort((a, b) => b.avgRate - a.avgRate)
        .slice(0, 6)
        .map(item => item.hour)
        .filter(hour => !isNaN(hour));

      // تحديد أفضل نوبات العمل
      const shiftPerformance = {
        morning: this.getShiftPerformance(6, 14),
        afternoon: this.getShiftPerformance(14, 22),
        night: this.getShiftPerformance(22, 6)
      };

      const optimalShifts: string[] = [];
      if (shiftPerformance.morning > 80) optimalShifts.push('الصباحية');
      if (shiftPerformance.afternoon > 80) optimalShifts.push('المسائية');
      if (shiftPerformance.night > 75) optimalShifts.push('الليلية');

      const efficiencyInsights = this.generateEfficiencyInsights(shiftPerformance, peakHours);

      return {
        peakHours,
        optimalShifts,
        seasonalTrends: [],
        efficiencyInsights
      };
    } catch (error) {
      console.error('Error in analyzeProductionPatterns:', error);
      return {
        peakHours: [],
        optimalShifts: [],
        seasonalTrends: [],
        efficiencyInsights: ['حدث خطأ في تحليل أنماط الإنتاج']
      };
    }
  }

  /**
   * تحسين معاملات الإنتاج باستخدام خوارزميات التحسين
   */
  async optimizeProductionParameters(machineId: number): Promise<{
    recommendedSpeed: number;
    recommendedTemperature: number;
    recommendedPressure: number;
    expectedImprovement: number;
    confidence: number;
  }> {
    const machineData = this.productionHistory.filter(d => d.machineId === machineId);
    
    if (machineData.length < 50) {
      return {
        recommendedSpeed: 0,
        recommendedTemperature: 0,
        recommendedPressure: 0,
        expectedImprovement: 0,
        confidence: 0
      };
    }

    // العثور على أفضل أداء تاريخي
    const bestPerformance = machineData
      .filter(d => d.qualityScore > 90 && d.wastePercentage < 5)
      .sort((a, b) => b.productionRate - a.productionRate)[0];

    if (!bestPerformance) {
      return {
        recommendedSpeed: 0,
        recommendedTemperature: 0,
        recommendedPressure: 0,
        expectedImprovement: 0,
        confidence: 0
      };
    }

    const currentAvg = {
      rate: machineData.slice(-10).reduce((sum, d) => sum + d.productionRate, 0) / 10,
      quality: machineData.slice(-10).reduce((sum, d) => sum + d.qualityScore, 0) / 10,
      waste: machineData.slice(-10).reduce((sum, d) => sum + d.wastePercentage, 0) / 10
    };

    const expectedImprovement = Math.max(0, bestPerformance.productionRate - currentAvg.rate);

    return {
      recommendedSpeed: bestPerformance.speed || 85,
      recommendedTemperature: bestPerformance.temperature || 180,
      recommendedPressure: bestPerformance.pressure || 12,
      expectedImprovement,
      confidence: 0.8
    };
  }

  // دوال مساعدة
  private calculateTrend(values: number[]): number {
    if (values.length < 3) return 0;
    
    const n = values.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;
    
    for (let i = 0; i < n; i++) {
      sumX += i;
      sumY += values[i];
      sumXY += i * values[i];
      sumXX += i * i;
    }
    
    const denominator = n * sumXX - sumX * sumX;
    return denominator !== 0 ? (n * sumXY - sumX * sumY) / denominator : 0;
  }

  private calculateVariance(values: number[]): number {
    const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
    const squaredDiffs = values.map(val => Math.pow(val - mean, 2));
    return squaredDiffs.reduce((sum, val) => sum + val, 0) / values.length;
  }

  private calculateStandardDeviation(values: number[]): number {
    return Math.sqrt(this.calculateVariance(values));
  }

  private getShiftPerformance(startHour: number, endHour: number): number {
    const shiftData = this.productionHistory.filter(data => {
      const hour = data.timestamp.getHours();
      return startHour <= endHour ? 
        (hour >= startHour && hour < endHour) :
        (hour >= startHour || hour < endHour);
    });

    if (shiftData.length === 0) return 75;
    
    return shiftData.reduce((sum, d) => sum + d.productionRate, 0) / shiftData.length;
  }

  private generateRecommendations(
    predictedRate: number, 
    qualityForecast: number, 
    wastePercentage: number, 
    maintenanceAlert: boolean
  ): string[] {
    const recommendations: string[] = [];

    if (predictedRate < 70) {
      recommendations.push('فحص سرعة المكينة وضبط المعاملات');
      recommendations.push('مراجعة جودة المواد الخام');
    }

    if (qualityForecast < 85) {
      recommendations.push('فحص أنظمة الجودة والمعايرة');
      recommendations.push('تدريب العمال على معايير الجودة');
    }

    if (wastePercentage > 5) {
      recommendations.push('مراجعة عملية القطع والتشكيل');
      recommendations.push('فحص حالة القوالب والأدوات');
    }

    if (maintenanceAlert) {
      recommendations.push('جدولة صيانة وقائية عاجلة');
      recommendations.push('فحص جميع أجزاء المكينة');
    }

    if (recommendations.length === 0) {
      recommendations.push('الأداء ضمن المعدل الطبيعي');
    }

    return recommendations;
  }

  private generateAnomalyRecommendations(anomalies: string[], severity: string): string[] {
    const recommendations: string[] = [];

    if (anomalies.includes('معدل الإنتاج')) {
      recommendations.push('فحص فوري لنظام التشغيل');
      recommendations.push('مراجعة سرعة وضغط المكينة');
    }

    if (anomalies.includes('مؤشر الجودة')) {
      recommendations.push('فحص نظام مراقبة الجودة');
      recommendations.push('معايرة أجهزة القياس');
    }

    if (anomalies.includes('نسبة الهدر')) {
      recommendations.push('فحص عملية القطع والتشكيل');
      recommendations.push('مراجعة جودة المواد الخام');
    }

    if (severity === 'high') {
      recommendations.unshift('إيقاف المكينة فوراً للفحص');
    }

    return recommendations;
  }

  private generateEfficiencyInsights(
    shiftPerformance: any, 
    peakHours: number[]
  ): string[] {
    const insights: string[] = [];

    if (shiftPerformance.morning > shiftPerformance.afternoon) {
      insights.push('الأداء أفضل في الفترة الصباحية');
    }

    if (peakHours.includes(8) && peakHours.includes(9)) {
      insights.push('الساعات الأولى من العمل تحقق أفضل إنتاجية');
    }

    if (shiftPerformance.night < 70) {
      insights.push('الفترة الليلية تحتاج تحسين في الإنتاجية');
    }

    insights.push(`أفضل ساعات الإنتاج: ${peakHours.join('، ')}`);

    return insights;
  }
}

export const mlService = new MachineLearningService();