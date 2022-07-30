import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync('./94295494.jpeg'), //Gambarnye
					},
					"title": `Hai ${conn.getName(m.sender)}~`, //Kasih namalu 
					"description": `Rp 9.999.999.999`, 
					"currencyCode": "Rp",
					"priceAmount1000": "500000",
					"retailerId": `ppk`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `628162633549@s.whatsapp.net`
		}
	}
}

  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply('Maksimal 10 detik!')
      let img = await q.download?.()
      if (!img) throw `balas gambar/video/stiker dengan perintah ${usedPrefix + command}`
      let out
      try {
        if (/webp/g.test(mime)) out = await webp2png(img)
        else if (/image/g.test(mime)) out = await uploadImage(img)
        else if (/video/g.test(mime)) out = await uploadFile(img)
        if (typeof out !== 'string') out = await uploadImage(img)
        stiker = await sticker(false, out, global.stickpack, global.stickauth)
      } catch (e) {
        console.error(e)
      } finally {
        if (!stiker) stiker = await sticker(img, false, global.stickpack, global.stickauth)
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.stickpack, global.stickauth)
      else return m.reply('URL tidak valid!')
    }
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', ftoko)
    else throw 'Conversion failed'
  }
}
handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i

export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
