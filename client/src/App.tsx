import { useState } from "react";
import {
  ArrowDownToLine,
  ArrowLeft,
  Check,
  Clock3,
  MapPin,
  Menu,
  Package,
  Search,
  ShoppingCart,
  Store,
  Truck,
  Users,
  X,
  Zap,
} from "lucide-react";

const APK_URL = "https://expo.dev/artifacts/eas/Yg5PGYZyhLBdc74jsY93xT88PkS0mn5Tp4_J0_DZM7A.apk";
const APP_VERSION = "1.0.0";
const OFFICIAL_LOGO = "./assets/sougxpress-official-logo-user_94f9faa7.png";

const features = [
  { icon: Store, title: "تسوّق محليًا", text: "قرّب السوق والمتاجر التي تعرفها إلى هاتفك." },
  { icon: Search, title: "اكتشف بسهولة", text: "ابحث عن المنتجات والمتاجر في تجربة واضحة." },
  { icon: Package, title: "اطلب بثقة", text: "راجع طلبك وأرسله بخطوات قصيرة ومفهومة." },
  { icon: Truck, title: "تابع التوصيل", text: "ابقَ قريبًا من طلبك حتى يصل إلى بابك." },
];

const steps = [
  { number: "01", title: "حمّل التطبيق", text: "ثبّت Soug-XPRESS على Android وابدأ." },
  { number: "02", title: "اختر ما تحتاج", text: "تصفّح المتجر والمنتجات وأضف طلبك." },
  { number: "03", title: "أرسل وتابع", text: "أكد التفاصيل وتابع رحلة التوصيل." },
];

function DownloadButton({ compact = false }: { compact?: boolean }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleDownloadStart = () => {
    setIsOpening(true);
    window.setTimeout(() => setIsOpening(false), 1200);
  };

  return (
    <a
      className={`download-button ${compact ? "download-button-compact" : ""}`}
      href={APK_URL}
      onClick={handleDownloadStart}
      aria-label={isOpening ? "جارٍ فتح تنزيل التطبيق في المتصفح" : "تحميل تطبيق Soug-XPRESS"}
    >
      <ArrowDownToLine size={compact ? 17 : 20} strokeWidth={2.5} />
      <span>{isOpening ? "جارٍ فتح التنزيل…" : compact ? "تحميل APK" : "تحميل التطبيق"}</span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell" dir="rtl">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Soug-XPRESS — الصفحة الرئيسية">
            <span className="brand-mark"><img src={OFFICIAL_LOGO} alt="" /></span>
            <span className="brand-name">Soug<span>-XPRESS</span></span>
          </a>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="التنقل الرئيسي">
            <a href="#features" onClick={() => setMenuOpen(false)}>المميزات</a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>كيف يعمل</a>
            <a href="#download" onClick={() => setMenuOpen(false)}>التنزيل</a>
            <DownloadButton compact />
          </nav>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><Zap size={15} fill="currentColor" /> تجربة السوق المحلي أسرع</div>
              <h1>Soug<span>-XPRESS</span></h1>
              <p className="hero-lead">السوق القريب، بين يديك. اكتشف المتاجر والمنتجات، اطلب بسهولة، وتابع التوصيل حتى بابك.</p>
              <div className="hero-actions"><DownloadButton /><span className="platform-note"><AndroidIcon /> Android APK · v{APP_VERSION}</span></div>
              <div className="hero-trust"><span><Check size={15} /> تنزيل مباشر</span><span><Check size={15} /> تجربة محلية</span><span><Check size={15} /> إصدار موثق</span></div>
            </div>
            <div className="hero-visual" aria-label="هوية Soug-XPRESS">
              <div className="visual-ring visual-ring-back" />
              <div className="visual-ring visual-ring-front" />
              <div className="logo-card"><span className="logo-card-label">OFFICIAL APP</span><img src={OFFICIAL_LOGO} alt="شعار Soug-XPRESS الرسمي" /><div className="logo-card-bottom"><span>SOUG / DZ</span><span>01</span></div></div>
              <div className="visual-chip chip-top"><Store size={16} /><span>سوقك قريب</span></div>
              <div className="visual-chip chip-bottom"><Truck size={16} /><span>إلى بابك</span></div>
            </div>
          </div>
          <div className="hero-bottom container"><span className="mono">LOCAL COMMERCE / 01</span><span>من عين الصفراء إلى كل الجزائر</span><span className="hero-line" /></div>
        </section>

        <section className="features-section section" id="features">
          <div className="container">
            <div className="section-intro"><div><span className="section-kicker">لماذا Soug-XPRESS؟</span><h2>كل ما تحتاجه<br /><em>في مسار واحد.</em></h2></div><p>هوية واحدة تجمع المتجر والمنتج والطلب والتوصيل في تجربة خفيفة وواضحة.</p></div>
            <div className="feature-grid">{features.map(({ icon: Icon, title, text }, index) => <article className={`feature-card feature-card-${index + 1}`} key={title}><span className="feature-number">0{index + 1}</span><div className="feature-icon"><Icon size={24} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </section>

        <section className="how-section section" id="how-it-works">
          <div className="container how-grid"><div className="how-copy"><span className="section-kicker">كيف تبدأ؟</span><h2>ثلاث خطوات.<br /><em>رحلة أوضح.</em></h2><p>صمّمنا التجربة لتكون قريبة من يومك: افتح، اختر، وأرسل طلبك.</p><div className="how-route"><span /><i /><span /></div></div><div className="steps-list">{steps.map((step) => <div className="step" key={step.number}><span className="step-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><ArrowLeft size={18} /></div>)}</div></div>
        </section>

        <section className="download-section section" id="download">
          <div className="container download-card"><div className="download-art"><div className="download-orbit orbit-one" /><div className="download-orbit orbit-two" /><div className="download-icon"><ArrowDownToLine size={34} /></div></div><div className="download-copy"><span className="section-kicker">النسخة الحالية</span><h2>جاهز للخطوة<br /><em>التالية؟</em></h2><p>حمّل Soug-XPRESS على Android وابدأ رحلة السوق القريب.</p><div className="release-meta"><span><span className="meta-dot" /> Soug-XPRESS v{APP_VERSION}</span><span><span className="meta-dot" /> Android</span><span><span className="meta-dot" /> APK مباشر</span></div><DownloadButton /></div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><a className="brand" href="#top" aria-label="Soug-XPRESS"><span className="brand-mark"><img src={OFFICIAL_LOGO} alt="" /></span><span className="brand-name">Soug<span>-XPRESS</span></span></a><div className="footer-center"><span>سوقك يوصلك لبابك.</span><small>الإصدار الحالي v{APP_VERSION} · Android</small></div><div className="footer-end"><MapPin size={15} /> عين الصفراء · الجزائر</div></div></footer>
    </div>
  );
}

function AndroidIcon() {
  return <span className="android-icon" aria-hidden="true"><span /><span /></span>;
}

export default App;
