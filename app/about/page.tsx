import React from "react";
import * as Lucide from "lucide-react";

const renderIcon = (name: string) => {
  const IconComponent = (Lucide as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  if (!IconComponent) return <Lucide.CheckCircle className="h-6 w-6 text-sky-500" />;
  return <IconComponent className="h-6 w-6 text-sky-500" />;
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Innovation",
      desc: "Constantly researching and embedding modern AI and IoT telemetry protocols to stay ahead of market dynamics.",
      icon: "Cpu",
    },
    {
      title: "Integrity",
      desc: "Delivering honest security metrics, solid physical hardware guarantees, and strictly secure data vaults.",
      icon: "ShieldCheck",
    },
    {
      title: "Customer Focus",
      desc: "Studying our client workflows deeply to configure custom interfaces, reports, and dedicated field support.",
      icon: "UserHeart",
    },
    {
      title: "Excellence",
      desc: "Ensuring 99%+ telemetry server SLAs, robust hardware waterproof ratings, and AIS-140 CDAC compliance.",
      icon: "Award",
    },
  ];

  const teamMembers = [
    {
      name: "Vikas Bhardwaj",
      role: "CEO & Founder",
      bio: "Over 15 years leading telemetry development. Strategizes high-level corporate architectures and smart city integrations.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300",
    },
    {
      name: "Rahul Sharma",
      role: "Technical Head",
      bio: "Pioneering systems architect with deep knowledge in embedded C++, 4G transceivers, and smart CAN-bus readers.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300",
    },
    {
      name: "Pooja Verma",
      role: "Operations Head",
      bio: "Manages global supply chain channels, regulatory compliance verification, and on-site deployment networks.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
    },
    {
      name: "Amit Singh",
      role: "Sales Head",
      bio: "Builds bridges with state transit undertakings and multinational logistics groups. Expert in telematic consultancies.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300",
    },
  ];

  const achievements = [
    { count: "10K+", label: "Active Tracking Nodes" },
    { count: "15+", label: "National Compliance Certs" },
    { count: "99.9%", label: "Real-time Telemetry Uptime" },
    { count: "50M+", label: "Kilometers Monitored" },
  ];

  const partners = [
    { name: "Queclink", desc: "Leading global supplier of IoT wireless routers and hardware." },
    { name: "Teltonika", desc: "Premium high-grade EU telematic hardware manufacturers." },
    { name: "Ruptela", desc: "Advanced GPS trackers and integrated FM software solutions." },
    { name: "Honeywell", desc: "Industrial sensor calibration and technical supply." },
    { name: "Meitrack", desc: "Specialized vehicle tracking and personal tracker arrays." },
  ];

  return (
    <div className="relative">
      <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
            alt="Corporate Tech Center"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-sky-400">About Us</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Pioneering Telemetry & IoT Innovation
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-light">
            Dedicated to engineering high-precision hardware, responsive tracking software, and compliant fleet security configurations for global operations.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-sky-600">Our Story</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Building a Reliable Gateway for Connected Operations
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed font-light">
              <p>
                Founded on the pillars of technical precision and rigorous quality engineering, Bhardwaj Innovations began with a mission: to solve complex, high-stakes asset security challenges using telemetry. Starting with standard vehicle locators, we have expanded our capacity to become multi-field IoT specialists.
              </p>
              <p>
                Today, our solutions monitor thousands of public, corporate, and private cargo vehicles daily. From developing smart Battery Management Systems (BMS) for fast-growing EV modules, to manufacturing government-mandated AIS-140 compliant tracking transceivers, we create real-world impact.
              </p>
              <p>
                Our core operations span custom software development, circuit board micro-engineering, high-pressure adhesive materials distribution, and on-site telemetry deployments. We don&apos;t just supply widgets — we construct enterprise infrastructure.
              </p>
            </div>
          </div>

          <div className="relative h-120 w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
              alt="Bhardwaj Innovations executive collaboration"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm text-left space-y-4 hover:shadow-md transition-shadow">
            <div className="p-3 bg-sky-50 text-sky-600 h-12 w-12 rounded-xl flex items-center justify-center">
              <Lucide.Target className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              To design, develop, and deliver high-precision telemetry hardware and secure, real-time software platforms that empower corporations, transit undertakings, and families with absolute operational transparency, asset protection, and compliance confidence.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm text-left space-y-4 hover:shadow-md transition-shadow">
            <div className="p-3 bg-sky-50 text-sky-600 h-12 w-12 rounded-xl flex items-center justify-center">
              <Lucide.Eye className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              To be the most trusted global standard in IoT telematics and intelligent vehicle monitoring, recognized for engineering solid hardware systems that make transportation and industrial assets safer, greener, and thoroughly optimized.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest uppercase text-sky-600">The Blueprint</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Our Core Values</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Every tracking unit we install, every algorithm we deploy, and every customer relationship we nurture is driven by these fundamental corporate principles.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 hover:border-sky-200 rounded-2xl p-6 text-left space-y-4 hover:shadow-lg transition-all duration-300">
                <div className="p-3 bg-white text-sky-600 h-12 w-12 rounded-xl flex items-center justify-center shadow-sm">
                  {renderIcon(val.icon)}
                </div>
                <h4 className="text-lg font-bold text-slate-900">{val.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {achievements.map((ach, i) => (
            <div key={i} className="space-y-1">
              <span className="text-4xl lg:text-5xl font-black font-sans tracking-tight block">
                {ach.count}
              </span>
              <span className="text-xs lg:text-sm font-semibold tracking-wider text-sky-100 uppercase block">
                {ach.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest uppercase text-sky-600">Leadership Team</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Our Executive Board</h2>
            <p className="text-slate-600 text-sm md:text-base">
              The engineers, designers, and consultants steering Bhardwaj Innovations toward excellence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {teamMembers.map((member, i) => (
              <div key={i} className="group bg-slate-50 border border-slate-100 hover:border-sky-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="h-64 w-full overflow-hidden bg-slate-200 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-base font-bold text-slate-900">{member.name}</h4>
                  <span className="text-xs font-semibold text-sky-600 tracking-wider uppercase block">
                    {member.role}
                  </span>
                  <p className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-slate-100">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-sky-600">OEM & Technology Partners</span>
            <h2 className="text-2xl font-bold text-slate-900">Our Trusted Integrations</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {partners.map((partner, i) => (
              <div key={i} className="bg-white border border-slate-100 p-6 rounded-xl shadow-sm text-center flex flex-col justify-center items-center space-y-2 hover:shadow-md transition-shadow">
                <span className="text-lg font-black text-slate-800 tracking-tight font-sans">
                  {partner.name}
                </span>
                <span className="text-[10px] text-slate-400 font-medium leading-relaxed uppercase">
                  {partner.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
