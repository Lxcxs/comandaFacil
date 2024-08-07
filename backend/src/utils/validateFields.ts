import { Decimal } from "@prisma/client/runtime/library";

type FieldValue = string | number | boolean | Decimal | undefined;

export function validateFields(fields: Record<string, FieldValue>, customErrorMessages?: Record<string, string>) {
  Object.entries(fields).forEach(([field, value]) => {
    if (value === undefined || value === null || value === '') {
      const errorMessage = customErrorMessages?.[field] || `Please fill in the ${field}.`;
      throw new Error(errorMessage);
    }
  });
}
