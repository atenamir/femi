import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

interface IAccordionProps {
  className?: string;
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<IAccordionProps> = ({ title, children, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      <button
        className="cursor-pointer w-full flex items-center justify-between p-2"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <p>{title}</p>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
        >
          <IoIosArrowDown />
        </motion.span>
      </button>
      <motion.div
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="p-3">{children}</div>
      </motion.div>
    </div>
  );
};

export default AccordionItem;
