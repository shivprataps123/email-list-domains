import { useState, useEffect } from "react";
import recipientsData from "../data/recipients.json";
import { groupByDomain, getUniqueDomains } from "../utils/domainUtils";
import { extractDomain, validateEmail } from "../utils/emailUtils";

export const useRecipients = () => {
  const [recipients, setRecipients] = useState([]);
  const [availableDomains, setAvailableDomains] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setRecipients(recipientsData);
    setAvailableDomains(getUniqueDomains(recipientsData));
  }, []);

  const toggleRecipientSelection = (email) => {
    setRecipients((prev) =>
      prev.map((recipient) =>
        recipient.email === email
          ? { ...recipient, isSelected: !recipient.isSelected }
          : recipient
      )
    );
  };

  const toggleDomainSelection = (domain) => {
    setRecipients((prev) =>
      prev.map((recipient) =>
        extractDomain(recipient.email) === domain
          ? { ...recipient, isSelected: !recipient.isSelected }
          : recipient
      )
    );
  };

  const addNewRecipient = (email) => {
    if (!validateEmail(email)) return false;

    if (!recipients.some((r) => r.email === email)) {
      setRecipients((prev) => [...prev, { email, isSelected: false }]);
      setAvailableDomains(
        getUniqueDomains([...recipients, { email, isSelected: false }])
      );
      return true;
    }
    return false;
  };

  const removeRecipient = (email) => {
    setRecipients((prev) =>
      prev.map((recipient) =>
        recipient.email === email
          ? { ...recipient, isSelected: false }
          : recipient
      )
    );
  };

  const removeDomain = (domain) => {
    setRecipients((prev) =>
      prev.map((recipient) =>
        extractDomain(recipient.email) === domain
          ? { ...recipient, isSelected: false }
          : recipient
      )
    );
  };

  return {
    recipients,
    availableDomains,
    searchTerm,
    setSearchTerm,
    toggleRecipientSelection,
    toggleDomainSelection,
    addNewRecipient,
    removeRecipient,
    removeDomain,
    groupedRecipients: groupByDomain(recipients),
  };
};
