![V14 Handeler](https://cdn.discordapp.com/attachments/896994497135775757/960235994760745030/V14_Handeler.png)
 
<br>
 
### **Normal SlashCommand**
```js
const {
  Client,
  CommandInteraction,
  ApplicationCommandType,
} = require("discord.js");
const ee = require("../../configs/embed").embed;
const emoji = require("../../configs/emoji").emoji;

module.exports = {
  name: "",
  description: ``,
  userPermissions: [],
  botPermissions: [],
  category: "",
  cooldown: 10,
  type: ApplicationCommandType.ChatInput,
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    // Code
  },
};
```
 
<br>
 
### **Message Input SlashCommand**
```js
const {
  Client,
  ContextMenuCommandInteraction,
  ApplicationCommandType,
} = require("discord.js");
const ee = require("../../configs/embed").embed;
const emoji = require("../../configs/emoji").emoji;

module.exports = {
  name: "",
  category: "",
  type: ApplicationCommandType.Message,
  /**
   *
   * @param {Client} client
   * @param {ContextMenuCommandInteraction} interaction
   */
  run: async (client, interaction) => {
    // Code
  },
};
```
 
<br>
 
### **User Input SlashCommand**
```js
const {
  Client,
  ContextMenuCommandInteraction,
  ApplicationCommandType,
} = require("discord.js");
const ee = require("../../configs/embed").embed;
const emoji = require("../../configs/emoji").emoji;

module.exports = {
  name: "",
  category: "",
  type: ApplicationCommandType.User,
  /**
   *
   * @param {Client} client
   * @param {ContextMenuCommandInteraction} interaction
   */
  run: async (client, interaction) => {
    // Code
  },
};
```