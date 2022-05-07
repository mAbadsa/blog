import { KeyboardEvent, MouseEvent } from "react";
export default interface SidebareListProps {
  drawer: boolean;
  closeSideBar: (e: KeyboardEvent | MouseEvent) => void;
}
