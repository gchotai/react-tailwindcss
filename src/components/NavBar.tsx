import { useState } from "react";
import logo from "../assets/Logo/logo.webp";
import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";

interface Prop {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Prop) => {
  return (
    <div className="flex flex-row justify-between items-center w-full gap-2">
      <img src={logo} className="h-16"></img>
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </div>
  );
};

export default NavBar;
