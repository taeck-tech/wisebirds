import { Switch as MTSwitch, SwitchProps, Typography } from "@material-tailwind/react";

type PropTypes = {
  label?: string;
}

function Switch({ label, ...props }: PropTypes & SwitchProps) {
  return (
    <Typography
      as="label"
      className="cursor-pointer text-foreground flex items-center gap-2"
    >
      <MTSwitch {...props} />
      {label && <span>{label}</span>}
    </Typography>
  );
}

export default Switch;