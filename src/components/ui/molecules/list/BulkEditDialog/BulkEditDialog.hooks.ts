import { useState } from "react";
import { BulkEditField } from "./BulkEditDialog.types";
import { getDefaultBulkValues } from "./BulkEditDialog.utils";

// Quản lý state local form
export function useBulkEditForm(fields: BulkEditField[], onSubmit: (data: Record<string, any>) => void) {
  const [values, setValues] = useState(() => getDefaultBulkValues(fields));
  const handleChange = (key: string, value: any) => setValues(prev => ({ ...prev, [key]: value }));
  const handleSubmit = () => onSubmit(values);

  return { values, handleChange, handleSubmit, setValues };
}
