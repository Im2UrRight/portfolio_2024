// /contact.tsx
import React from 'react';
import Header from '../components/Header';
import ContactPage from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <ContactPage />
      </main>
    </>
  );
};

export default Contact;