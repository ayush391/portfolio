import React, { useState } from "react";
import { StringInputProps, set, unset } from "sanity";
import { iconMap } from "../lib/iconMapper";

export function IconPicker(props: StringInputProps) {
  const { value, onChange } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const iconEntries = Object.entries(iconMap);
  const filteredIcons = iconEntries.filter(([name]) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleIconSelect = (iconName: string) => {
    onChange(value === iconName ? unset() : set(iconName));
  };

  return (
    <div style={{ marginTop: "8px" }}>
      <input
        type="text"
        placeholder="Search icons..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "12px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "14px",
        }}
      />

      {value && iconMap[value] && (
        <div
          style={{
            padding: "12px",
            marginBottom: "12px",
            backgroundColor: "#f0f0f0",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <strong>Selected:</strong>
          {React.createElement(iconMap[value], {
            size: 24,
            style: { display: "inline-block" },
          })}
          <span>{value}</span>
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
          gap: "8px",
          maxHeight: "400px",
          overflowY: "auto",
          border: "1px solid #e0e0e0",
          borderRadius: "4px",
          padding: "12px",
        }}
      >
        {filteredIcons.map(([name, IconComponent]) => (
          <button
            key={name}
            type="button"
            onClick={() => handleIconSelect(name)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 8px",
              border: value === name ? "2px solid #2276fc" : "1px solid #e0e0e0",
              borderRadius: "4px",
              backgroundColor: value === name ? "#e6f0ff" : "white",
              cursor: "pointer",
              fontSize: "10px",
            }}
          >
            {React.createElement(IconComponent, { size: 28 })}
            <span style={{ fontSize: "9px", marginTop: "4px" }}>{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
