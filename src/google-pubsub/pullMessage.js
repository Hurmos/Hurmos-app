const { subscriptionName, messageTimeout } = require("../../secret/env.json")
const { PubSub } = require("@google-cloud/pubsub")

const pubSubClient = new PubSub(); 

async function listenForMessages() {
  const subscription = pubSubClient.subscription(subscriptionName)

  let messageCount = 0; 
  const messageHandeler = message => {
    console.log(`Received message ${message.id}:`);
    console.log(`\tData: ${message.data}`);
    console.log(`\tAttributes: ${message.attributes}`)
    messageCount += 1;
  
    message.ack();
  }

  subscription.on('message', messageHandeler);

  setTimeout(() => {
    subscription.removeListener('message', messageHandeler);
    console.log(`${messageCount} message(s) received`);
  }, messageTimeout * 1000)
}

module.exports = {
  listenForMessages
}