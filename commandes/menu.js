const util = require('util');

const fs = require('fs-extra');

const { zokou } = require(__dirname + "/../framework/zokou");

const { format } = require(__dirname + "/../framework/mesfonctions");

const os = require("os");

const moment = require("moment-timezone");

const s = require(__dirname + "/../set");



zokou({ nomCom: "menu", categorie: "Menu" }, async (dest, zk, commandeOptions) => {

    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;

    let { cm } = require(__dirname + "/../framework//zokou");

    var coms = {};

    var mode = "public";

    

    if ((s.MODE).toLocaleLowerCase() != "yes") {

        mode = "private";

    }





    



    cm.map(async (com, index) => {

        if (!coms[com.categorie])

            coms[com.categorie] = [];

        coms[com.categorie].push(com.nomCom);

    });



    moment.tz.setDefault(s.TZ);



// Créer une date et une heure en GMT

const temps = moment().format('HH:mm:ss');

const date = moment().format('DD/MM/YYYY');



  let infoMsg =  `

┏❏  KING STON MD 
┃ ⿻:𝕞𝕠𝕕𝕖 ${mode}
┃ ⿻𝕠𝕨𝕟𝕖𝕣 : kingston tech
┃ ⿻𝕝𝕚𝕓𝕣𝕒𝕣𝕪 : 𝕓𝕒𝕚𝕝𝕖𝕪𝕤
️┃ ⿻𝕡𝕣𝕖𝕗𝕚𝕩 : ${s.PREFIXE}
️┃ ⿻𝕕𝕒𝕥𝕖 : ${date}
┃ ⿻𝕥𝕚𝕞𝕖 : ${temps}
┃ ⿻𝕡𝕝𝕦𝕘𝕚𝕟 : 900
┃ ⿻ 𝕣𝕒𝕞: 26.11GB/120.9 GB
┃ ⿻𝕥𝕙𝕖𝕞𝕖 : Kingston tech
┗❏\n\n`;


    

let menuMsg = `
┏━━━━━━━━━━━━━━┓
┣kingstone cmds
┗━━━━━━━━━━━━━━┛\n


`;



    for (const cat in coms) {

        menuMsg += `┏❏ *${cat}*`;

        for (const cmd of coms[cat]) {

            menuMsg += `
┃ ⎔ ${cmd}`;

        }

        menuMsg += `
┗❏\n`

    }



    menuMsg += `


︎┏━━━━━━━━━━━━━━━━━━━━━━━━┓
️┣❏KING STON MD 
┣❏Regards to
┗━━━━━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━━━━━┓
┃1.kingstone tech
┃2.joel tech
┗━━━━━━━━━━━━━━━━━━━━━━━━┛\n


`;



   var lien = mybotpic();



   if (lien.match(/\.(mp4|gif)$/i)) {

    try {

        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *TKM-BOT*, déveloper Cod3uchiha" , gifPlayback : true }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu error " + e);

        repondre("🥵🥵 Menu error " + e);

    }

} 

// Vérification pour .jpeg ou .png

else if (lien.match(/\.(jpeg|png|jpg)$/i)) {

    try {

        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *TKM-bot*, déveloper cod3uchiha" }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu error " + e);

        repondre("🥵🥵 Menu error " + e);

    }

} 

else {

    

    repondre(infoMsg + menuMsg);

    

}



});
