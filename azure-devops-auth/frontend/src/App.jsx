import React, { useState } from 'react';
import TokenInput from './components/TokenInput';
import OrganizationList from './components/OrganizationList';
import ProjectList from './components/ProjectList';
import axios from 'axios';

const App = () => {
  const [token, setToken] = useState('');
  const [memberId, setMemberId] = useState('');
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrg, setSelectedOrg] = useState('');
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState('token');

  const handleTokenSubmit = async (userToken) => {
    setToken(userToken);
    try {
      const response = await axios.post('http://localhost:5000/api/azure/member-id', {
        token: userToken,
      });
      setMemberId(response.data.memberId);

      const orgResponse = await axios.post('http://localhost:5000/api/azure/organizations', {
        token: userToken,
        memberId: response.data.memberId,
      });
      setOrganizations(orgResponse.data.organizations);
      setActiveTab('organizations');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleOrganizationSelect = async (orgName) => {
    setSelectedOrg(orgName);
    try {
      const projectResponse = await axios.post('http://localhost:5000/api/azure/projects', {
        token,
        organization: orgName,
      });
      setProjects(projectResponse.data.projects);
    } catch (error) {
      console.error('Error al obtener proyectos:', error);
    }
  };

  return (
    <div className="app-container">
      <div className="tabs">
        <button
          className={activeTab === 'token' ? 'active' : ''}
          onClick={() => setActiveTab('token')}
        >
          Token Access
        </button>
        <button
          className={activeTab === 'organizations' ? 'active' : ''}
          disabled={!token}
          onClick={() => setActiveTab('organizations')}
        >
          Organizaciones & Proyectos
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'token' && <TokenInput onSubmit={handleTokenSubmit} />}

        {activeTab === 'organizations' && (
          <>
            {organizations.length > 0 && !selectedOrg && (
              <OrganizationList organizations={organizations} onSelect={handleOrganizationSelect} />
            )}
            {selectedOrg && <ProjectList projects={projects} />}
          </>
        )}
      </div>
    </div>
  );
};

export default App;