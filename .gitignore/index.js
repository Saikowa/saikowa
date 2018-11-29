const Discord = require('discord.js')
const bot = new Discord.Client()
const prefix = "_"
bot.on('ready', function () {
    bot.user.setActivity("Saiko ! | _help", {type: "WATCHING"});
})
    
bot.on('message', function (message) {
    if (message.content === '!ping') {
        message.channel.send('pong')
    }

})

bot.on('message', message => {
    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setTitle('HELP')
        .setColor("#689AFB")
        .addField("__Commande du bot__", "help", false)
        .addField("__Interaction__", "help hug kiss cry pat")
        .addField("__Fun__", false)
        .addField("__Info__", "botinfo", false)
        .addField("__Admin__", false)
        message.channel.send (help_embed)
    }
})
bot.on('message', message => {
    if (message.content.startsWith (prefix +"hug")){
let defineduser = message.mentions.users.first();
var hug = ["https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif", "https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif", "https://media.giphy.com/media/kvKFM3UWg2P04/giphy.gif", "https://media.giphy.com/media/IRUb7GTCaPU8E/giphy.gif", "https://media.giphy.com/media/GcJN2Dz5XMDeM/giphy.gif", "https://media.giphy.com/media/WEQJ3ObydsQ36/giphy.gif"]
                var huge = hug[Math.floor(Math.random() * hug.length)] ;
            var text = message.content.substring(13) 
if(defineduser){          
 var HugEmbed = new Discord.RichEmbed() 
           .setColor ('#00FAD9') 
           .setDescription(`${message.author.username} fait un câlin à  ${defineduser.username}`, false )
            .setImage(huge)
            .setTimestamp() 
           .setFooter(`Hug`);
           message.channel.send(HugEmbed);
           console.log(`${message.author.username} | Hug`)
}else{
 var HugEmbed = new Discord.RichEmbed() 
           .setColor ('#00FAD9') 
           .setDescription(`${message.author.username} fait un câlin à  ${bot.user.username}`, false )
            .setImage(huge)
            .setTimestamp() 
           .setFooter(`Hug`);
           message.channel.send(HugEmbed);
           console.log(`${message.author.username} | Hug`)
}
        }
        })


        bot.on('message', message => {

            if (message.content.startsWith (prefix +"kiss")){
                let defineduser = message.mentions.users.first();
        var kiss = ["https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif", "https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif", "https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif", "https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif", "https://media.giphy.com/media/oHZPerDaubltu/giphy.gif"]
                        var kiss= kiss[Math.floor(Math.random() * kiss.length)] ;
                    var text = message.content.substring(13) 
     if(defineduser){           
         var KissEmbed = new Discord.RichEmbed() 
                   .setColor ('#00FAD9') 
                   .setDescription(`${message.author.username} embrasse ${defineduser.username}`)
                    .setImage(kiss)
                    .setTimestamp() 
                   .setFooter(`Kiss`);
                   message.channel.send(KissEmbed);
                   console.log(`${message.author.username} | Kiss`)
        }else{
         var KissEmbed = new Discord.RichEmbed() 
                   .setColor ('#00FAD9') 
                   .setDescription(`${message.author.username} embrasse ${bot.user.username}`)
                    .setImage(kiss)
                    .setTimestamp() 
                   .setFooter(`Kiss`);
                   message.channel.send(KissEmbed);
                   console.log(`${message.author.username} | Kiss`)
        }
                }
                })

                bot.on('message', message => {
                    let defineduser = message.mentions.users.first();
                    if (message.content.startsWith (prefix +"cry")){
                var cry = ["https://media.giphy.com/media/F6132ctb9YARa/giphy.gif", "https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif", "https://media.giphy.com/media/8YutMatqkTfSE/giphy.gif", "https://media.giphy.com/media/5t4gifYFrcwAcxt6t3/giphy.gif","https://media.giphy.com/media/YJ3qdaPDIPZVS/giphy.gif"]
                                var cry= cry[Math.floor(Math.random() * cry.length)] ;
                            var text = message.content.substring(13) 
                if(defineduser){  
                 var CryEmbed = new Discord.RichEmbed() 
                           .setColor ('#00FAD9') 
                           .setDescription(`${message.author.username} pleure ${defineduser.username}`)
                            .setImage(cry)
                            .setTimestamp() 
                           .setFooter(`Cry`);
                           message.channel.send(CryEmbed);
                           console.log(`${message.author.username} | Cry`)
                }else{
                 var CryEmbed = new Discord.RichEmbed() 
                           .setColor ('#00FAD9') 
                           .setDescription(`${message.author.username} Pleure  ${bot.user.username}`, false )
                            .setImage(cry)
                            .setTimestamp() 
                           .setFooter(`Cry`);
                           message.channel.send(CryEmbed);
                           console.log(`${message.author.username} | Cry`)
                }
                        }
                        })

                        bot.on('message', message => {
                            let defineduser = message.mentions.users.first();
                            if (message.content.startsWith (prefix +"pat")){
                        var pat = ["https://media.giphy.com/media/5tmRHwTlHAA9WkVxTU/giphy.gif", "https://media.giphy.com/media/4HP0ddZnNVvKU/giphy.gif", "https://media.giphy.com/media/ye7OTQgwmVuVy/giphy.gif", "https://media.giphy.com/media/osYdfUptPqV0s/giphy.gif", "https://media.giphy.com/media/L2z7dnOduqEow/giphy.gif"]
                                        var pat= pat[Math.floor(Math.random() * pat.length)] ;
                                    var text = message.content.substring(13) 
                        if(defineduser){  
                         var PatEmbed = new Discord.RichEmbed() 
                                   .setColor ('#00FAD9') 
                                   .setDescription(`${message.author.username} Caresse ${defineduser.username}`)
                                    .setImage(pat)
                                    .setTimestamp() 
                                   .setFooter(`Pat`);
                                   message.channel.send(PatEmbed);
                                   console.log(`${message.author.username} | Pat`)
                        }else{
                         var PatEmbed = new Discord.RichEmbed() 
                                   .setColor ('#00FAD9') 
                                   .setDescription(`${message.author.username} Caresse  ${bot.user.username}`, false )
                                    .setImage(pat)
                                    .setTimestamp() 
                                   .setFooter(`Pat`);
                                   message.channel.send(PatEmbed);
                                   console.log(`${message.author.username} | Pat`)
                        }
                                }
                                })

                                bot.on('message', message => {
                                    let bicon = bot.user.avatarURL;
                                    let botembed = new Discord.RichEmbed()
                                        .setAuthor("Dev by ReallySaiko", "https://cdn.discordapp.com/attachments/516426638980808712/517643289172770827/image0.jpg")
                                        .setDescription('Bot Informations')
                                        .setColor("#00BFFF")
                                        .setThumbnail(bicon)
                                        .addField("Bot Name", bot.user.username)
                                        .addField("Created On", bot.user.createdAt)
                                        .setTimestamp(message.createdAt)
                                
                                        if (message.content === prefix + "botinfo") {
                                            message.channel.send(botembed)
                                        }
                                    });

                                    bot.login(process.env.token)
