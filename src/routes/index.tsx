import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  Bot,
  Brain,
  Building2,
  CalendarClock,
  ChevronRight,
  Clock,
  Facebook,
  Filter,
  Globe2,
  Headphones,
  Home,
  Instagram,
  Landmark,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessageSquare,
  Moon,
  Phone,
  PhoneCall,
  Rocket,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";

import heroImg from "@/assets/hero-bpo.jpg";
import teamImg from "@/assets/about-team.jpg";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "United Helping Center — Real Estate BPO Partner" },
      {
        name: "description",
        content:
          "United Helping Center (UHC) helps real estate professionals convert more leads through world-class BPO, CRM management, appointment setting and 24/7 customer support.",
      },
      { property: "og:title", content: "United Helping Center — Real Estate BPO Partner" },
      {
        property: "og:description",
        content:
          "Convert more leads with UHC. Lead qualification, appointment setting, CRM management and 24/7 customer support for realtors, brokers and builders.",
      },
      { name: "twitter:title", content: "United Helping Center — Real Estate BPO Partner" },
      {
        name: "twitter:description",
        content:
          "World-class Real Estate BPO. Lead qualification, appointment setting, CRM & 24/7 support.",
      },
    ],
  }),
  component: LandingPage,
});

/* ------------------------- Hooks ------------------------- */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

function useCounter(target: number, start: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return value;
}

/* ------------------------- Data ------------------------- */

const SERVICES = [
  { icon: Filter, title: "Lead Qualification", desc: "We validate, score and route every inbound lead so your agents only speak with buyers ready to move." },
  { icon: CalendarClock, title: "Appointment Setting", desc: "Booked showings, listing consultations and follow-ups placed directly on your calendar." },
  { icon: Headphones, title: "Customer Support", desc: "24/7 US-focused customer support that keeps your pipeline warm and your reputation shining." },
  { icon: Brain, title: "CRM Management", desc: "Clean data, smart segmentation and automated workflows across HubSpot, Salesforce, Follow Up Boss and more." },
  { icon: UserCheck, title: "Virtual Assistant", desc: "Dedicated executive assistants handling admin, listings, MLS updates and transaction coordination." },
  { icon: Mail, title: "Email Support", desc: "Personalized email campaigns and inbox management that convert cold leads into signed contracts." },
  { icon: MessageSquare, title: "Live Chat Support", desc: "Real human chat agents on your website converting anonymous visitors into qualified appointments." },
  { icon: TrendingUp, title: "Inside Sales", desc: "Trained ISAs nurturing your database and reactivating dormant leads with proven scripts." },
  { icon: Wrench, title: "Back Office", desc: "Transaction coordination, document management and compliance handled with precision." },
  { icon: Rocket, title: "Follow-up Campaigns", desc: "Long-term nurture across SMS, email and voice — 12+ month touchpoints on autopilot." },
];

const WHY = [
  { icon: Zap, title: "Fast Response", desc: "Every lead contacted in under 5 minutes." },
  { icon: BadgeCheck, title: "Trained Agents", desc: "Real estate certified specialists." },
  { icon: Brain, title: "CRM Experts", desc: "HubSpot, Salesforce, Follow Up Boss." },
  { icon: Bot, title: "AI Automation", desc: "Smart workflows and lead scoring." },
  { icon: Languages, title: "Bilingual Support", desc: "Native English + Spanish coverage." },
  { icon: TrendingUp, title: "High Conversion", desc: "Up to 3x contact-to-appointment rate." },
  { icon: ShieldCheck, title: "Data Security", desc: "SOC 2 aligned processes & controls." },
  { icon: Sparkles, title: "Custom Solutions", desc: "Playbooks built around your business." },
];

const PROCESS = [
  { icon: PhoneCall, title: "Contact Us", desc: "Tell us about your business and goals." },
  { icon: Search, title: "Business Analysis", desc: "We audit your pipeline and CRM." },
  { icon: Target, title: "Strategy Design", desc: "A tailored playbook, scripts and KPIs." },
  { icon: Users, title: "Team Assignment", desc: "A dedicated pod is trained on your brand." },
  { icon: Rocket, title: "Campaign Launch", desc: "We go live with full monitoring." },
  { icon: TrendingUp, title: "Optimization", desc: "Weekly reviews and continuous growth." },
];

