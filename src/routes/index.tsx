import { createFileRoute } from "@tanstack/react-router";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
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

import heroImg from "@/assets/UHC.jpg.asset.json";
import teamImg from "@/assets/about-team.jpg";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";
import logoAsset from "@/assets/logo.png.asset.json";

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

/* ------------------------- i18n ------------------------- */

type Lang = "en" | "es";

const dict = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      why: "Why UHC",
      process: "Process",
      industries: "Industries",
      corporate: "Corporate",
      contact: "Contact",
      bookCall: "Book a call",
    },
    hero: {
      badge: "Trusted by 150+ US real estate businesses",
      titleA: "Your Trusted",
      titleB: "Real Estate BPO",
      titleC: "Partner",
      subtitle:
        "Helping real estate professionals convert more leads through world-class customer support, CRM management and 24/7 inside-sales coverage — powered by AI and delivered by real experts.",
      getStarted: "Get Started",
      schedule: "Schedule a Meeting",
      badgeSoc: "SOC 2 aligned",
      badge247: "24/7 coverage",
      badgeBi: "Bilingual EN/ES",
      floatUplift: "Conversion uplift",
      floatResp: "Avg. lead response",
      floatRespVal: "under 3 min",
    },
    stats: [
      "Customer Satisfaction",
      "Support Coverage",
      "Leads Managed",
      "Business Clients",
    ],
    about: {
      eyebrow: "About UHC",
      title: "A Real Estate BPO built for US professionals",
      desc: "We combine trained agents, modern CRM tooling and intelligent automation to help real estate businesses respond faster, follow up longer and close more deals.",
      cards: [
        { title: "Our Mission", desc: "Turn every real estate lead into a real conversation." },
        { title: "Our Vision", desc: "Be the #1 Real Estate BPO partner across the Americas." },
        { title: "Client-first", desc: "Dedicated pods, transparent KPIs, weekly reviews." },
        { title: "Real Estate DNA", desc: "10+ years combined in US real estate ops." },
      ],
    },
    services: {
      eyebrow: "What we do",
      title: "Full-stack Real Estate BPO services",
      desc: "One partner for every customer touchpoint — from the first inbound lead to the closed transaction.",
      learnMore: "Learn more",
      items: [
        { title: "Lead Qualification", desc: "We validate, score and route every inbound lead so your agents only speak with buyers ready to move." },
        { title: "Appointment Setting", desc: "Booked showings, listing consultations and follow-ups placed directly on your calendar." },
        { title: "Customer Support", desc: "24/7 US-focused customer support that keeps your pipeline warm and your reputation shining." },
        { title: "CRM Management", desc: "Clean data, smart segmentation and automated workflows across HubSpot, Salesforce, Follow Up Boss and more." },
        { title: "Virtual Assistant", desc: "Dedicated executive assistants handling admin, listings, MLS updates and transaction coordination." },
        { title: "Email Support", desc: "Personalized email campaigns and inbox management that convert cold leads into signed contracts." },
        { title: "Live Chat Support", desc: "Real human chat agents on your website converting anonymous visitors into qualified appointments." },
        { title: "Inside Sales", desc: "Trained ISAs nurturing your database and reactivating dormant leads with proven scripts." },
        { title: "Back Office", desc: "Transaction coordination, document management and compliance handled with precision." },
        { title: "Follow-up Campaigns", desc: "Long-term nurture across SMS, email and voice — 12+ month touchpoints on autopilot." },
      ],
    },
    why: {
      eyebrow: "Why UHC",
      title: "Why real estate teams choose us",
      desc: "We are not a generic call center. Every process, script and dashboard is tuned for real estate performance.",
      items: [
        { title: "Fast Response", desc: "Every lead contacted in under 5 minutes." },
        { title: "Trained Agents", desc: "Real estate certified specialists." },
        { title: "CRM Experts", desc: "HubSpot, Salesforce, Follow Up Boss." },
        { title: "AI Automation", desc: "Smart workflows and lead scoring." },
        { title: "Bilingual Support", desc: "Native English + Spanish coverage." },
        { title: "High Conversion", desc: "Up to 3x contact-to-appointment rate." },
        { title: "Data Security", desc: "SOC 2 aligned processes & controls." },
        { title: "Custom Solutions", desc: "Playbooks built around your business." },
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "A proven 6-step process",
      desc: "From first call to continuous growth — a repeatable playbook that scales with you.",
      items: [
        { title: "Contact Us", desc: "Tell us about your business and goals." },
        { title: "Business Analysis", desc: "We audit your pipeline and CRM." },
        { title: "Strategy Design", desc: "A tailored playbook, scripts and KPIs." },
        { title: "Team Assignment", desc: "A dedicated pod is trained on your brand." },
        { title: "Campaign Launch", desc: "We go live with full monitoring." },
        { title: "Optimization", desc: "Weekly reviews and continuous growth." },
      ],
    },
    sectors: {
      eyebrow: "Industries",
      title: "Sectors we serve",
      desc: "Purpose-built playbooks for every real estate vertical.",
      items: [
        { title: "Realtors", desc: "Solo agents scaling their listings and buyer pipeline." },
        { title: "Brokers", desc: "Brokerages needing ISA teams and coverage at scale." },
        { title: "Construction Companies", desc: "Builders converting new development inquiries." },
        { title: "Property Management", desc: "PM firms handling tenant inquiries and leases." },
        { title: "Mortgage Companies", desc: "Loan officers pre-qualifying borrower leads." },
        { title: "Real Estate Agencies", desc: "Multi-market agencies unifying customer support." },
      ],
    },
    corporateClient: {
      eyebrow: "Enterprise",
      title: "CORPORATE CLIENT",
      desc: "Dedicated BPO pods, SLAs and custom playbooks for large real estate organizations across the United States.",
      items: [
        { title: "Brokerages", desc: "Multi-office ISA teams, lead routing and brand-compliant scripts at scale." },
        { title: "Builders & Developers", desc: "High-volume new development inquiry handling and appointment setting." },
        { title: "Mortgage Lenders", desc: "Borrower pre-qualification, document follow-up and loan officer support." },
        { title: "Property Managers", desc: "Tenant screening, maintenance coordination and lease renewal campaigns." },
      ],
      cta: "Talk to our enterprise team",
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Trusted by real estate leaders",
      items: [
        {
          name: "Sarah Mitchell",
          role: "Realtor · Miami, FL",
          quote:
            "UHC transformed our lead response. We went from missing 40% of calls to booking 3x more showings every week. Their team feels like an in-house extension.",
        },
        {
          name: "Jessica Alvarez",
          role: "Broker · Austin, TX",
          quote:
            "The CRM cleanup alone was worth it. Now every dollar we spend on ads is tracked, nurtured and converted. Best BPO partner we have ever hired.",
        },
        {
          name: "Michael Reed",
          role: "Construction Executive · Dallas, TX",
          quote:
            "Fast, bilingual and incredibly professional. UHC handles thousands of new development inquiries every month without a single dropped ball.",
        },
      ],
    },
    cta: {
      title: "Ready to Grow Your Business?",
      desc: "Book a free 30-minute consultation. Our team will audit your pipeline and show you exactly how UHC can lift your conversion rate.",
      button: "Book a Free Consultation",
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Let's build your real estate growth engine",
      desc: "Tell us about your business and we'll get back to you within one business day.",
      callUs: "Call us",
      email: "Email",
      hq: "HQ",
      hqValue: "Miami, Florida · United States",
      form: {
        name: "Full name",
        namePh: "Jane Smith",
        email: "Email",
        emailPh: "jane@company.com",
        company: "Company",
        companyPh: "Acme Realty",
        message: "How can we help?",
        messagePh: "Tell us about your goals and current pipeline...",
        send: "Send message",
        sending: "Sending...",
        sent: "Message sent ✓",
        thanks: "Thanks! We'll be in touch within one business day.",
        errName: "Please enter your full name.",
        errEmail: "Please enter a valid email.",
        errMsg: "Tell us a bit more (min 10 characters).",
      },
    },
    footer: {
      about: "Real Estate BPO built for US professionals. Faster response, smarter follow-up, higher conversion.",
      quickLinks: "Quick Links",
      services: "Services",
      newsletter: "Newsletter",
      newsletterDesc: "Monthly playbooks for real estate growth. No spam.",
      newsletterPh: "you@work.com",
      rights: "All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookies",
    },
  },
  es: {
    nav: {
      about: "Nosotros",
      services: "Servicios",
      why: "Por qué UHC",
      process: "Proceso",
      industries: "Industrias",
      corporate: "Corporativo",
      contact: "Contacto",
      bookCall: "Agendar llamada",
    },
    hero: {
      badge: "Con la confianza de más de 150 empresas inmobiliarias en EE. UU.",
      titleA: "Tu socio de confianza en",
      titleB: "BPO Inmobiliario",
      titleC: "",
      subtitle:
        "Ayudamos a profesionales inmobiliarios a convertir más leads con atención al cliente de clase mundial, gestión de CRM y cobertura de ventas 24/7 — impulsado por IA y ejecutado por expertos reales.",
      getStarted: "Comenzar",
      schedule: "Agendar reunión",
      badgeSoc: "Alineado con SOC 2",
      badge247: "Cobertura 24/7",
      badgeBi: "Bilingüe EN/ES",
      floatUplift: "Aumento de conversión",
      floatResp: "Tiempo de respuesta",
      floatRespVal: "menos de 3 min",
    },
    stats: [
      "Satisfacción del Cliente",
      "Cobertura de Soporte",
      "Leads Gestionados",
      "Clientes Empresariales",
    ],
    about: {
      eyebrow: "Sobre UHC",
      title: "Un BPO inmobiliario diseñado para profesionales de EE. UU.",
      desc: "Combinamos agentes capacitados, herramientas modernas de CRM y automatización inteligente para que las empresas inmobiliarias respondan más rápido, den seguimiento por más tiempo y cierren más operaciones.",
      cards: [
        { title: "Nuestra Misión", desc: "Convertir cada lead inmobiliario en una conversación real." },
        { title: "Nuestra Visión", desc: "Ser el socio BPO inmobiliario #1 en las Américas." },
        { title: "Cliente Primero", desc: "Equipos dedicados, KPIs transparentes, revisiones semanales." },
        { title: "ADN Inmobiliario", desc: "Más de 10 años combinados en operaciones inmobiliarias en EE. UU." },
      ],
    },
    services: {
      eyebrow: "Qué hacemos",
      title: "Servicios integrales de BPO inmobiliario",
      desc: "Un solo socio para cada punto de contacto con el cliente — desde el primer lead entrante hasta el cierre.",
      learnMore: "Ver más",
      items: [
        { title: "Calificación de Leads", desc: "Validamos, calificamos y enrutamos cada lead para que tus agentes solo hablen con compradores listos para actuar." },
        { title: "Agenda de Citas", desc: "Visitas, asesorías y seguimientos agendados directamente en tu calendario." },
        { title: "Atención al Cliente", desc: "Soporte 24/7 enfocado en EE. UU. que mantiene tu pipeline caliente y tu reputación intacta." },
        { title: "Gestión de CRM", desc: "Datos limpios, segmentación inteligente y flujos automatizados en HubSpot, Salesforce, Follow Up Boss y más." },
        { title: "Asistente Virtual", desc: "Asistentes ejecutivos dedicados para administración, listados, MLS y coordinación de transacciones." },
        { title: "Soporte por Email", desc: "Campañas personalizadas y gestión de bandeja que convierten leads fríos en contratos firmados." },
        { title: "Chat en Vivo", desc: "Agentes humanos reales convirtiendo visitantes anónimos en citas calificadas." },
        { title: "Ventas Internas", desc: "ISAs entrenados que nutren tu base de datos y reactivan leads dormidos con guiones probados." },
        { title: "Back Office", desc: "Coordinación de transacciones, gestión documental y cumplimiento con precisión." },
        { title: "Campañas de Seguimiento", desc: "Nurturing largo plazo por SMS, email y voz — más de 12 meses de contactos en piloto automático." },
      ],
    },
    why: {
      eyebrow: "Por qué UHC",
      title: "Por qué los equipos inmobiliarios nos eligen",
      desc: "No somos un call center genérico. Cada proceso, guion y dashboard está optimizado para el rendimiento inmobiliario.",
      items: [
        { title: "Respuesta Rápida", desc: "Cada lead contactado en menos de 5 minutos." },
        { title: "Agentes Capacitados", desc: "Especialistas certificados en real estate." },
        { title: "Expertos en CRM", desc: "HubSpot, Salesforce, Follow Up Boss." },
        { title: "Automatización con IA", desc: "Flujos inteligentes y scoring de leads." },
        { title: "Soporte Bilingüe", desc: "Cobertura nativa en inglés y español." },
        { title: "Alta Conversión", desc: "Hasta 3x la tasa de contacto a cita." },
        { title: "Seguridad de Datos", desc: "Procesos y controles alineados con SOC 2." },
        { title: "Soluciones a Medida", desc: "Playbooks construidos para tu negocio." },
      ],
    },
    process: {
      eyebrow: "Cómo trabajamos",
      title: "Un proceso probado de 6 pasos",
      desc: "Desde la primera llamada hasta el crecimiento continuo — un playbook repetible que escala contigo.",
      items: [
        { title: "Contáctanos", desc: "Cuéntanos sobre tu negocio y tus objetivos." },
        { title: "Análisis del Negocio", desc: "Auditamos tu pipeline y tu CRM." },
        { title: "Diseño de Estrategia", desc: "Un playbook, guiones y KPIs a medida." },
        { title: "Asignación del Equipo", desc: "Un equipo dedicado capacitado en tu marca." },
        { title: "Lanzamiento", desc: "Salimos en vivo con monitoreo total." },
        { title: "Optimización", desc: "Revisiones semanales y crecimiento continuo." },
      ],
    },
    sectors: {
      eyebrow: "Industrias",
      title: "Sectores que atendemos",
      desc: "Playbooks diseñados para cada vertical inmobiliaria.",
      items: [
        { title: "Realtors", desc: "Agentes independientes escalando listados y compradores." },
        { title: "Brokers", desc: "Corredurías que necesitan equipos ISA a escala." },
        { title: "Constructoras", desc: "Desarrolladores convirtiendo consultas de nuevos proyectos." },
        { title: "Property Management", desc: "Empresas que gestionan consultas de inquilinos y contratos." },
        { title: "Hipotecarias", desc: "Oficiales de préstamos precalificando prestatarios." },
        { title: "Agencias Inmobiliarias", desc: "Agencias multi-mercado unificando su atención al cliente." },
      ],
    },
    corporateClient: {
      eyebrow: "Empresas",
      title: "CLIENTE CORPORATIVO",
      desc: "Equipos BPO dedicados, SLAs y playbooks personalizados para grandes organizaciones inmobiliarias en Estados Unidos.",
      items: [
        { title: "Corredurías", desc: "Equipos ISA multi-oficina, enrutamiento de leads y guiones ajustados a tu marca." },
        { title: "Constructores y Desarrolladores", desc: "Gestión de alto volumen de consultas de nuevos desarrollos y agendamiento." },
        { title: "Prestamistas Hipotecarios", desc: "Precalificación de prestatarios, seguimiento documental y soporte a oficiales de préstamos." },
        { title: "Administradoras de Propiedades", desc: "Selección de inquilinos, coordinación de mantenimiento y campañas de renovación." },
      ],
      cta: "Habla con nuestro equipo empresarial",
    },
    testimonials: {
      eyebrow: "Testimonios",
      title: "Con la confianza de líderes inmobiliarios",
      items: [
        {
          name: "Sarah Mitchell",
          role: "Realtor · Miami, FL",
          quote:
            "UHC transformó nuestra respuesta a leads. Pasamos de perder el 40% de las llamadas a agendar 3x más visitas cada semana. Se sienten como una extensión de nuestro equipo.",
        },
        {
          name: "Jessica Alvarez",
          role: "Broker · Austin, TX",
          quote:
            "Solo la limpieza del CRM ya valió la pena. Ahora cada dólar en publicidad se rastrea, se nutre y se convierte. El mejor socio BPO que hemos contratado.",
        },
        {
          name: "Michael Reed",
          role: "Ejecutivo Constructora · Dallas, TX",
          quote:
            "Rápidos, bilingües e increíblemente profesionales. UHC maneja miles de consultas de nuevos desarrollos al mes sin fallar una sola.",
        },
      ],
    },
    cta: {
      title: "¿Listo para hacer crecer tu negocio?",
      desc: "Agenda una consultoría gratuita de 30 minutos. Auditamos tu pipeline y te mostramos exactamente cómo UHC puede aumentar tu conversión.",
      button: "Agendar Consultoría Gratis",
    },
    contact: {
      eyebrow: "Contáctanos",
      title: "Construyamos tu motor de crecimiento inmobiliario",
      desc: "Cuéntanos sobre tu negocio y te responderemos en menos de un día hábil.",
      callUs: "Llámanos",
      email: "Correo",
      hq: "Oficina Central",
      hqValue: "Miami, Florida · Estados Unidos",
      form: {
        name: "Nombre completo",
        namePh: "Juana Pérez",
        email: "Correo",
        emailPh: "juana@empresa.com",
        company: "Empresa",
        companyPh: "Acme Realty",
        message: "¿Cómo podemos ayudar?",
        messagePh: "Cuéntanos tus objetivos y tu pipeline actual...",
        send: "Enviar mensaje",
        sending: "Enviando...",
        sent: "Mensaje enviado ✓",
        thanks: "¡Gracias! Te contactaremos en menos de un día hábil.",
        errName: "Ingresa tu nombre completo.",
        errEmail: "Ingresa un correo válido.",
        errMsg: "Cuéntanos un poco más (mínimo 10 caracteres).",
      },
    },
    footer: {
      about: "BPO inmobiliario diseñado para profesionales de EE. UU. Respuesta más rápida, mejor seguimiento, mayor conversión.",
      quickLinks: "Enlaces rápidos",
      services: "Servicios",
      newsletter: "Newsletter",
      newsletterDesc: "Playbooks mensuales para crecimiento inmobiliario. Sin spam.",
      newsletterPh: "tu@empresa.com",
      rights: "Todos los derechos reservados.",
      privacy: "Privacidad",
      terms: "Términos",
      cookies: "Cookies",
    },
  },
} as const;

