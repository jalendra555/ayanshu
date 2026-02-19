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

         <div className="method-loop-wrapper">
           {/* Center infinity loop */}
           <div className="method-loop">
             <svg
               viewBox="0 0 400 200"
               className="method-loop-svg"
               xmlns="http://www.w3.org/2000/svg"
             >
               <defs>
                 <linearGradient id="loopGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#7C3AED" />
                   <stop offset="100%" stopColor="#EC4899" />
                 </linearGradient>
               </defs>

               {/* Infinity path */}
               <path
                 d="M50,100 C100,20 150,20 200,100 C250,180 300,180 350,100
                    M50,100 C100,180 150,180 200,100 C250,20 300,20 350,100"
                 fill="none"
                 stroke="url(#loopGradient)"
                 strokeWidth="14"
                 strokeLinecap="round"
               />


               <path
                 className="glow-path"
                 pathLength="1000"
                 d="
                   M50,100
                   C100,20 150,20 200,100
                   C250,180 300,180 350,100
                   C300,20 250,20 200,100
                   C150,180 100,180 50,100
                 "
                 fill="none"
                 stroke="#ffffff"
                 strokeWidth="6"
                 strokeLinecap="round"
               />



               {/* 4 numbered nodes */}
               <g className="method-node">
                 <circle cx="95" cy="70" r="16" />
                 <text x="95" y="75">1</text>
               </g>
               <g className="method-node">
                 <circle cx="305" cy="70" r="16" />
                 <text x="305" y="75">3</text>
               </g>
               <g className="method-node">
                 <circle cx="305" cy="130" r="16" />
                 <text x="305" y="135">2</text>
               </g>
               <g className="method-node">
                 <circle cx="95" cy="130" r="16" />
                 <text x="95" y="135">4</text>
               </g>
             </svg>

             {/* Labels around the loop */}
             <div className="method-items">
               <div className="method-item method-item-1">
                 <h3>DISCOVER</h3>
                 <p>Experience Brief – Deep understanding of market and audience dynamics.</p>
               </div>
               <div className="method-item method-item-2">
                 <h3>DEVELOP</h3>
                   <p>Consumer Journey &amp; Creative Solutions – Develop and execute impactful solutions.</p>
                 </div>
               <div className="method-item method-item-3">
                 <h3>DEFINE</h3>
                 <p>Future-Proof Strategy – Clarity on a future-facing strategic direction.</p>
               </div>

               <div className="method-item method-item-4">
                 <h3>DETERMINE</h3>
                 <p>Outcomes Tracker – Optimize effectiveness with a learning loop.</p>
               </div>
             </div>
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
