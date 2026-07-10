import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './MyProcess.css';

const SPECIALTIES = [
  'Exploratory, Adventure and Exotic Journeys',
  'Safaris',
  'Friends and Family / Multigenerational Vacations',
  'Luxury Hotels and Villas',
  'Themed Getaways such as Wellness Travel, Skiing, Golf Groups, Culinary, Food & Wine',
  'Destination Weddings & Honeymoons',
  'Luxury and Expedition Cruises',
];

export default function MyProcess() {
  return (
    <section id="my-process" className="my-process-section">
      <div className="my-process-inner">
        <h2 className="my-process-title">Let us make the most of your time off.</h2>
        <p className="my-process-intro">
          Some trips are involved; whittled down to the minute. Others are a day at the beach, literally.
          We're here to solve problems and answer questions as little or as much as you need.
        </p>
        <p className="my-process-intro">
          Our services begin with arranging your transport and end only after you've shared your feedback.
          From finding the hotel of your dreams, unforgettable fine dining experiences, coordinating local
          guides, mapping out excursions, finding special events you won't want to miss, and saving you from
          inevitable mishaps along the way. Think of us as your peace of mind policy, we have your back.
        </p>

        <div className="my-process-specialties-row">
          <div className="my-process-specialties">
            <h3>Our Specialties</h3>
            <ul>
              {SPECIALTIES.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="my-process-cards-swiper">
            <Swiper
              effect="cards"
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              className="process-swiper"
              autoplay={{ delay: 2500, disableOnInteraction: false }}
            >
              <SwiperSlide>
                <img src="/my_process_images/cards/nikki_boat.webp" alt="Boat" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/my_process_images/cards/sax_party.webp" alt="Sax party" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/my_process_images/cards/bartender.webp" alt="Bartender" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/my_process_images/cards/group_dinner.webp" alt="Bartender" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
