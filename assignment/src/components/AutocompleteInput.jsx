import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import { validateEmail } from "../utils/emailUtils";

const AutocompleteInput = ({
  domains,
  recipients,
  onAddRecipient,
  onSelectDomain,
}) => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);

  const handleSearch = (searchText) => {
    const emailOptions = recipients
      .filter((r) => r.email.includes(searchText))
      .map((r) => ({ value: r.email, label: r.email }));

    const domainOptions = domains
      .filter((d) => d.includes(searchText))
      .map((d) => ({ value: `@${d}`, label: `All @${d}` }));

    setOptions([...emailOptions, ...domainOptions]);
  };

  const handleSelect = (value) => {
    if (value.startsWith("@")) {
      const domain = value.substring(1);
      onSelectDomain(domain);
    } else {
      onAddRecipient(value);
    }
    setValue("");
  };

  const handlePressEnter = () => {
    if (validateEmail(value)) {
      onAddRecipient(value);
      setValue("");
    }
  };

  return (
    <AutoComplete
      options={options}
      style={{ width: "100%" }}
      onSearch={handleSearch}
      onSelect={handleSelect}
      value={value}
      onChange={setValue}
    >
      <Input
        placeholder="Add recipients or domains"
        allowClear
        onPressEnter={handlePressEnter}
      />
    </AutoComplete>
  );
};

export default AutocompleteInput;
