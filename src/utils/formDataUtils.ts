export function objectToFormData(obj: Record<string, any>, fileKeys: string[] = []): FormData {
  const formData = new FormData();

  Object.entries(obj).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (fileKeys.includes(key) && !(value instanceof File)) {
        return;
      }

      if (value instanceof File) {
        formData.append(key, value, value.name);
      } else {
        formData.append(key, value);
      }
    }
  });

  return formData;
}
