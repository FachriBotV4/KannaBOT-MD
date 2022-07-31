import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, command }) => {
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./94295494.jpeg'), thumbnail: fs.readFileSync('./94295494.jpeg'),sendEphemeral: true}}}
let fla = 'https://telegra.ph/file/ed41145cdfa81b0ee9c0c.jpg'
let kontol = `Kebijakan Privasi, Syarat Ketentuan dan Peraturan *FACHRIBOT*

*Kebijakan Privasi*
1. FACHRIBOT tidak akan merekam data riwayat chat user.
2. FACHRIBOT tidak akan menyebarkan nomor users.
3. FACHRIBOT tidak akan menyimpan media yang dikirimkan oleh users.
4. FACHRIBOT tidak akan menyalah gunakan data data users.
5. Owner FACHRIBOT berhak melihat data riwayat chat users.
6. Owner FACHRIBOT berhak melihat status users.
7. Owner FACHRIBOT dapat melihat riwayat chat, dan media yang dikirimkan users.

*Peraturan FACHRIBOT*
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.

*Syarat Ketentuan FACHRIBOT*
1. Bot akan keluar dari group apabila sudah waktunya keluar.
2. FACHRIBOT dapat mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. FACHRIBOT *tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.*
4. FACHRIBOT akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. FACHRIBOT bertanggung jawab atas kesalahan fatal dalam programing maupun owner.

~ Fachri

Peraturan: 11/jul/22`
 await conn.sendButton(m.chat, `Kebijakan Privasi, Syarat Ketentuan dan Peraturan *FACHRIBOT*

*Kebijakan Privasi*
1. FACHRIBOT tidak akan merekam data riwayat chat user.
2. FACHRIBOT tidak akan menyebarkan nomor users.
3. FACHRIBOT tidak akan menyimpan media yang dikirimkan oleh users.
4. FACHRIBOT tidak akan menyalah gunakan data data users.
5. Owner FACHRIBOT berhak melihat data riwayat chat users.
6. Owner FACHRIBOT berhak melihat status users.
7. Owner FACHRIBOT dapat melihat riwayat chat, dan media yang dikirimkan users.

*Peraturan FACHRIBOT*
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.

*Syarat Ketentuan FACHRIBOT*
1. Bot akan keluar dari group apabila sudah waktunya keluar.
2. FACHRIBOT dapat mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. FACHRIBOT *tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.*
4. FACHRIBOT akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. FACHRIBOT bertanggung jawab atas kesalahan fatal dalam programing maupun owner.

~ Fachri

Peraturan: 11/jul/22\n`,wm + '\n\n' + botdate, await (await fetch('https://telegra.ph/file/ed41145cdfa81b0ee9c0c.jpg')).buffer(), [['MENU','.menu']], fkontak, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'Rules FachriBot',          previewType: 0,
                        thumbnail: fs.readFileSync("./94295494.jpeg"),
                        sourceUrl: sig
                      }}
})
}


handler.help = ['rules']
handler.tags = ['info']
handler.command = ['rules']
handler.limit = true
export default handler
