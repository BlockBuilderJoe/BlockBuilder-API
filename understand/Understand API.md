# BlockBuilders Understand API Documentation

The BlockBuilders Understand API is designed to interpret the intentions of players based on prompts and return a specific set of responses relevant to Minecraft gameplay. 
This guide provides details on how to use the API and the responses it can generate.

## Base URL
https://understand.blockbuilders.host

### Request Format

prompt = What you want BlockBuilder AI to do 

```json
{
  "prompt": "<your_prompt_here>"
}
```

## Response Codes
The API returns the following response codes, each indicating a specific type of request or action:

- `unknown`: If the intention is unclear or does not match any predefined actions.
- `censor`: If the prompt is inappropriate
- `build`: Request to build something in Minecraft
- `rotate`: Request to turn a model around.
- `undo`: Request to undo the build.
- `redo`: Request to redo the last state.
- `mirror`: Request to mirror or flip the model.
- `replace`: Request to change the blocks in the model.
- `move`: Request to move the model, not the player.
- `camerashake`: Request to shake the camera.
- `clear`: Request to remove items from the player's inventory.
- `clearspawnpoint`: Request to remove the player's spawn point.
- `damage`: Request to apply damage to the player.
- `daylock`: Request to lock the day-night cycle.
- `deop`: Request to remove the player's operator status.
- `difficulty`: Request to set the game's difficulty.
- `effect`: Request to give the player a status effect.
- `fill`: Request to change blocks within an area.
- `gamemode`: Request to change the player's game mode.
- `gamerule`: Request to change the game's rules.
- `give`: Request to give the player an item.
- `kill`: Request to kill the player or an entity.
- `message`: Request to send a message to the player.
- `op`: Request to give the player operator status.
- `setworldspawn`: Request to set the world spawn point.
- `testforblock`: Request to test for a specific block.
- `time_setter`: Request to change the time of day.
- `tp`: Request to teleport the player or an entity. Use only if certain of the player's intention.
- `weather`: Request to change the weather.
- `scale`: Request to change the scale of the model.
- `summon`: Request to spawn or summon an entity.
- `tag`: Request to tag an entity.
- `explain`: Request to explain the capabilities of the API.



