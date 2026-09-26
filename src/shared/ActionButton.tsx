import type { ReactNode } from "react";
import { SelectedPage } from "./types";

type Props = {
  children: ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <a
      className="rounded-md bg-secondary-500 px-10 py-2 font-semibold text-gray-500 transition duration-300 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </a>
  );
};

export default ActionButton;
