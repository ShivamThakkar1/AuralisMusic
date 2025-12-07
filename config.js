

require('dotenv').config();


module.exports = {
  TOKEN: process.env.TOKEN,
  language: "en",
  ownerID: (process.env.OWNER_ID ? process.env.OWNER_ID.split(',').map(id => id.trim()).filter(Boolean) : []), 
  mongodbUri : process.env.MONGODB_URI,
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
  {
        name: "Anakin",
        password: "anakin",
        host: "us.apsara.lol",
        port:  25575,
        secure: false
      }
  ]
}
