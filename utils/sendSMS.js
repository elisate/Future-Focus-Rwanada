import africastalking from 'africastalking';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Initialize Africa's Talking
const africasTalking = africastalking({
  apiKey: process.env.AFRICASTALKING_API_KEY,
  username: process.env.AFRICASTALKING_USERNAME,
});

// Function to send SMS
const sendSms = async (to, message) => {
  try {
    // SMS configuration
    const response = await africasTalking.SMS.send({
      to: to,
      message: message,
      from: '+250787239952', // Optional: Specify a sender ID if supported
    });

    console.log('SMS sent successfully:', response);
    return true; // Return true if SMS is sent successfully
  } catch (error) {
    console.error('Error sending SMS:', error.message);
    return false; // Return false if there's an error sending SMS
  }
};

export default sendSms;
