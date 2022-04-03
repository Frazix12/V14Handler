const {
  Client,
  ContextMenuCommandInteraction,
  ApplicationCommandType,
  EmbedBuilder,
} = require("discord.js");
const ee = require("../../configs/embed").embed;
const emoji = require("../../configs/emoji").emoji;

module.exports = {
  name: "avatar",
  category: "Context",
  userPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES"],
  cooldown: 10,
  type: ApplicationCommandType.User,
  /**
   *
   * @param {Client} client
   * @param {ContextMenuCommandInteraction} interaction
   */
  run: async (client, interaction) => {
    // Code
    let user =
      interaction.guild.members.cache.get(interaction.targetId) ||
      client.users.cache.get(interaction.targetId);

    interaction.editReply({
      embeds: [
        new EmbedBuilder()
          .setColor("Blurple")
          .setImage(user.displayAvatarURL({ extension: "png" }))
          .setTitle(`Avatar of ${interaction.user.tag}`),
      ],
    });
  },
};
