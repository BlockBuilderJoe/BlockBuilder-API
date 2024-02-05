import requests 
import json
import os

prompt = "the coolest block in the game" #Change to a block, item name or any other prompt you want to test.
mode = "block" #Change to "item" or "entity" to test for items or entities respectively.

def get_api_key():
    """Get OpenAI API key from environment variables."""
    return os.getenv('OPENAI_API_KEY')

def syntaxAPI(prompt, openAI_api_key):
    """Gets the intent of a prompt sent to the  from BlockBuilder  API based on the prompt."""
    url = "https://syntax.blockbuilders.host"
    headers = {
        "openai-api-key": openAI_api_key,
        "Content-Type": "application/json",
    }
    data = {
        "input": prompt,
        "mode": mode
    }
    try:
        response = requests.post(url, headers=headers, data=json.dumps(data))
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"Request failed: {e}")
        return None
    try:
        output = json.loads(response.text)
        return output["output"]
    except json.JSONDecodeError as e:
        print(f"Failed to decode JSON: {e}")
        return None
    
target_json = syntaxAPI(prompt, get_api_key())
print(target_json)
