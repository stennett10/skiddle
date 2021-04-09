import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/skiddle-logo-white-landscape.png";
import { SearchBox } from "./SearchBox";

interface IHeaderProps {
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
  showSearch?: boolean;
}

export const Header: React.FC<IHeaderProps> = ({
  setSearchTerm,
  showSearch = true,
}) => {
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
      <Link to="/">
        <img
          src={logo}
          alt="Skiddle logo in white"
          style={{ maxHeight: 200 }}
        />
      </Link>
      {showSearch && setSearchTerm !== undefined ? (
        <SearchBox setSearchTerm={setSearchTerm} />
      ) : null}
    </div>
  );
};