const SECTORS = [
  { icon: Home, title: "Realtors", desc: "Solo agents scaling their listings and buyer pipeline." },
  { icon: Users, title: "Brokers", desc: "Brokerages needing ISA teams and coverage at scale." },
  { icon: Building2, title: "Construction Companies", desc: "Builders converting new development inquiries." },
  { icon: Landmark, title: "Property Management", desc: "PM firms handling tenant inquiries and leases." },
  { icon: Wrench, title: "Mortgage Companies", desc: "Loan officers pre-qualifying borrower leads." },
  { icon: Globe2, title: "Real Estate Agencies", desc: "Multi-market agencies unifying customer support." },
];

const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "Realtor · Miami, FL",
    img: t1,
    quote:
      "UHC transformed our lead response. We went from missing 40% of calls to booking 3x more showings every week. Their team feels like an in-house extension.",
  },
  {
    name: "Jessica Alvarez",
    role: "Broker · Austin, TX",
    img: t2,
    quote:
      "The CRM cleanup alone was worth it. Now every dollar we spend on ads is tracked, nurtured and converted. Best BPO partner we have ever hired.",
  },
  {
    name: "Michael Reed",
    role: "Construction Executive · Dallas, TX",
    img: t3,
    quote:
      "Fast, bilingual and incredibly professional. UHC handles thousands of new development inquiries every month without a single dropped ball.",
  },
];

const STATS = [
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 24, suffix: "/7", label: "Support Coverage" },
  { value: 5000, suffix: "+", label: "Leads Managed" },
  { value: 150, suffix: "+", label: "Business Clients" },
];

/* ------------------------- Components ------------------------- */

