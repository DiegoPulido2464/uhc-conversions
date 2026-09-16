import { createFileRoute, Link } from "@tanstack/react-router";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  Clock,
  Home,
  Landmark,
  Languages,
  Moon,
  ShieldCheck,
  Sun,
  TrendingUp,
  Users,
} from "lucide-react";

import logoAsset from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/corporate-client")({
  head: () => ({
    meta: [
      { title: "Corporate Client — United Helping Center" },
      {
        name: "description",
        content:
          "Enterprise BPO solutions for large real estate organizations: dedicated pods, SLAs, custom playbooks and bilingual coverage for brokerages, builders, lenders and property managers.",
      },
      { property: "og:title", content: "Corporate Client — United Helping Center" },
      {
        property: "og:description",
        content:
          "Dedicated BPO pods, SLAs and custom playbooks for large real estate organizations across the United States.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CorporateClientPage,
});

/* ------------------------- i18n ------------------------- */

type Lang = "en" | "es";

const dict = {
  en: {
    nav: { back: "Back to home", bookCall: "Book a call" },
    hero: {
      eyebrow: "Enterprise",
      title: "CORPORATE CLIENT",
      desc: "Dedicated BPO pods, SLAs and custom playbooks for large real estate organizations across the United States.",
      cta: "Talk to our enterprise team",
      secondary: "See how we work",
    },
    items: [
      { title: "Brokerages", desc: "Multi-office ISA teams, lead routing and brand-compliant scripts at scale." },
      { title: "Builders & Developers", desc: "High-volume new development inquiry handling and appointment setting." },
      { title: "Mortgage Lenders", desc: "Borrower pre-qualification, document follow-up and loan officer support." },
      { title: "Property Managers", desc: "Tenant screening, maintenance coordination and lease renewal campaigns." },
    ],
    why: {
      eyebrow: "Why enterprise teams choose UHC",
      title: "Built for scale, compliance and results",
      items: [
        { title: "Dedicated pods", desc: "Your own trained team, exclusive to your brand and markets." },
        { title: "SLA-backed service", desc: "Response-time and quality guarantees in every contract." },
        { title: "Compliance-first", desc: "SOC 2 aligned processes, call recording and audit trails." },
        { title: "Executive reporting", desc: "Weekly KPI reviews and a dedicated account manager." },
      ],
    },
    stats: [
      { value: "150+", label: "Enterprise clients" },
      { value: "24/7", label: "Coverage" },
      { value: "98%", label: "Client retention" },
      { value: "<3 min", label: "Avg. lead response" },
    ],
    cta: {
      title: "Let's design your enterprise program",
      desc: "Book a discovery call and we'll build a custom proposal with pricing, SLAs and ramp-up plan for your organization.",
      button: "Book a Free Consultation",
    },
    footer: "© {year} United Helping Center. All rights reserved.",
  },
  es: {
    nav: { back: "Volver al inicio", bookCall: "Agendar llamada" },
    hero: {
      eyebrow: "Empresas",
      title: "CLIENTE CORPORATIVO",
      desc: "Equipos BPO dedicados, SLAs y playbooks personalizados para grandes organizaciones inmobiliarias en Estados Unidos.",
      cta: "Habla con nuestro equipo empresarial",
      secondary: "Cómo trabajamos",
    },
    items: [
      { title: "Corredurías", desc: "Equipos ISA multi-oficina, enrutamiento de leads y guiones ajustados a tu marca." },
      { title: "Constructores y Desarrolladores", desc: "Gestión de alto volumen de consultas de nuevos desarrollos y agendamiento." },
      { title: "Prestamistas Hipotecarios", desc: "Precalificación de prestatarios, seguimiento documental y soporte a oficiales de préstamos." },
      { title: "Administradoras de Propiedades", desc: "Selección de inquilinos, coordinación de mantenimiento y campañas de renovación." },
    ],
    why: {
      eyebrow: "Por qué las empresas eligen UHC",
      title: "Hecho para escalar, cumplir y generar resultados",
      items: [
        { title: "Equipos dedicados", desc: "Tu propio equipo entrenado, exclusivo para tu marca y mercados." },
        { title: "Servicio con SLA", desc: "Garantías de tiempo de respuesta y calidad en cada contrato." },
        { title: "Cumplimiento primero", desc: "Procesos alineados a SOC 2, grabación de llamadas y auditoría." },
        { title: "Reportes ejecutivos", desc: "Revisiones semanales de KPIs y un gerente de cuenta dedicado." },
      ],
    },
    stats: [
      { value: "150+", label: "Clientes empresariales" },
      { value: "24/7", label: "Cobertura" },
      { value: "98%", label: "Retención de clientes" },
      { value: "<3 min", label: "Respuesta promedio" },
    ],
    cta: {
      title: "Diseñemos tu programa empresarial",
      desc: "Agenda una llamada de descubrimiento y crearemos una propuesta a medida con precios, SLAs y plan de arranque para tu organización.",
      button: "Agendar Consultoría Gratis",
    },
    footer: "© {year} United Helping Center. Todos los derechos reservados.",
  },
} as const;

type Dict = (typeof dict)["en"];

const I18nContext = createContext<{ lang: Lang; t: Dict; setLang: (l: Lang) => void }>({
  lang: "en",
  t: dict.en,
  setLang: () => {},
});

function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const saved = localStorage.getItem("uhc-lang") as Lang | null;
    if (saved === "en" || saved === "es") setLangState(saved);
    else if (navigator.language.startsWith("es")) setLangState("es");
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("uhc-lang", l);
  };
  return (
    <I18nContext.Provider value={{ lang, t: dict[lang] as Dict, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

const useI18n = () => useContext(I18nContext);

function LangToggle() {
  const { lang, setLang } = useI18n();
  return (
    <div className="flex items-center gap-1 rounded-xl border border-white/20 bg-white/10 p-1 text-xs font-semibold">
      {(["en", "es"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-lg px-2.5 py-1.5 transition-colors ${
            lang === l ? "bg-primary text-primary-foreground shadow-soft" : "text-white/70 hover:text-white"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

/* ------------------------- Page ------------------------- */

function CorporateClientPage() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header dark={dark} setDark={setDark} />
        <main>
          <Hero />
          <ClientsGrid />
          <WhyEnterprise />
          <CtaBand />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}

function Header({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  const { t } = useI18n();
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-primary-dark/95 text-white shadow-soft backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoAsset.url} alt="United Helping Center logo" width={144} height={48} className="h-10 w-auto object-contain" />
        </Link>
        <div className="flex items-center gap-2">
          <LangToggle />
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark(!dark)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to="/"
            className="hidden items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20 sm:inline-flex"
          >
            <ArrowLeft className="h-4 w-4" /> {t.nav.back}
          </Link>
          <a
            href="/#contact"
            className="hidden items-center gap-2 rounded-xl bg-success px-4 py-2.5 text-sm font-semibold text-success-foreground shadow-soft transition-transform hover:-translate-y-0.5 lg:inline-flex"
          >
            {t.nav.bookCall} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20 text-white sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="animate-blob absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-primary/40 blur-3xl" style={{ animationDelay: "3s" }} />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
          {t.hero.eyebrow}
        </span>
        <h1 className="animate-fade-up mt-6 font-display text-4xl font-bold tracking-tight sm:text-6xl">
          {t.hero.title}
        </h1>
        <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-white/80" style={{ animationDelay: "0.15s" }}>
          {t.hero.desc}
        </p>
        <div className="animate-fade-up mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ animationDelay: "0.3s" }}>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
          >
            {t.hero.cta} <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#clients"
            className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            {t.hero.secondary}
          </a>
        </div>
        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {t.stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <p className="font-display text-2xl font-bold text-primary">{s.value}</p>
              <p className="mt-1 text-xs text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientsGrid() {
  const { t } = useI18n();
  const icons = [Building2, Home, Landmark, Users];
  return (
    <section id="clients" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.title} className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-cta text-primary-foreground shadow-soft">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyEnterprise() {
  const { t } = useI18n();
  const icons = [Users, Clock, ShieldCheck, TrendingUp];
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">{t.why.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{t.why.title}</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {t.why.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.title} className="flex gap-4 rounded-2xl border border-border bg-card p-7 shadow-soft">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-cta text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  const { t } = useI18n();
  return (
    <section className="bg-gradient-cta py-20 text-primary-foreground sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <BadgeCheck className="mx-auto h-10 w-10 opacity-90" />
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{t.cta.title}</h2>
        <p className="mt-4 text-primary-foreground/85">{t.cta.desc}</p>
        <a
          href="/#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary-dark px-7 py-4 text-sm font-semibold text-white shadow-elegant transition-transform hover:-translate-y-0.5"
        >
          {t.cta.button} <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-white p-1 shadow-sm">
            <img src={logoAsset.url} alt="United Helping Center logo" width={40} height={40} className="h-full w-full object-contain" />
          </div>
        </div>
        <p className="text-xs text-white/60">
          {t.footer.replace("{year}", String(new Date().getFullYear()))}
        </p>
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white">
          <ArrowLeft className="h-4 w-4" /> {t.nav.back}
        </Link>
      </div>
    </footer>
  );
}
