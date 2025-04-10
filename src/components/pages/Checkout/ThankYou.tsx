import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigationHelper } from "@/hooks/use-navigate-helper";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  const navigationHelper = useNavigationHelper();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-100 via-lime-200 to-yellow-100 text-center p-6">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full"
      >
        <motion.div
          initial={{ rotate: -30, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex justify-center mb-6"
        >
          <CheckCircle className="text-green-600 w-16 h-16" />
        </motion.div>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-extrabold text-green-800 mb-2"
        >
          Thank You!
        </motion.h1>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 text-sm"
        >
          Your order was placed successfully. We’ll get started on it right away!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6"
        >
          <Button
            onClick={navigationHelper.goToHome}
            className="bg-[#5DBF13] hover:bg-green-700 text-white px-6 py-2 rounded-xl shadow-md"
          >
            Back to Home
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
