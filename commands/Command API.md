## BlockBuilders Command API 

Generates a bedrock command from a prompt. 

## Base URL
https://commands.blockbuilders.host

### Request Format
- prompt = What you want BlockBuilder AI to do 
- intent = What command to use. 
**📝 Note:** The demo relies on the [Understand API](../understand/Understand%20API.md) for the intent.
```javascript
{
        "prompt": prompt,
        "intent": intention,
}
```
## Output
Returns a command object with the string of a Minecraft command.
```javascript
{ command: 'tp @s 100 100 1000' }
```

## Getting started.

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
For Javascript: commands/command.js
```javascript
let prompt = "move the model to the left by 10 blocks";
```
For Python: commands/command.py
```python
prompt = "rotate the model by 90 degrees"
```
3. Now you can run the code:
Javascript
```shell
cd commands
node command.js
```
Python
```shell
cd commands
python command.py
```

## Commands still to implement
- [ ] scoreboard
- [ ] execute
- [ ] summon (appears broken)
