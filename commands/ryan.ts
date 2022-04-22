import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
export default {
    category: "Testing",
    description: 'Sends an embed',

    callback:  async({ message, text }) => {
        const embed = new MessageEmbed()
            .setDescription("Need a 5th man!")
            .setTitle("VALORANT now")
            .setColor('AQUA')
            .addField('Come here', 'Right now <@499458839033413642>')
            .setImage('https://qph.fs.quoracdn.net/main-qimg-d82f5bd5c33eeee4dc5cbebe9840ee70-lq')
            .setThumbnail('https://storage.qoo-img.com/game/17607/KGhkiIABcwb0ZdwWMfGGBsHCb6gQbQNX.jpg')
    
            return embed 
    }
} as ICommand