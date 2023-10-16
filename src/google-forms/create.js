const { google } = require("googleapis");

function requiredTextQuestionItem(title) {
  return {
    title: title,
    questionItem: {
      question: {
        required: true,
        textQuestion: {
          paragraph: false
        }
      }
    },
  }
};

function skillQuestionItem(sport) {
  return {
    title: `${sport} skill`,
    questionItem: {
      question: {
        required: true,
        choiceQuestion: {
          type: "RADIO",
          options: [
            {
              value: "1"
            },
            {
              value: "2"
            },
            {
              value: "3"
            },
            {
              value: "4"
            }
          ]
        }
      }
    }
  }
};

const formInfo = {
  title: "Hurmos intialization form",
  documentTitle: "",
  description: "Fill the following fields"
}

const formContent = {
  includeFormInResponse: true,
  requests: [
    {
      updateFormInfo: {
        info: formInfo,
        updateMask: "*"
      },
    },
    {
      createItem: {
        item: requiredTextQuestionItem("calendar link"),
        location: {
          index: 0
        }
      }
    },
    {
      createItem: {
        item: requiredTextQuestionItem("home-location"),
        location: {
          index: 1
        }
      }
    },
    {
      createItem: {
        item: skillQuestionItem("Football"),
        location: {
          index: 2
        }
      }
    },
    {
      createItem: {
        item: skillQuestionItem("Tennis"),
        location: {
          index: 3
        }
      }
    }
  ]
}


async function createForm(oauth2Client) {
  const formRequestBody = {
    title: "test",
  }
  // const formsClient = google.forms("v1", oauth2Client); THIS CREATES LOGIN ERROR
  const formsClient = google.forms({ version: "v1", auth: oauth2Client }); 
  const form = await formsClient.forms.create({
    requestBody: {
      info: formRequestBody
    }
  })
  await formsClient.forms.batchUpdate({
    formId: form.data.formId,
    requestBody: formContent
  })
  console.log(form);
  return form
}
module.exports = {
  createForm: createForm
}