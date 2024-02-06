import requests 
import json
import os

#Change the prompt to test different commands.
prompt = "rotate the model by 90 degrees"

def get_api_key():
    """Get OpenAI API key from environment variables."""
    return os.getenv('OPENAI_API_KEY')

def intentAPI(prompt, openAI_api_key):
    """Get the intent of a prompt """
    url = "https://intent.blockbuilders.host"
    headers = {
        "openai-api-key": openAI_api_key,
        "Content-Type": "application/json",
    }
    data = {
        "prompt": prompt,
    }
    try:
        response = requests.post(url, headers=headers, data=json.dumps(data))
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"Request failed: {e}")
        return None

    try:
        output = json.loads(response.text)
        return output["intent"]
    except json.JSONDecodeError as e:
        print(f"Failed to decode JSON: {e}")
        return None

def commandAPI(prompt, intention, openAI_api_key):
    """Get command from OpenAI API."""
    intention = intentAPI(prompt, openAI_api_key)
    if intention is None:
        return None
        
    url = "https://commands.blockbuilders.host"
    headers = {
        "openai-api-key": openAI_api_key,
        "Content-Type": "application/json",
    }
    data = {
        "prompt": prompt,
        "intent": intention,
    }
    try:
        response = requests.post(url, headers=headers, data=json.dumps(data))
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"Request failed: {e}")
        return None

    try:
        output = json.loads(response.text)
        return output["command"]
    except json.JSONDecodeError as e:
        print(f"Failed to decode JSON: {e}")
        return None

def buildcommandAPI(prompt, intention, openAI_api_key):
    """Get build command from OpenAI API."""
    url = "https://build.blockbuilders.host"
    headers = {
        "openai-api-key": openAI_api_key,
        "Content-Type": "application/json",
    }
    data = {
        "prompt": prompt,
        "intent": intention,
    }
    try:
        response = requests.post(url, headers=headers, data=json.dumps(data))
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"Request failed: {e}")
        return None

    try:
        output = json.loads(response.text)
        return output
    except json.JSONDecodeError as e:
        print(f"Failed to decode JSON: {e}")
        return None

def main():
    """Main function."""
    openAI_api_key = get_api_key() 
    intention = intentAPI(prompt, openAI_api_key)
    if intention is None:
        return None
    elif intention in ["move", "define", "rotate", "scale", "replace", "fill"]:
        command = buildcommandAPI(prompt, intention, openAI_api_key)
    else:
        command = commandAPI(prompt, intention, openAI_api_key)
    if command is not None:
        print(command)
    
if __name__ == "__main__":
    main()
