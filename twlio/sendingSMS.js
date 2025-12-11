// import twilio from "twilio";
// import dotenv from "dotenv";

// // Load environment variables from .env file
// dotenv.config();

// // Initialize Twilio client using environment variables
// const twilioClient = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

// // Function to send SMS using Twilio
// const sendSms = async (to, message) => {
//   try {
//     // Send SMS via Twilio
//     const response = await twilioClient.messages.create({
//       body: message,
//       from: process.env.MY_PHONE_NUMBER, // Your Twilio phone number
//       to: to, // Recipient phone number
//     });

//     console.log("SMS sent successfully:", response.sid); // Log the message SID
//     return true; // Return true if SMS is sent successfully
//   } catch (error) {
//     console.error("Error sending SMS:", error.message);
//     return false; // Return false if there's an error sending SMS
//   }
// };

// export default sendSms;
