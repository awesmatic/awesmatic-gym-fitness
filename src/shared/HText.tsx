import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h1 className="basis-3/5 font-display text-3xl font-bold text-gray-500 dark:text-dark-text">
      {children}
    </h1>
  );
};

export default HText;
