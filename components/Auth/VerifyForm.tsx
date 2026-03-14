"use client";
import BaseForm from "@/components/Base/Form";

import Button from "@/components/Base/Button";
import { forgetSchema } from "@/validations/schema";
import { useTranslations } from "next-intl";
import { yupResolver } from "@hookform/resolvers/yup";
import InputOTPPattern from "@/components/Base/OTP";
export default function VerifyForm() {
  const t = useTranslations();
  return (
    <BaseForm<{ email: string }>
      onSubmit={(data) => console.log(data)}
      resolver={yupResolver(forgetSchema(t))}
    >
      <h2 className="font-medium text-st2 md:text-h4">
        {t("TITLES.OTP")}
          </h2>
          <p className="text-gray-400">{t("LABELS.otp")}</p>
      <InputOTPPattern  />
      <Button type="submit" className="w-full">
        {t("BUTTONS.verify")}
      </Button>
    </BaseForm>
  );
}
