"use client";
import BaseForm from "@/components/Base/Form";
import FormField from "@/components/Form/FormField";
import Input from "@/components/Base/Input";
import Button from "@/components/Base/Button";
import { SignUpFormData } from "@/types";
import { Lock, Phone, User, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "@/validations/schema";
import { CheckboxBasic } from "../Base/CheckBox";

export default function SignUpForm() {
  const t = useTranslations();
  return (
    <BaseForm<SignUpFormData>
      onSubmit={(data) => console.log(data)}
      resolver={yupResolver(SignUpSchema(t))}
    >
      <h2 className="font-medium text-st2 md:text-h4">{t("LABELS.signup")}</h2>
      <FormField
        label={t("TITLES.name")}
        name="name"
        component={Input}
        placeholder={t("LABELS.name")}
        icon={User}
      />
      <FormField
        label={t("TITLES.identity")}
        name="identity"
        component={Input}
        placeholder={t("LABELS.identity")}
        icon={User}
      />
      <FormField
        label={t("TITLES.phone")}
        name="phone"
        component={Input}
        placeholder={t("LABELS.phone")}
        icon={Phone}
      />
      <FormField
        label={t("TITLES.email")}
        name="email"
        component={Input}
        placeholder={t("LABELS.email")}
        icon={Mail}
      />
      <FormField
        label={t("TITLES.password")}
        name="password"
        component={Input}
        placeholder={t("LABELS.password")}
        icon={Lock}
      />
      <FormField
        name="confirmPassword"
        component={Input}
        label={t("TITLES.password_confirmation")}
        placeholder={t("LABELS.password_confirmation")}
        type="password"
        icon={Lock}
      />
      <CheckboxBasic  label={t("LABELS.accept_terms")} />
      <Button type="submit" className="w-full">
        {t("BUTTONS.register")}
      </Button>
    </BaseForm>
  );
}
