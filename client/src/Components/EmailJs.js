import emailjs from "emailjs-com"; // Import the emailjs library

async function sendEmail(name, email) {
  try {
    const response = await emailjs.send(
      "service_7ymbc4a",
      "template_h62rw8s",
      {
        to_name: name,
        subject:
          "Welcome to T-World! Your Sign-Up is Complete & You’ve Earned 100 TOIN",
        email_id: email,
        message:
          "Congratulations! 🎉 Your initial sign-up has been successfully completed on T-World...",
        reply_to: "t-world@tongston.com",
      },
      "uNbdDy5vJyK-ScLts" // Your EmailJS User ID
    );

    // Log the response for debugging
    console.log("Email sent successfully:", response);
  } catch (error) {
    // Log the error details for debugging
    console.error("Error sending email:", error);
    alert(`Error: ${error.status} - ${error.text}`);
  }
}

export default sendEmail;