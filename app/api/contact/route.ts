// pages/api/contact/route.js

import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

const user = process.env.EMAIL;
const cfEmail = process.env.CF_EMAIL;
const pass = process.env.PW;

export async function POST(request: Request)  {
    try {
        const { name, email, subject, message } = await request.json();
        if (!name || !email || !message) {
          return new NextResponse('Missing form fields.',{ status: 400 });
        };
        // Configure nodemailer to send email
        const transporter = nodemailer.createTransport({
            // Configure your email service provider here
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user,
                pass,
            },
        });

        // Email options
        const mailOptions = {
            from: user,
            to: cfEmail,
            subject: 'New Contact Form Submission',
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);
        
        return new NextResponse('Form submission successful', { status: 200} );
    } catch (error) {
        console.error('Error sending email:', error);
        return new NextResponse('Internal server error', { status: 500 });
    }
}