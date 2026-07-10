import './ProcessService.css';

const CUSTOM_INCLUSIONS = [
  '100% custom tailored trip based on your individual interests and budget',
  'Consultation with deciding on destination(s), lodging, airport transfers/transportation and local activities',
  'Research and trip planning, excursions off property, implementing a collective of vetted resources',
  'Negotiations with tour operators and vendors',
  'Booking and reconfirmation of all travel components',
  'Signature Travel Network and preferred partner pricing and amenities',
  'Full access via phone and/or e-mail to your hotel concierge and/or their ground partners, destination management company and transportation company',
  'Peace of mind while traveling with 24/7 back-up assistance available',
];

export default function ProcessService() {
  return (
    <section className="process-service-section">
      <div className="process-service-inner">
        <div className="my-process-services">
          <h3>My Services</h3>

          <div className="service-block">
            <h4>Custom Itinerary Design</h4>
            <p>
              Multi-destination research or customized travel itinerary, domestic or international.
            </p>
            <p>
              For curated, bespoke vacation planning there is a nominal fee. Once you confirm through our
              agency, we will credit you back the booking fee. If you decide not to reserve your holidays
              through our agency, we will hold onto the fee and use it as credit for when you do book with us.
            </p>
            <h5>What's included in a Custom Itinerary Design</h5>
            <ul>
              {CUSTOM_INCLUSIONS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="service-block">
            <h4>Hotel Only Bookings</h4>
            <p>
              If you know what you want… reserve through us…VIP amenities and perks included.
            </p>
          </div>

          <div className="service-block">
            <h4>Cruise Only Bookings</h4>
            <p>
              If you know what you want and are ready to confirm, there is no fee for this, we can help you
              with in-depth knowledge of the destinations, cruise line research, questions, comments or past
              problems. Most likely we can obtain further onboard credit and other amenities you would not be
              awarded if you booked directly with the cruise line.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
