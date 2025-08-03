import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

//owner
global.owner = [
['79615370645'],
['79615370645'],
['79615370645'],
['79615370645'],
['79615370645'],
['79615370645']
]

//Información 
globalThis.info = {
wm: "𝙇𝙤𝙡𝙞𝘽𝙤𝙩-𝙈𝘿",
vs: "2.0.0 (beta)",
packname: "𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦❤️‍🔥 - Хулиган\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
author: "Owner: @elrebelde21\n• Dueña: @itschinita_official",
apis: "https://delirius-apiofc.vercel.app",
apikey: "GataDios",
fgmods: { url: 'https://api.fgmods.xyz/api', key: 'elrebelde21' },
neoxr: { url: 'https://api.neoxr.eu/api', key: 'GataDios' },
img2: "https://telegra.ph/file/39fb047cdf23c790e0146.jpg",
img4: fs.readFileSync('./media/Menu2.jpg'),
yt: "https://www.youtube.com",
tiktok: "https://www.tiktok.com",
md: "https://github.com",
fb: "https://www.facebook.com",
nn: "79615370645", //Grupo ofc1
nn2: "79615370645", //Grupo ofc2
nn3: "79615370645", //Colab Loli & Gata
nn4: "79615370645", //Enlace Хулиган
nn5: "79615370645", //A.T.M.M
nn6: "79615370645", //Dev support 
nna: "79615370645",
nna2: "79615370645"
}

//----------------------------------------------------

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
