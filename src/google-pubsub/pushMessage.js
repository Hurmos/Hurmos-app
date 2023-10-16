const { PubSub } = require("@google-cloud/pubsub");
const { form_topic_name } = require("../../secret/env.json");
async function publishMessage(data) {
  const pubsubClient = new PubSub()
  const dataBuffer = Buffer.from(JSON.stringify(data));
  try {
    const messageId = await pubsubClient
      .topic(form_topic_name)
      .publishMessage({ data: dataBuffer });
    console.log(messageId)
  } catch (error) {
    console.log(`Received error while publishing: ${error.message}`);
    process.exitCode = 1;
  }
}

module.exports = {
  publishMessage: publishMessage
}