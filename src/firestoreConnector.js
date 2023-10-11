var admin = require("firebase-admin");
var serviceAccount = require("../secret/hurmos-firebase-credentials.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore()
const eventCollection = db.collection('users');

async function saveBusyTime(freebusyRes, userEmail) {
  // console.log(freebusyRes.data.calendars);
    
  // const document = eventCollection.doc(userEmail)
  // freebusyRes.groups.calendars.forEach(calendar => {
  //   const caledarCollection = document.collection(calendar)
  //   calendar.busy.forEach(event => 
  //     await caledarCollection. 
  //     )
  // });
  // await document.set(freebusyRes);
  // await document.set(freebusyRes);
}

// const aTurningRef = db.collection('users').doc('aturning');

// await aTurningRef.set({
//   "first": "Alan",
//   "middle": "Mathison", 
//   "last": "Turing", 
//   "born": 1912
// });

module.exports = 
{
  saveBusyTime: saveBusyTime 
};