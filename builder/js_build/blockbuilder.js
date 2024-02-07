import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

let prediction = await replicate.deployments.predictions.create(
  "blockbuilderjoe",
  "blockbuilder-api",
  {
    input: {
      prompt: "Replace with what you want it to build", //Simple prompts are better i.e "Brown dog" rather than "build a brown dog"
      scale: 0.1, //OPTIONAL: Scales the model, use a value between 0.01 and 1 (0.01 Is the largest and 1 is the smallest)
      player_x: 0, //OPTIONAL: Players x position
      player_y: 0, //OPTIONAL: Players y position
      player_z: 0 //OPTIONAL: Players z position
    }
  }
);
console.log("Starting Modeling process...")
console.log("This can take up to 20 seconds")
prediction = await replicate.wait(prediction);
console.log(prediction.output);