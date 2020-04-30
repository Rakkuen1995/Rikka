'use strict';

/**
 * An example of how you can send embeds
 */

// Extract the required classes from the discord.js module
const { Client, MessageEmbed } = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
// Set the client user's presence
 const activities_list = ["PokeMMO","with T1","with Oh My Girl","with Arin","with Startear","with Yasuo"]; 
// creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});

client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '!embed') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
    const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Dive Ball')
	.setURL('https://pokemmo.eu/')
	.setAuthor('PokeMMO', 'https://apkdirectory.com/logos/pokemmo.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://cdn.bulbagarden.net/upload/9/9a/Dream_Dive_Ball_Sprite.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
	)
	.setTimestamp()
	.setFooter('PokeMMO Vietnamese', 'https://apkdirectory.com/logos/pokemmo.png');
    message.channel.send(embed);
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.BOT_TOKEN);

