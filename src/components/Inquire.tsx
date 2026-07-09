import './Inquire.css';

export default function Inquire() {
  return (
    <section id="inquire" className="inquire-section">
      <div className="inquire-bg">
        <img src="/st_barths.webp" alt="Contact background" />
      </div>
      <div className="inquire-overlay">
        <div className="inquire-contact">
          <h2>Get in Touch</h2>
          <a href="mailto:DestinationsByGM@gmail.com" className="inquire-email">
            DestinationsByGM@gmail.com
          </a>
          <a href="tel:+13058780007" className="inquire-phone">
            +1-305-878-0007
          </a>
        </div>
      </div>
    </section>
  );
}
