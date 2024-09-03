//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348121373516";
global.owner = process.env.OWNER_NUMBER || "2348121373516";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUJWZExXQVRzU0NDTXc1elQ0WWxES08vNFV0aFJ2QXNSNk1ZVUgzU1dYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibS81UXdvaHA3OGhraEFoa3BsTWFEMDZrWmxrSlUwa3RNZ1Jvc3RXMGxTOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHR1cxMnNvSUdjUkJwTllvYi9TLy9JVFQ1UTF2dDFkb05YRDRqLzJ3eDBNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQQkExVUdpQ0FPR3pUVlhzNTRLUTBoVDliOCtmSkhmcDRzMTFOUlFRNGpvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFHbitabUNvNUV4MUp2aUdLblR3b0Ivd0tvUEhkMytma25ZbWk4YlZRM1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjV1anVsS3pEaVFSSmpPRkVUYTdpOTBkbFdQalRVQTlTY25ObjJCNXJHMGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0FtR1NWZGgweWpFZXU2N0lxTzNyakJwM2todFlyRG5RbkExaWZ3bUpGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1loZ2gwaWRNMEZBVVQ1d1hGa3NDWlIvdnNxKzNJcG9xQTB2ZDlmRmZYbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNmeFdiSGx2Yy9iTEovYlR1ajJsS21qNGlaSGhxUFNkd0Uvb1FlU1RvblB4QkFjaWp0eHAyQTFWcG5hNW9aaGNHYXViQXlDRGpOWTJGdUVNSUNWREJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUzLCJhZHZTZWNyZXRLZXkiOiI2Z21IQXk3RlB5Z094UmpKb2tqMjJNcitrNm1rUWJBbXROaXI5M0g4VnNjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwNzQ2MTkxNzZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTkxRkI5REJBNjkyNDExODIzMkJCQjQwNDIyQzU1Q0EifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTM4NjQ0NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiaG1vS2QyUm1US21UQV9UWUxBdG1xQSIsInBob25lSWQiOiI5NzAwMmE4Yy01MzgxLTRjNDAtODIzMS0yZDE1MGUwYTBlODMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSllUeEhYd04xZGIwS2Y0SUc2K0JQRGpHNWlvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJjUkQ0NFJwSnBlbjNDMjNoSEk3bWF4RjBEaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNQ0I5R1BBRCIsIm1lIjp7ImlkIjoiMjM0ODA3NDYxOTE3NjoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6In4gYEnihKIgIPCfmIwifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lERzI4WUVFTHFkM2JZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imc2UnVkYStPbWNzVlJjSGRmK2JsVkJTTCtROEZIT2NPdVM1L2YrQkMrV2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6InI4THhBN0Foa0E2M1NadVgvTmpLeXQ1U2owOFZQaFBUc3dzZkd6enZBTjJrcDlMN0REOVhjNzRRSDFjRFpra3B4Lzh6a2hkMytwWG41M1ZiZUtJUkF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVRnQ1V1BNZ05hTzZ0cmpjOE1RbVpMQ3ppdmZRelBoOVNSZHZJZ0svR2VBbjQrVlhlZWY1bkh2ZHRUTHVLaGxQaWJzbVBBRHVndFBlVFAzcmhuV0hBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwNzQ2MTkxNzY6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZT2tibld2anBuTEZVWEIzWC9tNVZRVWkva1BCUnpuRHJrdWYzL2dRdmxwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1Mzg2NDM5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNnbiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
