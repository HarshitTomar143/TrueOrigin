import nodemailer from 'nodemailer';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';

export const sendEmail= async ({email, emailType, userId}:any) => {
    try {
        
        const hashedToken = await bcryptjs.hash(userId.toString(),10)

        if(emailType==="VERIFY"){
            const updatedUser = await User.findByIdAndUpdate(
                userId,
                {
                    verifyToken: hashedToken,
                    verifyTokenExpiry: Date.now() + 3600000
                },
                { new: true }
            );
            
            if (!updatedUser) {
                throw new Error("Failed to update user with verification token");
            }
        }

        else if(emailType==="RESET"){
            const updatedUser = await User.findByIdAndUpdate(
                userId,
                {
                    forgotPasswordToken: hashedToken,
                    forgotPasswordTokenExpiry: Date.now() + 3600000
                },
                { new: true }
            );
            
            if (!updatedUser) {
                throw new Error("Failed to update user with reset token");
            }
        }

        // Looking to send emails in production? Check out our Email API/SMTP product!
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "5c1298fb834f1b",
                pass: "c2b61ae1eb9e6c"
        }
        });

        const mailOptions= {
            from: 'Harshit@gmail.com',
            to: email,
            subject: emailType==="VERIFY"? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN}/${emailType === "VERIFY" ? "verifyemail" : "resetpassword"}?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ?"Verify your email":"Reset your password"} or copy or paste the link in the browser. <br> ${process.env.DOMAIN}/${emailType === "VERIFY" ? "verifyemail" : "resetpassword"}?token=${hashedToken}</p>`
        }

        const mailResponse = await transport.sendMail(mailOptions);
        return mailResponse;

    } catch (error:any) {
        throw new Error(error.message);
    }
}