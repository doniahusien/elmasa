import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

export function CheckboxBasic({label}: { label: string }) {
  return (
    <FieldGroup className="w-full">
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
        <FieldLabel htmlFor="terms-checkbox-basic">{label}</FieldLabel>
      </Field>
    </FieldGroup>
  );
}
