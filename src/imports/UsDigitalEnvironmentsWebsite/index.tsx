import svgPaths from "./svg-9b8p7n3tpt";
import imgHero from "./b8d74af7cb6d2a70014216348c9b0f86589c380f.png";
import imgRectangle from "./36309b1653d44bec71589c87bf184fb959da51a9.png";
import imgRectangle1 from "./85c7c438cd67bb3fd24206e9417da29c9437c388.png";
import imgRectangle2 from "./06111b3cc7edf18c2e9714f6e39107096310e242.png";
import imgRectangle3 from "./0d67c935242e42d51138b9e95f00d608d9afb917.png";
import imgRectangle4 from "./8761356f7b55ca84cfc34b5c8782742b654f9224.png";
import imgRectangle5 from "./f01a2abc721351842b66a88b36a3ce56a1f71df7.png";
import imgContact from "./136534b2ea1dcc382e2d79b06ec04bb743a04820.png";

function WifiCog() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="wifi-cog">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="wifi-cog">
          <path d={svgPaths.p36ebba00} id="Vector" stroke="#00A3FF" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Outfit:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[16px] text-white tracking-[2px]">US DIGITAL</p>
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#00a3ff] text-[11px] tracking-[4px]">ENVIRONMENTS</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <WifiCog />
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Geist:Medium',sans-serif] font-medium gap-[32px] items-center leading-[normal] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#00a3ff]">Home</p>
      <p className="relative shrink-0 text-[#a3aab8]">Services</p>
      <p className="relative shrink-0 text-[#a3aab8]">Gallery</p>
      <p className="relative shrink-0 text-[#a3aab8]">About</p>
      <p className="relative shrink-0 text-[#a3aab8]">Reviews</p>
      <p className="relative shrink-0 text-[#a3aab8]">Contact</p>
    </div>
  );
}

function Phone() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="phone">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_30)" id="phone">
          <path d={svgPaths.p29098400} id="Vector" stroke="#00A3FF" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_30">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <Phone />
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">(469) 974-0697</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#00a3ff] content-stretch flex items-center justify-center px-[24px] py-[14px] relative rounded-[8px] shrink-0" data-name="button">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white tracking-[1px] uppercase whitespace-nowrap">Get a Free Quote</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Frame">
      <Frame4 />
      <Button />
    </div>
  );
}

function Navigation() {
  return (
    <div className="bg-[#0a0b0e] content-stretch flex h-[88px] items-center justify-between px-[80px] relative shrink-0 w-[1440px]" data-name="navigation">
      <div aria-hidden className="absolute border-[#242836] border-b border-solid inset-0 pointer-events-none" />
      <Frame />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-left">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="chevron-left">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.13)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <ChevronLeft />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.13)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <ChevronRight />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex h-[640px] items-center justify-between left-0 p-[32px] top-0 w-[1440px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(0,163,255,0.2)] border-solid inset-0 pointer-events-none" />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-[#00a3ff] h-[2px] relative shrink-0 w-[40px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#ff9d00] text-[12px] tracking-[3px] uppercase whitespace-nowrap">{`PREMIUM SMART HOME & THEATER SHOWROOM`}</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame10 />
      <p className="[word-break:break-word] font-['Outfit:ExtraBold',sans-serif] font-extrabold leading-[1.1] min-w-full relative shrink-0 text-[54px] text-white tracking-[-1.5px] w-[min-content]">Immersive Home Experiences, Engineered to Perfection</p>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#a3aab8] text-[18px] w-[min-content]">{`Dallas' Premier Smart Home & Home Theater Specialists — Custom Design, Expert Installation, Lifetime Support.`}</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#00a3ff] content-stretch flex items-center justify-center px-[24px] py-[14px] relative rounded-[8px] shrink-0" data-name="button">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white tracking-[1px] uppercase whitespace-nowrap">Explore Our Work</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-center px-[24px] py-[14px] relative rounded-[8px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-[#00a3ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#00a3ff] text-[14px] tracking-[1px] uppercase whitespace-nowrap">Schedule a Consultation</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Frame">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[32px] items-start left-[80px] top-1/2 w-[760px]" data-name="Frame">
      <Frame9 />
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[32px] content-stretch flex gap-[8px] items-center left-1/2" data-name="Frame">
      <div className="bg-[#00a3ff] h-[4px] relative rounded-[2px] shrink-0 w-[24px]" data-name="Rectangle" />
      <div className="bg-[rgba(255,255,255,0.2)] h-[4px] relative rounded-[2px] shrink-0 w-[8px]" data-name="Rectangle" />
      <div className="bg-[rgba(255,255,255,0.2)] h-[4px] relative rounded-[2px] shrink-0 w-[8px]" data-name="Rectangle" />
      <div className="bg-[rgba(255,255,255,0.2)] h-[4px] relative rounded-[2px] shrink-0 w-[8px]" data-name="Rectangle" />
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col h-[640px] items-start justify-between overflow-clip px-[80px] py-[64px] relative shrink-0 w-[1440px]" data-name="hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-[rgba(10,11,14,0.4)] inset-0" />
      </div>
      <Frame5 />
      <Frame8 />
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#00a3ff] text-[12px] tracking-[3px] uppercase w-full">Our Services</p>
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[40px] text-white tracking-[-1px] w-full">{`Custom Electronics & Smart Living Environments`}</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#a3aab8] text-[16px] w-full">We design, engineer, and support tailor-made residential technology systems for the most discerning Dallas clients.</p>
    </div>
  );
}

function TvMinimal() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tv-minimal">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="tv-minimal">
          <path d={svgPaths.p2677b600} id="Vector" stroke="#00A3FF" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="bg-[rgba(0,163,255,0.07)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="icon-container">
      <TvMinimal />
    </div>
  );
}

