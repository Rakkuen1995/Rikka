const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const client = new Client();
const activities_list = ["with Rakkuen","with Albedox","with Claris","with Ngoc"]; 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
    }, 10000);
});

client.on('message', message => {
    if (message.content.toLowerCase() === '?random') {
    	message.channel.send(Math.floor(Math.random() * 100) + 1);
  	}
    if (message.content.toLowerCase() === '?avatar') {
    const embed = new MessageEmbed()
	.setColor('#c500ff')
	.setImage(message.author.displayAvatarURL())
    message.channel.send(embed);
        }
    if (message.content.toLowerCase() === '?kien') {
var kien = ["Kiên thật sự ngu ngốc\nBảo vệ Clar cũng không xong", "Kiên không sai , chứ ai sai ?", "Bé Kiên chào cô chú đi con"];
var recipe = Math.floor(Math.random() * kien.length);
message.channel.send(kien[recipe]);
        }


});
client.login(process.env.BOT_TOKEN);
