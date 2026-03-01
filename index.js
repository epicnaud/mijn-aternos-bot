const mineflayer = require('mineflayer')
const bot = mineflayer.createBot({
    host: 'JOUW_SERVER.aternos.me', 
    username: 'Botje247'
})
bot.on('login', () => console.log('Ik ben online!'))
bot.on('end', () => setTimeout(() => location.reload(), 5000))