function Frame15() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-white w-full">{`Home Theater Design & Installation`}</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#a3aab8] text-[14px] w-full">From dedicated theaters to media rooms, we create cinematic experiences tailored to your space.</p>
    </div>
  );
}

function ServiceCard() {
  return (
    <div className="bg-[#191c26] col-1 content-stretch flex flex-col gap-[20px] items-start justify-self-stretch p-[32px] relative rounded-[12px] row-1 self-stretch shrink-0" data-name="service-card">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconContainer />
      <Frame15 />
    </div>
  );
}

function WifiCog1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="wifi-cog">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="wifi-cog">
          <path d={svgPaths.p36ebba00} id="Vector" stroke="#00A3FF" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="bg-[rgba(0,163,255,0.07)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="icon-container">
      <WifiCog1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-white w-full">Smart Home Automation</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#a3aab8] text-[14px] w-full">Control lighting, climate, security, and entertainment from a single intuitive interface.</p>
    </div>
  );
}

function ServiceCard1() {
  return (
    <div className="bg-[#191c26] col-2 content-stretch flex flex-col gap-[20px] items-start justify-self-stretch p-[32px] relative rounded-[12px] row-1 self-stretch shrink-0" data-name="service-card">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconContainer1 />
      <Frame16 />
    </div>
  );
}

function AudioWaveform() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="audio-waveform">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="audio-waveform">
          <path d={svgPaths.p1650e100} id="Vector" stroke="#00A3FF" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="bg-[rgba(0,163,255,0.07)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="icon-container">
      <AudioWaveform />
    </div>
  );
}

function Frame17() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-white w-full">{`Whole-Home Audio & Video`}</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#a3aab8] text-[14px] w-full">Distributed audio and video systems that deliver premium sound in every room.</p>
    </div>
  );
}

function ServiceCard2() {
  return (
    <div className="bg-[#191c26] col-3 content-stretch flex flex-col gap-[20px] items-start justify-self-stretch p-[32px] relative rounded-[12px] row-1 self-stretch shrink-0" data-name="service-card">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconContainer2 />
      <Frame17 />
    </div>
  );
}

function LightbulbOff() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lightbulb-off">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="lightbulb-off">
          <path d={svgPaths.p3738b7c0} id="Vector" stroke="#00A3FF" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="bg-[rgba(0,163,255,0.07)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="icon-container">
      <LightbulbOff />
    </div>
  );
}

function Frame18() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-white w-full">{`Lighting Control & Design`}</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#a3aab8] text-[14px] w-full">Programmable lighting scenes that set the perfect mood for any occasion.</p>
    </div>
  );
}

