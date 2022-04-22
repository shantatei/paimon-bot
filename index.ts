import DiscordJS, { Intents, Interaction, Message , UserMention} from 'discord.js' 
import dotenv from 'dotenv'
import WOKCommands from 'wokcommands';
import path from 'path'


dotenv.config()

const client = new DiscordJS.Client({
    intents : [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', async ()=>{
    

    console.log('Bot is ready')


    //Worn Off Keys (Npm package for easier use of discord js)
    new WOKCommands(client,{
        commandDir: path.join(__dirname,'commands'),
        typeScript :true ,
        testServers:['966918020645662720'],
    })


    //Normal commands 

    // const guildId = '966918020645662720'
    // const guild = client.guilds.cache.get(guildId)
    // let commands;


    // if(guild){
    //     commands = guild.commands
    // }else{
    //     commands = client.application?.commands
    // }


    // //Add Command
    // commands?.create({
    //     name:'add',
    //     description:'Adds two numbers',
    //     options:[
    //         {
    //             name:'num1',
    //             description :'The fist number',
    //             required: true,
    //             type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
    //         },
    //         {
    //             name:'num2',
    //             description:'The second number',
    //             required:true,
    //             type:DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
    //         }
    //     ]
    // })
})

// client.on('interactionCreate',async(interaction)=>{
//     if(!interaction.isCommand()){
//         return
//     }

//     const{ commandName, options} = interaction

//     if (commandName ==='add'){
//         const num1 = options.getNumber('num1')!
//         const num2 = options.getNumber('num2')!

//         await interaction.deferReply({
//             ephemeral:true
//         })

//         await new Promise (resolve => setTimeout(resolve, 5000))


//         await interaction.editReply({
//             content: `The sum is ${num1 + num2} `
//         })
//     }

// })


client.on('messageCreate',(message)=>{
    if (message.content === 'ryan'){

        message.channel.send(`Come here right now , <@499458839033413642>`)
    
        
    }
})

client.login(process.env.TOKEN)