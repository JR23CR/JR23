let handler = async (m, { conn, participants, command, usedPrefix }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ β οΈ ] π΄π» πΎππ½π΄π ππΈπ΄π½π΄ ππ΄ππππΈπ½πΆπΈπ³πΎ (ππππππ ππππππππ / πππππππ ππππππππ) π΄π» πππΎ π³π΄ π΄πππ΄ π²πΎπΌπ°π½π³πΎ*'
let kicktext = `*[β] π΄ππΈπππ΄ππ΄ π° ππ½π° πΏπ΄πππΎπ½π° πΎ ππ΄ππΏπΎπ½π³π° π° ππ½ πΌπ΄π½ππ°πΉπ΄ π³π΄π» πΆπππΏπΎ πΏπ°ππ° π΄π»πΈπΌπΈπ½π°π π°π» ππππ°ππΈπΎ*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command} @${global.suittag}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, { mentions: conn.parseMention(kicktext)}) 
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('*[β] π΄ππΈπππ΄ππ΄ π° ππ½π° πΏπ΄πππΎπ½π° πΎ ππ΄ππΏπΎπ½π³π° π° ππ½ πΌπ΄π½ππ°πΉπ΄ π³π΄π» πΆπππΏπΎ πΏπ°ππ° π΄π»πΈπΌπΈπ½π°π π°π» ππππ°ππΈπΎ*') 
if(m.message.extendedTextMessage.contextInfo.participant !== null && m.message.extendedTextMessage.contextInfo.participant != undefined && m.message.extendedTextMessage.contextInfo.participant !== "") {
var mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid[0] ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : m.message.extendedTextMessage.contextInfo.participant
if(conn.user.jid.includes(mentioned)) return m.reply("*[β] π½πΎ πΏππ΄π³πΎ π΄π»πΈπΌπΈπ½π°ππΌπ΄ π° πΌπΈ πΌπΈππΌπΎ, πΏπΎπ π΅π°ππΎπ ππ°π²π°πΌπ΄ πΌπ°π½ππ°π»πΌπ΄π½ππ΄ ππΈ π°ππΈ π»πΎ π³π΄ππ΄π°π*")
let responseb = await conn.groupParticipantsUpdate(m.chat, [mentioned], 'remove')
let exitoso1 = `*@${mentioned.split("@")[0]} ?α΄α΄ α΄ΚΙͺα΄ΙͺΙ΄α΄α΄α΄ α΄xΙͺα΄α΄sα΄α΄α΄Ι΄α΄α΄ α΄α΄Κ Ι’Κα΄α΄α΄*`
let error1 = `*@${mentioned.split("@")[0]} α΄s α΄Κ α΄Κα΄α΄α΄α΄Κ α΄α΄Κ Ι’Κα΄α΄α΄, Ι΄α΄ α΄α΄α΄α΄α΄ α΄ΚΙͺα΄ΙͺΙ΄α΄Κ α΄Κ α΄Κα΄α΄α΄α΄Κ α΄α΄Κ Ι’Κα΄α΄α΄*`
let error2 = `@${mentioned.split("@")[0]} Κα΄ Κα΄ sΙͺα΄α΄ α΄ΚΙͺα΄ΙͺΙ΄α΄α΄α΄ α΄ Κα΄ α΄Κα΄Ι΄α΄α΄Ι΄α΄α΄α΄ α΄Κ Ι’Κα΄α΄α΄*`
if (responseb[0].status === "200") m.reply(exitoso1, m.chat, { mentions: conn.parseMention(exitoso1)})  
else if (responseb[0].status === "406") m.reply(error1, m.chat, { mentions: conn.parseMention(error1)})   
else if (responseb[0].status === "404") m.reply(error2, m.chat, { mentions: conn.parseMention(error2)})  
else conn.sendMessage(m.chat, {text: `*[β] πΎπ²ππππΈπΎ ππ½ π΄πππΎπ πΈπ½π΄ππΏπ΄ππ°π³πΎ*`, mentions: [m.sender], contextInfo:{forwardingScore:999, isForwarded:true}}, {quoted: m})
} else if (m.message.extendedTextMessage.contextInfo.mentionedJid != null && m.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
return
}}
handler.help = ['kick']
handler.tags = ['group']
handler.command = /^(kick|echar|hechar|sacar)$/i
handler.admin = handler.group = handler.botAdmin = true
export default handler


/*let handler = async (m, { conn, participants, usedPrefix, command }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ β οΈ ] π΄π» πΎππ½π΄π ππΈπ΄π½π΄ ππ΄ππππΈπ½πΆπΈπ³πΎ (ππππππ ππππππππ / πππππππ ππππππππ) π΄π» πππΎ π³π΄ π΄πππ΄ π²πΎπΌπ°π½π³πΎ*'
let kicktext = `*[β] π΄ππΈπππ΄ππ΄ π° ππ½π° πΏπ΄πππΎπ½π° πΎ ππ΄ππΏπΎπ½π³π° π° ππ½ πΌπ΄π½ππ°πΉπ΄ π³π΄π» πΆπππΏπΎ πΏπ°ππ° π΄π»πΈπΌπΈπ½π°π π°π» ππππ°ππΈπΎ*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command} @${global.suittag}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, { mentions: conn.parseMention(kicktext)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')}
handler.command = /^(kick|echar|hechar|sacar)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler*/
