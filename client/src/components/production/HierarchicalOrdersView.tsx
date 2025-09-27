import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Input } from "../ui/input";
import { 
  ChevronDown, 
  ChevronRight, 
  Eye, 
  Plus, 
  Search 
} from "lucide-react";
import { formatNumber, formatWeight } from '../../lib/formatNumber';

interface HierarchicalOrdersViewProps {
  stage: string;
  onCreateRoll: (productionOrderId?: number) => void;
}

const formatPercentage = (value: number): string => {
  return `${value}%`;
};

export default function HierarchicalOrdersView({ stage, onCreateRoll }: HierarchicalOrdersViewProps) {
  const queryClient = useQueryClient();
  const [expandedOrders, setExpandedOrders] = useState<Set<number>>(new Set());
  const [expandedProductionOrders, setExpandedProductionOrders] = useState<Set<number>>(new Set());
  const [searchTerm, setSearchTerm] = useState("");

  const { data: ordersData = [], isLoading } = useQuery<any[]>({
    queryKey: ['/api/production/hierarchical-orders'],
    refetchInterval: 90000, // Reduced from 30s to 90s (1.5 minutes)
    staleTime: 60000, // Cache for 1 minute to reduce server load
    gcTime: 2 * 60 * 1000, // 2 minutes garbage collection
  });

  // تنظيف الاستعلامات عند إلغاء تحميل المكون
  useEffect(() => {
    return () => {
      // Cancel all queries for this component when unmounting
      queryClient.cancelQueries({ queryKey: ['/api/production/hierarchical-orders'] });
    };
  }, [queryClient]);

  const toggleOrderExpansion = (orderId: number) => {
    const newExpanded = new Set(expandedOrders);
    if (newExpanded.has(orderId)) {
      newExpanded.delete(orderId);
    } else {
      newExpanded.add(orderId);
    }
    setExpandedOrders(newExpanded);
  };

  const toggleProductionOrderExpansion = (productionOrderId: number) => {
    const newExpanded = new Set(expandedProductionOrders);
    if (newExpanded.has(productionOrderId)) {
      newExpanded.delete(productionOrderId);
    } else {
      newExpanded.add(productionOrderId);
    }
    setExpandedProductionOrders(newExpanded);
  };

  // Filter based on search term and stage requirements
  const filteredOrders = ordersData.filter(order => {
    // For film stage, show only orders with "for_production" status
    if (stage === "film" && order.status !== "for_production") {
      return false;
    }
    
    // Apply search filter if search term is provided
    if (!searchTerm) return true;
    
    const searchLower = searchTerm.toLowerCase();
    
    // Search in order number and customer name
    const orderMatch = order.order_number?.toLowerCase().includes(searchLower) ||
                      order.customer_name?.toLowerCase().includes(searchLower) ||
                      order.customer_name_ar?.toLowerCase().includes(searchLower);
    
    // Search in production orders
    const productionOrderMatch = order.production_orders?.some((productionOrder: any) => 
      productionOrder.production_order_number?.toLowerCase().includes(searchLower) ||
      productionOrder.item_name?.toLowerCase().includes(searchLower) ||
      productionOrder.item_name_ar?.toLowerCase().includes(searchLower)
    );
    
    // Search in rolls
    const rollMatch = order.production_orders?.some((productionOrder: any) =>
      productionOrder.rolls?.some((roll: any) =>
        roll.roll_number?.toLowerCase().includes(searchLower)
      )
    );
    
    return orderMatch || productionOrderMatch || rollMatch;
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-24 bg-muted animate-pulse rounded"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="البحث في الطلبات، أوامر العمل، الرولات، أو أسماء العملاء..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
          data-testid="input-search-orders"
        />
      </div>

      {/* Orders List */}
      {filteredOrders.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-muted-foreground">
            {searchTerm ? "لا توجد نتائج مطابقة للبحث" : "لا توجد طلبات في الإنتاج"}
          </p>
        </div>
      ) : (
        filteredOrders.map((order) => (
          <Card key={order.id} className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleOrderExpansion(order.id)}
                    data-testid={`button-expand-order-${order.id}`}
                  >
                    {expandedOrders.has(order.id) ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                  <div>
                    <CardTitle className="text-lg">{order.order_number}</CardTitle>
                    <p className="text-base font-bold text-blue-700">
                      العميل: {order.customer_name_ar || order.customer_name || "غير محدد"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">
                    {order.production_orders?.length || 0} أوامر إنتاج
                  </Badge>
                  <Badge variant="secondary" data-testid={`badge-order-status-${order.id}`}>
                    {order.status === 'for_production' ? 'للإنتاج' : 
                     order.status === 'pending' ? 'بالإنتظار' : order.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>

            {expandedOrders.has(order.id) && (
              <CardContent className="pt-0">
                {order.production_orders && order.production_orders.length > 0 ? (
                  <div className="space-y-3">
                    {order.production_orders.map((productionOrder: any) => {
                      const required = parseFloat(productionOrder.quantity_kg) || 0;
                      const produced = productionOrder.rolls 
                        ? productionOrder.rolls.reduce((sum: number, roll: any) => sum + (parseFloat(roll.weight_kg) || 0), 0)
                        : 0;
                      const progress = required > 0 ? Math.round((produced / required) * 100) : 0;

                      return (
                        <Card key={productionOrder.id} className="border border-gray-200 ml-6">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => toggleProductionOrderExpansion(productionOrder.id)}
                                  data-testid={`button-expand-production-order-${productionOrder.id}`}
                                >
                                  {expandedProductionOrders.has(productionOrder.id) ? (
                                    <ChevronDown className="h-4 w-4" />
                                  ) : (
                                    <ChevronRight className="h-4 w-4" />
                                  )}
                                </Button>
                                <div>
                                  <h4 className="font-medium">{productionOrder.production_order_number}</h4>
                                  <p className="text-sm text-muted-foreground">
                                    {productionOrder.item_name_ar || productionOrder.item_name || "غير محدد"}
                                  </p>
                                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2 text-xs">
                                    {productionOrder.size_caption && (
                                      <div>
                                        <span className="font-medium">المقاس: </span>
                                        <span className="text-muted-foreground">{productionOrder.size_caption}</span>
                                      </div>
                                    )}
                                    {productionOrder.thickness && (
                                      <div>
                                        <span className="font-medium">السماكة: </span>
                                        <span className="text-muted-foreground">{productionOrder.thickness}</span>
                                      </div>
                                    )}
                                    {productionOrder.raw_material && (
                                      <div>
                                        <span className="font-medium">الخامة: </span>
                                        <span className="text-muted-foreground">{productionOrder.raw_material}</span>
                                      </div>
                                    )}
                                    {productionOrder.master_batch_id && (
                                      <div>
                                        <span className="font-medium">لون ماستر باتش: </span>
                                        <span className="text-muted-foreground">{productionOrder.master_batch_id}</span>
                                      </div>
                                    )}
                                    <div>
                                      <span className="font-medium">طباعة: </span>
                                      <span className="text-muted-foreground">
                                        {productionOrder.is_printed ? 'نعم' : 'لا'}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-4">
                                <div className="text-sm">
                                  <span className="text-muted-foreground">الكمية: </span>
                                  {formatWeight(produced)} / {formatWeight(required)}
                                </div>
                                <div className="w-24">
                                  <Progress value={progress} className="h-2" />
                                  <span className="text-xs text-muted-foreground">{formatPercentage(progress)}</span>
                                </div>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => onCreateRoll(productionOrder.id)}
                                  data-testid={`button-create-roll-${productionOrder.id}`}
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>

                            {expandedProductionOrders.has(productionOrder.id) && productionOrder.rolls && (
                              <div className="mt-4 ml-6 space-y-2">
                                <h5 className="text-sm font-medium text-gray-700 mb-2">الرولات ({productionOrder.rolls.length})</h5>
                                {productionOrder.rolls.length === 0 ? (
                                  <p className="text-sm text-muted-foreground">لا توجد رولات بعد</p>
                                ) : (
                                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                                    {productionOrder.rolls.map((roll: any) => (
                                      <div 
                                        key={roll.id} 
                                        className="border rounded p-3 bg-gray-50"
                                        data-testid={`roll-item-${roll.id}`}
                                      >
                                        <div className="flex justify-between items-start">
                                          <div>
                                            <p className="font-medium text-sm">{roll.roll_number}</p>
                                            <p className="text-xs text-muted-foreground">
                                              الوزن: {formatWeight(parseFloat(roll.weight_kg) || 0)}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                              المرحلة: {roll.stage === 'film' ? 'فيلم' : 
                                                       roll.stage === 'printing' ? 'طباعة' :
                                                       roll.stage === 'cutting' ? 'تقطيع' : roll.stage}
                                            </p>
                                          </div>
                                          <Badge 
                                            variant={roll.status === 'completed' ? 'default' : 'secondary'}
                                            className="text-xs"
                                          >
                                            {roll.status === 'completed' ? 'مكتمل' :
                                             roll.status === 'in_progress' ? 'قيد التنفيذ' :
                                             roll.status === 'pending' ? 'بالإنتظار' : roll.status}
                                          </Badge>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground ml-6">لا توجد أوامر إنتاج لهذا الطلب</p>
                )}
              </CardContent>
            )}
          </Card>
        ))
      )}
    </div>
  );
}