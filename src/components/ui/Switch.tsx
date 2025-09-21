import { Switch } from "@headlessui/react";
import "@/styles/sass/main.scss";
interface SwitchProps {
  status: number | undefined;
  onChange: () => void;
}
function ToggleSwitch({ status, onChange }: SwitchProps) {
  const isChecked = status === 1;

  return (
    <Switch
      checked={isChecked}
      title={isChecked ? "show" : "hide"}
      onChange={onChange}
      className={`switch ${isChecked ? "checked" : ""} `}
    >
      <span
        aria-hidden="true"
        className={`toggle ${isChecked ? "translate" : ""}`}
      />
    </Switch>
  );
}

export default ToggleSwitch;
