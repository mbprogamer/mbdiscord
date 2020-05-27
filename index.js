const discord = require("discord.js")
const botConfig = require("./botconfig.json")

const fs = require("fs");

const bot = new discord.Client();




bot.on("ready", async () => {

    console.log(`${bot.user.username} is online`)

    bot.user.setActivity("mathijsbols.nl", {type: "PLAYING"})

})

bot.on("guildMemberAdd", member => {

    var role = member.guild.roles.find("name", "testbot");

    member.addRole(role);
});




bot.on("message", async message => {


    if (message.author.bot) return;

    if (message.author.type === "dm") return;

    var prefix =botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    if( command === `hallo`){
        console.log(message);
        
    }
   

    if( command === `${prefix}info`){

        var botIcon = bot.user.displayAvatarURL;
        
        var botEmbed = new discord.RichEmbed()
            .setDescription("discord bot info")
            .setColor("#29e53f")
            .setThumbnail(botIcon)
            .addField("Bot naam", bot.user.username);

            
        return message.channel.send(botEmbed);
    }

        

});


bot.login(process.env.token);