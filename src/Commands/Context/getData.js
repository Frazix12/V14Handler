const {
  Client,
  ContextMenuCommandInteraction,
  ApplicationCommandType,
} = require("discord.js");
const ee = require("../../configs/embed").embed;
const emoji = require("../../configs/emoji").emoji;

module.exports = {
  name: "getData",
  category: "Context",
  userPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES"],
  cooldown: 10,
  type: ApplicationCommandType.Message,
  /**
   *
   * @param {Client} client
   * @param {ContextMenuCommandInteraction} interaction
   */
  run: async (client, interaction) => {
    // Code
    let msg = await interaction.channel.messages.fetch(interaction.targetId);
    interaction.editReply({
      content: msg.cleanContent || "No Message Found",
    });
  },
};
