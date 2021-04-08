import React from "react";

interface SearchBoxProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  style?: React.CSSProperties;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  setSearchTerm,
  style,
}) => {
  return (
    <input
      style={{
        border: "0",
        borderRadius: 4,
        marginBottom: 20,
        padding: 15,
        width: 600,
        textAlign: "center",
        fontSize: 22,
      }}
      placeholder="search for events"
      onChange={(e) => setSearchTerm(e.currentTarget.value)}
    />
  );
};
