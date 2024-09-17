import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { subject, message, userEmail } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'barkingbeautiesmail@gmail.com',
                pass: process.env.BBPS_MAIL_PASSWORD
            }
        })

        const mailOption = {
            from: 'barkingbeautiesmail@gmail.com',
            to: 'barkingbeautiesps@gmail.com',
            subject: `Message from 'bbpetsalon.com': ${subject}`,
            replyTo: `${userEmail}`,
            html: `
        <html>
            <body>
                <div> <i>Message:</i> ${message}</div> 
                <br/>
                <div> <i>Client Email:</i> ${userEmail}</div>
                <br/>
                <div style="color:gray;">sent via <a styleS="color:gray;" href="https://bbpetsalon.com/ask-a-groomer">bbpetsalon.com/ask-a-groomer<a></div>
            </body>
        </html>
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}