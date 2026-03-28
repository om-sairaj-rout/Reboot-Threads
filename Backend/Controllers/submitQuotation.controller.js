const nodemailer = require("nodemailer");

const submitQuotationController = async (req, res) => {
  try {
    const { name, email, phone, product, message } = req.body;
    const file = req.file;

    // 1. Transporter Setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Reminder: Use App Password here!
      },
    });

    // 2. Email Options Setup
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Gmail aksar 'from' ko override kar deta hai
      to: process.env.EMAIL_USER, 
      replyTo: email, // Taaki aap reply karo toh seedha customer ko jaye
      subject: `New Quotation Request: ${product}`,
      text: `
        You have received a new quotation request!

        ---------------------------------------
        Customer Details:
        ---------------------------------------
        Name:    ${name}
        Email:   ${email}
        Phone:   ${phone}
        
        ---------------------------------------
        Order Details:
        ---------------------------------------
        Product: ${product}
        Message: ${message}
      `,
      // Attachment logic with Buffer
      attachments: file
        ? [
            {
              filename: file.originalname,
              content: file.buffer,
              contentType: file.mimetype, // CRITICAL: Ye batana zaroori hai ki file kya hai
            },
          ]
        : [],
    };

    // 3. Send Email
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully!");
    return res.status(200).json({ 
      success: true, 
      message: "Quotation sent successfully" 
    });

  } catch (error) {
    // Ye log aapko Render par error ka asli chehra dikhayega
    console.error("DETAILED EMAIL ERROR:", error);

    return res.status(500).json({ 
      success: false, 
      message: "Server Error: " + error.message 
    });
  }
};

module.exports = submitQuotationController;