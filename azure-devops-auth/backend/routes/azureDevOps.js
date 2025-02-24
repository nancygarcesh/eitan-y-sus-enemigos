const express = require('express');
const axios = require('axios');
const router = express.Router();

//obtener el memberid
router.post('/member-id', async (req, res) => {
  const { token } = req.body;

  try {
    const response = await axios.get(
      'https://app.vssps.visualstudio.com/_apis/profile/profiles/me?api-version=7.1-preview.1',
      {
        headers: {
          Authorization: `Basic ${Buffer.from(':' + token).toString('base64')}`,
        },
      }
    );

    const memberId = response.data.coreAttributes.PublicAlias.value;
    res.json({ memberId });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener Member ID' });
  }
});

//listar organizaciones
router.post('/organizations', async (req, res) => {
  const { token, memberId } = req.body;

  try {
    const response = await axios.get(
      `https://app.vssps.visualstudio.com/_apis/accounts?memberId=${memberId}&api-version=6.0`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(':' + token).toString('base64')}`,
        },
      }
    );

    res.json({ organizations: response.data.value });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener organizaciones' });
  }
});

//listar proyectos
router.post('/projects', async (req, res) => {
  const { token, organization } = req.body;

  try {
    const response = await axios.get(
      `https://dev.azure.com/${organization}/_apis/projects?api-version=7.0`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(':' + token).toString('base64')}`,
        },
      }
    );

    res.json({ projects: response.data.value });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener proyectos' });
  }
});

module.exports = router;
