const axios = require('axios');

const prompt = "pig"; //Change the prompt to test different commands

function getApiKey() {
    // Get OpenAI API key from environment variables.
    return process.env.OPENAI_API_KEY;
}

async function targetAPI(prompt, openAI_api_key) {
    // Gets the intent of a prompt sent to the from BlockBuilder API based on the prompt.
    const url = "https://target.blockbuilders.host";
    const headers = {
        "openai-api-key": openAI_api_key,
        "Content-Type": "application/json",
    };
    const data = {
        "prompt": prompt
    };
    try {
        const response = await axios.post(url, data, { headers: headers });
        return response.data.target;
    } catch (error) {
        console.error(`Request failed: ${error}`);
        return null;
    }
}

targetAPI(prompt, getApiKey())
    .then(target_json => console.log(target_json))
    .catch(error => console.error(`Failed to decode JSON: ${error}`));