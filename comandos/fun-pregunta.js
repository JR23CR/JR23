import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
 let name = conn.getName(m.sender)
  if (!text) throw `[βππππβ] *Ejemplo :*\n\n *${usedPrefix + command}* me baΓ±o?`
  //let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "es" }, ''))
  let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
  let json = await res.json()
  if (json.success) 
m.reply(`ββββββββββββββββββββ
ββ‘ *β πππππππππ β*
β-----------------------
ββ’ *πΏππ΄πΆππ½ππ°:* ${text}
β-----------------------
ββ’ *ππ΄ππΏππ΄πππ°:* ${json.success.replace('simsimi', 'DyLux').replace('Simsimi', 'DyLux').replace('sim simi', 'DyLux')} 
ββββββββββββββββββββ`)
  else throw json
}

handler.help = ['pregunta']
handler.tags = ['fun']
handler.command = ['pregunta', 'preg'] 

export default handler
