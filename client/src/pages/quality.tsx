import { useQuery } from "@tanstack/react-query";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import MobileNav from "../components/layout/MobileNav";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { CheckCircle2, XCircle, AlertTriangle, Clock } from "lucide-react";
import { formatNumber, formatPercentage } from '../lib/formatNumber';

export default function Quality() {
  const { data: qualityChecks, isLoading } = useQuery({
    queryKey: ["/api/quality-checks"],
  });

  const getStatusIcon = (result: string) => {
    switch (result) {
      case 'pass':
        return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case 'fail':
        return <XCircle className="w-4 h-4 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusText = (result: string) => {
    switch (result) {
      case 'pass':
        return 'مُجتاز';
      case 'fail':
        return 'راسب';
      case 'warning':
        return 'تحذير';
      default:
        return 'قيد الانتظار';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex">
        <Sidebar />
        <MobileNav />
        
        <main className="flex-1 lg:mr-64 p-4 pb-20 lg:pb-4">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">إدارة الجودة</h1>
            <p className="text-gray-600">مراقبة فحوصات الجودة ومعايير الإنتاج</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">إجمالي الفحوصات</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {formatNumber(Array.isArray(qualityChecks) ? qualityChecks.length : 0)}
                    </p>
                  </div>
                  <CheckCircle2 className="w-8 h-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">فحوصات مُجتازة</p>
                    <p className="text-2xl font-bold text-green-600">
                      {formatNumber(Array.isArray(qualityChecks) ? qualityChecks.filter((q: any) => q.result === 'pass').length : 0)}
                    </p>
                  </div>
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">فحوصات راسبة</p>
                    <p className="text-2xl font-bold text-red-600">
                      {formatNumber(Array.isArray(qualityChecks) ? qualityChecks.filter((q: any) => q.result === 'fail').length : 0)}
                    </p>
                  </div>
                  <XCircle className="w-8 h-8 text-red-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">معدل النجاح</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {formatPercentage(Array.isArray(qualityChecks) && qualityChecks.length > 0
                        ? Math.round((qualityChecks.filter((q: any) => q.result === 'pass').length / qualityChecks.length) * 100)
                        : 0)}
                    </p>
                  </div>
                  <AlertTriangle className="w-8 h-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>فحوصات الجودة الأخيرة</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                  <p className="mt-2 text-sm text-muted-foreground">جاري التحميل...</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          رقم الرولة
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          نوع الفحص
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          النتيجة
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          الملاحظات
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          المفتش
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          التاريخ
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {Array.isArray(qualityChecks) ? qualityChecks.map((check: any) => (
                        <tr key={check.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {check.roll_number}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {check.check_type}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              {getStatusIcon(check.result)}
                              <Badge variant={
                                check.result === 'pass' ? 'default' : 
                                check.result === 'fail' ? 'destructive' : 
                                'secondary'
                              }>
                                {getStatusText(check.result)}
                              </Badge>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                            {check.notes || '-'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {check.inspector_name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(check.checked_at).toLocaleDateString('ar')}
                          </td>
                        </tr>
                      )) : (
                        <tr>
                          <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                            لا توجد بيانات متاحة
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}