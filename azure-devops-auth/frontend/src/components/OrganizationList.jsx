import React from 'react';

const OrganizationList = ({ organizations, onSelect }) => {
  return (
    <div>
      <h2>Selecciona una Organización</h2>
      <select onChange={(e) => onSelect(e.target.value)} defaultValue="">
        <option value="" disabled>Selecciona una organización</option>
        {organizations.map((org) => (
          <option key={org.accountId} value={org.accountName}>
            {org.accountName}
          </option>
        ))}
      </select>
    </div>
  );
};


export default OrganizationList;
