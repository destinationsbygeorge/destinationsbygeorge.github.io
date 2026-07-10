import profilePic from '../assets/profile_pic.JPG';
import './About.css';

const QUALIFICATIONS = [
  {
    title: 'Cruise Industry',
    body: `Time well spent was my tenure at Norwegian Cruise Line in Miami as customer service and inside sales representative. I fully realized at the time I was receiving a tremendous education regarding the cruise industry.

My first big break as an actual travel agent was at a cruise only travel agency in Miami called South Beach Cruises a.k.a CruiseShopping.com. The owner used to always give his top selling agents free cruises, and the more we knew the cruise business the more we sold…product knowledge at the highest degree through personal experience on the ships. I was awarded two free cruises and I chose to go to Alaska both times. I used to sleep like a baby back in those days knowing I was part of such an exciting industry and getting paid for it.`,
  },
  {
    title: 'Hotel Industry',
    body: `Sol Melia Hotels and Resort Worldwide

At the time, it was one the largest hotel chains in the world, with over 400 hotels in 40 different countries. Only Marriott could be considered our competition.

Starting at the bottom and rising up through the ranks via hard work, there is no other way if you want the truth about it.

I started in the group sales department, and I was not allowed to speak to anyone, only my superiors. I had two mentors that were incredibly well educated and talented. I was the hungry protégé and had to study stacks of contracts before I was allowed to speak to clients on the phone. My training continued, and my mentors now included top executives, even the Vice President. The bosses started sending me to Europe, Costa Rica, Dominican Republic, Mexico etc. to learn more about the Melia properties and study the competition.

I was eventually promoted to Director of Sales, and it seemed I was always on a plane traveling to someplace agreeable.

The only professions I ever had that were not in the travel and tourism industry were selling women's shoes at Burdines, waiting tables at Smith & Wollensky Miami Beach and I was the chef and owner of a small café in Coconut Grove called Georgie's Place. These careers were very fulfilling and taught me lessons for life. The main thing the restaurant biz taught me was a little hard work never hurt anybody… and NOBODY should ever feel like they can't get their hands dirty once in a while.`,
  },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <div className="about-image-col">
          <img src={profilePic} alt="George" className="about-profile-pic" />
        </div>

        <div className="about-content-col">
          <p className="about-role">Founder and Luxury Travel Advisor</p>
          <h2 className="about-name">Meet George</h2>

          <div className="about-philosophy">
            <h3>My Philosophy</h3>
            <blockquote>
              "Life is either a daring adventure or nothing. Security does not exist in nature, nor do the
              children of men as a whole experience it. Avoiding danger is no safer in the long run than
              exposure."
              <cite>— Helen Keller, 1940</cite>
            </blockquote>
            <p>It's a remarkable quote, especially from a person who was blind, deaf and mute.</p>
            <p>What did she mean?</p>
            <p>She urged us to live boldly, embrace change, and step outside our comfort zones.</p>
            <p>She is implying that avoiding risks and staying in security is not really living.</p>
            <p>
              If we have our wits about us, and even a modicum of good health, we are very fortunate. If we
              can combine our health with that passion for wanderlust and adventure, then we are truly blessed.
            </p>
            <p>It is my wish that we may share this blessing and passion for travel together.</p>
            <p>
              If you agree, you must allow me to stand on your shoulders, so I can see where you are now,
              where you want to go, and how WE can get there.
            </p>
            <p>You can now stand on my shoulders.</p>
            <p>Now, you can see farther than me.</p>
            <p>Won't you tell me what you see?</p>
          </div>

          <div className="about-began">
            <h3>How It All Began</h3>
            <p>
              I was bitten by the travel bug at 19 years old and have been seeking new adventures ever since.
              My greatest memories were moving to London with nothing at 20 years old, then spending
              extensive time in Tokyo, Japan. I moved to Lyon, France at 40 years old and lived with a French
              family during the evening whilst studying French at university during the day.
            </p>
          </div>

          <div className="about-education">
            <h3>Education</h3>
            <p>
              There was this interesting little travel school in Providence RI called Sawyer and I received
              a degree in Travel and Tourism.
            </p>
            <p>
              Upon graduation I got a job as a ticketing agent at Colpitt's World Travel in Dedham MA. I was
              in charge of printing all the airline tickets, putting them all together, placing them in these
              beautiful ticket jackets (Lufthansa had the best) and then the delivery driver team would hand
              deliver these paper tickets to various large corporations in and around Boston.
            </p>
          </div>
        </div>
      </div>

      <div className="about-full-width">
        <div className="about-qualifications">
          <h3>Professional Qualifications</h3>
          {QUALIFICATIONS.map((q) => (
            <div key={q.title} className="qualification-block">
              <h4>{q.title}</h4>
              {q.body.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="about-mission">
          <h3>My Mission Statement</h3>
          <p className="mission-text">Hard Work!</p>
        </div>

        <div className="about-interests">
          <h3>Personal Interests</h3>
          <p>
            Growing up exposed to various cultures has accentuated my love for the travel & tourism
            industry. For leisure I enjoy physical activities such as tennis, disco dancing and break
            dancing, cooking, golf, snorkeling, skiing, kayaking and martial arts. For passive activities
            I enjoy listening to the 70's and 80' music, reading history, poetry and classic novels,
            studying Spanish, French and Italian, food & wine, and playing chess.
          </p>
        </div>
      </div>
    </section>
  );
}
