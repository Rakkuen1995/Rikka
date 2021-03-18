const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require("./data.json");
const prefix = "!";

const activities_list = ["Lux","Idoly Pride","les plumes","TrySail"]; 
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
	setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
	}, 10000);
	client.channels.cache.get('821287593643212832').send('Comeback!')
});
client.on("message", message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'avatar') {
	const embed = new MessageEmbed()
	.setColor('#000000')
	.setImage(message.author.displayAvatarURL())
	message.channel.send(embed);
	} 
	if (command === 'kimochi') {
	const messages = [
		`Tendo đang tỏ ra khinh bỉ với **${message.author.username}** .!`,
		`Tendo không quan tâm tới với **${message.author.username}** .!`,
		`Tendo đang tỏ ra thích thú với **${message.author.username}** .!`,
		`Tendo đang tỏ ra đáng yêu với **${message.author.username}** .!`,
		]
	const randomMessage = messages[Math.floor(Math.random() * messages.length)];
	message.channel.send(randomMessage);
	}
	if (command === 'tendo') {
	const attachment = new MessageAttachment('https://i.imgur.com/CdmJDTJ.png');
		message.channel.send(attachment);
	} 
	if (command === 'rate') {
	const rating = Math.floor(Math.random() * 100) + 1;
	message.channel.send(`Tendo đánh giá **${message.author.username}** đạt ${rating}/100 điểm!`);
	}

	if (command === 'rate2') {
	const rating = Math.floor(Math.random() * 10) + 1;
	message.channel.send(rating)
		if (0 < rating < 3)
		message.channel.send("C")
		if (3 <= rating < 6)
		message.channel.send("B")
		if (6 <= rating < 9)
		message.channel.send("A")
		if (9 <= rating <= 10)
		message.channel.send("S")
	}

	if (command === 'rate3') {
	const rating = Math.floor(Math.random() * 10) + 1;
	message.channel.send(rating)
		if (0 <= rating < 5)
		return message.channel.send("B")
		if (5 <= rating <= 10)
		return message.channel.send("A")
});

client.login(process.env.BOT_TOKEN);
//${message.author.username} MENTION BẢN THÂN
//if(message.author.id !== config.ownerID) return; BẢO MẬT LỆNH
