import { 
  Settings, 
  Cog, 
  Warehouse, 
  ClipboardCheck, 
  Users, 
  Wrench, 
  Database, 
  BarChart3,
  Home,
  Link2,
  FileText,
  LayoutDashboard,
  Bell,
  Monitor,
  Activity
} from "lucide-react";
import { Link, useLocation } from "wouter";

const modules = [
  {
    name: "الرئيسية",
    name_ar: "الرئيسية",
    icon: Home,
    path: "/",
    active: false
  },
  {
    name: "لوحة التحكم",
    name_ar: "لوحة التحكم",
    icon: LayoutDashboard,
    path: "/user-dashboard",
    active: false
  },
  {
    name: "الطلبات",
    name_ar: "الطلبات",
    icon: FileText,
    path: "/orders",
    active: false
  },
  {
    name: "الإنتاج",
    name_ar: "الإنتاج",
    icon: Cog,
    path: "/production",
    active: false
  },
  {
    name: "مراقبة الإنتاج",
    name_ar: "مراقبة الإنتاج",
    icon: Monitor,
    path: "/production-monitoring",
    active: false
  },
  {
    name: "الجودة",
    name_ar: "الجودة",
    icon: ClipboardCheck,
    path: "/quality",
    active: false
  },
  {
    name: "الصيانة",
    name_ar: "الصيانة",
    icon: Wrench,
    path: "/maintenance",
    active: false
  },
  {
    name: "الموارد البشرية",
    name_ar: "الموارد البشرية",
    icon: Users,
    path: "/hr",
    active: false
  },
  {
    name: "المستودع",
    name_ar: "المستودع",
    icon: Warehouse,
    path: "/warehouse",
    active: false
  },
  {
    name: "التعريفات",
    name_ar: "التعريفات",
    icon: Database,
    path: "/definitions",
    active: false
  },
  {
    name: "التقارير",
    name_ar: "التقارير",
    icon: BarChart3,
    path: "/reports",
    active: false
  },
  {
    name: "الإشعارات",
    name_ar: "الإشعارات",
    icon: Bell,
    path: "/notifications",
    active: false
  },

  {
    name: "الإعدادات",
    name_ar: "الإعدادات",
    icon: Settings,
    path: "/settings",
    active: false
  },
];

export default function Sidebar() {
  const [location] = useLocation();

  return (
    <aside className="fixed right-0 top-16 bottom-0 bg-white shadow-sm border-l border-gray-200 w-64 hidden lg:block z-10 overflow-y-auto">
      <nav className="p-4">
        <div className="space-y-2">
          {modules.map((module) => {
            const Icon = module.icon;
            const isActive = location === module.path;
            
            return (
              <Link key={module.name} href={module.path}>
                <div className={isActive ? "nav-item nav-item-active" : "nav-item"}>
                  <div className="w-full">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{module.name_ar}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
