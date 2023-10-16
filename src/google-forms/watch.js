const { google } = require("googleapis");
const { path } = require("path")
const { authenticate } = req
function createFormWatch(form, oauth2Client) {
  const formsClient = google.forms({ version: "v1", auth: oauth2Client });
  return formsClient.forms.watches.create({
    formId: form.data.formId,
    requestBody: {
      watch: {
        target: {
          topic: {
            topicName: "projects/hurmos/topics/hurmos-forms"
          }
        },
        eventType: "RESPONSES"
      }
    },
  });
}
module.exports = {
  createFormWatch: createFormWatch
}