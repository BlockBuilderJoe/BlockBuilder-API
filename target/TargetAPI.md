# BlockBuilders Target API Documentation

Generates a Bedrock target selector from a prompt. 

## Base URL
https://target.blockbuilders.host

### Request Format
prompt = What you want BlockBuilder AI to target. 

```javascript
{
        "prompt": prompt
}
```

## Output
Returns a target object with the target selector and arguments if necessary. 
```javascript
{ target: '@e[type=pig]' }
```
 
## Getting started.

**📝 Note:** What you'll need to use this demo:
- **Requirements:**
  - [ ] An Temporary burner OpenAI API key
  - [ ] Python or Node.js installed on your computer

## ⚠️ Important Security Warning
**Please use a burner API key for this demo.** Do not use your primary API key. A burner API key is a temporary key that you can easily revoke or discard after playing with the demo. 

1. Save your API key to the local environment:
```shell
export OPENAI_API_KEY=<paste-your-token-here>
```
2. Change the prompt variable:
For Javascript: target/target-selector.js
```javascript
let prompt = "pig";
```
For Python: target/target-selector.py
```python
prompt = "pig"
```
3. Now you can run the code:
Javascript
```shell
cd target
node target-selector.js
```
Python
```shell
cd target
python target-selector.py
```