function ServiceCard3() {
  return (
    <div className="bg-[#191c26] col-1 content-stretch flex flex-col gap-[20px] items-start justify-self-stretch p-[32px] relative rounded-[12px] row-2 self-stretch shrink-0" data-name="service-card">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconContainer3 />
      <Frame18 />
    </div>
  );
}

function Database() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="database">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="database">
          <path d={svgPaths.p37d79c40} id="Vector" stroke="#00A3FF" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer4() {
  return (
    <div className="bg-[rgba(0,163,255,0.07)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="icon-container">
      <Database />
    </div>
  );
}

function Frame19() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-white w-full">Network Infrastructure</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#a3aab8] text-[14px] w-full">Enterprise-grade networking solutions for seamless connectivity throughout your home.</p>
    </div>
  );
}

function ServiceCard4() {
  return (
    <div className="bg-[#191c26] col-2 content-stretch flex flex-col gap-[20px] items-start justify-self-stretch p-[32px] relative rounded-[12px] row-2 self-stretch shrink-0" data-name="service-card">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconContainer4 />
      <Frame19 />
    </div>
  );
}

function Tv() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tv">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="tv">
          <path d={svgPaths.p334ee200} id="Vector" stroke="#00A3FF" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer5() {
  return (
    <div className="bg-[rgba(0,163,255,0.07)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="icon-container">
      <Tv />
    </div>
  );
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-white w-full">Outdoor Entertainment</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#a3aab8] text-[14px] w-full">Weather-resistant AV systems for patios, pools, and outdoor living spaces.</p>
    </div>
  );
}

function ServiceCard5() {
  return (
    <div className="bg-[#191c26] col-3 content-stretch flex flex-col gap-[20px] items-start justify-self-stretch p-[32px] relative rounded-[12px] row-2 self-stretch shrink-0" data-name="service-card">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconContainer5 />
      <Frame20 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] relative shrink-0 w-full" data-name="Frame">
      <ServiceCard />
      <ServiceCard1 />
      <ServiceCard2 />
      <ServiceCard3 />
      <ServiceCard4 />
      <ServiceCard5 />
    </div>
  );
}

function Services() {
  return (
    <div className="bg-[#0a0b0e] content-stretch flex flex-col gap-[56px] items-start px-[80px] py-[120px] relative shrink-0 w-[1440px]" data-name="services">
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#00a3ff] text-[12px] tracking-[3px] uppercase w-full">Why Choose Us</p>
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[40px] text-white tracking-[-1px] w-full">Why Dallas Homeowners Trust Us</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#a3aab8] text-[16px] w-full">Our engineering-first approach ensures your home technology operates flawlessly and integrates beautifully into your lifestyle.</p>
    </div>
  );
}

function BadgeCheck() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="badge-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_22)" id="badge-check">
          <path d={svgPaths.p14bb5280} id="Vector" stroke="#00A3FF" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_22">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[rgba(0,163,255,0.07)] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <BadgeCheck />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <Frame25 />
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-white whitespace-nowrap">15+ Years of Excellence</p>
    </div>
  );
}

function CheckCircle() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_20)" id="check-circle">
          <path d={svgPaths.p2ce74680} id="Vector" stroke="#00A3FF" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_20">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[rgba(0,163,255,0.07)] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <CheckCircle />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <Frame27 />
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-white whitespace-nowrap">500+ Installations Completed</p>
    </div>
  );
}

function ThumbsUp() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="thumbs-up">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_16)" id="thumbs-up">
          <path d={svgPaths.p168efb00} id="Vector" stroke="#00A3FF" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_16">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[rgba(0,163,255,0.07)] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <ThumbsUp />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <Frame29 />
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-white whitespace-nowrap">{`5-Star Rated on Yelp & Google`}</p>
    </div>
  );
}

function Award() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="award">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="award">
          <path d={svgPaths.p34beed00} id="Vector" stroke="#00A3FF" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[rgba(0,163,255,0.07)] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <Award />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <Frame31 />
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-white whitespace-nowrap">{`Certified Control4 & Savant Dealer`}</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame24 />
      <Frame26 />
      <Frame28 />
      <Frame30 />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="arrow-right">
          <path d={svgPaths.p3bfa7a00} id="Vector" stroke="#00A3FF" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#00a3ff] text-[14px] tracking-[1px] uppercase whitespace-nowrap">Learn More About Our Team</p>
      <ArrowRight />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[624px]" data-name="Frame">
      <Frame22 />
      <Frame23 />
      <Frame32 />
    </div>
  );
}

