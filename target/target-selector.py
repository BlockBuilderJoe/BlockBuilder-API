import requests 
import json
import os

prompt = "pig" #Change the prompt to test different commands

def get_api_key():
    """Get OpenAI API key from environment variables."""
    return os.getenv('OPENAI_API_KEY')

def targetAPI(prompt, openAI_api_key):
    """Gets the intent of a prompt sent to the  from BlockBuilder  API based on the prompt."""
    url = "https://target.blockbuilders.host"
    headers = {
        "openai-api-key": openAI_api_key,
        "Content-Type": "application/json"
    }
    data = {
        "prompt": prompt
    }
    try:
        response = requests.post(url, headers=headers, data=json.dumps(data))
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"Request failed: {e}")
        return None

    try:
        output = json.loads(response.text)
        return output["target"]
    except json.JSONDecodeError as e:
        print(f"Failed to decode JSON: {e}")
        return None
    
target_json = targetAPI(prompt, get_api_key())
print(target_json)
