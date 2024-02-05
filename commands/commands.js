const axios = require('axios');
// Change the prompt to test different commands.
let prompt = "tp me to the moon";

function getApiKey() {
    // Get OpenAI API key from environment variables.
    return process.env.OPENAI_API_KEY;
}

//you'll need to run this npm install axios

async function intentAPI(prompt, openAI_api_key) {
    // Get the intent of a prompt
    let url = "https://intent.blockbuilders.host";
    let headers = {
        "openai-api-key": openAI_api_key,
        "Content-Type": "application/json",
    };
    let data = {
        "prompt": prompt,
    };
    try {
        let response = await axios.post(url, data, {headers: headers});
        return response.data.intent;
    } catch (error) {
        console.log(`Request failed: ${error}`);
        return null;
    }
}

async function commandAPI(prompt, openAI_api_key) {
    // Get command from OpenAI API.
    let intention = await intentAPI(prompt, openAI_api_key);
    if (intention === null) {
        return null;
    }
        
    let url = "https://commands.blockbuilders.host";
    let headers = {
        "openai-api-key": openAI_api_key,
        "Content-Type": "application/json",
    };
    let data = {
        "prompt": prompt,
        "intent": intention,
    };
    try {
        let response = await axios.post(url, data, {headers: headers});
        return response.data.command;
    } catch (error) {
        console.log(`Request failed: ${error}`);
        return null;
    }
}

async function main() {
    // Main function.
    let openAI_api_key = getApiKey();
    let command = await commandAPI(prompt, openAI_api_key);
    if (command !== null) {
        console.log(command);
    }
}

main();