function Navbar({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#why", label: "Why UHC" },
    { href: "#process", label: "Process" },
    { href: "#sectors", label: "Industries" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-cta text-primary-foreground shadow-soft">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            United <span className="text-primary">Helping</span> Center
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark(!dark)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background/50 text-foreground transition-colors hover:bg-accent"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-xl bg-success px-4 py-2.5 text-sm font-semibold text-success-foreground shadow-soft transition-transform hover:-translate-y-0.5 hover:shadow-elegant lg:inline-flex"
          >
            Book a call <ArrowRight className="h-4 w-4" />
          </a>
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background/50 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border glass lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-success px-4 py-3 text-sm font-semibold text-success-foreground"
            >
              Book a call <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero pt-32 pb-24 text-white sm:pt-40 sm:pb-32">
      {/* geometric blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div
          className="animate-blob absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-primary/40 blur-3xl"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="animate-blob absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-sky/30 blur-3xl"
          style={{ animationDelay: "6s" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
            Trusted by 150+ US real estate businesses
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Your Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white">Real Estate BPO</span> Partner
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg">
            Helping real estate professionals convert more leads through world-class customer support,
            CRM management and 24/7 inside-sales coverage — powered by AI and delivered by real experts.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-success px-6 py-3.5 text-sm font-semibold text-success-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <CalendarClock className="h-4 w-4" /> Schedule a Meeting
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-success" /> SOC 2 aligned</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-success" /> 24/7 coverage</span>
            <span className="flex items-center gap-2"><Languages className="h-4 w-4 text-success" /> Bilingual EN/ES</span>
          </div>
        </div>

        <div className="animate-fade-up relative" style={{ animationDelay: "0.15s" }}>
          <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-elegant">
            <img
              src={heroImg}
              alt="UHC customer service team working in modern BPO office"
              width={1600}
              height={1100}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/40 via-transparent to-transparent" />
          </div>
          {/* floating cards */}
          <div className="animate-float absolute -bottom-6 -left-6 hidden w-64 rounded-2xl border border-white/20 bg-white/95 p-4 text-foreground shadow-elegant backdrop-blur sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-success/15 text-success">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Conversion uplift</p>
                <p className="font-display text-lg font-bold">+287%</p>
              </div>
            </div>
          </div>
          <div
            className="animate-float absolute -top-6 -right-6 hidden w-60 rounded-2xl border border-white/20 bg-white/95 p-4 text-foreground shadow-elegant backdrop-blur sm:block"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Avg. lead response</p>
                <p className="font-display text-lg font-bold">under 3 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="relative -mt-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 rounded-3xl border border-border bg-card p-6 shadow-elegant sm:p-8 lg:grid-cols-4">
        {STATS.map((s, i) => {
          const n = useCounter(s.value, visible, 1600 + i * 200);
          return (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-extrabold text-gradient-brand sm:text-5xl">
                {n}
                {s.suffix}
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {desc && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{desc}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="bg-gradient-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-cta opacity-20 blur-2xl" />
            <img
              src={teamImg}
              alt="UHC leadership team reviewing CRM analytics"
              width={1200}
              height={900}
              loading="lazy"
              className="rounded-3xl border border-border shadow-elegant"
            />
          </div>
          <div>
            <SectionTitle
              eyebrow="About UHC"
              title="A Real Estate BPO built for US professionals"
              desc="We combine trained agents, modern CRM tooling and intelligent automation to help real estate businesses respond faster, follow up longer and close more deals."
            />
            <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
              {[
                { icon: Target, title: "Our Mission", desc: "Turn every real estate lead into a real conversation." },
                { icon: Globe2, title: "Our Vision", desc: "Be the #1 Real Estate BPO partner across the Americas." },
                { icon: Users, title: "Client-first", desc: "Dedicated pods, transparent KPIs, weekly reviews." },
                { icon: Building2, title: "Real Estate DNA", desc: "10+ years combined in US real estate ops." },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl border border-border bg-card p-5 shadow-soft transition-transform hover:-translate-y-1">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-3 font-display font-semibold">{c.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="What we do"
          title="Full-stack Real Estate BPO services"
          desc="One partner for every customer touchpoint — from the first inbound lead to the closed transaction."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-cta opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-cta text-primary-foreground shadow-soft">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.desc}</p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                Learn more <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="bg-gradient-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Why UHC"
          title="Why real estate teams choose us"
          desc="We are not a generic call center. Every process, script and dashboard is tuned for real estate performance."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w) => (
            <div
              key={w.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <w.icon className="h-6 w-6" />
              </div>
              <p className="mt-5 font-display font-semibold">{w.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="How we work"
          title="A proven 6-step process"
          desc="From first call to continuous growth — a repeatable playbook that scales with you."
        />
        <div className="relative mt-16">
          <div className="absolute left-6 top-6 bottom-6 hidden w-0.5 bg-gradient-to-b from-primary via-primary-dark to-transparent lg:left-1/2 lg:top-8 lg:right-8 lg:bottom-auto lg:h-0.5 lg:w-auto lg:bg-gradient-to-r lg:from-transparent lg:via-primary lg:to-transparent" />
          <ol className="grid gap-6 lg:grid-cols-6">
            {PROCESS.map((p, i) => (
              <li
                key={p.title}
                className="relative rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-cta text-primary-foreground shadow-soft">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-3xl font-extrabold text-primary/15">0{i + 1}</span>
                </div>
                <p className="mt-4 font-display font-semibold">{p.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Sectors() {
  return (
    <section id="sectors" className="bg-gradient-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Industries" title="Sectors we serve" desc="Purpose-built playbooks for every real estate vertical." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 transition-all group-hover:scale-150 group-hover:bg-primary/10" />
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-cta text-primary-foreground shadow-soft">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Testimonials" title="Trusted by real estate leaders" />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <figure
              key={t.name}
              className={`relative rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 ${
                idx === i ? "lg:scale-[1.03] lg:shadow-elegant" : ""
              }`}
            >
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <p className="font-display font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2 lg:hidden">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-2 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-cta py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="animate-blob absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-success/20 blur-3xl" style={{ animationDelay: "3s" }} />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Ready to Grow Your Business?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
          Book a free 30-minute consultation. Our team will audit your pipeline and show you exactly how UHC can lift your conversion rate.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-success px-8 py-4 text-base font-bold text-success-foreground shadow-elegant transition-transform hover:-translate-y-1"
        >
          Book a Free Consultation <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

function ContactAndFooter() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    if (name.length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email.";
    if (message.length < 10) next.message = "Tell us a bit more (min 10 characters).";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <>
      <section id="contact" className="bg-gradient-soft py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionTitle
                eyebrow="Get in touch"
                title="Let's build your real estate growth engine"
                desc="Tell us about your business and we'll get back to you within one business day."
              />
              <div className="mx-auto mt-10 max-w-md space-y-4 lg:mx-0">
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Call us</p>
                    <p className="font-display font-semibold">+1 (800) 555-0198</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-display font-semibold">hello@unitedhelpingcenter.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">HQ</p>
                    <p className="font-display font-semibold">Miami, Florida · United States</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-soft">
                <iframe
                  title="UHC office map"
                  src="https://www.google.com/maps?q=Miami,FL&output=embed"
                  loading="lazy"
                  className="h-64 w-full"
                />
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-border bg-card p-6 shadow-elegant sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    maxLength={100}
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Jane Smith"
                  />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    maxLength={255}
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="jane@company.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    maxLength={100}
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Acme Realty"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={1000}
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell us about your goals and current pipeline..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-success px-6 py-3.5 text-sm font-semibold text-success-foreground shadow-soft transition-transform hover:-translate-y-0.5 disabled:opacity-70"
              >
                {status === "sending" ? "Sending..." : status === "sent" ? "Message sent ✓" : (<>Send message <Send className="h-4 w-4" /></>)}
              </button>
              {status === "sent" && (
                <p className="mt-3 text-center text-sm text-success">Thanks! We'll be in touch within one business day.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-primary-dark text-white/85">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
                  <Sparkles className="h-5 w-5" />
                </span>
                <span className="font-display text-lg font-bold text-white">United Helping Center</span>
              </div>
              <p className="mt-4 text-sm text-white/70">
                Real Estate BPO built for US professionals. Faster response, smarter follow-up, higher conversion.
              </p>
              <div className="mt-6 flex gap-3">
                {[Facebook, Instagram, Linkedin].map((I, k) => (
                  <a
                    key={k}
                    href="#"
                    aria-label="Social link"
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 transition-colors hover:bg-white/15"
                  >
                    <I className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-wider text-white">Quick Links</p>
              <ul className="mt-4 space-y-2 text-sm">
                {["About", "Services", "Why UHC", "Process", "Industries", "Contact"].map((l) => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase().replace(/[^a-z]/g, "")}`} className="transition-colors hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-wider text-white">Services</p>
              <ul className="mt-4 space-y-2 text-sm">
                {SERVICES.slice(0, 6).map((s) => (
                  <li key={s.title}>
                    <a href="#services" className="transition-colors hover:text-white">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-wider text-white">Newsletter</p>
              <p className="mt-4 text-sm text-white/70">Monthly playbooks for real estate growth. No spam.</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-4 flex overflow-hidden rounded-xl border border-white/15 bg-white/5"
              >
                <input
                  type="email"
                  aria-label="Email"
                  placeholder="you@work.com"
                  className="flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40"
                />
                <button type="submit" className="bg-success px-4 text-success-foreground" aria-label="Subscribe">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
            <p>© {new Date().getFullYear()} United Helping Center. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <a
        href="https://wa.me/18005550198"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-success text-success-foreground shadow-elegant transition-transform hover:-translate-y-1"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-success/60" />
      </a>
      <button
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-24 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant transition-all ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}

/* ------------------------- Page ------------------------- */

function LandingPage() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Why />
        <Process />
        <Sectors />
        <Testimonials />
        <CTA />
        <ContactAndFooter />
      </main>
      <FloatingActions />
    </div>
  );
}
