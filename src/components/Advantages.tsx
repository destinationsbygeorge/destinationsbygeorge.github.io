import './Advantages.css';

const ADVANTAGE_BOXES = [
  { label: 'VIP Status', image: '/advantages_images/vip_status.jpg' },
  { label: 'Complimentary Breakfast for Two Daily', image: '/advantages_images/breakfast_for_two.jpg' },
  { label: 'Room Upgrade on Arrival, When Available', image: '/advantages_images/hotel_upgrade.jpg' },
  { label: 'Special Benefits Including Free Round of Golf, $200 Dining or Spa Credit', image: '/advantages_images/spa.jpg' },
  { label: 'Complimentary Wi-Fi', image: '/advantages_images/wifi.jpg' },
  { label: 'Early Check In and Late Check Out, When Available', image: '/advantages_images/reception.jpg' },
];

const REASONS = [
  {
    title: 'My Partners',
    body: `Destinations by George is affiliated with Travel Planners International and The Signature Travel Network.

Travel Planners International is a highly respected and distinguished host travel agency based in Orlando, Florida that was founded by the Gagliano family in 1988. One will find the hardest working and most successful travel advisors in the world at this agency.

The Signature Travel Network is a member-owned travel cooperative and consortium with an impeccable reputation in the travel and tourism industry. Founded in 1956, it brings together hundreds of top-tier retail travel agencies and over 15,000 travel advisors globally. Travel advisors who partner with Signature are able to obtain special privileges at over 1300 hotels and cruise ships worldwide. The network collectively generates well over one billion in annual sales giving it immense purchasing power in the industry.

Because Signature's members are carefully vetted, highly trained experts, working with a Signature-affiliated advisor unlocks significant perks for travelers that are not available to the general public.`,
  },
  {
    title: 'My Relationships',
    body: `Give a little, take a little. My relationships with my chosen vendors have taken me years to cultivate and have given me inside access. I am very particular with whom I do business with and I also consider them my business partners.

Whether it's a hotel, cruise line, transfer/transportation company, concierge or destination management company, I know who to go to and when. I do favors for them and they have done huge favors for me by going above and beyond for my clients. Occasionally, I will have a client put one of my contacts in a tight spot. I have personally witnessed my vendors going out on a limb to make sure my clients are never placed in harms way.

My contacts very rarely let me down and if they can not help me they will find someone who will. I even had the general manager of a hotel find an alternative property when he did not have the availability for my wedding group!`,
  },
  {
    title: 'My Availability',
    body: `Three departments and four long hold times! I know you have been there…we all have!

Poor customer service continues to be a frustrating and disappointing part of our travel experience. Planning for your special vacation with your loved ones should be an exciting time, half the fun!

My Mission Statement is HARD WORK! First and foremost, I am here to solve your problems and answer your questions. Please allow us to do business over the phone, not always going back and forth via long text messages and emails. You may have to call me from the hotel with a certain situation or something urgent. You may have an important request and need a question answered at 9pm. You have my cell number 305-878-0007 and I expect you to use it as often as possible for questions or concerns. I am available Monday – Friday from 7am to 9pm, Saturday and Sunday from 9am to 6pm. If it is urgent, just text me that it is urgent and you need to speak to me off hours. LET IT BE KNOWN that I have your back and I'm here to serve you!`,
  },
  {
    title: 'Your Time',
    body: `How would you define luxury?

In the past, the word luxury meant the highest quality products, the highest status and great in-store experience with 5 star service. That definition is still true and there are many customers for whom that will always be the only definition of luxury.

Top travel advisors and today's prosperous consumers are changing and adapting to realize true luxury is YOUR TIME.

Time is of course the scarcest resource, the one thing we can never have more of. Post-pandemic, luxury travelers want to use their time differently than before, having had the opportunity to re-evaluate their priorities while they were shut down or isolated. Using your time effectively will always be first and foremost in my mind throughout our relationship. Your time is the most valuable of all and helping you make the shopping and booking experience convenient and easy will ensure you spend more time on what you want to do, not what others want you to do.`,
  },
  {
    title: 'Your Money',
    body: `My wife's mother, 87 years old bless her heart, became very angry at me when she found out how much I spent on my wife's diamond tennis bracelet.

She said you should be traveling more and going on adventures while you still can and not be spending so much on jewelry.

I thought about what she said, her words really resonated with me. But alas I had to remind her how much her daughter loved diamonds!

Spending your money on things is out. Spending your money on experiences is in.

Fast forward to today, and I can promise you my wife and I will spend the majority of our disposable income on travel.

I am aware of how important your vacation investment is. I will always be upfront with you. If a certain hotel you are considering is not up to the level of expectations it should be, or if the service is not 5 Star even though this is what the property exclaims, I am going to tell you.

The well-traveled are my best clients, however I have learned that various CEO's, artists, celebrities, VIP's and professional athletes may not be well traveled and some may not even have passports. I tell them, "Please give me the authority to spend your money and get your passports!"`,
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="advantages-section">
      <div className="advantages-inner">
        <h2 className="advantages-title">What am I offering?</h2>
        <h3 className="advantages-subtitle">Exclusive Privileges when Booking with Destinations by George:</h3>

        <div className="advantages-carousel-wrapper">
          <div className="advantages-grid">
            {[...ADVANTAGE_BOXES, ...ADVANTAGE_BOXES].map((box, i) => (
              <div key={`${box.label}-${i}`} className="advantage-box">
                <img src={box.image} alt={box.label} />
                <div className="advantage-box-overlay">
                  <span>{box.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="advantages-reasons-intro">
          Here are 5 reasons why you need to book with Destinations by George now more than ever!
        </p>

        <div className="advantages-reasons">
          {REASONS.map((reason) => (
            <div key={reason.title} className="advantage-reason">
              <h3>{reason.title}</h3>
              {reason.body.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
