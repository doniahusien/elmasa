// validations/schema.ts
import * as yup from "yup";
import { useTranslations } from "next-intl";
import { dynamicRules } from "./rules";

type TFunction = ReturnType<typeof useTranslations>;

export const registerSchema = (t: TFunction) => {
  const rules = dynamicRules(t);

  return yup.object({
    name: rules.text?.(2, 50) ?? yup.string(),
    email: rules.email(),
    password: rules.minLength(8),
    confirmPassword: rules.passwordConfirmed("password"),
  });
};