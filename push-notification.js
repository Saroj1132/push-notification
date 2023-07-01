const gcm = require('node-gcm');

// Set up your FCM server key and the device registration token
const serverKey = process.env.serverKey
const registrationToken = process.env.registrationToken

// Create a new message
const message = new gcm.Message({
  notification: { title: 'your title', body: 'your body ' }
});

// Create a new sender using your FCM server key
const sender = new gcm.Sender(serverKey);

// Send the message to the specified registration token
sender.send(message, { registrationTokens: [registrationToken] }, (err, response) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Successfully sent push notification:', response);
  }
});