type Dict = (typeof dict)["en"];
const I18nCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "en",
  setLang: () => {},
  t: dict.en,
});
const useI18n = () => useContext(I18nCtx);

function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("uhc-lang") as Lang | null)) || null;
    if (saved === "en" || saved === "es") setLangState(saved);
    else if (typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("es")) {
      setLangState("es");
    }
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("uhc-lang", l); } catch {}
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };
  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);
  const value = useMemo(() => ({ lang, setLang, t: dict[lang] as Dict }), [lang]);
  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

/* ------------------------- Icon maps (stable order) ------------------------- */

const SERVICE_ICONS = [Filter, CalendarClock, Headphones, Brain, UserCheck, Mail, MessageSquare, TrendingUp, Wrench, Rocket];
const WHY_ICONS = [Zap, BadgeCheck, Brain, Bot, Languages, TrendingUp, ShieldCheck, Sparkles];
const PROCESS_ICONS = [PhoneCall, Search, Target, Users, Rocket, TrendingUp];
const SECTOR_ICONS = [Home, Users, Building2, Landmark, Wrench, Globe2];
const ABOUT_ICONS = [Target, Globe2, Users, Building2];
const TESTIMONIAL_IMGS = [t1, t2, t3];

const STAT_VALUES = [
  { value: 98, suffix: "%" },
  { value: 24, suffix: "/7" },
  { value: 5000, suffix: "+" },
  { value: 150, suffix: "+" },
];

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

