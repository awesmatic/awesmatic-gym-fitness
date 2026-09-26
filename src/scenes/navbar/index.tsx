import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import ThemeToggle from "@/shared/ThemeToggle";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  onSignInClick: () => void;
};

const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
  onSignInClick,
}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage
    ? ""
    : "bg-primary-100 drop-shadow dark:bg-dark-100";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 transition-colors duration-300`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img
              alt="logo"
              src={Logo}
              className="rounded-md dark:bg-gray-20 dark:px-2 dark:py-1"
            />

            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-6`}>
                  <ThemeToggle />
                  <button
                    type="button"
                    onClick={onSignInClick}
                    className="text-sm font-semibold text-gray-500 transition duration-300 hover:text-primary-500 dark:text-dark-text dark:hover:text-primary-300"
                  >
                    Sign In
                  </button>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <div className={`${flexBetween} gap-4`}>
                <ThemeToggle />
                <button
                  className="rounded-full bg-secondary-500 p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  aria-label="Toggle menu"
                >
                  <Bars3Icon className="h-6 w-6 text-gray-500" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl dark:bg-dark-100">
          <div className="flex justify-end p-12">
            <button
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              aria-label="Close menu"
            >
              <XMarkIcon className="h-6 w-6 text-gray-500 dark:text-dark-text" />
            </button>
          </div>

          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <button
              type="button"
              onClick={() => {
                setIsMenuToggled(false);
                onSignInClick();
              }}
              className="text-left text-gray-500 transition duration-300 hover:text-primary-500 dark:text-dark-text"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
