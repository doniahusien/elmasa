"use client";

import {
  useFormContext,
  FieldValues,
  Path
} from "react-hook-form";

type FormFieldProps<T extends FieldValues> = {
  name: Path<T>;
  component: React.ElementType;
} & Record<string, unknown>;

export default function FormField<T extends FieldValues>({
  name,
  component: Component,
  ...props
}: FormFieldProps<T>) {

  const {
    register,
    formState: { errors }
  } = useFormContext<T>();

  const error = errors?.[name]?.message as string | undefined;

  return (
    <Component
      {...register(name)}
      error={error}
      {...props}
    />
  );
}
