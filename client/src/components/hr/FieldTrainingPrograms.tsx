import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useToast } from "../../hooks/use-toast";
import { apiRequest } from "../../lib/queryClient";
import { formatNumber } from '../../lib/formatNumber';
import { 
  Shield, 
  Heart, 
  Flame, 
  Wrench,
  Film,
  Printer,
  Scissors,
  Users, 
  MapPin, 
  Clock, 
  Plus,
  Star,
  Calendar,
  Award,
  CheckCircle,
  XCircle,
  MoreHorizontal,
  Eye,
  Edit,
  Trash
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";

const trainingProgramSchema = z.object({
  title: z.string().min(1, "عنوان التدريب مطلوب"),
  title_ar: z.string().min(1, "العنوان بالعربية مطلوب"),
  description: z.string().optional(),
  description_ar: z.string().optional(),
  category: z.string().min(1, "الفئة مطلوبة"),
  training_scope: z.string().min(1, "نوع التدريب مطلوب"),
  duration_hours: z.number().min(1, "مدة التدريب مطلوبة"),
  max_participants: z.number().min(1, "العدد الأقصى للمشاركين مطلوب"),
  location: z.string().min(1, "مكان التدريب مطلوب"),
  practical_requirements: z.string().optional(),
  instructor_id: z.number().optional(),
  department_id: z.string().optional(),
  status: z.string().default('active')
});

const enrollmentSchema = z.object({
  program_id: z.string().min(1, "برنامج التدريب مطلوب"),
  employee_id: z.string().min(1, "الموظف مطلوب"),
  training_date: z.string().min(1, "تاريخ التدريب مطلوب"),
  attendance_notes: z.string().optional()
});

const evaluationSchema = z.object({
  enrollment_id: z.string().min(1, "التسجيل مطلوب"),
  program_id: z.string().min(1, "البرنامج مطلوب"),
  employee_id: z.string().min(1, "الموظف مطلوب"),
  evaluator_id: z.string().default("1"),
  evaluation_date: z.string(),
  theoretical_understanding: z.string().min(1, "الفهم النظري مطلوب"),
  practical_skills: z.string().min(1, "المهارات العملية مطلوبة"),
  safety_compliance: z.string().min(1, "الالتزام بالسلامة مطلوب"),
  teamwork: z.string().min(1, "العمل الجماعي مطلوب"),
  communication: z.string().min(1, "التواصل مطلوب"),
  strengths: z.string().optional(),
  areas_for_improvement: z.string().optional(),
  additional_notes: z.string().optional(),
  recommendation: z.string().min(1, "التوصية مطلوبة")
});

interface TrainingProgram {
  id: number;
  title: string;
  title_ar: string;
  description?: string;
  description_ar?: string;
  category: string;
  training_scope: string;
  duration_hours: number;
  max_participants?: number;
  location?: string;
  practical_requirements?: string;
  instructor_id?: number;
  department_id?: string;
  status: string;
  created_at: string;
  updated_at?: string;
}

interface TrainingEnrollment {
  id: number;
  program_id: number;
  employee_id: number;
  enrolled_date: string;
  training_date?: string;
  attendance_status: string;
  completion_status: string;
  attendance_notes?: string;
  practical_performance?: string;
  final_score?: number;
  certificate_issued: boolean;
  certificate_number?: string;
}

interface TrainingEvaluation {
  id: number;
  enrollment_id: number;
  program_id: number;
  employee_id: number;
  evaluator_id: number;
  evaluation_date: string;
  theoretical_understanding: number;
  practical_skills: number;
  safety_compliance: number;
  teamwork: number;
  communication: number;
  overall_rating: number;
  strengths?: string;
  areas_for_improvement?: string;
  additional_notes?: string;
  recommendation: string;
}

export default function FieldTrainingPrograms() {
  const [selectedView, setSelectedView] = useState<'programs' | 'enrollments' | 'evaluations'>('programs');
  const [isCreateProgramOpen, setIsCreateProgramOpen] = useState(false);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [isEvaluationOpen, setIsEvaluationOpen] = useState(false);
  const [selectedEnrollment, setSelectedEnrollment] = useState<TrainingEnrollment | null>(null);
  
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Forms
  const programForm = useForm<z.infer<typeof trainingProgramSchema>>({
    resolver: zodResolver(trainingProgramSchema),
    defaultValues: {
      category: 'general',
      training_scope: 'safety',
      duration_hours: 4,
      max_participants: 20,
      status: 'active'
    }
  });

  const enrollmentForm = useForm<z.infer<typeof enrollmentSchema>>({
    resolver: zodResolver(enrollmentSchema),
    defaultValues: {
      program_id: "",
      employee_id: "",
      training_date: new Date().toISOString().split('T')[0],
      attendance_notes: ""
    }
  });

  const evaluationForm = useForm<z.infer<typeof evaluationSchema>>({
    resolver: zodResolver(evaluationSchema),
    defaultValues: {
      enrollment_id: "",
      program_id: "",
      employee_id: "",
      evaluator_id: "1",
      evaluation_date: new Date().toISOString().split('T')[0],
      theoretical_understanding: "3",
      practical_skills: "3",
      safety_compliance: "3",
      teamwork: "3",
      communication: "3",
      strengths: "",
      areas_for_improvement: "",
      additional_notes: "",
      recommendation: "pass"
    }
  });

  // Queries
  const { data: programs = [], isLoading: programsLoading } = useQuery<TrainingProgram[]>({
    queryKey: ['/api/hr/training-programs'],
    enabled: false, // Disable for now to test
    initialData: []
  });

  const { data: enrollments = [], isLoading: enrollmentsLoading } = useQuery<TrainingEnrollment[]>({
    queryKey: ['/api/hr/training-enrollments'],
    enabled: false, // Disable for now to test
    initialData: []
  });

  const { data: evaluations = [], isLoading: evaluationsLoading } = useQuery<TrainingEvaluation[]>({
    queryKey: ['/api/hr/training-evaluations'],
    enabled: false, // Disable for now to test
    initialData: []
  });

  const { data: users = [] } = useQuery({
    queryKey: ['/api/users'],
    enabled: false, // Disable for now to test
    initialData: []
  });

  const { data: sections = [] } = useQuery({
    queryKey: ['/api/sections'],
    enabled: false, // Disable for now to test
    initialData: []
  });

  // Mutations
  const createProgramMutation = useMutation({
    mutationFn: (data: z.infer<typeof trainingProgramSchema>) => 
      apiRequest('/api/hr/training-programs', { method: 'POST', body: data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/hr/training-programs'] });
      setIsCreateProgramOpen(false);
      programForm.reset();
      toast({ title: "تم إنشاء برنامج التدريب بنجاح" });
    },
    onError: () => {
      toast({ title: "خطأ في إنشاء برنامج التدريب", variant: "destructive" });
    }
  });

  const createEnrollmentMutation = useMutation({
    mutationFn: (data: any) => 
      apiRequest('/api/hr/training-enrollments', { 
        method: 'POST', 
        body: {
          ...data,
          program_id: parseInt(data.program_id),
          employee_id: parseInt(data.employee_id)
        }
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/hr/training-enrollments'] });
      setIsEnrollmentOpen(false);
      enrollmentForm.reset();
      toast({ title: "تم تسجيل الموظف في التدريب بنجاح" });
    },
    onError: () => {
      toast({ title: "خطأ في تسجيل الموظف", variant: "destructive" });
    }
  });

  const createEvaluationMutation = useMutation({
    mutationFn: (data: any) => {
      const processedData = {
        ...data,
        enrollment_id: parseInt(data.enrollment_id),
        program_id: parseInt(data.program_id),
        employee_id: parseInt(data.employee_id),
        evaluator_id: parseInt(data.evaluator_id),
        theoretical_understanding: parseInt(data.theoretical_understanding),
        practical_skills: parseInt(data.practical_skills),
        safety_compliance: parseInt(data.safety_compliance),
        teamwork: parseInt(data.teamwork),
        communication: parseInt(data.communication),
        overall_rating: Math.round((
          parseInt(data.theoretical_understanding) +
          parseInt(data.practical_skills) +
          parseInt(data.safety_compliance) +
          parseInt(data.teamwork) +
          parseInt(data.communication)
        ) / 5 * 10) / 10
      };
      return apiRequest('/api/hr/training-evaluations', { method: 'POST', body: processedData });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/hr/training-evaluations'] });
      setIsEvaluationOpen(false);
      evaluationForm.reset();
      toast({ title: "تم حفظ تقييم التدريب بنجاح" });
    },
    onError: () => {
      toast({ title: "خطأ في حفظ التقييم", variant: "destructive" });
    }
  });

  // Helper functions
  const getScopeIcon = (scope: string) => {
    switch (scope) {
      case 'safety': return <Shield className="w-4 h-4" />;
      case 'first_aid': return <Heart className="w-4 h-4" />;
      case 'fire_safety': return <Flame className="w-4 h-4" />;
      case 'technical': return <Wrench className="w-4 h-4" />;
      case 'film': return <Film className="w-4 h-4" />;
      case 'printing': return <Printer className="w-4 h-4" />;
      case 'cutting': return <Scissors className="w-4 h-4" />;
      default: return <Shield className="w-4 h-4" />;
    }
  };

  const getScopeText = (scope: string) => {
    switch (scope) {
      case 'safety': return 'السلامة المهنية';
      case 'first_aid': return 'الإسعافات الأولية';
      case 'fire_safety': return 'السلامة من الحريق';
      case 'technical': return 'التقني';
      case 'film': return 'الفيلم';
      case 'printing': return 'الطباعة';
      case 'cutting': return 'التقطيع';
      default: return scope;
    }
  };

  const getCategoryText = (category: string) => {
    switch (category) {
      case 'general': return 'تدريب عام';
      case 'department_specific': return 'تدريب متخصص';
      default: return category;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'inactive': return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
      case 'draft': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'نشط';
      case 'inactive': return 'غير نشط';
      case 'draft': return 'مسودة';
      default: return status;
    }
  };

  const getAttendanceStatusColor = (status: string) => {
    switch (status) {
      case 'attended': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'absent': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'enrolled': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'cancelled': return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const getAttendanceStatusText = (status: string) => {
    switch (status) {
      case 'attended': return 'حضر';
      case 'absent': return 'غائب';
      case 'enrolled': return 'مسجل';
      case 'cancelled': return 'ملغى';
      default: return status;
    }
  };

  const getCompletionStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'failed': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'not_started': return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const getCompletionStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'مكتمل';
      case 'failed': return 'راسب';
      case 'not_started': return 'لم يبدأ';
      default: return status;
    }
  };

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case 'pass': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'fail': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'needs_retraining': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const getRecommendationText = (recommendation: string) => {
    switch (recommendation) {
      case 'pass': return 'نجح';
      case 'fail': return 'رسب';
      case 'needs_retraining': return 'يحتاج إعادة تدريب';
      default: return recommendation;
    }
  };

  const calculateOverallRating = (evaluation: TrainingEvaluation) => {
    return Math.round((
      evaluation.theoretical_understanding +
      evaluation.practical_skills +
      evaluation.safety_compliance +
      evaluation.teamwork +
      evaluation.communication
    ) / 5 * 10) / 10;
  };

  const onCreateProgram = async (data: z.infer<typeof trainingProgramSchema>) => {
    await createProgramMutation.mutateAsync(data);
  };

  const onCreateEnrollment = async (data: z.infer<typeof enrollmentSchema>) => {
    await createEnrollmentMutation.mutateAsync(data);
  };

  const onCreateEvaluation = async (data: z.infer<typeof evaluationSchema>) => {
    await createEvaluationMutation.mutateAsync(data);
  };

  const openEvaluationDialog = (enrollment: TrainingEnrollment) => {
    setSelectedEnrollment(enrollment);
    evaluationForm.setValue('enrollment_id', enrollment.id.toString());
    evaluationForm.setValue('program_id', enrollment.program_id.toString());
    evaluationForm.setValue('employee_id', enrollment.employee_id.toString());
    setIsEvaluationOpen(true);
  };

  if (programsLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">جاري تحميل برامج التدريب...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            نظام التدريب الميداني
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            إدارة التدريبات العملية والميدانية مع التقييم وإصدار الشهادات
          </p>
        </div>

        <Dialog open={isCreateProgramOpen} onOpenChange={setIsCreateProgramOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2" data-testid="button-create-program">
              <Plus className="w-4 h-4" />
              إضافة برنامج تدريبي
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl" dir="rtl">
            <DialogHeader>
              <DialogTitle>إضافة برنامج تدريبي جديد</DialogTitle>
              <DialogDescription>
                إنشاء برنامج تدريبي جديد للموظفين مع تحديد المدة والمتطلبات
              </DialogDescription>
            </DialogHeader>
            <Form {...programForm}>
              <form onSubmit={programForm.handleSubmit(onCreateProgram)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={programForm.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>العنوان (إنجليزي)</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-program-title" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={programForm.control}
                    name="title_ar"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>العنوان (عربي)</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-program-title-ar" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={programForm.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>فئة التدريب</FormLabel>
                        <FormControl>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger data-testid="select-program-category">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">تدريب عام</SelectItem>
                              <SelectItem value="department_specific">تدريب متخصص</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={programForm.control}
                    name="training_scope"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>نوع التدريب</FormLabel>
                        <FormControl>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger data-testid="select-program-scope">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="safety">السلامة المهنية</SelectItem>
                              <SelectItem value="first_aid">الإسعافات الأولية</SelectItem>
                              <SelectItem value="fire_safety">السلامة من الحريق</SelectItem>
                              <SelectItem value="technical">التقني</SelectItem>
                              <SelectItem value="film">الفيلم</SelectItem>
                              <SelectItem value="printing">الطباعة</SelectItem>
                              <SelectItem value="cutting">التقطيع</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <FormField
                    control={programForm.control}
                    name="duration_hours"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>مدة التدريب (ساعات)</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            {...field} 
                            onChange={(e) => field.onChange(parseInt(e.target.value))}
                            data-testid="input-program-duration"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={programForm.control}
                    name="max_participants"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>العدد الأقصى للمشاركين</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            {...field} 
                            onChange={(e) => field.onChange(parseInt(e.target.value))}
                            data-testid="input-program-max-participants"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={programForm.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>مكان التدريب</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-program-location" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setIsCreateProgramOpen(false)}
                    data-testid="button-cancel-program"
                  >
                    إلغاء
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={createProgramMutation.isPending}
                    data-testid="button-save-program"
                  >
                    {createProgramMutation.isPending ? "جاري الحفظ..." : "حفظ"}
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      {/* View Tabs */}
      <div className="flex gap-2 border-b">
        <Button
          variant={selectedView === 'programs' ? 'default' : 'ghost'}
          onClick={() => setSelectedView('programs')}
          className="rounded-b-none"
          data-testid="tab-programs"
        >
          <Shield className="w-4 h-4 ml-2" />
          برامج التدريب
        </Button>
        <Button
          variant={selectedView === 'enrollments' ? 'default' : 'ghost'}
          onClick={() => setSelectedView('enrollments')}
          className="rounded-b-none"
          data-testid="tab-enrollments"
        >
          <Users className="w-4 h-4 ml-2" />
          التسجيلات
        </Button>
        <Button
          variant={selectedView === 'evaluations' ? 'default' : 'ghost'}
          onClick={() => setSelectedView('evaluations')}
          className="rounded-b-none"
          data-testid="tab-evaluations"
        >
          <Star className="w-4 h-4 ml-2" />
          التقييمات
        </Button>
      </div>

      {/* Programs View */}
      {selectedView === 'programs' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Card key={program.id} className="border-2 hover:border-blue-300 transition-colors" data-testid={`card-program-${program.id}`}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getScopeIcon(program.training_scope)}
                    <span className="text-sm text-gray-500">{getScopeText(program.training_scope)}</span>
                  </div>
                  <Badge className={getStatusColor(program.status)}>
                    {getStatusText(program.status)}
                  </Badge>
                </div>
                <CardTitle className="text-lg" data-testid={`text-program-title-${program.id}`}>
                  {program.title_ar || program.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 text-sm" data-testid={`text-program-description-${program.id}`}>
                  {program.description_ar || program.description || "لا يوجد وصف"}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {formatNumber(program.duration_hours)} ساعات
                  </div>
                  {program.max_participants && (
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {formatNumber(program.max_participants)} مشارك
                    </div>
                  )}
                  {program.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {program.location}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="outline">
                    {getCategoryText(program.category)}
                  </Badge>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs text-gray-500">
                    تم الإنشاء: {format(new Date(program.created_at), 'dd/MM/yyyy')}
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Button size="sm" variant="outline" data-testid={`button-view-${program.id}`}>
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {programs.length === 0 && (
            <Card className="col-span-full">
              <CardContent className="flex flex-col items-center justify-center p-8">
                <Shield className="w-16 h-16 text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">لا توجد برامج تدريبية</h3>
                <p className="text-gray-500 text-center mb-4">
                  ابدأ بإضافة برامج التدريب الميداني للموظفين
                </p>
                <Button onClick={() => setIsCreateProgramOpen(true)} data-testid="button-create-first-program">
                  <Plus className="w-4 h-4 ml-2" />
                  إضافة برنامج تدريبي
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Enrollments View */}
      {selectedView === 'enrollments' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">التسجيلات في التدريب</h3>
            <Dialog open={isEnrollmentOpen} onOpenChange={setIsEnrollmentOpen}>
              <DialogTrigger asChild>
                <Button data-testid="button-new-enrollment">
                  <Plus className="w-4 h-4 ml-2" />
                  تسجيل جديد
                </Button>
              </DialogTrigger>
              <DialogContent dir="rtl">
                <DialogHeader>
                  <DialogTitle>تسجيل موظف في التدريب</DialogTitle>
                  <DialogDescription>
                    تسجيل موظف جديد في برنامج التدريب مع تحديد تاريخ التدريب
                  </DialogDescription>
                </DialogHeader>
                <Form {...enrollmentForm}>
                  <form onSubmit={enrollmentForm.handleSubmit(onCreateEnrollment)} className="space-y-4">
                    <FormField
                      control={enrollmentForm.control}
                      name="program_id"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>برنامج التدريب</FormLabel>
                          <FormControl>
                            <Select value={field.value || ""} onValueChange={field.onChange}>
                              <SelectTrigger data-testid="select-training-program">
                                <SelectValue placeholder="اختر برنامج التدريب" />
                              </SelectTrigger>
                              <SelectContent>
                                {programs.filter(program => program && program.id && program.id.toString().trim() !== '').map((program) => (
                                  <SelectItem key={program.id} value={program.id.toString()}>
                                    {program.title_ar || program.title}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={enrollmentForm.control}
                      name="employee_id"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>الموظف</FormLabel>
                          <FormControl>
                            <Select value={field.value || ""} onValueChange={field.onChange}>
                              <SelectTrigger data-testid="select-enrollment-employee">
                                <SelectValue placeholder="اختر الموظف" />
                              </SelectTrigger>
                              <SelectContent>
                                {users.filter((user: any) => user && user.id && user.id.toString().trim() !== '').map((user: any) => (
                                  <SelectItem key={user.id} value={user.id.toString()}>
                                    {user.display_name_ar || user.display_name || user.username}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={enrollmentForm.control}
                      name="training_date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>تاريخ التدريب</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} data-testid="input-enrollment-training-date" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-end gap-2">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setIsEnrollmentOpen(false)}
                        data-testid="button-cancel-enrollment"
                      >
                        إلغاء
                      </Button>
                      <Button type="submit" disabled={createEnrollmentMutation.isPending} data-testid="button-submit-enrollment">
                        {createEnrollmentMutation.isPending ? "جاري التسجيل..." : "تسجيل"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-4">
            {enrollments.map((enrollment) => (
              <Card key={enrollment.id} data-testid={`card-enrollment-${enrollment.id}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-4">
                        <span className="font-medium" data-testid={`text-enrollment-program-${enrollment.id}`}>
                          برنامج التدريب #{enrollment.program_id}
                        </span>
                        <Badge className={getAttendanceStatusColor(enrollment.attendance_status)}>
                          {getAttendanceStatusText(enrollment.attendance_status)}
                        </Badge>
                        <Badge className={getCompletionStatusColor(enrollment.completion_status)}>
                          {getCompletionStatusText(enrollment.completion_status)}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>الموظف: {enrollment.employee_id}</span>
                        {enrollment.training_date && (
                          <span>تاريخ التدريب: {format(new Date(enrollment.training_date), 'dd/MM/yyyy')}</span>
                        )}
                        {enrollment.final_score && (
                          <span>الدرجة: {enrollment.final_score}%</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {enrollment.certificate_issued && (
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          <Award className="w-3 h-3 ml-1" />
                          شهادة صادرة
                        </Badge>
                      )}
                      
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => openEvaluationDialog(enrollment)}
                        data-testid={`button-evaluate-${enrollment.id}`}
                      >
                        <Star className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {enrollments.length === 0 && (
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-8">
                  <Users className="w-16 h-16 text-gray-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">لا توجد تسجيلات</h3>
                  <p className="text-gray-500 text-center mb-4">
                    لم يتم تسجيل أي موظفين في التدريبات بعد
                  </p>
                  <Button onClick={() => setIsEnrollmentOpen(true)} data-testid="button-create-first-enrollment">
                    <Plus className="w-4 h-4 ml-2" />
                    تسجيل موظف
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      )}

      {/* Evaluations View */}
      {selectedView === 'evaluations' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">تقييمات التدريب</h3>
          </div>

          <div className="grid gap-4">
            {evaluations.map((evaluation) => (
              <Card key={evaluation.id} data-testid={`card-evaluation-${evaluation.id}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-4">
                        <span className="font-medium" data-testid={`text-evaluation-program-${evaluation.id}`}>
                          برنامج #{evaluation.program_id} - موظف #{evaluation.employee_id}
                        </span>
                        <Badge className={getRecommendationColor(evaluation.recommendation)}>
                          {getRecommendationText(evaluation.recommendation)}
                        </Badge>
                        <span className="text-sm text-gray-500">
                          التقييم الإجمالي: {calculateOverallRating(evaluation)}/5
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-5 gap-4 text-sm">
                        <div className="text-center">
                          <span className="block text-gray-500">الفهم النظري</span>
                          <span className="font-medium">{evaluation.theoretical_understanding}/5</span>
                        </div>
                        <div className="text-center">
                          <span className="block text-gray-500">المهارات العملية</span>
                          <span className="font-medium">{evaluation.practical_skills}/5</span>
                        </div>
                        <div className="text-center">
                          <span className="block text-gray-500">السلامة</span>
                          <span className="font-medium">{evaluation.safety_compliance}/5</span>
                        </div>
                        <div className="text-center">
                          <span className="block text-gray-500">العمل الجماعي</span>
                          <span className="font-medium">{evaluation.teamwork}/5</span>
                        </div>
                        <div className="text-center">
                          <span className="block text-gray-500">التواصل</span>
                          <span className="font-medium">{evaluation.communication}/5</span>
                        </div>
                      </div>

                      <div className="text-xs text-gray-500">
                        تاريخ التقييم: {format(new Date(evaluation.evaluation_date), 'dd/MM/yyyy')}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {evaluations.length === 0 && (
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-8">
                  <Star className="w-16 h-16 text-gray-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">لا توجد تقييمات</h3>
                  <p className="text-gray-500 text-center mb-4">
                    لم يتم إجراء أي تقييمات للتدريب بعد
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      )}

      {/* Evaluation Dialog */}
      <Dialog open={isEvaluationOpen} onOpenChange={setIsEvaluationOpen}>
        <DialogContent className="max-w-3xl" dir="rtl">
          <DialogHeader>
            <DialogTitle>تقييم التدريب الميداني</DialogTitle>
            <DialogDescription>
              تقييم أداء الموظف في التدريب الميداني بناءً على المعايير المحددة
            </DialogDescription>
          </DialogHeader>
          <Form {...evaluationForm}>
            <form onSubmit={evaluationForm.handleSubmit(onCreateEvaluation)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={evaluationForm.control}
                  name="evaluation_date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>تاريخ التقييم</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} data-testid="input-evaluation-date" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={evaluationForm.control}
                  name="recommendation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>التوصية</FormLabel>
                      <FormControl>
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger data-testid="select-recommendation">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pass">نجح</SelectItem>
                            <SelectItem value="fail">رسب</SelectItem>
                            <SelectItem value="needs_retraining">يحتاج إعادة تدريب</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">معايير التقييم (1-5)</h4>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={evaluationForm.control}
                    name="theoretical_understanding"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>الفهم النظري</FormLabel>
                        <FormControl>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger data-testid="select-theoretical">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {[1,2,3,4,5].map(num => (
                                <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={evaluationForm.control}
                    name="practical_skills"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>المهارات العملية</FormLabel>
                        <FormControl>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger data-testid="select-practical">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {[1,2,3,4,5].map(num => (
                                <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={evaluationForm.control}
                    name="safety_compliance"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>الالتزام بالسلامة</FormLabel>
                        <FormControl>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger data-testid="select-safety">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {[1,2,3,4,5].map(num => (
                                <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={evaluationForm.control}
                    name="teamwork"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>العمل الجماعي</FormLabel>
                        <FormControl>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger data-testid="select-teamwork">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {[1,2,3,4,5].map(num => (
                                <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={evaluationForm.control}
                    name="communication"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>التواصل</FormLabel>
                        <FormControl>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger data-testid="select-communication">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {[1,2,3,4,5].map(num => (
                                <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={evaluationForm.control}
                  name="strengths"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>نقاط القوة</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={3} data-testid="textarea-strengths" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={evaluationForm.control}
                  name="areas_for_improvement"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>مجالات التحسين</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={3} data-testid="textarea-improvements" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={evaluationForm.control}
                name="additional_notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ملاحظات إضافية</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={2} data-testid="textarea-additional-notes" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end gap-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsEvaluationOpen(false)}
                  data-testid="button-cancel-evaluation"
                >
                  إلغاء
                </Button>
                <Button type="submit" disabled={createEvaluationMutation.isPending} data-testid="button-save-evaluation">
                  {createEvaluationMutation.isPending ? "جاري الحفظ..." : "حفظ التقييم"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}