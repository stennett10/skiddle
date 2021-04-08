import React from "react";
import logo from "../assets/skiddle-logo-white-landscape.png";
import { SearchBox } from "./SearchBox";

interface IHeaderProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const Header: React.FC<IHeaderProps> = ({ setSearchTerm }) => {
  return (
    <div
      style={{
        backgroundColor: "#46c3be",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={logo} alt="Skiddle logo in white" style={{ maxHeight: 200 }} />
      <SearchBox setSearchTerm={setSearchTerm} />
    </div>
  );
};
