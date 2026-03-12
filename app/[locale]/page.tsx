"use client";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { showSuccess } from "@/lib/toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/validations/schema";
import { useMemo } from "react";

export default function Home() {
  const handleClick = () => {
    showSuccess("Product created");
  };

   const t = useTranslations();

  // ✅ Only recomputes when locale/t changes
  const schema = useMemo(() => registerSchema(t), [t]);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 text-red-400 font-sans dark:bg-black">
      <div className="text-center">

        <LanguageSwitcher />
        <button onClick={handleClick}>Login</button>;
         <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder={t('LABELS.name')} />
      {errors.name && <p>{errors.name.message}</p>}

      <input {...register("email")} placeholder={t('LABELS.email')} />
      {errors.email && <p>{errors.email?.message}</p>}

      <input {...register("password")} type="password" placeholder={t('LABELS.password')} />
      {errors.password && <p>{errors.password.message}</p>}

      <input {...register("confirmPassword")} type="password" placeholder={t('LABELS.confirm_password')} />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

      <button type="submit">{t('BUTTONS.register')}</button>
    </form>
      </div>
    </div>
  );
}
