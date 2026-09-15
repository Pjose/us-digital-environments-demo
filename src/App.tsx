import { useState, useEffect, useRef } from "react";
import logoImg from "@/imports/Logo-Transparent.png";
import yelpIcon from "@/imports/yelp.png";
import googleIcon from "@/imports/google.png";
import facebookIcon from "@/imports/facebook.png";
import instagramIcon from "@/imports/instagram.png";
import linkedinIcon from "@/imports/linkedin.png";

const heroSlides = [
  {
    url: "https://images.unsplash.com/photo-1724061409979-420a38c25bcc?w=1920&h=1080&fit=crop&auto=format",
    alt: "Luxury home theater with premium seating",
    label: "Home Theater Design",
  },
  {
    url: "https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?w=1920&h=1080&fit=crop&auto=format",
    alt: "Modern smart home living room",
    label: "Smart Home Automation",
  },
  {
    url: "https://images.unsplash.com/photo-1721733258410-35e699661ad6?w=1920&h=1080&fit=crop&auto=format",
    alt: "Home entertainment system",
    label: "Whole-Home Audio & Video",
  },
  {
    url: "https://images.unsplash.com/photo-1721733258420-147af875ee69?w=1920&h=1080&fit=crop&auto=format",
    alt: "Outdoor entertainment installation",
    label: "Outdoor Entertainment",
  },
];

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-1.5-3.75v3.75" />
      </svg>
    ),
    title: "Home Theater Design & Installation",
    desc: "Cinematic experiences engineered for your home — 4K laser projection, Dolby Atmos surround, and acoustically optimized rooms built from the ground up.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Smart Home Automation",
    desc: "One-touch control of lighting, shading, climate, security, and entertainment. Powered by Control4 and Savant, programmed to your lifestyle.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
    title: "Whole-Home Audio & Video",
    desc: "Multi-zone audio distribution and video matrix systems that deliver the perfect soundtrack and picture to every room, seamlessly.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Lighting Control & Design",
    desc: "Lutron and Ketra lighting systems that set the mood for every occasion — automated scenes, circadian tuning, and architectural dimming.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    title: "Network & Infrastructure",
    desc: "Enterprise-grade structured wiring, Wi-Fi 7 mesh networking, and rack systems that form the invisible backbone of every smart home.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: "Outdoor Entertainment",
    desc: "Weather-rated displays, all-environment speakers, and automated shade systems that extend your living space — and your entertainment — outdoors.",
  },
];

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1746439324737-2c9f9a3e81a6?w=800&h=600&fit=crop&auto=format",
    alt: "Luxury home theater room with comfortable seating",
    label: "Private Cinema",
    size: "large",
  },
  {
    url: "https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?w=600&h=400&fit=crop&auto=format",
    alt: "Modern smart living room",
    label: "Smart Living Room",
    size: "normal",
  },
  {
    url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format",
    alt: "Structured cabling network rack",
    label: "Network Infrastructure",
    size: "normal",
  },
  {
    url: "https://images.unsplash.com/photo-1721733258420-147af875ee69?w=800&h=500&fit=crop&auto=format",
    alt: "Outdoor entertainment area",
    label: "Outdoor Entertainment",
    size: "wide",
  },
  {
    url: "https://images.unsplash.com/photo-1650682009477-52fd77302b78?w=600&h=400&fit=crop&auto=format",
    alt: "Smart home control panel",
    label: "Control Systems",
    size: "normal",
  },
  {
    url: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=600&h=400&fit=crop&auto=format",
    alt: "Elegant living room with automated shading",
    label: "Automated Shading",
    size: "normal",
  },
];

const testimonials = [
  {
    name: "Jennifer M.",
    location: "Dallas, TX",
    stars: 5,
    text: "US Digital transformed our basement into an absolute showstopper home theater. The team was meticulous — they even helped us pick the right acoustical treatments. Worth every penny.",
  },
  {
    name: "Robert T.",
    location: "Frisco, TX",
    stars: 5,
    text: "From the initial consultation to the final walkthrough, the experience was exceptional. Our Control4 system runs flawlessly. The whole family loves it.",
  },
  {
    name: "Sandra L.",
    location: "Plano, TX",
    stars: 5,
    text: "Professional, knowledgeable, and on time. They wired our entire new construction home and the integration is seamless. Highly recommend.",
  },
];

