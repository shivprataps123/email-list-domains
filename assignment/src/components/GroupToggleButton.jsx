import React from "react";
import { Button } from "antd";

const GroupToggleButton = ({ domain, isExpanded, onToggle }) => {
  return (
    <Button type="text" size="small" onClick={() => onToggle(domain)}>
      {isExpanded ? "−" : "+"} {domain}
    </Button>
  );
};

export default GroupToggleButton;
