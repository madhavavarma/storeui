import { Fragment, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ICartState } from "@/store/interfaces/ICartState";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "@/store/interfaces/IState";
import { OrdersActions } from "@/store/OrdersSlice";
import OrderDrawer from "./OrderDrawer";
import Header from "@/components/base/Header";
import Footer from "@/components/base/Footer";
import OrderSummary from "./OrderSummary";
import { getOrders } from "@/helpers/api";
import { motion, AnimatePresence } from "framer-motion";

export default function OrderList() {
  const dispatch = useDispatch();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const orders = useSelector((state: IState) => state.Orders.orders);

  const fetchOrders = async () => {
    try {
      const orders = await getOrders();
      dispatch(OrdersActions.loadOrders(orders || []));
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleViewOrder = (order: ICartState) => {
    dispatch(OrdersActions.showOrderDetail(order as any));
    setIsDrawerOpen(true);
  };

  return (
    <Fragment>
      <Header />
      <div className="p-6 min-h-[80vh] bg-gray-50">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">My Orders</h1>

        {/* Table for md+ screens */}
        <div className="overflow-hidden rounded-xl shadow border border-gray-200 hidden md:block">
          <table className="min-w-full bg-white">
            <thead className="bg-gradient-to-r from-green-100 to-green-200">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Order ID</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Order Date</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Item Count</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <AnimatePresence>
                {orders?.map((order, idx) => {
                  let orderDate = '';
                  if (order.created_at) {
                    const d = new Date(order.created_at);
                    orderDate = d.toLocaleString('en-US', {
                      month: 'short', day: '2-digit', year: 'numeric'
                    });
                  }
                  return (
                    <motion.tr
                      key={order.id || idx}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-4 py-3 text-xs text-gray-700 font-mono">{order.id}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{orderDate}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {order.cartitems?.length || 0} product{order.cartitems?.length === 1 ? '' : 's'}
                        {` ${order.totalquantity} item${order.totalquantity === 1 ? '' : 's'}`}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">{order.status || 'Pending'}</td>
                      <td className="px-4 py-3 text-center">
                        <Button
                          className="bg-[#5DBF13] text-white px-4 py-1 rounded-lg hover:bg-green-700 shadow-sm"
                          onClick={() => handleViewOrder(order)}
                        >
                          View
                        </Button>
                      </td>
                    </motion.tr>
                  );
                })}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
        {/* Card layout for mobile */}
        <div className="flex flex-col gap-4 md:hidden">
          <AnimatePresence>
            {orders?.map((order, idx) => {
              let orderDate = '';
              if (order.created_at) {
                const d = new Date(order.created_at);
                orderDate = d.toLocaleString('en-US', {
                  month: 'short', day: '2-digit', year: 'numeric'
                });
              }
              return (
                <motion.div
                  key={order.id || idx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-xl shadow border border-gray-200 p-4 flex flex-col gap-2"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-mono text-gray-500">{order.id}</span>
                    <span className="text-xs text-gray-400">{orderDate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700 font-semibold">
                      {order.cartitems?.length || 0} product{order.cartitems?.length === 1 ? '' : 's'}
                      {` ${order.totalquantity} item${order.totalquantity === 1 ? '' : 's'}`}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700 font-semibold">
                      {order.status || 'Pending'}
                    </span>
                  </div>
                  <Button
                    className="bg-[#5DBF13] text-white px-4 py-1 rounded-lg hover:bg-green-700 shadow-sm mt-2 w-full"
                    onClick={() => handleViewOrder(order)}
                  >
                    View
                  </Button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Order Drawer */}
      <OrderDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <OrderSummary />
      </OrderDrawer>
      <Footer />
    </Fragment>
  );
}