/* ------------------------- Components ------------------------- */

function LangToggle({ compact = false, scrolled = true }: { compact?: boolean; scrolled?: boolean }) {
  const { lang, setLang } = useI18n();
  const container = scrolled
    ? "inline-flex items-center rounded-xl border border-border bg-background/50 p-1 text-xs font-semibold"
    : "inline-flex items-center rounded-xl border border-white/20 bg-white/10 p-1 text-xs font-semibold";
  const compactBtn = scrolled
    ? "inline-flex items-center gap-1.5 rounded-xl border border-border bg-background/50 px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-accent"
    : "inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/20";
  if (compact) {
    return (
      <button onClick={() => setLang(lang === "en" ? "es" : "en")} aria-label="Toggle language" className={compactBtn}>
        <Languages className="h-4 w-4" />
        {lang.toUpperCase()}
      </button>
    );
  }
  return (
    <div className={container}>
      {(["en", "es"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-lg px-2.5 py-1.5 transition-colors ${
            lang === l
              ? "bg-primary text-primary-foreground shadow-soft"
              : scrolled
                ? "text-foreground/70 hover:text-primary"
                : "text-white/70 hover:text-white"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Navbar({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#why", label: t.nav.why },
    { href: "#process", label: t.nav.process },
    { href: "#sectors", label: t.nav.industries },
    { href: "#contact", label: t.nav.contact },
  ];

  const linkBase = scrolled
    ? "rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
    : "rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white";

  const mobileLinkBase = scrolled
    ? "rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-primary"
    : "rounded-lg px-3 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white";

  const iconBtnBase = scrolled
    ? "grid h-10 w-10 place-items-center rounded-xl border border-border bg-background/50 text-foreground transition-colors hover:bg-accent"
    : "grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft" : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <img
            src={logoAsset.url}
            alt="United Helping Center logo"
            width={144}
            height={48}
            className="h-10 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={linkBase}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LangToggle scrolled={scrolled} />
          </div>
          <div className="sm:hidden">
            <LangToggle compact scrolled={scrolled} />
          </div>
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark(!dark)}
            className={iconBtnBase}
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-xl bg-success px-4 py-2.5 text-sm font-semibold text-success-foreground shadow-soft transition-transform hover:-translate-y-0.5 hover:shadow-elegant lg:inline-flex"
          >
            {t.nav.bookCall} <ArrowRight className="h-4 w-4" />
          </a>
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className={`${iconBtnBase} lg:hidden`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className={`border-t lg:hidden ${
            scrolled ? "border-border glass" : "border-white/10 bg-primary-dark/95 text-white"
          }`}
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={mobileLinkBase}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-success px-4 py-3 text-sm font-semibold text-success-foreground"
            >
              {t.nav.bookCall} <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero pt-32 pb-24 text-white sm:pt-40 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="animate-blob absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-primary/40 blur-3xl" style={{ animationDelay: "3s" }} />
        <div className="animate-blob absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-sky/30 blur-3xl" style={{ animationDelay: "6s" }} />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
            {t.hero.badge}
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {t.hero.titleA}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white">
              {t.hero.titleB}
            </span>{" "}
            {t.hero.titleC}
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-success px-6 py-3.5 text-sm font-semibold text-success-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
            >
              {t.hero.getStarted}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <CalendarClock className="h-4 w-4" /> {t.hero.schedule}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-success" /> {t.hero.badgeSoc}</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-success" /> {t.hero.badge247}</span>
            <span className="flex items-center gap-2"><Languages className="h-4 w-4 text-success" /> {t.hero.badgeBi}</span>
          </div>
        </div>

        <div className="animate-fade-up relative" style={{ animationDelay: "0.15s" }}>
          <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-elegant">
            <img src={heroImg.url} alt="UHC BPO team" width={1600} height={1100} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/40 via-transparent to-transparent" />
          </div>
          <div className="animate-float absolute -bottom-6 -left-6 hidden w-64 rounded-2xl border border-white/20 bg-white/95 p-4 text-foreground shadow-elegant backdrop-blur sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-success/15 text-success">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{t.hero.floatUplift}</p>
                <p className="font-display text-lg font-bold">+287%</p>
              </div>
            </div>
          </div>
          <div className="animate-float absolute -top-6 -right-6 hidden w-60 rounded-2xl border border-white/20 bg-white/95 p-4 text-foreground shadow-elegant backdrop-blur sm:block" style={{ animationDelay: "1.5s" }}>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{t.hero.floatResp}</p>
                <p className="font-display text-lg font-bold">{t.hero.floatRespVal}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ index, visible }: { index: number; visible: boolean }) {
  const { t } = useI18n();
  const s = STAT_VALUES[index];
  const n = useCounter(s.value, visible, 1600 + index * 200);
  return (
    <div className="text-center">
      <p className="font-display text-4xl font-extrabold text-gradient-brand sm:text-5xl">
        {n}
        {s.suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-muted-foreground">{t.stats[index]}</p>
    </div>
  );
}

function Stats() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="relative -mt-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 rounded-3xl border border-border bg-card p-6 shadow-elegant sm:p-8 lg:grid-cols-4">
        {STAT_VALUES.map((_, i) => (
          <StatItem key={i} index={i} visible={visible} />
        ))}
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
  const { t } = useI18n();
  return (
    <section id="about" className="bg-gradient-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-cta opacity-20 blur-2xl" />
            <img src={teamImg} alt="UHC team" width={1200} height={900} loading="lazy" className="rounded-3xl border border-border shadow-elegant" />
          </div>
          <div>
            <SectionTitle eyebrow={t.about.eyebrow} title={t.about.title} desc={t.about.desc} />
            <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
              {t.about.cards.map((c, i) => {
                const Icon = ABOUT_ICONS[i];
                return (
                  <div key={c.title} className="rounded-2xl border border-border bg-card p-5 shadow-soft transition-transform hover:-translate-y-1">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-3 font-display font-semibold">{c.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow={t.services.eyebrow} title={t.services.title} desc={t.services.desc} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {t.services.items.map((s, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <article
                key={s.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-cta opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-cta text-primary-foreground shadow-soft">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.desc}</p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark">
                  {t.services.learnMore} <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const { t } = useI18n();
  return (
    <section id="why" className="bg-gradient-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow={t.why.eyebrow} title={t.why.title} desc={t.why.desc} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((w, i) => {
            const Icon = WHY_ICONS[i];
            return (
              <div key={w.title} className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-5 font-display font-semibold">{w.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const { t } = useI18n();
  return (
    <section id="process" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow={t.process.eyebrow} title={t.process.title} desc={t.process.desc} />
        <div className="relative mt-16">
          <div className="absolute left-6 top-6 bottom-6 hidden w-0.5 bg-gradient-to-b from-primary via-primary-dark to-transparent lg:left-1/2 lg:top-8 lg:right-8 lg:bottom-auto lg:h-0.5 lg:w-auto lg:bg-gradient-to-r lg:from-transparent lg:via-primary lg:to-transparent" />
          <ol className="grid gap-6 lg:grid-cols-6">
            {t.process.items.map((p, i) => {
              const Icon = PROCESS_ICONS[i];
              return (
                <li key={p.title} className="relative rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-cta text-primary-foreground shadow-soft">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-display text-3xl font-extrabold text-primary/15">0{i + 1}</span>
                  </div>
                  <p className="mt-4 font-display font-semibold">{p.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Sectors() {
  const { t } = useI18n();
  return (
    <section id="sectors" className="bg-gradient-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow={t.sectors.eyebrow} title={t.sectors.title} desc={t.sectors.desc} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.sectors.items.map((s, i) => {
            const Icon = SECTOR_ICONS[i];
            return (
              <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 transition-all group-hover:scale-150 group-hover:bg-primary/10" />
                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-cta text-primary-foreground shadow-soft">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { t } = useI18n();
  const [i, setI] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setI((v) => (v + 1) % t.testimonials.items.length), 6000);
    return () => clearInterval(timer);
  }, [t.testimonials.items.length]);
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {t.testimonials.items.map((tt, idx) => (
            <figure key={tt.name} className={`relative rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 ${idx === i ? "lg:scale-[1.03] lg:shadow-elegant" : ""}`}>
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">"{tt.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img src={TESTIMONIAL_IMGS[idx]} alt={tt.name} width={512} height={512} loading="lazy" className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20" />
                <div>
                  <p className="font-display font-semibold">{tt.name}</p>
                  <p className="text-xs text-muted-foreground">{tt.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2 lg:hidden">
          {t.testimonials.items.map((_, idx) => (
            <button key={idx} aria-label={`Testimonial ${idx + 1}`} onClick={() => setI(idx)} className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-2 bg-border"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-gradient-cta py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="animate-blob absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-success/20 blur-3xl" style={{ animationDelay: "3s" }} />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">{t.cta.title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">{t.cta.desc}</p>
        <a href="#contact" className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-success px-8 py-4 text-base font-bold text-success-foreground shadow-elegant transition-transform hover:-translate-y-1">
          {t.cta.button} <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

function ContactAndFooter() {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    if (name.length < 2) next.name = t.contact.form.errName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = t.contact.form.errEmail;
    if (message.length < 10) next.message = t.contact.form.errMsg;
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
              <SectionTitle eyebrow={t.contact.eyebrow} title={t.contact.title} desc={t.contact.desc} />
              <div className="mx-auto mt-10 max-w-md space-y-4 lg:mx-0">
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t.contact.callUs}</p>
                    <p className="font-display font-semibold">+1 (800) 555-0198</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t.contact.email}</p>
                    <p className="font-display font-semibold">hello@unitedhelpingcenter.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t.contact.hq}</p>
                    <p className="font-display font-semibold">{t.contact.hqValue}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-soft">
                <iframe title="UHC office map" src="https://www.google.com/maps?q=Miami,FL&output=embed" loading="lazy" className="h-64 w-full" />
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-border bg-card p-6 shadow-elegant sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.contact.form.name}</label>
                  <input id="name" name="name" maxLength={100} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder={t.contact.form.namePh} />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.contact.form.email}</label>
                  <input id="email" name="email" type="email" maxLength={255} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder={t.contact.form.emailPh} />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.contact.form.company}</label>
                  <input id="company" name="company" maxLength={100} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder={t.contact.form.companyPh} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.contact.form.message}</label>
                  <textarea id="message" name="message" rows={5} maxLength={1000} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder={t.contact.form.messagePh} />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>
              </div>
              <button type="submit" disabled={status === "sending"} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-success px-6 py-3.5 text-sm font-semibold text-success-foreground shadow-soft transition-transform hover:-translate-y-0.5 disabled:opacity-70">
                {status === "sending" ? t.contact.form.sending : status === "sent" ? t.contact.form.sent : (<>{t.contact.form.send} <Send className="h-4 w-4" /></>)}
              </button>
              {status === "sent" && <p className="mt-3 text-center text-sm text-success">{t.contact.form.thanks}</p>}
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-primary-dark text-white/85">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-white p-1 shadow-sm">
                  <img
                    src={logoAsset.url}
                    alt="United Helping Center logo"
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              <p className="mt-4 text-sm text-white/70">{t.footer.about}</p>
              <div className="mt-6 flex gap-3">
                {[Facebook, Instagram, Linkedin].map((I, k) => (
                  <a key={k} href="#" aria-label="Social link" className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 transition-colors hover:bg-white/15">
                    <I className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-wider text-white">{t.footer.quickLinks}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  { href: "#about", label: t.nav.about },
                  { href: "#services", label: t.nav.services },
                  { href: "#why", label: t.nav.why },
                  { href: "#process", label: t.nav.process },
                  { href: "#sectors", label: t.nav.industries },
                  { href: "#contact", label: t.nav.contact },
                ].map((l) => (
                  <li key={l.href}><a href={l.href} className="transition-colors hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-wider text-white">{t.footer.services}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {t.services.items.slice(0, 6).map((s) => (
                  <li key={s.title}><a href="#services" className="transition-colors hover:text-white">{s.title}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-wider text-white">{t.footer.newsletter}</p>
              <p className="mt-4 text-sm text-white/70">{t.footer.newsletterDesc}</p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex overflow-hidden rounded-xl border border-white/15 bg-white/5">
                <input type="email" aria-label="Email" placeholder={t.footer.newsletterPh} className="flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40" />
                <button type="submit" className="bg-success px-4 text-success-foreground" aria-label="Subscribe">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
            <p>© {new Date().getFullYear()} United Helping Center. {t.footer.rights}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">{t.footer.privacy}</a>
              <a href="#" className="hover:text-white">{t.footer.terms}</a>
              <a href="#" className="hover:text-white">{t.footer.cookies}</a>
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
      <a href="https://wa.me/18005550198" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-success text-success-foreground shadow-elegant transition-transform hover:-translate-y-1">
        <MessageCircle className="h-6 w-6" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-success/60" />
      </a>
      <button aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`fixed bottom-24 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant transition-all ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}>
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
    <I18nProvider>
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
    </I18nProvider>
  );
}
