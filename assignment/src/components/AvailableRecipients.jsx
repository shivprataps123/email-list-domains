import React from "react";
import { List, Typography } from "antd";
import RecipientItem from "./RecipientItem";

const { Title } = Typography;

const AvailableRecipients = ({ recipients, onToggleRecipient }) => {
  const availableRecipients = recipients.filter((r) => !r.isSelected);

  return (
    <div className="available-recipients">
      <Title level={5}>Available Recipients</Title>
      <List
        dataSource={availableRecipients}
        renderItem={(recipient) => (
          <List.Item>
            <RecipientItem
              email={recipient.email}
              isSelected={recipient.isSelected}
              onToggle={onToggleRecipient}
              onRemove={onToggleRecipient}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default AvailableRecipients;
