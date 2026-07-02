import HamburgerMenu from './HamburgerMenu';
import './VideoBanner.css';

export default function VideoBanner() {
  return (
    <section className="video-banner">
      <HamburgerMenu />

      <video
        id="video-banner"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/banner_trim.mp4" type="video/mp4" />
      </video>

      <div className="banner-text">
        <p>In best, in expertise</p>
      </div>
    </section>
  );
}
