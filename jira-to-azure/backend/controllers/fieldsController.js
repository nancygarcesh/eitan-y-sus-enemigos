const axios = require("axios");

// Función para mapear los tipos de Jira a Azure DevOps
function mapType(jiraType) {
    switch (jiraType) {
        case "com.atlassian.jira.plugin.system.customfieldtypes:multiuserpicker":
            return "String";
        case "com.atlassian.jira.plugin.system.customfieldtypes:select":
            return "String";
        case "array":
            return "PlainText";
        case "option":
            return "String";
        default:
            return "String";
    }
}

// Transformar JSON de Jira a Azure DevOps
function transformJiraToAzure(jiraJson) {
    return jiraJson.values.map(field => ({
        name: field.name,
        referenceName: `Custom.${field.key.replace("customfield_", "")}.${field.name.replace(/\s/g, "")}`,
        description: field.description || "No description provided",
        type: mapType(field.schema.custom),
        usage: "workItem"
    }));
}

// Crear el custom field en Azure DevOps
async function createFieldInAzureDevOps(field, org, token) {
    const API_URL = `https://dev.azure.com/${org}/_apis/wit/fields?api-version=7.1-preview.2`;

    try {
        const response = await axios.post(API_URL, field, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${Buffer.from(":" + token).toString("base64")}`
            }
        });
        return { success: true, field: field.name };
    } catch (error) {
        return { success: false, field: field.name, error: error.response.data };
    }
}

// Procesar el JSON de Jira y crear los campos en Azure DevOps
exports.transformAndCreateFields = async (req, res) => {
    const { jiraJson, org, token } = req.body;

    if (!jiraJson || !org || !token) {
        return res.status(400).json({ message: "Faltan datos requeridos." });
    }

    const transformedFields = transformJiraToAzure(jiraJson);
    const results = [];

    for (const field of transformedFields) {
        const result = await createFieldInAzureDevOps(field, org, token);
        results.push(result);
    }

    res.json(results);
};
