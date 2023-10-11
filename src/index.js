const path = require("path");
const url = require("url")
const { google } = require('googleapis');
const express = require('express');
const dotenv = require("dotenv");
const firestoreConnector = require("./firestoreConnector.js")

const ENVFILEPATH = path.resolve(__dirname, "..\\secret\\.env");
dotenv.config({path: ENVFILEPATH});
const PORT = 4000;
const REDIRECT_PATH = new URL(process.env.YOUR_REDIRECT_URL).pathname

const app = express();
const o2Auth = new google.auth.OAuth2(
  process.env.YOUR_CLIENT_ID,
  process.env.YOUR_CLIENT_SECRET,
  process.env.YOUR_REDIRECT_URL
)
const calendar = google.calendar({
  version: 'v3',
  auth: o2Auth
});

app.get('/google', (req, res) => {
  if (process.env.CLIENT_CREDENTIALS != undefined) {
    res.send("Your credentials are already saved!");
  }
  else {
    const authorizationUrl = o2Auth.generateAuthUrl({
      scope: process.env.SCOPE,
      access_type: "offline",
      include_granted_scopes: true
    })
    res.redirect(authorizationUrl);
  }
}
);

app.get(REDIRECT_PATH, async (req, res) => {
  const authorizationCode = req.query.code;
  const { tokens } = await o2Auth.getToken(authorizationCode);
  o2Auth.setCredentials(tokens)
})

app.get('/google/events', async (res, req) => {
  const events = await calendar.events.list(
    { calendarId: "primary" }
  );
  console.log(events.data.items);
});

app.get('/google/freebusy', async (res, req) => {
  userGmail = "aapo.heiska@gmail.com";
  const freebusyResults = await calendar.freebusy.query(
    {
      requestBody: {
        timeMin: new Date().toISOString(),
        timeMax: new Date(2023, 10, 12).toISOString(),
        items: [{ id: userGmail }]
      }
    }
  );
  firestoreConnector.saveBusyTime(freebusyResults, userGmail)

})


app.listen(PORT, () => {
  console.log("listening");
})

