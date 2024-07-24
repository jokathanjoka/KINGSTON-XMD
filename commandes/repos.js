"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "✨", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/jokathanjoka/KINGSTON-XMD';
  const img = 'https://telegra.ph/file/9408d6f75ef62a0be6ae9.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `HELLOW WHATSAAP USER WELCOME KINGSTIN SCRIPT 
this is* *kingstin-md.*\n GET SESSION ID *BY*, *PAIRING CODE*  https://pairingcod-63465fd92ffa.herokuapp.com/pair/

🕷️ *REPOSITORY:* ${data.html_url}
🕷️ *STARS:* ${repoInfo.stars}
🕷️ *FORKS:* ${repoInfo.forks}
🕷️ *RELEASE DATE:* ${releaseDate}
🕷️ *UPDATE ON:* ${repoInfo.lastUpdate}
🕷️ *OWNER:* *kingston*
__________________________________
       𝕡𝕠𝕨𝕖𝕣𝕖𝕕 𝕓𝕪 𝕛𝕠𝕖𝕝 *kingston*`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
