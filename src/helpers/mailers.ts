// Remove unused imports if they're not needed
// If you need these imports later, you can add them back when implementing the email functionality

import nodemailer from "nodemailer";

export const sendEmail = async (email: string, emailType: string, userId: string) => {
    try {
        // Create a transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email content based on type
        const emailContent = {
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: emailType === "VERIFY" 
                ? `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${userId}">here</a> to verify your email</p>`
                : `<p>Click <a href="${process.env.DOMAIN}/resetpassword?token=${userId}">here</a> to reset your password</p>`,
        };

        // Send email
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: emailContent.subject,
            html: emailContent.html,
        });

        return { success: true, message: "Email sent successfully" };
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error sending email:", error.message);
            return { success: false, message: error.message };
        }
        return { success: false, message: "An unknown error occurred" };
    }
};

