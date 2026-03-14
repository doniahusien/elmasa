"use client";
import BaseForm from "@/components/Base/Form";
import FormField from "@/components/Form/FormField";
import Input from "@/components/Base/Input";
import Button from "@/components/Base/Button";
import {forgetSchema} from "@/validations/schema";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { yupResolver } from "@hookform/resolvers/yup";

export default function ForgetPasswordForm() {
  const t = useTranslations();
  return (
    <BaseForm<{email: string}> onSubmit={(data) => console.log(data)} resolver={yupResolver(forgetSchema(t))}>
      <h2 className="font-medium text-st2 md:text-h4">{t("LABELS.are_forget_password")}</h2>
      <FormField
        label={t("TITLES.email")}
        name="email"
        component={Input}
        placeholder={t("LABELS.email")}
        icon={Mail}
      />

        <Button type="submit" className="w-full">{t("BUTTONS.send")}</Button>
       </BaseForm>
  );
}
