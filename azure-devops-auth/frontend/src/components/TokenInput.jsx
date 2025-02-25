import React, { useState } from 'react';

const TokenInput = ({ onSubmit }) => {
  const [token, setToken] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(token);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Introduce tu Token de Acceso</h2>
      <input
        type="password"
        placeholder="Token de Azure DevOps"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default TokenInput;
