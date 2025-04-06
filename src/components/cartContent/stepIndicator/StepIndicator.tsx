import { motion, LayoutGroup } from "framer-motion";
import { IStepProps, IStepsItem } from "./types";

function StepIndicator({ step }: IStepProps) {
  // === define values for each step ===
  const steps = [
    { id: 1, title: "Youre Cart" },
    { id: 2, title: "Youre Info" },
    { id: 3, title: "Confirmation" },
  ];
  return (
    <div className="w-[80%] mx-auto mt-12 mb-5">
      <LayoutGroup>
        <ul className="flex">
          {steps.map((item: IStepsItem) => (
            <motion.li
              key={item.id}
              className={`relative flex-1 py-2 text-center cursor-default border-b ${
                step == item.id
                  ? "border-pink-400 text-pink-400"
                  : "border-gray-400 text-gray-400"
              }`}
            >
              {item.title}
              {step === item.id && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  className="absolute inset-x-0 bottom-0 h-[1px] bg-pink-400"
                />
              )}
            </motion.li>
          ))}
        </ul>
      </LayoutGroup>
    </div>
  );
}

export default StepIndicator;
