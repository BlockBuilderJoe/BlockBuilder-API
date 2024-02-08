### The Builder API

Can build any thing in Minecraft from a single prompt. 

> **Note:** What you'll need to use this demo:
> - A Replicate account (https://replicate.com)
> - Python or Node.js installed on your computer

### Getting Started
1. Deploy the model using Replicate from here: https://replicate.com/blockbuilderjoe/blockbuilder-shap-e
	Click the button in the right hand side:  🚀Deploy
	![Screenshot1](img/Screenshot1.png)
	
3.  Set it up like the image below and click the button: Create a Deployment 
    > **📝 Note:** Requires an **Nvidia A40 GPU as a minimum** - the performance scales well with higher cards but it has the best price to performance with the A40 Tier
   ![Screenshot2](img/Screenshot2.png)
   
4. Now you can install Replicate: 
```shell
npm install replicate
```
 Or for Python:
```python
pip install replicate
```
4. Then export your Replicate API key as an environment variable. 
```shell
export REPLICATE_API_TOKEN=<paste-your-token-here>
```
5. Edit the Inputs: 
For Javascript you can edit them here: builder/js_build/blockbuilder.js
```javascript
"prompt": "Replace with what you want it to build", #Simple prompts are better i.e "Brown dog" rather than "build a brown dog"
"scale": 0.1, #OPTIONAL: Between 0.01 and 1 (0.01 Is the largest and 1 is the smallest)
"player_x": 0, #OPTIONAL: Players x position
"player_y": 0, #OPTIONAL: Players y position
"player_z": 0 #OPTIONAL: Players z position
```
Or for Python: builder/blockbuilder.py
```python
"prompt": "Replace with what you want it to build", #Simple prompts are better i.e "Brown dog" rather than "build a brown dog"
"scale": 0.1, #OPTIONAL: Between 0.01 and 1 (0.01 Is the largest and 1 is the smallest)
"player_x": 0, #OPTIONAL: Players x position
"player_y": 0, #OPTIONAL: Players y position
"player_z": 0 #OPTIONAL: Players z position
```
6. Now you can run it: 
For Javascript
```shell
cd builder/js_build
node blockbuilder.js
```
Or for Python: 
```
cd builder
python builder/blockbuilder.py
```
### The API Output

The output consists of two parts: `blocks` and `boundingbox`. The `blocks` part is a list of block objects representing various types of blocks with their coordinates and names. The `boundingbox` part provides information about the bounding box coordinates of the structure.
### JSON Structure

The JSON object comprises the following main components:

- `blocks`: An array of block objects.
- `boundingbox`: An object containing information about the bounding box of the blocks.
### `blocks` Array
Each item in the `blocks` array is an object that represents a single block within the structure. The attributes of each block object include:

- `x`: Integer. The x-coordinate of the block's position in game.
- `y`: Integer. The y-coordinate of the block's position in game.
- `z`: Integer. The z-coordinate of the block's position in game.
- `name`: String. The internal name of the block used in commands.
- `display_name`: String. The human-readable name of the block.
#### Example:

```json
{ 	"x": 10, "y": 0, "z": 0, "name": "clay", "display_name": "Clay" }
```

### `boundingbox` Object

The `boundingbox` object contains information about the bounding box that encompasses all the blocks. It includes:

- `to_xyz`: Object. The top corner coordinates of the bounding box.
    - `x`: Integer. The x-coordinate.
    - `y`: Integer. The y-coordinate.
    - `z`: Integer. The z-coordinate.
    
- `from_xyz`: Object. The bottom corner coordinates of the bounding box.
    - `x`: Integer. The x-coordinate.
    - `y`: Integer. The y-coordinate.
    - `z`: Integer. The z-coordinate.
    
- `load_xyz`: Object. Typically mirrors the `from_xyz` values and indicates the load point or reference point for the structure. 
    - `x`: Integer. The x-coordinate.
    - `y`: Integer. The y-coordinate.
    - `z`: Integer. The z-coordinate.

#### Example:

```json
{ 	
	"to_xyz": {"x": 0, "y": 0, "z": 0},
	"from_xyz": {"x": 19, "y": 0, "z": 1},
	"load_xyz": {"x": 19, "y": 0, "z": 1} 
}
```