function WhyChooseUs() {
  return (
    <div className="bg-[#12141c] content-stretch flex gap-[32px] items-center px-[80px] py-[120px] relative shrink-0 w-[1440px]" data-name="why-choose-us">
      <div className="h-[500px] relative rounded-[16px] shrink-0 w-[624px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgRectangle} />
      </div>
      <Frame21 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#00a3ff] text-[12px] tracking-[3px] uppercase w-full">Our Portfolio</p>
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[40px] text-white tracking-[-1px] w-full">Our Work</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#a3aab8] text-[16px] w-full">Browse our catalog of custom high-end smart installations around Highland Park, Frisco, and the wider DFW area.</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[24px] h-[320px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="h-full relative rounded-[12px] shrink-0 w-[733px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle1} />
      </div>
      <div className="h-full relative rounded-[12px] shrink-0 w-[515px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle2} />
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[24px] h-[400px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="h-full relative rounded-[12px] shrink-0 w-[405px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle3} />
      </div>
      <div className="h-full relative rounded-[12px] shrink-0 w-[405px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle4} />
      </div>
      <div className="h-full relative rounded-[12px] shrink-0 w-[405px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle5} />
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] content-stretch flex items-center justify-center px-[24px] py-[14px] relative rounded-[8px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.14)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white tracking-[1px] uppercase whitespace-nowrap">View Full Gallery</p>
    </div>
  );
}

function Gallery() {
  return (
    <div className="bg-[#0a0b0e] content-stretch flex flex-col gap-[56px] items-center px-[80px] py-[120px] relative shrink-0 w-[1440px]" data-name="gallery">
      <Frame33 />
      <Frame34 />
      <Button3 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Outfit:Bold',sans-serif] font-bold gap-[12px] items-start leading-[normal] min-w-px relative" data-name="Frame">
      <p className="relative shrink-0 text-[#00a3ff] text-[12px] tracking-[3px] uppercase w-full">Reviews</p>
      <p className="relative shrink-0 text-[40px] text-white tracking-[-1px] w-full">What Our Clients Say</p>
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_36)" id="star">
          <path d={svgPaths.p397b9d00} id="Vector" stroke="#FFC700" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_36">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_36)" id="star">
          <path d={svgPaths.p397b9d00} id="Vector" stroke="#FFC700" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_36">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_36)" id="star">
          <path d={svgPaths.p397b9d00} id="Vector" stroke="#FFC700" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_36">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_36)" id="star">
          <path d={svgPaths.p397b9d00} id="Vector" stroke="#FFC700" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_36">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_36)" id="star">
          <path d={svgPaths.p397b9d00} id="Vector" stroke="#FFC700" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_36">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Frame">
      <Star />
      <Star1 />
      <Star2 />
      <Star3 />
      <Star4 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <Frame41 />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] text-white whitespace-nowrap">5.0</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Frame">
      <Frame40 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a3aab8] text-[14px] whitespace-nowrap">{`50+ Yelp & Google Reviews`}</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame38 />
      <Frame39 />
    </div>
  );
}

function Star5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_36)" id="star">
          <path d={svgPaths.p397b9d00} id="Vector" stroke="#FFC700" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_36">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_36)" id="star">
          <path d={svgPaths.p397b9d00} id="Vector" stroke="#FFC700" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_36">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_36)" id="star">
          <path d={svgPaths.p397b9d00} id="Vector" stroke="#FFC700" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_36">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_36)" id="star">
          <path d={svgPaths.p397b9d00} id="Vector" stroke="#FFC700" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_36">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_36)" id="star">
          <path d={svgPaths.p397b9d00} id="Vector" stroke="#FFC700" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_36">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Frame">
      <Star5 />
      <Star6 />
      <Star7 />
      <Star8 />
      <Star9 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 text-[15px] text-white w-full">Michael R.</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#00a3ff] text-[13px] w-full">Highland Park</p>
    </div>
  );
}

