import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RightDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function RightDrawer({ isOpen, onClose, children }: RightDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-white shadow-lg z-50 flex flex-col sm:rounded-l-xl rounded-none m-0 p-0"
            initial={{ x: "100%", opacity: 0.5, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{
              x: "100%",
              opacity: 0,
              scale: 0.95,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Header */}
            <div className="border-b flex justify-between items-center p-4 bg-[#5DBF13] text-white">
              <h2 className="text-lg font-bold">Product Information</h2>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 text-lg"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto py-4 bg-gray-100">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
