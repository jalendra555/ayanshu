import Navbar from "../components/Navbar";
import About3D from "../components/About3D";
import InfinityLoop3D from "../components/InfinityLoop3D";


export default function AboutPage() {
  return (
    <div className="about-page">

      {/* NAVBAR */}
      <Navbar />

      {/* 3D HERO SECTION */}
      <div className="about-hero-wrapper">
        <About3D />

        <div className="about-hero-text">
          <h1 className="about-hero-title">
            WE HELP YOU TRANSFORM TODAY<br />SO YOU CAN LEAD TOMORROW.
          </h1>

          <p className="about-hero-subtitle">
            Engineering intelligent, scalable, and secure digital ecosystems.
          </p>
        </div>
      </div>
      {/* ABOUT CONTENT */}
      <section className="about-section container">
        <h2 className="about-heading">Who We Are</h2>
        <p className="about-text">
          Ayanshu Innovations is a next‑generation IT consulting and engineering company
          specializing in cloud, cybersecurity, DevOps, enterprise software, and digital
          transformation. We help businesses modernize, automate, and scale with confidence.
        </p>
      </section>

       <section className="method-4d container">
         <h2 className="method-title">Our 4D Method</h2>
         <p className="method-subtitle">
           End-to-end innovative and forward-thinking solutions to make digital commerce simpler to navigate.
         </p>


             <svg
               viewBox="0 0 900 260"
               className="method-loop-svg"
               xmlns="http://www.w3.org/2000/svg"
             >
               <defs>
                 <linearGradient id="loopGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#7C3AED" />
                   <stop offset="100%" stopColor="#EC4899" />
                 </linearGradient>
               </defs>

               {/* FOUR CONNECTED LOOPS */}
               <path
                 d="
                   M80,130
                   C140,40 200,40 260,130
                   C320,220 380,220 440,130
                   C500,40 560,40 620,130
                   C680,220 740,220 800,130
                   M80,130
                   C140,220 200,220 260,130
                   C320,40 380,40 440,130
                   C500,220 560,220 620,130
                   C680,40 740,40 800,130
                 "
                 fill="none"
                 stroke="url(#loopGradient)"
                 strokeWidth="18"
                 strokeLinecap="round"
               />



               {/* Glow */}
               <path
                 className="glow-path"
                 pathLength="1000"
                 d="
                   M80,130
                   C140,40 200,40 260,130
                   C320,220 380,220 440,130
                   C500,40 560,40 620,130
                   C680,220 740,220 800,130

                    M80,130
                    C140,220 200,220 260,130
                    C320,40 380,40 440,130
                    C500,220 560,220 620,130
                    C680,40 740,40 800,130
                 "
                 fill="none"
                 stroke="#ffffff"
                 strokeWidth="6"
                 strokeLinecap="round"
               />

               {/* Circles centered on each loop */}
               <g className="method-node">

                 <text x="170" y="136">DISCOVER</text>
               </g>

               <g className="method-node">

                 <text x="350" y="136">DEFINE</text>
               </g>

               <g className="method-node">

                 <text x="530" y="136">DEVELOP</text>
               </g>

               <g className="method-node">

                 <text x="710" y="136">DETERMINE</text>
               </g>
             </svg>

             {/* Text under each loop */}
             <div className="method-items">
               <div className="method-item">
                 <h3>DISCOVER</h3>
                 <p>Experience Brief – Deep understanding of market, audience dynamics and core opportunities.</p>
               </div>

               <div className="method-item">
                 <h3>DEFINE</h3>
                 <p>Future-Proof Strategy – Clarity on a future-facing strategic direction.</p>
               </div>

               <div className="method-item">
                 <h3>DEVELOP</h3>
                 <p>Consumer Journey &amp; Creative Solutions – Develop and execute relevant impactful solutions.</p>
               </div>

               <div className="method-item">
                 <h3>DETERMINE</h3>
                 <p>Outcomes Tracker – Optimize effectiveness and a learning loop.</p>
               </div>
             </div>


       </section>




      {/* VALUE SYSTEM */}
      <section className="about-values container">
        <h2 className="about-heading">Our Value System</h2>
        <p className="about-text">
          We believe in building transformative experiences that empower individuals,
          businesses, and communities.
        </p>

        <div className="value-grid">
          <div className="value-card">
            <h3>01</h3>
            <h4>Outperforming Expectations</h4>
            <p>
              Our rigorous delivery methodology ensures projects are completed on time,
              within budget, and beyond expectations.
            </p>
          </div>

          <div className="value-card">
            <h3>02</h3>
            <h4>Breaking New Grounds</h4>
            <p>
              We leverage the latest technologies to build the fastest, most scalable
              paths to market.
            </p>
          </div>

          <div className="value-card">
            <h3>03</h3>
            <h4>Giving Back</h4>
            <p>
              We foster a culture of diversity, inclusivity, and equal opportunity —
              building a workplace that uplifts people.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
