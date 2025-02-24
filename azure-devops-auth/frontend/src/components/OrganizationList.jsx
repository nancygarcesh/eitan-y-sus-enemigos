import React from 'react';

const OrganizationList = ({ organizations, onSelect }) => {
  return (
    <div>
      <h2>Selecciona una Organización</h2>
      <ul>
        {organizations.map((org) => (
          <li key={org.accountId}>
            <button onClick={() => onSelect(org.accountName)}>{org.accountName}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrganizationList;
