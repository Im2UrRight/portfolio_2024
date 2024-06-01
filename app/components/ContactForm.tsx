// components/ContactForm.tsx
'use client'
import React from 'react';

const ContactForm: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can handle the form submission, including bot detection
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    const honeypot = formData.get('bot-field') as string;
    // Check if the honeypot field is empty (indicating it was filled by a bot)
    if (honeypot) {
      console.log('Submission likely from a bot. Ignoring.');
      return;
    }
    // Continue processing the form data...
    
    try {
      await fetch('api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });
      // Optionally, show a success message or redirect the user
      console.log('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Optionally, show an error message to the user
    }
  };
  return (
    <div className='contact-form'>
      <h2>Lets Connect</h2>
      <p>I&apos;m always looking for new opportunities. If you have a question or just want to say hi, I&apos;ll try my best to respond swiftly.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required/>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required/>

        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" />


        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows={4}></textarea>

        {/* Hidden honeypot field */}
        <div style={{ display: 'none' }}>
          <label htmlFor="bot-field">Leave this field empty:</label>
          <input type="text" id="bot-field" name="bot-field" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;