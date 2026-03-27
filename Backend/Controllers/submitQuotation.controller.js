const nodemailer = require("nodemailer");

const submitQuotationController = async (req, res) => {
  try {
    const { name, email, phone, product, message } = req.body;
    const file = req.file;

    const transporter = nodemailer.createTransport({
       host: "smtp.gmail.com",
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER, 
      replyTo: process.env.EMAIL_USER, 
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
      attachments: file
        ? [
            {
              filename: file.originalname,
              path: file.path,
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Quotation sent successfully" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ success: false, message: "Email failed to send" });
  }
};

module.exports = submitQuotationController;