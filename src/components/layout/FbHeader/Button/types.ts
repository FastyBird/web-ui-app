import { FbMenuItemTypes } from "@/types";

export interface IFbLayoutHeaderButtonProps {
  type: FbMenuItemTypes;
  label: string | null;
  link: string | null;
  small: boolean;
  left: boolean;
  right: boolean;
  teleport: boolean;
}
