const Discrord = require("discord.js")

const TOKEN="OTMyMTg2MjcyMTIwODYwNjky.YePUHg.vXFRStoS6fzqf0GWJahnbKOL19Q"

const client = new Discrord.Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message == "hi"){
        message.reply("Hello")
    }
})

client.login(TOKEN)