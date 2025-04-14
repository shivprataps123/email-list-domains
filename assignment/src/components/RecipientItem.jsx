import React from "react";
import { Tag, Button } from "antd";

const RecipientItem = ({ email, isSelected, onToggle, onRemove }) => {
  return (
    <div className="recipient-item">
      <Tag
        color={isSelected ? "blue" : "default"}
        onClick={() => onToggle(email)}
      >
        {email} {!isSelected && "+"}
      </Tag>
      {isSelected && (
        <Button
          type="text"
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(email);
          }}
        >
          ×
        </Button>
      )}
    </div>
  );
};

export default RecipientItem;
