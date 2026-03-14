"use client";
import BaseForm from "@/components/Base/Form";
import FormField from "@/components/Form/FormField";
import Input from "@/components/Base/Input";
import Button from "@/components/Base/Button";
import { ResetFormData } from "@/types";
import { Lock } from "lucide-react";
import { useTranslations } from "next-intl";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetSchema } from "@/validations/schema";

export default function ResetPasswordForm() {
  const t = useTranslations();
  return (
    <BaseForm<ResetFormData>
      onSubmit={(data) => console.log(data)}
      resolver={yupResolver(resetSchema(t))}
    >
      <h2 className="font-medium text-st2 md:text-h4">
        {t("TITLES.reset_password")}
      </h2>
      <p className="text-gray-400">{t("LABELS.reset_password")}</p>

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

      <Button type="submit" className="w-full">
        {t("BUTTONS.reset_password")}
      </Button>
    </BaseForm>
  );
}