const trustPoints = [
  "15+ Years of Excellence",
  "500+ Installations Completed",
  "A-Star Ratings Yelp & Google",
  "Certified Control4 & Savant Dealer",
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="#e8a020" className="w-4 h-4">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [zooming, setZooming] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const advance = () => {
    setPrev(current);
    setCurrent((c) => (c + 1) % heroSlides.length);
    setZooming(false);
    setTimeout(() => setZooming(true), 50);
  };

  useEffect(() => {
    timerRef.current = setTimeout(advance, 6000);
    return () => clearTimeout(timerRef.current);
  }, [current]);

  const goTo = (i: number) => {
    clearTimeout(timerRef.current);
    if (i === current) return;
    setPrev(current);
    setCurrent(i);
    setZooming(false);
    setTimeout(() => setZooming(true), 50);
    timerRef.current = setTimeout(advance, 6000);
  };

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100dvh" }}>
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <img
            src={slide.url}
            alt={slide.alt}
            className={`w-full h-full object-cover ${i === current && zooming ? "hero-zoom" : ""}`}
            style={{ transformOrigin: "center center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080e1a]/80 via-[#080e1a]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080e1a]/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center z-10 px-8 md:px-20 lg:px-28">
        <p className="text-[#fbbc05] text-sm tracking-[0.25em] uppercase mb-4" style={{ fontFamily: '"Geist:Medium"' }}>
          Dallas — Fort Worth's Premier AV & Smart Home Integrator
        </p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl text-white leading-tight max-w-3xl mb-6"
          style={{ fontFamily: '"Outfit:ExtraBold"', fontWeight: 800 }}
        >
          Immersive Home Experiences,<br />
          <span className="text-[#c01c1c]">Engineered to Perfection</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-xl mb-10" style={{ fontFamily: '"Geist:Regular"' }}>
          Custom electronics, home theater, smart automation, and whole-home audio — designed, installed, and supported by US Digital Environments.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="tel:+14694662221"
            className="px-8 py-4 bg-[#c01c1c] text-white font-semibold rounded-sm hover:bg-[#e03030] transition-colors duration-300"
            style={{ fontFamily: '"Outfit:SemiBold"' }}
          >
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
              </svg>
              <span>(469) 466-2221</span>
            </div>
          </a>
          <a
            href="#services"
            className="px-8 py-4 border border-white/30 text-white font-semibold rounded-sm hover:border-[#c01c1c] hover:text-[#c01c1c] transition-colors duration-300"
            style={{ fontFamily: '"Outfit:SemiBold"' }}
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1 rounded-full transition-all duration-500 ${i === current ? "w-8 bg-[#c01c1c]" : "w-4 bg-white/30 hover:bg-white/60"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrow */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-2">
        <button
          onClick={() => goTo((current - 1 + heroSlides.length) % heroSlides.length)}
          className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:border-[#c01c1c] hover:text-[#c01c1c] transition-colors"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" /></svg>
        </button>
        <button
          onClick={() => goTo((current + 1) % heroSlides.length)}
          className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:border-[#c01c1c] hover:text-[#c01c1c] transition-colors"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg>
        </button>
      </div>
    </section>
  );
}

function SocialProofBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d] border-b border-white/5 py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 md:gap-2 lg:gap-10 flex-wrap">
        {/* Yelp */}
        <a
          href="https://www.yelp.com/biz/us-digital-environments-dallas-4"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group"
        >
          <img src="yelp.png" alt="Yelp logo" className="w-4 h-4 flex-shrink-0" />
          <span className="text-gray-400 text-xs hidden md:block" style={{ fontFamily: '"Geist:Medium"' }}>Yelp</span>
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => (
              <svg key={i} viewBox="0 0 12 12" fill="#d32323" className="w-3 h-3">
                <path d="M6 1l1.236 2.504 2.764.402-2 1.95.472 2.751L6 7.268l-2.472 1.34.472-2.752-2-1.95 2.764-.402z"/>
              </svg>
            ))}
          </div>
          <span className="text-white text-xs font-semibold" style={{ fontFamily: '"Outfit:Bold"' }}>5.0</span>
          <span className="text-gray-500 text-xs hidden md:block" style={{ fontFamily: '"Geist:Regular"' }}>(47 reviews)</span>
        </a>

        <div className="w-px h-4 bg-white/10 hidden md:block" />

        {/* Google */}
        <a
          href="#"
          className="flex items-center gap-2 group"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className="text-gray-400 text-xs hidden md:block" style={{ fontFamily: '"Geist:Medium"' }}>Google</span>
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => (
              <svg key={i} viewBox="0 0 12 12" fill="#FBBC05" className="w-3 h-3">
                <path d="M6 1l1.236 2.504 2.764.402-2 1.95.472 2.751L6 7.268l-2.472 1.34.472-2.752-2-1.95 2.764-.402z"/>
              </svg>
            ))}
          </div>
          <span className="text-white text-xs font-semibold" style={{ fontFamily: '"Outfit:Bold"' }}>4.9</span>
          <span className="text-gray-500 text-xs hidden md:block" style={{ fontFamily: '"Geist:Regular"' }}>(83 reviews)</span>
        </a>

        <div className="w-px h-4 bg-white/10 hidden md:block" />

        <span className="text-gray-500 text-xs hidden md:block" style={{ fontFamily: '"Geist:Regular"' }}>
          🏆 &nbsp;Dallas–Fort Worth's Most Trusted AV Integrator
        </span>
      </div>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Services", "About", "Gallery", "Testimonials", "Contact"];

  return (
    <nav
      className={`fixed left-0 right-0 top-8 md:top-11 lg:top-8 z-40 transition-all duration-500 ${
        scrolled ? "bg-[#080e1a]/95 backdrop-blur-md shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={logoImg}
            alt="US Digital Environments logo"
            className="w-10 h-10 object-contain rounded-full"
          />
          <span className="text-white font-bold text-lg tracking-tight" style={{ fontFamily: '"Outfit:Bold"' }}>
            US Digital<span className="text-[#c01c1c]"> Environments</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="nav-link text-gray-300 hover:text-white text-sm transition-colors duration-200"
              style={{ fontFamily: '"Geist:Medium"' }}
            >
              {l}
            </a>
          ))}
          <a
            href="tel:4694662221"
            className="text-[#c01c1c] text-sm flex items-center gap-2"
            style={{ fontFamily: '"Geist:Medium"' }}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
            </svg>
            (469) 466-2221
          </a>
          <a
            href="#contact"
            className="px-5 py-2 bg-[#c01c1c] text-white text-sm rounded-sm hover:bg-[#e03030] transition-colors"
            style={{ fontFamily: '"Outfit:SemiBold"' }}
          >
            Free Quote
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#0d1524] border-t border-[#c01c1c]/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-gray-300 hover:text-[#c01c1c] text-sm transition-colors"
              style={{ fontFamily: '"Geist:Medium"' }}
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="text-[#c01c1c] text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: '"Geist:Medium"' }}>
      {text}
    </p>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <SectionLabel text="What We Do" />
        <h2 className="text-3xl md:text-5xl text-white mb-4" style={{ fontFamily: '"Outfit:ExtraBold"', fontWeight: 800 }}>
          Custom Electronics & Smart<br />Living Environments
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: '"Geist:Regular"' }}>
          We design, install, and support bespoke technology ecosystems for discerning Dallas–Fort Worth homeowners and commercial clients.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="service-card bg-[#111c30] border border-[#c01c1c]/10 rounded-sm p-8 transition-all duration-300 cursor-default group"
          >
            <div className="text-[#c01c1c] mb-5 group-hover:scale-110 transition-transform duration-300">
              {s.icon}
            </div>
            <h3 className="text-white text-lg mb-3" style={{ fontFamily: '"Outfit:Bold"', fontWeight: 700 }}>
              {s.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: '"Geist:Regular"' }}>
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="py-24 bg-[#0d1524]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1746439324737-2c9f9a3e81a6?w=800&h=600&fit=crop&auto=format"
            alt="Luxurious home theater installation"
            className="w-full h-96 object-cover rounded-sm"
          />
          <div className="absolute -bottom-6 -right-6 bg-[#c01c1c] text-white px-6 py-5 rounded-sm shadow-xl">
            <div className="text-3xl font-bold" style={{ fontFamily: '"Outfit:ExtraBold"' }}>15+</div>
            <div className="text-sm opacity-90" style={{ fontFamily: '"Geist:Regular"' }}>Years Serving DFW</div>
          </div>
        </div>
        <div>
          <SectionLabel text="Why Choose Us" />
          <h2 className="text-3xl md:text-4xl text-white mb-6" style={{ fontFamily: '"Outfit:ExtraBold"', fontWeight: 800 }}>
            Why Dallas Homeowners<br />Trust Us
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed" style={{ fontFamily: '"Geist:Regular"' }}>
            We don't just install equipment — we craft integrated environments where technology disappears into the experience. Every project is tailored, every system is tested, and every client is supported for the long term.
          </p>
          <div className="space-y-4">
            {trustPoints.map((point, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-[#c01c1c]/20 border border-[#c01c1c]/40 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 20 20" fill="#c01c1c" className="w-3.5 h-3.5">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-200" style={{ fontFamily: '"Geist:Medium"', fontWeight: 500 }}>{point}</span>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-block mt-10 px-7 py-3 border border-[#c01c1c] text-[#c01c1c] text-sm rounded-sm hover:bg-[#c01c1c] hover:text-white transition-all duration-300"
            style={{ fontFamily: '"Outfit:SemiBold"' }}
          >
            Schedule a Consultation →
          </a>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const [selected, setSelected] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <SectionLabel text="Our Work" />
        <h2 className="text-3xl md:text-5xl text-white mb-4" style={{ fontFamily: '"Outfit:ExtraBold"', fontWeight: 800 }}>
          Installation Gallery
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto" style={{ fontFamily: '"Geist:Regular"' }}>
          A curated look at our most distinctive projects across the Dallas–Fort Worth area.
        </p>
      </div>

      {/* Yelp-style masonry-like grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className={`gallery-item relative overflow-hidden rounded-sm cursor-pointer bg-[#111c30] ${
              i === 0 ? "md:col-span-1 md:row-span-2" : ""
            } ${i === 3 ? "col-span-2 md:col-span-2" : ""}`}
            onClick={() => setSelected(img)}
          >
            <img
              src={img.url}
              alt={img.alt}
              className={`w-full object-cover transition-transform duration-500 ${
                i === 0 ? "h-72 md:h-full" : i === 3 ? "h-52" : "h-48 md:h-52"
              }`}
            />
            <div className="gallery-overlay absolute inset-0 bg-[#080e1a]/70 opacity-0 transition-opacity duration-300 flex flex-col justify-end p-5">
              <span className="text-[#c01c1c] text-xs tracking-widest uppercase mb-1" style={{ fontFamily: '"Geist:Medium"' }}>
                View Project
              </span>
              <span className="text-white text-sm font-semibold" style={{ fontFamily: '"Outfit:Bold"' }}>
                {img.label}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <span className="text-white text-sm" style={{ fontFamily: '"Outfit:SemiBold"' }}>{img.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-[#c01c1c] transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div onClick={(e) => e.stopPropagation()} className="max-w-4xl w-full">
            <img src={selected.url.replace("w=600", "w=1200").replace("h=400", "h=800")} alt={selected.alt} className="w-full max-h-[80vh] object-contain rounded-sm" />
            <p className="text-white text-center mt-4 text-lg" style={{ fontFamily: '"Outfit:Bold"' }}>{selected.label}</p>
          </div>
        </div>
      )}
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-[#0d1524] px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <SectionLabel text="Client Reviews" />
            <h2 className="text-3xl md:text-5xl text-white" style={{ fontFamily: '"Outfit:ExtraBold"', fontWeight: 800 }}>
              What Our Clients Say
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <div className="text-4xl font-bold text-white" style={{ fontFamily: '"Outfit:ExtraBold"' }}>5.0</div>
              <StarRating count={5} />
              <p className="text-gray-500 text-xs mt-1" style={{ fontFamily: '"Geist:Regular"' }}>Based on Yelp reviews</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#111c30] border border-[#c01c1c]/10 rounded-sm p-8 flex flex-col gap-5">
              <StarRating count={t.stars} />
              <p className="text-gray-300 text-sm leading-relaxed flex-1" style={{ fontFamily: '"Geist:Regular"' }}>
                "{t.text}"
              </p>
              <div>
                <p className="text-white font-semibold text-sm" style={{ fontFamily: '"Outfit:SemiBold"' }}>{t.name}</p>
                <p className="text-gray-500 text-xs" style={{ fontFamily: '"Geist:Regular"' }}>{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const brands = ["Control4", "Savant", "Lutron", "Sonos", "Samsung", "LG", "Crestron", "Cisco Meraki"];

function BrandBar() {
  return (
    <div className="bg-[#080e1a] border-y border-[#c01c1c]/10 py-6 overflow-hidden">
      <div className="flex gap-12 items-center justify-center flex-wrap px-8">
        {brands.map((b, i) => (
          <span key={i} className="text-gray-500 text-sm tracking-widest uppercase hover:text-gray-300 transition-colors cursor-default" style={{ fontFamily: '"Geist:Medium"' }}>
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <SectionLabel text="Get Started" />
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: '"Outfit:ExtraBold"', fontWeight: 800 }}>
            Ready to Transform<br />Your Home?
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed" style={{ fontFamily: '"Geist:Regular"' }}>
            Schedule your complimentary design consultation. We'll assess your space, discuss your vision, and craft a technology solution that exceeds expectations.
          </p>
          <div className="space-y-5">
            {[
              { icon: "📍", label: "Address", val: "Dallas – Fort Worth Metroplex, TX" },
              { icon: "📞", label: "Phone", val: "(469) 466-2221" },
              { icon: "✉️", label: "Email", val: "info@usdigitalenvironments.com" },
              { icon: "🕐", label: "Hours", val: "Mon–Fri 8am–6pm, Sat by appointment" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#111c30] border border-[#c01c1c]/20 rounded-sm flex items-center justify-center text-base flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest" style={{ fontFamily: '"Geist:Medium"' }}>{item.label}</p>
                  <p className="text-gray-200 text-sm mt-0.5" style={{ fontFamily: '"Geist:Regular"' }}>{item.val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0d1524] border border-[#c01c1c]/10 rounded-sm p-8">
          <h3 className="text-white text-xl mb-6" style={{ fontFamily: '"Outfit:Bold"', fontWeight: 700 }}>
            Request Your Free Consultation
          </h3>
          {sent ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[#c01c1c]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="#c01c1c" className="w-8 h-8">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-white text-lg mb-2" style={{ fontFamily: '"Outfit:Bold"' }}>Message Sent!</p>
              <p className="text-gray-400 text-sm" style={{ fontFamily: '"Geist:Regular"' }}>We'll reach out within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: "name", label: "Full Name", type: "text", placeholder: "John Smith" },
                { name: "phone", label: "Phone Number", type: "tel", placeholder: "(214) 555-0100" },
                { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-gray-400 text-xs uppercase tracking-widest mb-1.5" style={{ fontFamily: '"Geist:Medium"' }}>{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={(form as any)[f.name]}
                    onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                    className="w-full bg-[#080e1a] border border-[#c01c1c]/15 text-white text-sm rounded-sm px-4 py-3 focus:outline-none focus:border-[#c01c1c]/60 placeholder-gray-600 transition-colors"
                    style={{ fontFamily: '"Geist:Regular"' }}
                  />
                </div>
              ))}
              <div>
                <label className="block text-gray-400 text-xs uppercase tracking-widest mb-1.5" style={{ fontFamily: '"Geist:Medium"' }}>Service of Interest</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-[#080e1a] border border-[#c01c1c]/15 text-white text-sm rounded-sm px-4 py-3 focus:outline-none focus:border-[#c01c1c]/60 transition-colors"
                  style={{ fontFamily: '"Geist:Regular"' }}
                >
                  <option value="" className="bg-[#080e1a]">Select a service…</option>
                  {services.map((s) => <option key={s.title} value={s.title} className="bg-[#080e1a]">{s.title}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-gray-400 text-xs uppercase tracking-widest mb-1.5" style={{ fontFamily: '"Geist:Medium"' }}>Project Details</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#080e1a] border border-[#c01c1c]/15 text-white text-sm rounded-sm px-4 py-3 focus:outline-none focus:border-[#c01c1c]/60 placeholder-gray-600 transition-colors resize-none"
                  style={{ fontFamily: '"Geist:Regular"' }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#c01c1c] text-white font-semibold rounded-sm hover:bg-[#e03030] transition-colors duration-300 mt-2"
                style={{ fontFamily: '"Outfit:SemiBold"' }}
              >
                Send My Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const footerLinks = {
    Services: [
      {label: "Home Theater", url: "#"}, 
      {label: "Smart Automation", url: "#"}, 
      {label: "Audio & Video", url: "#"}, 
      {label: "Lighting Control", url: "#"}, 
      {label: "Networking", url: "#"}, 
      {label: "Outdoor AV", url: "#"}
    ],
    Company: [
      {label: "About Us", url: "#"}, 
      {label: "Our Team", url: "#"}, 
      {label: "Portfolio", url: "#"}, 
      {label: "Blog", url: "#"}, 
      {label: "Careers", url: "#"}, 
      {label: "Contact", url: "#"}
    ],
    Connect: [
      {label: "Yelp", url: "https://www.yelp.com/biz/us-digital-environments-dallas-4"}, 
      {label: "Google", url: "https://www.google.com/business/us-digital-environments"},
      {label: "Facebook", url: "https://www.facebook.com/us-digital-environments"},
      {label: "Instagram", url: "https://www.instagram.com/us-digital-environments"},
      {label: "LinkedIn", url: "https://www.linkedin.com/company/us-digital-environments"}
    ]
  };

  const socialLinks = [
    { icon: yelpIcon, alt: "Yelp", url: "https://www.yelp.com/biz/us-digital-environments-dallas-4" },
    { icon: googleIcon, alt: "Google", url: "#" },
    { icon: facebookIcon, alt: "Facebook", url: "#" },
    { icon: instagramIcon, alt: "Instagram", url: "#" },
    { icon: linkedinIcon, alt: "LinkedIn", url: "#" },
  ];

  return (
    <footer className="bg-[#0d1524] border-t border-[#c01c1c]/10 pt-16 pb-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="US Digital Environments" className="w-10 h-10 object-contain rounded-full" />
              <span className="text-white font-bold text-base" style={{ fontFamily: '"Outfit:Bold"' }}>
                US Digital<span className="text-[#c01c1c]"> Environments</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5" style={{ fontFamily: '"Geist:Regular"' }}>
              Dallas–Fort Worth's premier custom electronics and smart home integration company.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-200"
                  aria-label={link.alt}
                >
                  <img src={link.icon} alt={link.alt} className="w-7 h-7 object-contain" />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-widest" style={{ fontFamily: '"Geist:Medium"' }}>{section}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="text-gray-500 text-sm hover:text-[#c01c1c] transition-colors" style={{ fontFamily: '"Geist:Regular"' }} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[#c01c1c]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs" style={{ fontFamily: '"Geist:Regular"' }}>
            © 2026 US Digital Environments. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs" style={{ fontFamily: '"Geist:Regular"' }}>
            Serving Dallas, Frisco, Plano, Allen, McKinney & surrounding DFW communities.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#080e1a]">
      <SocialProofBanner />
      <Navbar />
      <HeroSlider />
      <ServicesSection />
      <TrustSection />
      <GallerySection />
      <TestimonialsSection />
      <BrandBar />
      <ContactSection />
      <Footer />
    </div>
  );
}
