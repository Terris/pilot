type ValidationError = Partial<Error>;

export function joinErrors(errors: ValidationError[]) {
  const errorMap = errors.map((e: any) => {
    return e.message;
  });
  return errorMap.join(" ");
}
