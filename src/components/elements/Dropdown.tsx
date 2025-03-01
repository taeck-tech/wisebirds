"use client";
import { useMemo } from "react";
import {
  Menu,
  Button,
} from "@material-tailwind/react";
import { TDropdown } from "@/types/common/element"
import { twMerge } from "tailwind-merge";

export function Dropdown({ items, value, onChange = () => { }, triggerClassName = "", itemsClassName = "" }: TDropdown) {
  const selectedLabel = useMemo(() => items.find(item => item.key === value)?.label || " ", [items, value]);
  return (
    <>
      <Menu>
        <Menu.Trigger as={Button}
          variant="outline"
          className={twMerge("min-w-[60px] px-[18px] py-[8px] min-h-[28px]", triggerClassName)}>
          <input className="outline-0 max-w-full w-full" disabled value={selectedLabel} />
        </Menu.Trigger>
        <Menu.Content className={twMerge("", itemsClassName)}>
          {
            items.map(item => <Menu.Item key={item.key} onClick={() => onChange(item.key)}>{item.label}</Menu.Item>)
          }
        </Menu.Content>
      </Menu>
    </>
  );
}

export default Dropdown;