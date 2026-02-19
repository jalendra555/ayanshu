import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import LiveClock from "./components/LiveClock";

export default function Home() {
  const services = [
    { num: "01", title: "Cloud & DevOps", text: "Secure, scalable cloud environments with CI/CD automation." },
    { num: "02", title: "Cybersecurity", text: "Zero‑trust architecture, SOC monitoring, and compliance." },
    { num: "03", title: "Software Development", text: "Enterprise‑grade applications tailored to your workflows." },
    { num: "04", title: "IT Infrastructure", text: "Modern networking, virtualization, and server architecture." },
    { num: "05", title: "Managed IT Services", text: "24/7 monitoring, SLAs, and proactive maintenance." },
    { num: "06", title: "Digital Transformation", text: "Automation, modernization, and strategic IT consulting." }
  ];

  const partners = [
    "AWS", "Azure", "Google Cloud", "Cisco", "VMware", "Fortinet",
    "Oracle", "SAP", "Adobe", "Shopify", "Stripe"
  ];

  const testimonials = [
    { name: "Rahul Verma", company: "FinEdge Capital", text: "Ayanshu Innovations transformed our cloud infrastructure with unmatched precision." },
    { name: "Sarah Mathews", company: "RetailHub", text: "Their cybersecurity overhaul reduced our incidents by 78%." },
    { name: "Mohammed Al‑Zayed", company: "Gulf Manufacturing", text: "The custom ERP system improved our efficiency by 32%." }
  ];

  const insights = [
    { title: "Why Cloud‑Native Architecture Wins", date: "Jan 2026", read: "5 min read" },
    { title: "Modern Cybersecurity for Modern Threats", date: "Dec 2025", read: "6 min read" },
    { title: "Scaling IT Infrastructure in 2026", date: "Nov 2025", read: "4 min read" }
  ];

  return (
    <div className="main-layout">

      {/* NAVBAR */}
      <Navbar />

     {/* FULLSCREEN 3D HERO */}
     <div className="hero-container">
       <Hero3D />

       <div className="hero-time">
         <LiveClock />
       </div>

       <div className="hero-text-wrapper">
         <h1 className="hero-headline">
           ACCELERATING TRANSFORMATIVE CUSTOMER EXPERIENCES
         </h1>

         <p className="hero-subtext">
           Ayanshu Innovations delivers intelligent, scalable, and secure digital solutions.
         </p>
       </div>
     </div>


      {/* SERVICES */}
      <section id="services" className="section container">

        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Enterprise‑grade IT solutions engineered for performance and security.</p>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="card">
              <div style={{ fontSize: "28px", fontWeight: "700", color: "#00E0FF" }}>{s.num}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-text">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="section container">
        <h2 className="section-title">Our Technology Partners</h2>
        <p className="section-subtitle">Trusted by global leaders in cloud, security, and enterprise tech.</p>

        <div className="services-grid">
          {partners.map((p) => (
            <div key={p} className="card" style={{ textAlign: "center", fontWeight: "600" }}>
              {p}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section container">
        <h2 className="section-title">Testimonials</h2>
        <p className="section-subtitle">What our clients say about us.</p>

        <div className="services-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="card">
              <p className="service-text">"{t.text}"</p>
              <p style={{ marginTop: "12px", fontWeight: "600" }}>{t.name}</p>
              <p style={{ color: "#C9CED6" }}>{t.company}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="section container">
        <h2 className="section-title">Insights</h2>
        <p className="section-subtitle">Latest thoughts, trends, and technology insights.</p>

        <div className="services-grid">
          {insights.map((i) => (
            <div key={i.title} className="card">
              <h3 className="service-title">{i.title}</h3>
              <p className="service-text">{i.date} • {i.read}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} Ayanshu Innovations Pvt. Ltd. All rights reserved.
      </footer>
    </div>
  );
}
