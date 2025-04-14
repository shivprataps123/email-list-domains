# 📧 Email Recipient Manager
https://67fd6fd9110de90633248950--effervescent-parfait-05584f.netlify.app/
A React application built with Ant Design for managing email recipients with domain grouping functionality.

## Start

- git clone https://github.com/shivprataps123/MotadataAssignment.git
- cd assignment
- npm install
- npm run dev

## Run test cases

- npm run test

## 🚀 Features

- View available and selected recipients
- Group recipients by company domain
- Autocomplete search for emails/domains
- Add new valid email addresses
- Select/deselect individual emails or entire domains
- Remove selected recipients

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **UI Library**: Ant Design
- **Testing**: Vitest, Testing Library
- **Build Tool**: Vite

## 📂 Project Structure

```bash
src/
├── components/
│   ├── AutocompleteInput.jsx  # Search with suggestions
│   ├── AvailableRecipients.jsx # Available emails list
│   ├── RecipientItem.jsx      # Single recipient UI
│   ├── RecipientGroup.jsx     # Domain group component
│   └── SelectedRecipients.jsx # Selected emails panel
├── hooks/
│   └── useRecipients.js      # Recipient management logic
├── utils/
│   ├── emailUtils.js         # Email validation
│   └── domainUtils.js        # Domain grouping
└── data/
    └── recipients.json       # Sample data
```
