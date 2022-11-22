import { currencyStringToNumberString } from "../../utils/currency";
import TextInput, { TextInputProps } from "../TextInput/TextInput";

interface CurrencyInputProps extends TextInputProps {
  value: string;
}

function CurrencyInput(props: CurrencyInputProps) {
  // format and fix decimal to tenth place
  const currencyValue = (value: string) => {
    const cleanValue = currencyStringToNumberString(value);
    if (value.indexOf(".") < 0) {
      return cleanValue;
    }
    const fixedDecimalValue = cleanValue
      .split("")
      .slice(0, cleanValue.indexOf(".") + 3)
      .join("");
    return fixedDecimalValue;
  };

  return (
    <TextInput
      {...props}
      value={props.value ? `$${currencyValue(props.value)}` : ""}
    />
  );
}

export default CurrencyInput;
