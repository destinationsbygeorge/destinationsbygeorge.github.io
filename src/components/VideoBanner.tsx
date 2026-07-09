import HamburgerMenu from './HamburgerMenu';
import './VideoBanner.css';

interface VideoBannerProps {
  onVideoLoaded: () => void;
}

export default function VideoBanner({ onVideoLoaded }: VideoBannerProps) {
  return (
    <section className="video-banner">
      <HamburgerMenu />

      <video
        id="video-banner"
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={onVideoLoaded}
      >
        <source src="/banner_trim.mp4" type="video/mp4" />
      </video>

      <div className="banner-text">
        <img src="/vite.svg" alt="Logo" className="banner-logo" />
        <p>Invest in experience</p>
      </div>
    </section>
  );
}
