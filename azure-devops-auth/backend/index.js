const express = require('express');
const cors = require('cors');
const azureRoutes = require('./routes/azureDevOps');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/azure', azureRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend corriendo en el puerto ${PORT}`));
