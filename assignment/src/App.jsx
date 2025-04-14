import React from "react";
import { Row, Col, Card } from "antd";
import { useRecipients } from "./hooks/useRecipients";
import AutocompleteInput from "./components/AutocompleteInput";
import AvailableRecipients from "./components/AvailableRecipients";
import SelectedRecipients from "./components/SelectedRecipients";
import "./styles/main.css";
import "./App.css";

const App = () => {
  const {
    recipients,
    availableDomains,
    toggleRecipientSelection,
    toggleDomainSelection,
    addNewRecipient,
    removeRecipient,
    removeDomain,
    groupedRecipients,
  } = useRecipients();

  return (
    <div className="email-manager">
      <Row gutter={16}>
        <Col span={24}>
          <Card title="Email Recipient Manager">
            <AutocompleteInput
              domains={availableDomains}
              recipients={recipients}
              onAddRecipient={addNewRecipient}
              onSelectDomain={toggleDomainSelection}
            />

            <Row gutter={16} style={{ marginTop: 24 }}>
              <Col span={12}>
                <AvailableRecipients
                  recipients={recipients}
                  onToggleRecipient={toggleRecipientSelection}
                />
              </Col>
              <Col span={12}>
                <SelectedRecipients
                  groupedRecipients={groupedRecipients}
                  onToggleRecipient={toggleRecipientSelection}
                  onRemoveRecipient={removeRecipient}
                  onRemoveDomain={removeDomain}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default App;
