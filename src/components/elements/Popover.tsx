"use client";
import { useState } from "react";
import {
  Popover as MTPopover,
  Button,
} from "@material-tailwind/react";

type PropTypes = {
  triggerText?: string;
  triggerElement?: React.ReactElement;
  children: React.ReactElement;
}

export function Popover({ triggerText, triggerElement, children }: PropTypes) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="min-h-28">
        <MTPopover open={open} onOpenChange={setOpen}>
          <MTPopover.Trigger as={Button} onClick={() => setOpen((cur) => !cur)} variant={triggerElement ? "ghost" : "outline"}>
            {triggerElement ? triggerElement : triggerText}
          </MTPopover.Trigger>
          <MTPopover.Content className="max-w-sm" closeOnFocusOut={true}>
            {children}
          </MTPopover.Content>
        </MTPopover>
      </div>
    </>
  );
}

export default Popover;