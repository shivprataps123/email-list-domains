// src/components/SelectedRecipients.jsx
import React from "react";
import { Typography, Divider } from "antd";
import RecipientGroup from "./RecipientGroup";

const { Title } = Typography;

const SelectedRecipients = ({
  groupedRecipients,
  onToggleRecipient,
  onRemoveRecipient,
  onRemoveDomain,
}) => {
  const selectedGroups = Object.entries(groupedRecipients).filter(
    ([domain, recipients]) => recipients.some((r) => r.isSelected)
  );

  return (
    <div className="selected-recipients">
      <Title level={5}>Selected Recipients</Title>
      <Divider />

      {selectedGroups.length === 0 ? (
        <p>No recipients selected</p>
      ) : (
        selectedGroups.map(([domain, recipients]) => (
          <RecipientGroup
            key={domain}
            domain={domain}
            recipients={recipients.filter((r) => r.isSelected)}
            onToggleRecipient={onToggleRecipient}
            onRemoveRecipient={onRemoveRecipient}
            onRemoveDomain={onRemoveDomain}
          />
        ))
      )}
    </div>
  );
};

export default SelectedRecipients;
