const axios = require('axios');

const prompt = "the coolest block in the game"; //Change to a block, item name or any other prompt you want to test.
const mode = "block"; //Change to "item" or "entity" to test for items or entities respectively.

function getApiKey() {
    // Get OpenAI API key from environment variables.
    return process.env.OPENAI_API_KEY;
}
async function syntaxAPI(prompt, openAI_api_key) {
    // Gets the intent of a prompt sent to the from BlockBuilder API based on the prompt.
    const url = "https://syntax.blockbuilders.host";
    const headers = {
        "openai-api-key": openAI_api_key,
        "Content-Type": "application/json",
    };
    const data = {
        "input": prompt,
        "mode": mode
    };
    try {
        const response = await axios.post(url, data, { headers: headers });
        return response.data.output;
    } catch (error) {
        console.error(`Request failed: ${error}`);
        return null;
    }
}

syntaxAPI(prompt, getApiKey())
    .then(syntax_json => console.log(syntax_json))
    .catch(error => console.error(`Failed to decode JSON: ${error}`));
