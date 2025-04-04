import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

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
          ></motion.div>

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 h-full w-[360px] bg-white shadow-lg z-50 flex flex-col rounded-l-xl"
            initial={{ x: "100%", opacity: 0.5, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: "100%", opacity: 0, scale: 0.95, transition: { duration: 0.3, ease: "easeInOut" } }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Header */}
            <div className="border-b flex justify-between items-center p-4 bg-[#5DBF13] text-white">
              <h2 className="text-lg font-bold">Product Information</h2>
              <button onClick={onClose} className="text-white hover:text-gray-200 text-lg">
                ✕
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-100">{children}</div>

            {/* Footer */}
            <div className="border-t p-4 bg-white shadow-md">
              <Button className="bg-[#5DBF13] text-white px-4 py-2 rounded-lg w-full hover:bg-green-700">
                Add to Cart
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
