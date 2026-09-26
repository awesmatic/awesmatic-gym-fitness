import type { ReactNode } from "react";

export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export enum AuthMode {
  SignIn = "signin",
  SignUp = "signup",
}

export interface BenefitType {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
