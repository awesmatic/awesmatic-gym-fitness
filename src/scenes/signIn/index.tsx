import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { AuthMode } from "@/shared/types";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type FormValues = {
  name?: string;
  email: string;
  password: string;
};

const inputStyles = `mb-4 w-full rounded-lg border-2 border-gray-100 bg-transparent
  px-5 py-3 text-gray-500 placeholder-gray-500/60 outline-none transition
  focus:border-primary-500 dark:border-dark-200 dark:text-dark-text
  dark:placeholder-dark-text/40`;

const SignIn = ({ isOpen, onClose }: Props) => {
  const [mode, setMode] = useState<AuthMode>(AuthMode.SignIn);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>();

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setMode(AuthMode.SignIn);
      reset();
    }
  }, [isOpen, reset]);

  const onSubmit = () => { };

  const isSignUp = mode === AuthMode.SignUp;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-gray-500/60 backdrop-blur-sm dark:bg-black/70"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="signin-heading"
            className="relative z-10 w-full max-w-md rounded-2xl bg-gray-20 p-8 shadow-xl dark:bg-dark-100"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close sign in"
              className="absolute right-5 top-5 text-gray-500 transition hover:text-primary-500 dark:text-dark-text"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            <h1
              id="signin-heading"
              className="font-display text-2xl font-bold text-gray-500 dark:text-dark-text"
            >
              {isSignUp ? "Create your account" : "Welcome back"}
            </h1>
            <p className="mt-2 text-sm text-gray-500/80 dark:text-dark-text/70">
              {isSignUp
                ? "Join Awesmatic to book classes and track your progress."
                : "Sign in to manage your classes and membership."}
            </p>

            {isSubmitSuccessful ? (
              <div className="mt-6 rounded-lg border-2 border-secondary-500 bg-secondary-500/10 p-4 text-sm text-gray-500 dark:text-dark-text">
                {isSignUp
                  ? "Account created. You're all set to sign in."
                  : "You're signed in."}
              </div>
            ) : (
              <form className="mt-6" onSubmit={handleSubmit(onSubmit)} noValidate>
                {isSignUp && (
                  <>
                    <label htmlFor="signin-name" className="sr-only">
                      Full name
                    </label>
                    <input
                      id="signin-name"
                      className={inputStyles}
                      type="text"
                      placeholder="Full name"
                      autoFocus={isSignUp}
                      {...register("name", { required: isSignUp })}
                    />
                    {errors.name && (
                      <p className="-mt-3 mb-3 text-xs text-primary-500">
                        Your name is required.
                      </p>
                    )}
                  </>
                )}

                <label htmlFor="signin-email" className="sr-only">
                  Email
                </label>
                <input
                  id="signin-email"
                  className={inputStyles}
                  type="email"
                  placeholder="Email"
                  autoFocus={!isSignUp}
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="-mt-3 mb-3 text-xs text-primary-500">
                    Enter a valid email address.
                  </p>
                )}

                <label htmlFor="signin-password" className="sr-only">
                  Password
                </label>
                <input
                  id="signin-password"
                  className={inputStyles}
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true, minLength: 8 })}
                />
                {errors.password && (
                  <p className="-mt-3 mb-3 text-xs text-primary-500">
                    Password must be at least 8 characters.
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-2 w-full rounded-lg bg-secondary-500 py-3 font-semibold text-gray-500 transition duration-300 hover:bg-primary-500 hover:text-white"
                >
                  {isSignUp ? "Create account" : "Sign In"}
                </button>
              </form>
            )}

            <p className="mt-6 text-center text-sm text-gray-500/80 dark:text-dark-text/70">
              {isSignUp ? "Already a member?" : "New to Awesmatic?"}{" "}
              <button
                type="button"
                onClick={() =>
                  setMode(isSignUp ? AuthMode.SignIn : AuthMode.SignUp)
                }
                className="font-semibold text-primary-500 underline hover:text-secondary-500"
              >
                {isSignUp ? "Sign in" : "Create an account"}
              </button>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignIn;
