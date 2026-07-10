import './ProcessHow.css';

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

export default function ProcessHow() {
  return (
    <section className="process-how-section">
      <div className="process-how-inner">
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
      </div>
    </section>
  );
}
