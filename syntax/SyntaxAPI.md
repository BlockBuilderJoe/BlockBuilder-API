# BlockBuilders Syntax API Documentation

The BlockBuilders Syntax API is designed to interpret prompts related to Minecraft and return the most relevant Minecraft Bedrock block, entity, or item. 
This documentation outlines how to use the API effectively.

## Base URL
https://syntax.blockbuilders.host

### Request Format

- prompt = whatever you want to check for the closest syntax. 
- mode = Returns a block, entity or item depending on what you put into it.

```json
{
  "prompt": "<your_prompt_here>",
  "mode": "block" 
}
```

## How to use the getting started scripts. 

**📝 Note:** What you'll need to use this demo:
- **Requirements:**
  - [ ] A temporary burner OpenAI API key
  - [ ] Python or Node.js installed on your computer
## ⚠️ Important Security Warning
**Please use a burner API key for this demo.** Do not use your primary API key. A burner API key is a temporary key that you can easily revoke or discard after playing with the demo.

1. Save your API key to the local environment:
```shell
export OPENAI_API_KEY=<paste-your-token-here>
```
2. Change the prompt variable:
For Javascript: syntax/syntax.js
```javascript
let prompt = "banana";
```
For Python: syntax/syntax.py
```python
prompt = "banana"
```
3. Now you can run the code:
Javascript
```shell
cd syntax
node syntax.js
```
Python
```shell
cd syntax
python syntax.py
```

## Output
It will output a block, entity or item depending on what mode you selected.

```
{output: 'diamond_block'}
```





