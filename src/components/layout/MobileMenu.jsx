import { AnimatePresence, motion } from "framer-motion";
import NavLinks from "./NavLinks";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 top-full w-full overflow-hidden border-t border-border bg-background/95 shadow-xl backdrop-blur-xl lg:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col p-4"
          >
            <NavLinks onClick={onClose} />
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;