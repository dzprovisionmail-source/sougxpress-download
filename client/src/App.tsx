/*
 * Design philosophy: «ورق التوصيل» — premium neo-editorial commerce.
 * This file keeps the official Soug Express mark, factual app evidence, and a mobile-first journey from عين الصفراء to every doorstep.
 */
import { useState } from "react";
import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowUpLeft,
  Check,
  ChevronDown,
  Clock3,
  HeartHandshake,
  MapPin,
  Menu,
  PackageCheck,
  QrCode,
  ShieldCheck,
  Smartphone,
  Store,
  Truck,
  Users,
  X,
} from "lucide-react";

const APK_URL = "https://github.com/dzprovisionmail-source/sougxpress-download/releases/download/v1.0.0/soug-xpress-release.apk";
const APP_VERSION = "1.0.0";
const OFFICIAL_LOGO = "./assets/sougxpress-official-logo-user_94f9faa7.png";
const HOME_SCREEN = "./assets/screens/light_theme.png";
const DARK_SCREEN = "./assets/screens/dark_theme.png";
const IVORY_SCREEN = "./assets/screens/ivory_theme.png";
const STORE_ART = "./assets/store_3d_cdb970d0.png";
const COURIER_ART = "./assets/icon-courier_4a6d55ef.png";
const QR_URL = "./assets/qr-download_92587ace.png";
const PAPER_HERO = "./assets/sougxpress-paper-hero_9b3bfde3.webp";
const PAPER_DETAIL = "./assets/sougxpress-paper-detail_af796a98.webp";
const PAPER_FOOTER = "./assets/sougxpress-paper-footer_40b1987d.webp";

const navItems = [
  { label: "المميزات", href: "#value" },
  { label: "كيف يعمل", href: "#how-it-works" },
  { label: "للتجار", href: "#merchants" },
];

const featureCards = [
  { index: "01", title: "السوق قريب", description: "اكتشف ما يقدمه السوق المحلي في تجربة واحدة مرتبة.", icon: Store, image: HOME_SCREEN },
  { index: "02", title: "الطلب واضح", description: "اختر المنتجات، راجع طلبك، وتابع مساره خطوة بخطوة.", icon: PackageCheck, image: IVORY_SCREEN },
  { index: "03", title: "الباب هو النهاية", description: "رحلة منظمة بين التاجر والموصل والزبون حتى الاستلام.", icon: Truck, image: DARK_SCREEN },
];

const journeySteps = [
  { number: "01", title: "اكتشف", text: "تعرّف على المتاجر والمنتجات المتاحة في محيطك.", icon: MapPin },
  { number: "02", title: "اختر", text: "ضع ما تحتاجه في طلب واضح وبسيط.", icon: Store },
  { number: "03", title: "اطلب", text: "أكد التفاصيل وأرسل طلبك إلى المتجر.", icon: PackageCheck },
  { number: "04", title: "تابع", text: "ابقَ قريبًا من حالة الطلب أثناء التجهيز والتوصيل.", icon: Clock3 },
  { number: "05", title: "استلم", text: "ينتهي المسار عند بابك، حيث يجب أن يصل السوق.", icon: HeartHandshake },
];

function DownloadButton({ compact = false }: { compact?: boolean }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleDownloadStart = () => {
    setIsOpening(true);
    window.setTimeout(() => setIsOpening(false), 1200);
  };

  return (
    <a
      className={compact ? "button button-primary button-compact" : "button button-primary"}
      href={APK_URL}
      onClick={handleDownloadStart}
      aria-label={isOpening ? "جارٍ فتح تنزيل التطبيق في المتصفح" : "تحميل تطبيق Soug-XPRESS"}
    >
      <ArrowDownToLine size={18} strokeWidth={2.4} />
      <span>{isOpening ? "جارٍ فتح التنزيل…" : compact ? "تحميل APK" : "تحميل التطبيق"}</span>
    </a>
  );
}

