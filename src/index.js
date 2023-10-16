const { google } = require('googleapis');
const { createFormWatch } = require("./google-forms/watch")
const fs = require("fs")
const express = require('express');
const { createForm } = require("./google-forms/create.js");
const { listenForMessages } = require("./google-pubsub/pullMessage")
const { publishMessage } = require("./google-pubsub/pushMessage")
const credentials = require("../secret/oauth2.json")
const localTokens = require("../secret/tokens.json")
const PORT = 4000;
const app = express();
const o2Auth = new google.auth.OAuth2(
  credentials.web.client_id,
  credentials.web.client_secret,
  credentials.web.redirect_uris[0]
)
if (localTokens.access_token != null) {
  o2Auth.setCredentials(localTokens)
}
app.get('/google', (req, res) => {
  if ("credentials" in o2Auth) {
    res.send("Your credentials are already saved!");
  }
  else {
    const authorizationUrl = o2Auth.generateAuthUrl({
      scope: "https://www.googleapis.com/auth/drive.file",
      access_type: "offline",
      include_granted_scopes: true
    })
    res.redirect(authorizationUrl);
  }
});
const redirect_pathname = new URL(credentials.web.redirect_uris[0]).pathname
console.log(redirect_pathname);
app.get(redirect_pathname, async (req, res) => {
  const authorizationCode = req.query.code;
  const { tokens } = await o2Auth.getToken(authorizationCode);
  writeTokens(tokens);
  o2Auth.setCredentials(tokens)
})

app.get("/form", async (req, res) => {
  const form = await createForm(o2Auth)
  await createFormWatch(form, o2Auth); 
  res.redirect(form.data.responderUri)
})

function writeTokens(tokens) {
  const filePath = __dirname + "\\..\\secret\\tokens.json"
  const jsonData = JSON.stringify(tokens, null, 2);
  fs.writeFileSync(filePath, jsonData);
}
const calendar = google.calendar({
  version: 'v3',
  auth: o2Auth
});

app.get('/google/events', async (res, req) => {
  const events = await calendar.events.list(
    { calendarId: "primary" }
  );
  await publishMessage(events.data.items[0]);
  await listenForMessages()
});
// app.get('/google/freebusy', async (res, req) => {
//   userGmail = "aapo.heiska@gmail.com";
//   const freebusyResults = await calendar.freebusy.query(
//     {
//       requestBody: {
//         timeMin: new Date().toISOString(),
//         timeMax: new Date(2023, 10, 12).toISOString(),
//         items: [{ id: userGmail }]
//       }
//     }
//   );


app.listen(PORT, () => {
  console.log("listening");
})

