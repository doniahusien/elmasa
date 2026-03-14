"use client";
import BaseForm from "@/components/Base/Form";
import FormField from "@/components/Form/FormField";
import Input from "@/components/Base/Input";
import Button from "@/components/Base/Button";
import { LoginFormData } from "@/types";
import { Lock, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/validations/schema";
import Link from "next/link";
export default function LoginForm() {
  const t = useTranslations();
  return (
    <BaseForm<LoginFormData> onSubmit={(data) => console.log(data)} resolver={yupResolver(loginSchema(t))}>
      <h2 className="font-medium text-st2 md:text-h4">{t("LABELS.login")}</h2>
      <FormField
        label={t("TITLES.email")}
        name="email"
        component={Input}
        placeholder={t("LABELS.email")}
        icon={Phone}
      />
      <FormField
        name="password"
        component={Input}
        label={t("TITLES.password")}
        placeholder={t("LABELS.password")}
        type="password"
        icon={Lock}
          />
          <Link href="/forget-password" className="ms-auto text-blue-500">{t("LABELS.forget_password")}</Link>
      <Button type="submit" className="w-full">{t("BUTTONS.login")}</Button>
      <p>{t("LABELS.no_account")} <Link href="/signup" className="text-blue-500">{t("LABELS.create_account")}</Link></p>
    </BaseForm>
  );
}
