import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.APP_USER,
    pass: process.env.APP_PASS,
  },
});

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  trustedOrigins: [process.env.APP_URL!],
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "USER",
        required: false,
      },
      phone: {
        type: "string",
        required: false,
      },
      status: {
        type: "string",
        defaultValue: "ACTIVE",
        required: false,
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      const verificationUrl = `${process.env.APP_URL}/verify-email?token=${token}`;
      try {
        const info = await transporter.sendMail({
          from: '"Prisma Blog" <prismablog@gmail.com>', // sender address
          to: user.email, // list of recipients
          subject: "Please verify your email", // subject line
          text: "Hello world?", // plain text body
          html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Email Verification</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f4f4; font-family:Arial, sans-serif;">
    
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          
          <!-- Container -->
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; margin:20px; border-radius:8px; overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td style="background:#4CAF50; padding:20px; text-align:center; color:white;">
                <h1 style="margin:0;">Prisma Blog</h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:30px;">
                <h2 style="margin-top:0;">Verify Your Email</h2>
                
                <p style="color:#555;">
                  Hi ${user.name || "User"},
                </p>

                <p style="color:#555;">
                  Thank you for signing up! Please click the button below to verify your email address.
                </p>

                <!-- Button -->
                <div style="text-align:center; margin:30px 0;">
                  <a href="${verificationUrl}" 
                     style="background:#4CAF50; color:white; padding:12px 25px; text-decoration:none; border-radius:5px; display:inline-block;">
                    Verify Email
                  </a>
                </div>

                <p style="color:#555;">
                  If the button doesn't work, copy and paste this link into your browser:
                </p>

                <p style="word-break:break-all; color:#4CAF50;">
                  ${url}
                </p>

                <p style="color:#999; font-size:12px;">
                  If you did not create an account, you can safely ignore this email.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f4f4f4; padding:20px; text-align:center; font-size:12px; color:#777;">
                © 2026 Prisma Blog. All rights reserved.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>

  </body>
</html>`,
        });

        console.log("Message sent: %s", info.messageId);
        // Preview URL is only available when using an Ethereal test account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      } catch (err) {
        console.error("Error while sending mail:", err);
      }
    },
  },

  socialProviders: {
    google: {
      prompt: "select_account consent",
      accessType: "offline",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});