function ReviewCard() {
  return (
    <div className="bg-[#191c26] content-stretch flex flex-[1_0_66px] flex-col gap-[24px] items-start min-w-px p-[32px] relative rounded-[12px] self-stretch" data-name="review-card">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame43 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[15px] text-white w-[min-content]">{`"US Digital Environments transformed our bonus room into an incredible home theater. The attention to detail and sound quality is unbelievable."`}</p>
      <Frame44 />
    </div>
  );
}

function Star10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_36)" id="star">
          <path d={svgPaths.p397b9d00} id="Vector" stroke="#FFC700" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_36">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_36)" id="star">
          <path d={svgPaths.p397b9d00} id="Vector" stroke="#FFC700" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_36">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_36)" id="star">
          <path d={svgPaths.p397b9d00} id="Vector" stroke="#FFC700" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_36">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_36)" id="star">
          <path d={svgPaths.p397b9d00} id="Vector" stroke="#FFC700" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_36">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_36)" id="star">
          <path d={svgPaths.p397b9d00} id="Vector" stroke="#FFC700" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_36">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Frame">
      <Star10 />
      <Star11 />
      <Star12 />
      <Star13 />
      <Star14 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 text-[15px] text-white w-full">Sarah T.</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#00a3ff] text-[13px] w-full">Frisco</p>
    </div>
  );
}

function ReviewCard1() {
  return (
    <div className="bg-[#191c26] content-stretch flex flex-[1_0_66px] flex-col gap-[24px] items-start min-w-px p-[32px] relative rounded-[12px] self-stretch" data-name="review-card">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame45 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[15px] text-white w-[min-content]">{`"From design to installation, the team was professional, knowledgeable, and a pleasure to work with. Our smart home system works flawlessly."`}</p>
      <Frame46 />
    </div>
  );
}

function Star15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_36)" id="star">
          <path d={svgPaths.p397b9d00} id="Vector" stroke="#FFC700" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_36">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_36)" id="star">
          <path d={svgPaths.p397b9d00} id="Vector" stroke="#FFC700" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_36">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_36)" id="star">
          <path d={svgPaths.p397b9d00} id="Vector" stroke="#FFC700" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_36">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_36)" id="star">
          <path d={svgPaths.p397b9d00} id="Vector" stroke="#FFC700" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_36">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_36)" id="star">
          <path d={svgPaths.p397b9d00} id="Vector" stroke="#FFC700" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_36">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Frame">
      <Star15 />
      <Star16 />
      <Star17 />
      <Star18 />
      <Star19 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 text-[15px] text-white w-full">{`David & Lisa K.`}</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#00a3ff] text-[13px] w-full">Plano</p>
    </div>
  );
}

function ReviewCard2() {
  return (
    <div className="bg-[#191c26] content-stretch flex flex-[1_0_66px] flex-col gap-[24px] items-start min-w-px p-[32px] relative rounded-[12px] self-stretch" data-name="review-card">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame47 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[15px] text-white w-[min-content]">{`"Best investment we've made in our home. The outdoor entertainment system is perfect for hosting. Highly recommend!"`}</p>
      <Frame48 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <ReviewCard />
      <ReviewCard1 />
      <ReviewCard2 />
    </div>
  );
}

function Testimonials() {
  return (
    <div className="bg-[#12141c] content-stretch flex flex-col gap-[56px] items-start px-[80px] py-[120px] relative shrink-0 w-[1440px]" data-name="testimonials">
      <Frame37 />
      <Frame42 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Outfit:Bold',sans-serif] font-bold items-center justify-between leading-[normal] relative shrink-0 text-[#6b7280] text-[18px] tracking-[1px] w-full whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0">Control4</p>
      <p className="relative shrink-0">Savant</p>
      <p className="relative shrink-0">Sonos</p>
      <p className="relative shrink-0">Sony</p>
      <p className="relative shrink-0">Samsung</p>
      <p className="relative shrink-0">JBL Synthesis</p>
      <p className="relative shrink-0">Lutron</p>
      <p className="relative shrink-0">Cisco Meraki</p>
    </div>
  );
}

