import { extractDomain } from "./emailUtils";

export const groupByDomain = (recipients) => {
  const domainMap = {};

  recipients.forEach((recipient) => {
    const domain = extractDomain(recipient.email);
    if (!domainMap[domain]) {
      domainMap[domain] = [];
    }
    domainMap[domain].push(recipient);
  });

  return domainMap;
};

export const getUniqueDomains = (recipients) => {
  const domains = new Set();
  recipients.forEach((recipient) => {
    domains.add(extractDomain(recipient.email));
  });
  return Array.from(domains);
};
