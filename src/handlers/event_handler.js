const { Client } = require("discord.js");
const fs = require("fs");
/**
 *
 * @param {Client} client
 */

module.exports = (client) => {
  try {
    fs.readdirSync("./src/events/").forEach((file) => {
      const events = fs
        .readdirSync("./src/events/")
        .filter((file) => file.endsWith(".js"));
      for (let file of events) {
        let pull = require(`../events/${file}`);
        if (pull) {
          client.events.set(file, file.split(".js"));
        }
      }
    });
    console.log(`${client.events.size} Events Loaded`.bold.brightGreen);
  } catch (e) {
    console.log(e);
  }
};
