import * as yup from "yup";
import { TFunction } from "next-intl";

export const dynamicRules = (t: TFunction) => ({
  required: (fieldName?: string) =>
    yup.string().required(
      t('ERRORS.required', { name: fieldName || t('LABELS.this_field') })
    ),

  email: () =>
    yup
      .string()
      .email(t('ERRORS.email_invalid'))
      .required(t('ERRORS.required')),

  minLength: (min: number) =>
    yup.string().min(min, t('ERRORS.min_length', { limit: min })),

  maxLength: (max: number) =>
    yup.string().max(max, t('ERRORS.max_length', { limit: max })),

  passwordConfirmed: (refField: string) =>
    yup.string().oneOf([yup.ref(refField)], t('ERRORS.passwords_must_match')),

  arabic: () =>
    yup.string().matches(/^[\u0600-\u06FF\s]+$/, t('ERRORS.arabic_letters')),

  english: () =>
    yup.string().matches(/^[A-Za-z\s]+$/, t('ERRORS.english_letters')),

  number: (min = 0, max = 10000) =>
    yup
      .number()
      .min(min, t('ERRORS.min_length', { limit: min }))
      .max(max, t('ERRORS.max_length', { limit: max }))
      .required(t('ERRORS.required')),
});