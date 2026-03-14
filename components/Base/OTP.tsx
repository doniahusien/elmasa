"use client";

import { Field, FieldLabel } from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";

export default function InputOTPPattern() {
  return (
    <Field className=" flex flex-col items-center justify-center text-center gap-2">
      <InputOTP id="digits-only" maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} className="size-16 text-lg" />
          <InputOTPSlot index={1} className="size-16 text-lg" />
          <InputOTPSlot index={2} className="size-16 text-lg" />
          <InputOTPSlot index={3} className="size-16 text-lg" />
          <InputOTPSlot index={4} className="size-16 text-lg" />
          <InputOTPSlot index={5} className="size-16 text-lg" />
        </InputOTPGroup>
      </InputOTP>
    </Field>
  );
}
