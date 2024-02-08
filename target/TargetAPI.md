# BlockBuilders Target API Documentation


Generates a Bedrock target selector from a prompt. 
 
**📝 Note:** What you'll need to use this demo:
- **Requirements:**
  - [ ] An OpenAI API key
  - [ ] Python or Node.js installed on your computer

## Base URL
https://target.blockbuilders.host

### Request Format
prompt = What you want BlockBuilder AI to target. 

```javascript
{
        "prompt": prompt
}
```
 
## Getting started.
1. Save your API key to the local environment:
```shell
export OPENAI_API_KEY=<paste-your-token-here>
```
2. Change the prompt variable:
For Javascript: target/target.js
```javascript
let prompt = "pig";
```
For Python: target/target.py
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
## Output
Returns a target object with the target selector and arguments if necessary. 
```javascript
{ target: '@e[type=pig]' }
```

## Commands still to implement
- [ ] scoreboard
- [ ] execute
- [ ] summon (appears broken)
