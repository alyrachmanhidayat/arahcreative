# EmailJS Integration Setup

## Setup Instructions

1. **Sign up for EmailJS**
   - Go to [EmailJS](https://www.emailjs.com/) and create an account
   - Connect an email service provider (Gmail, Outlook, etc.)
   - Get your EmailJS Public Key from the dashboard

2. **Create an Email Template**
   - In your EmailJS dashboard, create a new email template
   - Set up the template with these variables:
     - `name` - User's name from the form
     - `email` - User's email address
     - `message` - Message content from the form
     - `reply_to` - Email address for replies
   - Get the template ID for the created template

3. **Configure Environment Variables**
   - Rename `.env.example` to `.env`
   - Replace the placeholders with your actual EmailJS credentials:
     ```env
     VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
     VITE_EMAILJS_SERVICE_ID=your_actual_service_id_here
     VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id_here
     ```

4. **Important Security Notes**
   - Never commit your `.env` file to version control
   - Make sure your `.gitignore` file includes `.env`
   - Keep your EmailJS credentials secure

5. **Testing**
   - Fill out the contact form on the website
   - Check your email for the message
   - Make sure to test with different inputs to ensure validation works

## Troubleshooting

- If emails are not sending, check your console for errors
- Verify that your service ID, template ID, and public key are correct
- Make sure the template variables match what's in the code
- Test the email service in the EmailJS dashboard

## Template Variables Used

The contact form sends these variables to EmailJS:
- `name`: User's name
- `email`: User's email address
- `message`: The message content
- `reply_to`: User's email address (for reply purposes)