function PhoneMockup({ image, label, dark = false, className = "" }: { image: string; label: string; dark?: boolean; className?: string }) {
  return (
    <div className={`phone-wrap ${dark ? "phone-wrap-dark" : ""} ${className}`}>
      <div className="phone-shadow" />
      <div className="phone-device">
        <div className="phone-speaker" />
        <div className="phone-screen"><img src={image} alt={label} loading="lazy" /></div>
        <div className="phone-home-indicator" />
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand-lockup" href="#top" aria-label="Soug Express — الصفحة الرئيسية"><img className="brand-official-logo" src={OFFICIAL_LOGO} alt="Soug Express" /></a>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="التنقل الرئيسي">
            {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
            <DownloadButton compact />
          </nav>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-texture" style={{ backgroundImage: `url(${PAPER_HERO})` }} />
          <div className="hero-inner container">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span className="eyebrow-dot" /> من عين الصفراء إلى كل الجزائر</div>
              <h1 id="hero-title">سوقك<br /><em>يوصلك لبابك.</em></h1>
              <p className="hero-lead">Soug Express منصة السوق والتوصيل المحلي. نبدأ من عين الصفراء، ونبني خطوة بخطوة تجربة أقرب للتاجر والزبون في كل الجزائر.</p>
              <div className="hero-order-note"><span className="mono">DELIVERY NOTE / 01</span><span>النسخة الحالية · Android APK</span></div>
              <div className="hero-actions"><DownloadButton /><a className="text-link" href="#how-it-works"><span>اكتشف الرحلة</span><ArrowLeft size={16} /></a></div>
              <div className="hero-meta"><span><Check size={14} /> تحميل مباشر للأندرويد</span><span><ShieldCheck size={14} /> رابط APK موثق</span><span className="mono">SOUG / DZ</span></div>
            </div>
            <div className="hero-visual reveal reveal-delay">
              <div className="hero-paper-sheet" aria-hidden="true"><div className="paper-sheet-top"><span className="mono">SOUG / EXPRESS</span><span className="mono">DZ-01</span></div><div className="paper-sheet-rule" /><div className="paper-sheet-body"><span>نقطة الانطلاق</span><strong>عين<br />الصفراء</strong><span>إلى كل باب</span></div><div className="paper-sheet-route"><span /><i /><span /></div><div className="paper-sheet-barcode" /></div>
              <div className="paper-stamp">من هنا<br /><strong>تبدأ الرحلة</strong></div>
              <div className="hero-logo-card"><span className="mono">OFFICIAL MARK</span><img src={OFFICIAL_LOGO} alt="الشعار الرسمي لـ Soug Express" /></div>
              <div className="hero-phone-cluster"><PhoneMockup image={DARK_SCREEN} label="واجهة التطبيق الفعلية بالثيم الداكن" dark /><div className="hero-phone-back"><PhoneMockup image={IVORY_SCREEN} label="واجهة التطبيق الفعلية بالثيم العاجي" /></div></div>
            </div>
          </div>
          <div className="hero-bottom-line" />
        </section>

        <section className="origin-strip" aria-label="نقطة انطلاق Soug Express"><div className="container origin-inner"><div className="origin-marker"><MapPin size={18} /><span className="mono">DZ / 01</span></div><div className="origin-copy"><strong>نبدأ محليًا من عين الصفراء.</strong><span>نتوسع تدريجيًا مع كل متجر، وكل طلب، وكل باب.</span></div><div className="route-dots" aria-hidden="true"><span /><i /><span /><i /><span /></div></div></section>

        <section className="value-section section-pad" id="value" aria-labelledby="value-title"><div className="container"><div className="section-heading split-heading"><div><div className="eyebrow eyebrow-dark"><span className="eyebrow-dot" /> قيمة في كل مسار</div><h2 id="value-title">من السوق<br /><span>إلى البيت.</span></h2></div><p>منصة واحدة تصل المتاجر بزبائنها، وتحوّل الطلب اليومي إلى رحلة مفهومة وقريبة من الواقع المحلي.</p></div><div className="feature-rail">{featureCards.map((feature, index) => { const Icon = feature.icon; return <article className={`feature-card feature-card-${index + 1}`} key={feature.index}><div className="feature-card-top"><span className="mono">{feature.index}</span><Icon size={19} /></div><div className="feature-art"><img src={feature.image} alt={`لقطة فعلية من التطبيق — ${feature.title}`} loading="lazy" /></div><h3>{feature.title}</h3><p>{feature.description}</p></article>; })}</div></div></section>

        <section className="how-section section-pad" id="how-it-works" aria-labelledby="how-title"><div className="how-texture" style={{ backgroundImage: `url(${PAPER_DETAIL})` }} /><div className="container how-grid"><div className="how-copy"><div className="eyebrow eyebrow-dark"><span className="eyebrow-dot" /> رحلة الطلب</div><h2 id="how-title">اكتشف.<br /><span>اختر. اطلب.</span></h2><p>خمس محطات قصيرة، ومسار واحد واضح من لحظة اكتشاف المنتج حتى الاستلام.</p><div className="route-note"><span className="route-note-line" /><span className="mono">ORDER / FLOW</span></div></div><div className="step-list">{journeySteps.map((step) => { const Icon = step.icon; return <div className="step-item" key={step.number}><span className="step-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><Icon size={18} /></div>; })}</div></div></section>

        <section className="cycle-section section-pad" aria-labelledby="cycle-title"><div className="container"><div className="section-heading cycle-heading"><div className="eyebrow eyebrow-dark"><span className="eyebrow-dot" /> الدورة التجارية</div><h2 id="cycle-title">كل طرف يعرف<br /><span>خطوته التالية.</span></h2></div><div className="cycle-route"><div className="cycle-line" />{[{ label: "التاجر", icon: Store }, { label: "المنتجات", icon: PackageCheck }, { label: "الزبون", icon: Users }, { label: "الطلب", icon: Smartphone }, { label: "تجهيز الطلب", icon: ShieldCheck }, { label: "التوصيل", icon: Truck }, { label: "باب الزبون", icon: HeartHandshake }].map(({ label, icon: Icon }, index) => <div className={`cycle-node cycle-node-${index + 1}`} key={label}><span className="cycle-icon"><Icon size={20} /></span><strong>{label}</strong></div>)}</div><p className="cycle-caption">التاجر يعرض، الزبون يختار، الطلب يتحرك، وتجهيز الطلب يسبق الوصول إلى باب الزبون.</p></div></section>

        <section className="merchant-section section-pad" id="merchants" aria-labelledby="merchant-title"><div className="container merchant-grid"><div className="merchant-visual"><div className="merchant-label mono">FOR LOCAL STORES</div><div className="merchant-image-frame"><img src={STORE_ART} alt="عنصر بصري يمثل المتجر المحلي" loading="lazy" /></div><div className="merchant-orb"><img src={COURIER_ART} alt="عنصر بصري يمثل التوصيل" loading="lazy" /></div></div><div className="merchant-copy"><div className="eyebrow eyebrow-dark"><span className="eyebrow-dot" /> قيمة للتاجر</div><h2 id="merchant-title">متجرك حاضر<br /><span>في نفس الرحلة.</span></h2><p>Soug Express يمنح المتجر المحلي مساحة أوضح لعرض المنتجات واستقبال الطلبات ومتابعة المسار، دون أن يفقد قربه من زبائنه.</p><div className="merchant-points"><div><Check size={16} /><span>واجهة أقرب لاكتشاف منتجاتك</span></div><div><Check size={16} /><span>مسار واضح لاستقبال الطلبات</span></div><div><Check size={16} /><span>صلة مباشرة مع تجربة التوصيل</span></div></div><a className="text-link text-link-dark" href="#download"><span>انضم إلى الرحلة</span><ArrowLeft size={16} /></a></div></div></section>

        <section className="screens-section section-pad" aria-labelledby="screens-title"><div className="container"><div className="section-heading screens-heading"><div className="eyebrow eyebrow-dark"><span className="eyebrow-dot" /> دليل من داخل التطبيق</div><h2 id="screens-title">شاشات فعلية.<br /><span>رحلة مفهومة.</span></h2><p>هذه المعاينات مأخوذة من أصول الثيم الحالية للتطبيق، داخل إطارات هاتف واضحة بدل رسومات تخمينية.</p></div><div className="screens-stage"><div className="screens-caption"><span className="mono">CURRENT APP BUILD / PREVIEW</span><span>لقطات الثيم الحالية</span></div><div className="screen-card screen-card-main"><PhoneMockup image={HOME_SCREEN} label="واجهة التطبيق الفعلية بالثيم الفاتح" /></div><div className="screen-card screen-card-side screen-card-side-one"><PhoneMockup image={IVORY_SCREEN} label="واجهة التطبيق الفعلية بالثيم العاجي" /></div><div className="screen-card screen-card-side screen-card-side-two"><PhoneMockup image={DARK_SCREEN} label="واجهة التطبيق الفعلية بالثيم الداكن" dark /></div></div></div></section>

        <section className="download-section section-pad" id="download" aria-labelledby="download-title"><div className="container download-grid"><div className="download-copy"><div className="eyebrow"><span className="eyebrow-dot" /> جاهز للخطوة التالية؟</div><h2 id="download-title">سوقك<br /><em>يوصلك لبابك.</em></h2><p>حمّل النسخة الحالية للأندرويد وابدأ رحلة Soug Express من عين الصفراء.</p><DownloadButton /><div className="download-status"><span className="status-dot" /> APK مباشر · Android · Soug-XPRESS v{APP_VERSION} · الإصدار الموثق في آخر Build محفوظ</div></div><div className="qr-panel"><div className="qr-copy"><QrCode size={22} /><div><strong>افتحها من هاتفك</strong><span>امسح الرمز لفتح رابط APK</span></div></div><div className="qr-frame"><img src={QR_URL} alt="رمز QR لتحميل تطبيق Soug Express للأندرويد" loading="lazy" /></div><div className="qr-foot mono">ANDROID / DIRECT APK</div></div></div><div className="store-availability container"><span>روابط المتاجر الرسمية:</span><span className="store-pill is-muted"><span className="store-pill-dot" /> Google Play غير متاح في المستودع الحالي</span><span className="store-pill is-muted"><span className="store-pill-dot" /> App Store غير متاح في المستودع الحالي</span></div></section>
      </main>

      <footer className="site-footer"><div className="footer-texture" style={{ backgroundImage: `url(${PAPER_FOOTER})` }} /><div className="container footer-inner"><div className="footer-brand"><img className="footer-official-logo" src={OFFICIAL_LOGO} alt="Soug Express" /><div><p>سوقك يوصلك لبابك.</p><span>من عين الصفراء إلى كل الجزائر.</span></div></div><div className="footer-right"><span className="mono">SOUG-XPRESS / 2026</span><span>المطور: محمد علي بن سالم</span></div></div></footer>
    </div>
  );
}
