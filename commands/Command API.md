> [!NOTE] What you'll need to use this demo.
> - [ ] An OpenAI API key 
> - [ ] Python or Node.js installed on your computer 

Note the demo relies on the [[Understand API]] to return the correct command. 
## Getting started.
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
## Output
Returns a command object with the string of a Minecraft command.
```json
{ command: 'tp @s 100 100 1000' }
```

## Commands still to implement
- [ ] scoreboard
- [ ] execute
- [ ] summon (appears broken)