import nodemailer from "nodemailer";

export default async function handler(req, res) {

    // Allow only POST requests
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            error: "Please provide all required fields"
        });
    }

    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: process.env.SMTP_PORT || 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.OWNER_EMAIL,
            replyTo: email,
            subject: "New Gym Inquiry",
            text: `Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Message: ${message}`
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({
            success: true,
            message: "Email sent successfully"
        });

    } catch (error) {

        console.error("Error sending email:", error);

        return res.status(500).json({
            error: "Failed to send email. Please try again later."
        });

    }
}