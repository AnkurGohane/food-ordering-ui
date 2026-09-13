import type { LucideIcon } from "lucide-react";

export interface AddressCardProps {
  label: string;
  address: string;
  contact: string;
  icon: LucideIcon;
  isDefault?: boolean;
  isSelected: boolean;
  onSelect: () => void;
}

export interface PaymentOptionProps {
  label: string;
  detail?: string;
  icon: LucideIcon;
  isSelected: boolean;
  onSelect: () => void;
}
