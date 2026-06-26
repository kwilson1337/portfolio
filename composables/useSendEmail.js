import nodemailer from 'nodemailer';
import { ref } from 'vue'

export const useSendEmail = () => {    
    const errors = ref([])

    const formatEmail = async ({
        firstName,
        lastName,        
        email,
        details
    }) => {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD,
            }
        });

        try {            
            await transporter.sendMail({
                subject: `New inquiry from ${firstName} ${lastName}`,
                from: `Deeply Designs - ${firstName} ${lastName}`,
                to: process.env.EMAIL_ADDRESS,
                replyTo: email,
                text: details
            })
        } catch(error) {
            errors.value.push(error)
        }
    }

    return {
        formatEmail,        
        errors
    }
}