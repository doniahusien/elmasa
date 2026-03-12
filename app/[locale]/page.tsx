"use client";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { showSuccess } from "@/lib/toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/validations/schema";
import { useMemo } from "react";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  increment,
  decrement,
  reset,
  setStep,
} from "@/store/features/counter/counterSlice";
import {
  selectCount,
  selectStep,
} from "@/store/features/counter/counterSelectors";

export default function Home() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const step = useAppSelector(selectStep);
  const handleClick = () => {
    showSuccess("Product created");
  };

  const t = useTranslations();

  const schema = useMemo(() => registerSchema(t), [t]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: unknown) => console.log(data);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 text-red-400 font-sans dark:bg-black">
      <div className="text-center">
        <LanguageSwitcher />
        <button onClick={handleClick}>Login</button>;
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} placeholder={t("LABELS.name")} />
          {errors.name && <p>{errors.name.message}</p>}

          <input {...register("email")} placeholder={t("LABELS.email")} />
          {errors.email && <p>{errors.email?.message}</p>}

          <input
            {...register("password")}
            type="password"
            placeholder={t("LABELS.password")}
          />
          {errors.password && <p>{errors.password.message}</p>}

          <input
            {...register("confirmPassword")}
            type="password"
            placeholder={t("LABELS.confirm_password")}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

          <button type="submit">{t("BUTTONS.register")}</button>
        </form>
      </div>
      <div>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <input
          type="number"
          value={step}
          onChange={(e) => dispatch(setStep(Number(e.target.value)))}
        />
      </div>
    </div>
  );
}
