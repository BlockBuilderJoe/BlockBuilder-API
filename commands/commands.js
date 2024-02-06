const axios = require('axios');
// Change the prompt to test different commands.
let prompt = "move the model to the left by 10 blocks";

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

async function commandAPI(prompt, intention, openAI_api_key) {
    // Get command from OpenAI API.    
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
async function buildCommandAPI(prompt, intention, openAI_api_key) {
    // Get command from OpenAI API.    
    let url = "https://build.blockbuilders.host";
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
        return response.data;
    } catch (error) {
        console.log(`Request failed: ${error}`);
        return null;
    }
}

async function main() {
    // Main function.
    let openAI_api_key = getApiKey();
    let intention = await intentAPI(prompt, openAI_api_key);
    console.log(intention);
    let command = null;
    if (intention === null) {
        return null;
    }
    else if (intention === "move" || intention === "define" || intention === "rotate" || intention === "scale" || intention === "replace" || intention === "fill") {
        command = await buildCommandAPI(prompt, intention, openAI_api_key);
    }
    else {
        command = await commandAPI(prompt, intention, openAI_api_key);
    }
    if (command !== null) {
        //Logs the command to the console. You can add your code here.
        console.log(command);
    }
}

main();