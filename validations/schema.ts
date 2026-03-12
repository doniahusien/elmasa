// validations/schema.ts
import * as yup from "yup";
import { dynamicRules } from "./rules";
import { TFunction } from "next-intl";  // ✅ only one import block

export const registerSchema = (t: TFunction) => {
  const rules = dynamicRules(t);

  return yup.object({
    name: rules.text?.(2, 50) ?? yup.string(),
    email: rules.email(),
    password: rules.minLength(8),
    confirmPassword: rules.passwordConfirmed("password"),
  });
};