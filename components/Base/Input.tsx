"use client";

import { InputHTMLAttributes } from "react";
import { LucideIcon } from "lucide-react";

type BaseInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  icon?: LucideIcon;
};

export default function BaseInput({
  label,
  error,
  icon: Icon,
  ...props
}: BaseInputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="font-light text-neutral-black-500">{label}</label>}

      <div className={`relative w-full bg-gray-100 outline-0 text-neutral-black-300 rounded-md border ${
        error ? "border-red-500" : "border-gray-300"
      }`} >
        {Icon && (
          <Icon
            size={18}
            className="absolute inset-s-3 top-1/2 -translate-y-1/2 "
          />
        )}

        <input
          {...props}
          className={`w-full rounded-md outline-0 py-2 px-4 border-0 ${
            Icon ? "ps-9" : ""
          }`}
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
}
