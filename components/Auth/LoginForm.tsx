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
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { loginThunk } from "@/store/features/auth/authThunk";
import { showSuccess } from "@/lib/toast";

export default function LoginForm() {
  const t = useTranslations();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loading, error } = useAppSelector((state) => state.auth);

  return (
    <BaseForm<LoginFormData>
      onSubmit={async (data: LoginFormData) => {
        const result = await dispatch(
          loginThunk({ 'phone': data.phone, 'password': data.password }),
        );
        if (loginThunk.fulfilled.match(result)) {
          showSuccess(t("MESSAGES.login_success")); 
          router.push("/");                      
        }
      }}
      resolver={yupResolver(loginSchema(t))}
    >
      <h2 className="font-medium text-st2 md:text-h4">{t("LABELS.login")}</h2>
      <FormField
        label={t("TITLES.phone")}
        name="phone"
        component={Input}
        placeholder={t("LABELS.phone")}
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

      {error && <p className="text-sm text-red-500">{error}</p>}  

      <Link href="/forget-password" className="ms-auto text-blue-500">
        {t("LABELS.forget_password")}
      </Link>
      <Button type="submit" className="w-full" disabled={loading}>  
        {loading ? '...' : t("BUTTONS.login")}
      </Button>
      <p>
        {t("LABELS.no_account")}{" "}
        <Link href="/signup" className="text-blue-500">
          {t("LABELS.create_account")}
        </Link>
      </p>
    </BaseForm>
  );
}