function Brands() {
  return (
    <div className="bg-[#0a0b0e] content-stretch flex flex-col gap-[32px] items-start px-[80px] py-[64px] relative shrink-0 w-[1440px]" data-name="brands">
      <div aria-hidden className="absolute border-[#242836] border-b border-solid border-t inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#6b7280] text-[12px] text-center tracking-[2px] uppercase w-full">Trusted Technology Partners</p>
      <Frame49 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#00a3ff] text-[12px] tracking-[3px] uppercase w-full">Get In Touch</p>
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[40px] text-white tracking-[-1px] w-full">Ready to Transform Your Home?</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#a3aab8] text-[16px] w-full">Schedule a free in-home consultation with our design team. We serve the entire DFW Metroplex.</p>
    </div>
  );
}

function MapPin() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="map-pin">
          <path d={svgPaths.p3d476500} id="Vector" stroke="#00A3FF" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame54() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 text-[16px] text-white">Office Address</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#a3aab8] text-[14px]">Dallas, TX (Serving DFW Metroplex)</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <MapPin />
      <Frame54 />
    </div>
  );
}

function Phone1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="phone">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="phone">
          <path d={svgPaths.p28682900} id="Vector" stroke="#00A3FF" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame56() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 text-[16px] text-white">Phone Number</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#a3aab8] text-[14px]">(469) 974-0697</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <Phone1 />
      <Frame56 />
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mail">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="mail">
          <path d={svgPaths.p3d4f9680} id="Vector" stroke="#00A3FF" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame58() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 text-[16px] text-white">Email</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#a3aab8] text-[14px]">info@usdigitalenvironments.com</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <Mail />
      <Frame58 />
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="clock">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="clock">
          <path d={svgPaths.p3e766ff0} id="Vector" stroke="#00A3FF" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame60() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 text-[16px] text-white">Showroom Hours</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#a3aab8] text-[14px]">Mon-Fri 9AM-6PM, Sat by Appointment</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <Clock />
      <Frame60 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame53 />
      <Frame55 />
      <Frame57 />
      <Frame59 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-[515px]" data-name="Frame">
      <Frame51 />
      <Frame52 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-[#161922] content-stretch flex items-center justify-between px-[16px] py-[12px] relative rounded-[6px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#a3aab8] text-[14px]">John Doe</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a3aab8] text-[12px] tracking-[1px] uppercase w-full">Name</p>
      <Frame64 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-[#161922] content-stretch flex items-center justify-between px-[16px] py-[12px] relative rounded-[6px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#a3aab8] text-[14px]">(469) 974-0697</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a3aab8] text-[12px] tracking-[1px] uppercase w-full">Phone</p>
      <Frame66 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame63 />
      <Frame65 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="bg-[#161922] content-stretch flex items-center justify-between px-[16px] py-[12px] relative rounded-[6px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#a3aab8] text-[14px]">john@example.com</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a3aab8] text-[12px] tracking-[1px] uppercase w-full">Email Address</p>
      <Frame68 />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="#A3AAB8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame70() {
  return (
    <div className="bg-[#161922] content-stretch flex items-center justify-between px-[16px] py-[12px] relative rounded-[6px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#a3aab8] text-[14px]">Dedicated Home Theater</p>
      <ChevronDown />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a3aab8] text-[12px] tracking-[1px] uppercase w-full">Project Type</p>
      <Frame70 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="bg-[#161922] content-stretch flex flex-col items-start min-h-[100px] px-[16px] py-[12px] relative rounded-[6px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a3aab8] text-[14px] w-full">Describe your project goals...</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a3aab8] text-[12px] tracking-[1px] uppercase w-full">Message</p>
      <Frame72 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#00a3ff] content-stretch flex items-center justify-center px-[24px] py-[14px] relative rounded-[8px] shrink-0 w-full" data-name="button">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white tracking-[1px] uppercase whitespace-nowrap">Submit Consultation Request</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-[#191c26] content-stretch flex flex-col gap-[24px] items-start p-[40px] relative rounded-[16px] shrink-0 w-[733px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[24px] text-white w-full">Request Your Free Consultation</p>
      <Frame62 />
      <Frame67 />
      <Frame69 />
      <Frame71 />
      <Button4 />
    </div>
  );
}

