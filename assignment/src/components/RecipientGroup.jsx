import React, { useState } from "react";
import { Collapse, Button } from "antd";
import RecipientItem from "./RecipientItem";
import GroupToggleButton from "./GroupToggleButton";

const { Panel } = Collapse;

const RecipientGroup = ({
  domain,
  recipients,
  onToggleRecipient,
  onRemoveRecipient,
  onRemoveDomain,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="recipient-group">
      <div className="group-header">
        <GroupToggleButton
          domain={domain}
          isExpanded={isExpanded}
          onToggle={() => setIsExpanded(!isExpanded)}
        />
        <Button type="text" size="small" onClick={() => onRemoveDomain(domain)}>
          Remove all
        </Button>
      </div>

      {isExpanded && (
        <div className="group-items">
          {recipients.map((recipient) => (
            <RecipientItem
              key={recipient.email}
              email={recipient.email}
              isSelected={recipient.isSelected}
              onToggle={onToggleRecipient}
              onRemove={onRemoveRecipient}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipientGroup;
