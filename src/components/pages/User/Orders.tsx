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

        <div className="overflow-hidden rounded-xl shadow border border-gray-200">
          <table className="min-w-full bg-white">
            <thead className="bg-gradient-to-r from-green-100 to-green-200">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">#</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Total Items</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Total Price</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <AnimatePresence>
                {orders?.map((order, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-3 text-sm text-gray-700">{idx + 1}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{order.totalquantity}</td>
                    <td className="px-4 py-3 font-semibold text-green-600">
                      ₹{order.totalprice.toFixed(2)}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Button
                        className="bg-[#5DBF13] text-white px-4 py-1 rounded-lg hover:bg-green-700 shadow-sm"
                        onClick={() => handleViewOrder(order)}
                      >
                        View
                      </Button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
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
