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
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            onClick={onClose}
          ></motion.div>

          {/* Drawer with flex column layout */}
          <motion.div
            className="fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg z-50 flex flex-col"
            initial={{ x: "100%", opacity: 0.5, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: "100%", opacity: 0, scale: 0.95, transition: { duration: 0.3, ease: "easeInOut" } }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Drawer Header */}
            <div className="border-b flex justify-between items-center p-4">
              <h2 className="text-lg font-bold">Product Information</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-800">✕</button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4">{children}</div>

            {/* Fixed Footer inside Drawer */}
            <div className="border-t p-4 bg-white shadow-md">
  {/* Add to Cart Button (Full Width) */}
  <Button className="bg-green-600 text-white px-4 py-2 rounded-lg w-full">
    Add to Cart
  </Button>
</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
