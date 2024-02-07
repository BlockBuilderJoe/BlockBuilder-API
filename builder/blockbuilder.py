import replicate

deployment = replicate.deployments.get("blockbuilderjoe/blockbuilder-api")
prediction = deployment.predictions.create(
input={
        "prompt": "Replace with what you want it to build", #Simple prompts are better i.e "Brown dog" rather than "build a brown dog"
        "scale": 0.1, #OPTIONAL: Between 0.01 and 1 (0.01 Is the largest and 1 is the smallest)
        "player_x": 0, #OPTIONAL: Players x position
        "player_y": 0, #OPTIONAL: Players y position
        "player_z": 0 #OPTIONAL: Players z position
    }
)
print("Starting Modeling process...")
print("This can take up to 20 seconds")
prediction.wait()
print(prediction.output)