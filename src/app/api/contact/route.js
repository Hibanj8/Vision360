import connexion from '../../../../libs/connectiondb.js';
import Contact from '../../../model/contact.js';
import nodemailer from 'nodemailer'
import {NextResponse} from "next/server";


export async function POST(request) {
    await connexion();
    try {
        const { name, email, phone, message } = await request.json();
        await Contact.create({ name, email, phone, message });
        sendEmail(email, { name, phone, message});

        return NextResponse.json({ message: "Contact créé avec succès" }, {status:201});
    } catch (error) {
        return NextResponse.json({ message: error.message },{status:400});
    }
}

export async function GET(request) {
    await connexion();
    try {
        const contacts = await Contact.find();
        return NextResponse.json({ message: contacts }, {status:200});
    } catch (error) {
        return NextResponse.json({ message: error.message } , {status:400});
    }
}
function sendEmail(email, { name, phone, message}) {
    console.log(name, email, phone, message);
    const text = `
    <h1>Nouvelle Demande de Contact</h1>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong> ${message}</p>
    `;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptionsToNajihiba = {
        from: process.env.EMAIL_USER,
        to: 'najihiba137@example.com',
        subject: 'Nouvelle Demande de Contact',
        text: 'text',
      };
    
    const mailOptionsToUser = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Merci de nous avoir contactés !',
        html: '<p>Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.</p>',
      };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}
