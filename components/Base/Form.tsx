"use client";

import { useForm, FormProvider, FieldValues, DefaultValues, Resolver } from "react-hook-form";
import { HTMLAttributes, ReactNode } from "react";

type BaseFormProps<T extends FieldValues> = {
  children: ReactNode;
  onSubmit: (data: T) => void;
  defaultValues?: DefaultValues<T>;
  resolver?: Resolver<T>;
} & Omit<HTMLAttributes<HTMLFormElement>, 'onSubmit'>;

export default function BaseForm<T extends FieldValues>({
  children,
  onSubmit,
  defaultValues,
  resolver,
  ...props
}: BaseFormProps<T>) {

  const methods = useForm<T>({
    defaultValues,
    resolver
  });

  return (
    <FormProvider {...methods}>
      <form className=" max-w-2xl mx-auto flex flex-col justify-center items-center  gap-3 p-2" onSubmit={methods.handleSubmit(onSubmit)} {...props}>
        {children} 
      </form>
    </FormProvider>
  );
}
