import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center transition-colors duration-300 dark:border-dark-200"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4 text-gray-500 dark:border-dark-200 dark:bg-dark-200 dark:text-primary-300">
          {icon}
        </div>
      </div>

      <h4 className="font-display font-bold text-gray-500 dark:text-dark-text">
        {title}
      </h4>
      <p className="my-3 text-gray-500 dark:text-dark-text">{description}</p>
      <a
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </a>
    </motion.div>
  );
};

export default Benefit;
