import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Inquire.css';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Inquire() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');
    emailjs
      .sendForm('service_js0ikfk', 'template_ithecv5', formRef.current, {
        publicKey: 'MSSDuSIL2QTWQ3TcZ',
      })
      .then(() => {
        setStatus('success');
        formRef.current?.reset();
      })
      .catch(() => setStatus('error'));
  }

  return (
    <section id="inquire" className="inquire-section">
      {/* <div className="inquire-bg">
        <img src="/st_barths.webp" alt="Contact background" />
      </div> */}
      <div className="inquire-banner">
        <img src="/girl_in_car.webp" alt="" aria-hidden="true" />
      </div>
      <div className="inquire-overlay">
        <div className="inquire-contact">
          <h2>Get in Touch</h2>

          <form ref={formRef} onSubmit={handleSubmit} className="inquire-form">
            <div className="inquire-row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="inquire-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="inquire-input"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message..."
              required
              rows={5}
              className="inquire-input inquire-textarea"
            />
            <button
              type="submit"
              className="inquire-btn"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="inquire-feedback inquire-success">
                Message sent! We'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="inquire-feedback inquire-error">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>

          <div className="inquire-alt">
            <a href="mailto:DestinationsByGM@gmail.com" className="inquire-email">
              DestinationsByGM@gmail.com
            </a>
            <a href="tel:+13058780007" className="inquire-phone">
              +1-305-878-0007
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