function Contact() {
  return (
    <div className="content-stretch flex gap-[32px] items-start px-[80px] py-[120px] relative shrink-0 w-[1440px]" data-name="contact">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgContact} />
        <div className="absolute bg-[rgba(10,11,14,0.85)] inset-0" />
      </div>
      <Frame50 />
      <Frame61 />
    </div>
  );
}

function WifiCog2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="wifi-cog">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="wifi-cog">
          <path d={svgPaths.p146d1400} id="Vector" stroke="#00A3FF" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <WifiCog2 />
      <p className="[word-break:break-word] font-['Outfit:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[18px] text-white whitespace-nowrap">US DIGITAL ENVIRONMENTS</p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[300px]" data-name="Frame">
      <Frame75 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#a3aab8] text-[14px] w-[min-content]">Delivering cinematic, luxurious home theater and smart living installations across Dallas-Fort Worth.</p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[normal] relative shrink-0 text-[14px] w-[150px] whitespace-nowrap" data-name="Frame">
      <p className="font-['Outfit:Bold',sans-serif] font-bold relative shrink-0 text-white uppercase">Quick Links</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#a3aab8]">Services</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#a3aab8]">Gallery</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#a3aab8]">About</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#a3aab8]">Reviews</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#a3aab8]">Contact</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="bg-[#191c26] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a3aab8] text-[12px] whitespace-nowrap">Dallas</p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="bg-[#191c26] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a3aab8] text-[12px] whitespace-nowrap">Highland Park</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="bg-[#191c26] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a3aab8] text-[12px] whitespace-nowrap">Plano</p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="bg-[#191c26] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a3aab8] text-[12px] whitespace-nowrap">Frisco</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="bg-[#191c26] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a3aab8] text-[12px] whitespace-nowrap">McKinney</p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="bg-[#191c26] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a3aab8] text-[12px] whitespace-nowrap">Allen</p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="bg-[#191c26] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a3aab8] text-[12px] whitespace-nowrap">Prosper</p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame79 />
      <Frame80 />
      <Frame81 />
      <Frame82 />
      <Frame83 />
      <Frame84 />
      <Frame85 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[250px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">Service Areas</p>
      <Frame78 />
    </div>
  );
}

function Facebook() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="facebook">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="facebook">
          <path d={svgPaths.p164fd480} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame88() {
  return (
    <div className="bg-[#191c26] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Facebook />
    </div>
  );
}

function Instagram() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="instagram">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_6)" id="instagram">
          <path d={svgPaths.p3947f1c0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame89() {
  return (
    <div className="bg-[#191c26] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Instagram />
    </div>
  );
}

function CircleX() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="circle-x">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_4)" id="circle-x">
          <path d={svgPaths.p30250f00} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_4">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame90() {
  return (
    <div className="bg-[#191c26] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <CircleX />
    </div>
  );
}

function CircleX1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="circle-x">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_4)" id="circle-x">
          <path d={svgPaths.p30250f00} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_4">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame91() {
  return (
    <div className="bg-[#191c26] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#242836] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <CircleX1 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame88 />
      <Frame89 />
      <Frame90 />
      <Frame91 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[180px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">Connect</p>
      <Frame87 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame74 />
      <Frame76 />
      <Frame77 />
      <Frame86 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Frame">
      <p className="relative shrink-0">Privacy Policy</p>
      <p className="relative shrink-0">Terms of Service</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Geist:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-[#6b7280] text-[13px] w-full whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0">{`© 2026 US Digital Environments. All Rights Reserved. | Licensed & Insured`}</p>
      <Frame93 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0a0b0e] content-stretch flex flex-col gap-[64px] items-start pb-[40px] pt-[80px] px-[80px] relative shrink-0 w-[1440px]" data-name="footer">
      <Frame73 />
      <div className="bg-[#242836] h-px relative shrink-0 w-full" data-name="Rectangle" />
      <Frame92 />
    </div>
  );
}

export default function UsDigitalEnvironmentsWebsite() {
  return (
    <div className="bg-[#0a0b0e] content-stretch flex flex-col items-start relative size-full" data-name="us-digital-environments-website">
      <Navigation />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Brands />
      <Contact />
      <Footer />
    </div>
  );
}