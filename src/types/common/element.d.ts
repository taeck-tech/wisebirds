export type TDropdownItem = {
  key: string;
  label: string;
}

export type TDropdown = {
  items: TDropdownItem[];
  value?: string;
  onChange?: (key: string) => void;
  triggerClassName?: string;
  itemsClassName?: string;
}

