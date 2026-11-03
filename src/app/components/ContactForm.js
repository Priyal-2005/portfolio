'use client';

import { useState } from 'react';
import { personalInfo } from '../data/commonData';

/**
 * ContactForm
 * Posts to Formspree when NEXT_PUBLIC_FORMSPREE_ID is set (messages arrive in the
 * owner's inbox). Without it, falls back to opening the visitor's email client
 * with the message prefilled, so the form always does something useful.
 */
const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function ContactForm() {
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        if (!formspreeId) {
            const subject = data.get('subject') || `Portfolio message from ${data.get('name')}`;
            const body = `${data.get('message')}\n\n— ${data.get('name')}\n${data.get('email')}${data.get('phone') ? `\n${data.get('phone')}` : ''}`;
            window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            return;
        }

        setStatus('sending');
        try {
            const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: data,
            });
            if (!res.ok) throw new Error('Request failed');
            form.reset();
            setStatus('sent');
        } catch {
            setStatus('error');
        }
    }

    return (
        <form className="contact-form" aria-label="Contact Form" onSubmit={handleSubmit}>
            <div className="input-box">
                <input type="text" name="name" placeholder="Full Name" required aria-label="Full Name" />
                <input type="email" name="email" placeholder="Email Address" required aria-label="Email Address" />
            </div>
            <div className="input-box">
                <input type="tel" name="phone" placeholder="Mobile Number" aria-label="Mobile Number" />
                <input type="text" name="subject" placeholder="Email Subject" aria-label="Email Subject" />
            </div>
            <textarea name="message" cols="30" rows="10" placeholder="Your Message" required aria-label="Your Message"></textarea>
            <button type="submit" className="btn-box form-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            <p className="form-status" role="status" aria-live="polite">
                {status === 'sent' && "Thanks! Your message was sent. I'll get back to you soon."}
                {status === 'error' && `Something went wrong. Please email me directly at ${personalInfo.email}.`}
            </p>
        </form>
    );
}
