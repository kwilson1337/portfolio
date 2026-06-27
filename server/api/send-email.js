import { useSendEmail } from '@/composables/useSendEmail'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)    
    const { formatEmail } = useSendEmail()
             
    try {
        await formatEmail({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            details: body.details            
        })
        
        return { 
            statusCode: 200,
            success: true,
            statusMessage: 'Email was sent successfully. We will get back to you as soon as possible.'
        }
    } catch (error) {        
        throw createError({
            statusCode: 500,
            success: false,
            statusMessage: 'Failed to send email. Please try again',
            errorMessage: error.message
        })
    }
})