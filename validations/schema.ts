import * as yup from "yup";
import { useTranslations } from "next-intl";
import { dynamicRules } from "./rules";

type TFunction = ReturnType<typeof useTranslations>;

export const SignUpSchema = (t: TFunction) => {
  const rules = dynamicRules(t);

  return yup.object({
    name: rules.minLength(2).required(t("TITLES.name")),
    identity_id: rules.minLength(10).required(t("TITLES.identity")),
    phone: rules.minLength(10).required(t("TITLES.phone")),
    email: rules.email(),
    password: rules.minLength(8).required(t("TITLES.password")),
    confirmPassword: rules
      .passwordConfirmed("password")
      .required(t("TITLES.password_confirmation")),
  });
};

export const loginSchema = (t: TFunction) => {
  const rules = dynamicRules(t);

  return yup.object({
    phone: rules.minLength(10).required(t("TITLES.phone")),
    password: rules.minLength(8).required(t("TITLES.password")),
  });
};

export const forgetSchema = (t: TFunction) => {
  const rules = dynamicRules(t);

  return yup.object({
    email: rules.email(),
  });
};
export const resetSchema = (t: TFunction) => {
  const rules = dynamicRules(t);

  return yup.object({
    password: rules.minLength(8).required(t("TITLES.password")),
    confirmPassword: rules
      .passwordConfirmed("password")
      .required(t("TITLES.password_confirmation")),
  });
};
