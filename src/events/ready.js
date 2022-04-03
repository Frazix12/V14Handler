const client = require("../index");
const colors = require("colors");
client.on("ready", async () => {
  try {
    try {
      const stringlength = 30;
      console.log("\n");
      console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.brightGreen);
      console.log(
        `     ┃ `.bold.brightGreen +
          " ".repeat(-1 + stringlength - ` ┃ `.length) +
          "┃".bold.brightGreen
      );
      console.log(
        `     ┃ `.bold.brightGreen +
          `  Discord Bot is online! `.bold.brightGreen +
          " ".repeat(
            -1 +
              stringlength -
              ` ┃ `.length -
              `  Discord Bot is online! `.length
          ) +
          "┃".bold.brightGreen
      );
      console.log(
        `     ┃ `.bold.brightGreen +
          ` /--/ ${client.user.tag} /--/ `.bold.brightGreen +
          " ".repeat(
            -1 +
              stringlength -
              ` ┃ `.length -
              ` /--/ ${client.user.tag} /--/ `.length
          ) +
          "┃".bold.brightGreen
      );
      console.log(
        `     ┃ `.bold.brightGreen +
          " ".repeat(-1 + stringlength - ` ┃ `.length) +
          "┃".bold.brightGreen
      );
      console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.brightGreen);
    } catch {
      /* */
    }
  } catch (e) {
    console.log(String(e.stack).grey.italic.dim.bgRed);
  }
});
