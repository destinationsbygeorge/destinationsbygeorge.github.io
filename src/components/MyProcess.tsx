import './MyProcess.css';

const STEPS = [
  {
    number: '01',
    title: 'We Get Personal',
    body: `First thing's first…discovery… because this is all about you. It's your finite, valuable time and every second needs to count. What experiences did you enjoy in the past? Where do you dream of exploring? What makes you tick? We start by asking questions. We want to know your passions and who you are as people. This adds color to the blank canvas we start with on every single trip.`,
  },
  {
    number: '02',
    title: 'We Collaborate',
    body: `Some travelers want us to start from scratch. It's the anticipation factor that gets you through the week; it's the excitement of opening a brand new proposal with a surprise at every turn of the page. We thrive off your green light for creativity and can take the reins from start to finish.

Some travelers have a plan. You know where you're going and how you'll get there. We're here to join forces and collaborate with you. We'll listen to your vision, give you our feedback and build the itinerary of your dreams as a team.

Perhaps you've created a Mood Board, Vision Board or even a Pinterest Board for every detail. Our theory is you may not have the time, or simply need us to lock in that better rate you know we can secure - we're here for you. No matter your style, we'll deliver a seamless itinerary with enhancements and added value throughout.`,
  },
  {
    number: '03',
    title: 'We Design & Refine',
    body: `Once we understand who you are and how you operate, it's go-time. We hit the ground running building proposals for your review. With each draft we ask for your feedback, have discussions and make edits.

Approximately two months prior to travel, we put the finishing touches on your itinerary. We are talking everything from dining reservations to babysitting to last minute theatre tickets to spa appointments - anything that will make your trip more special!`,
  },
  {
    number: '04',
    title: 'We Send You on Your Way',
    body: `Enjoy.

Now is the time to soak in every precious moment. You have been working hard, you deserve this.

PLEASE DO NOT DISTURB – If you wish to be off the grid, we know exactly what this feels like…pure bliss. We will not reach out to you to see if there is anything else we can do to make your voyage any smoother.

When you return, you can share any feedback, discoveries, and stories.`,
  },
];

const SPECIALTIES = [
  'Exploratory, Adventure and Exotic Journeys',
  'Safaris',
  'Friends and Family / Multigenerational Vacations',
  'Luxury Hotels and Villas',
  'Themed Getaways such as Wellness Travel, Skiing, Golf Groups, Culinary, Food & Wine',
  'Destination Weddings & Honeymoons',
  'Luxury and Expedition Cruises',
];

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

        <div className="my-process-specialties">
          <h3>Our Specialties</h3>
          <ul>
            {SPECIALTIES.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div className="my-process-how">
          <h3>How it works.</h3>
          <p className="my-process-how-intro">
            In an era saturated with automated responses and anonymity, Destinations By George designs each
            trip by establishing a personal connection with our clients.
          </p>
          <div className="my-process-steps">
            {STEPS.map((step) => (
              <div key={step.number} className="my-process-step">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  {step.body.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

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
