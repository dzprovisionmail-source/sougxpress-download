import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpLeft,
  Check,
  ChevronLeft,
  Download,
  MapPin,
  Menu,
  PackageCheck,
  ShieldCheck,
  Truck,
  X,
  Zap,
} from "lucide-react";

const APK_URL = "https://github.com/dzprovisionmail-source/sougxpress-download/releases/download/v1.0.0/soug-xpress-release.apk";
const APP_VERSION = "1.0.0";
const APK_SIZE = "حوالي 130 MB";
const BASE_URL = import.meta.env.BASE_URL;

const asset = (name: string) => `${BASE_URL}assets/official/${name}`;

const features = [
  {
    icon: "icon-shopping.png",
    title: "التسوق المحلي",
    text: "اكتشف ما تحتاجه من متاجر قريبة، في تجربة مرتبة وواضحة.",
    tone: "orange",
  },
  {
    icon: "icon-store.png",
    title: "متاجر في مكان واحد",
    text: "تصفح المتاجر والمنتجات بسهولة، واتخذ قرارك بثقة.",
    tone: "blue",
  },
  {
    icon: "orders-3d.png",
    title: "طلب أبسط",
    text: "أضف اختياراتك وأرسل الطلب بخطوات قصيرة ومفهومة.",
    tone: "light",
  },
  {
    icon: "icon-courier.png",
    title: "توصيل حتى بابك",
    text: "ابقَ قريبًا من طلبك وتابع رحلته حتى يصل إليك.",
    tone: "navy",
  },
];

const steps = [
  {
    number: "01",
    title: "اكتشف",
    text: "ابدأ من المتاجر والمنتجات القريبة منك.",
    image: "search-3d.png",
  },
  {
    number: "02",
    title: "اختر",
    text: "قارن ما يناسبك وأضفه إلى سلتك.",
    image: "cart-3d.png",
  },
  {
    number: "03",
    title: "اطلب",
    text: "راجع التفاصيل وأرسل طلبك بثوانٍ.",
    image: "payment-3d.png",
  },
  {
    number: "04",
    title: "تابع",
    text: "راقب رحلة التوصيل حتى بابك.",
    image: "track-3d.png",
  },
];

function DownloadButton({ compact = false }: { compact?: boolean }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleDownloadStart = () => {
    setIsOpening(true);
    window.setTimeout(() => setIsOpening(false), 1600);
  };

  return (
    <a
      className={`download-button ${compact ? "download-button-compact" : ""}`}
      href={APK_URL}
      onClick={handleDownloadStart}
      aria-label={isOpening ? "جارٍ فتح تنزيل التطبيق" : "تحميل تطبيق Soug-XPRESS"}
    >
      <Download size={compact ? 17 : 19} strokeWidth={2.6} />
      <span>{isOpening ? "جارٍ فتح التنزيل…" : compact ? "تحميل APK" : "تحميل التطبيق"}</span>
      {!compact && <ArrowLeft size={17} strokeWidth={2.5} />}
    </a>
  );
}

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand ${footer ? "brand-footer" : ""}`} href="#top" aria-label="Soug-XPRESS — الصفحة الرئيسية">
      <span className="brand-icon"><img src={asset("logo-icon.png")} alt="" /></span>
      <span className="brand-wordmark"><img src={asset("logo-horizontal.png")} alt="Soug-XPRESS" /></span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" dir="rtl">
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="التنقل الرئيسي">
            <a href="#features" onClick={closeMenu}>المميزات</a>
            <a href="#how-it-works" onClick={closeMenu}>كيف يعمل</a>
            <a href="#download" onClick={closeMenu}>التنزيل</a>
            <DownloadButton compact />
          </nav>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /><span>تجربة السوق المحلي، بشكل أسرع</span></div>
              <h1>السوق القريب،<br /><em>بين يديك.</em></h1>
              <p className="hero-lead">اكتشف المتاجر والمنتجات، اطلب بسهولة، وتابع التوصيل حتى بابك مع Soug-XPRESS.</p>
              <div className="hero-actions">
                <DownloadButton />
                <span className="platform-note"><ShieldCheck size={17} /> Android <b>•</b> v{APP_VERSION} <b>•</b> {APK_SIZE}</span>
              </div>
              <div className="hero-proof" aria-label="معلومات الإصدار">
                <span><Check size={14} /> تنزيل مباشر</span>
                <span><Check size={14} /> إصدار رسمي</span>
                <span><Check size={14} /> تجربة محلية</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="شخصية Soug-XPRESS الرسمية">
              <div className="hero-glow hero-glow-orange" />
              <div className="hero-glow hero-glow-blue" />
              <div className="hero-orbit hero-orbit-one" />
              <div className="hero-orbit hero-orbit-two" />
              <div className="hero-note hero-note-top"><Zap size={15} fill="currentColor" /> سوقك أقرب</div>
              <div className="hero-note hero-note-bottom"><Truck size={15} /> إلى بابك</div>
              <div className="hero-art-frame">
                <img src={asset("mascot-scooter.png")} alt="شخصية Soug-XPRESS على دراجة التوصيل" />
              </div>
              <div className="hero-stamp"><span>LOCAL</span><strong>01</strong><span>COMMERCE</span></div>
            </div>
          </div>
          <div className="hero-bottom-bar container"><span>من عين الصفراء إلى كل الجزائر</span><i /><span className="mono">SOUG / XPRESS</span></div>
        </section>

        <section className="download-banner-section" id="download">
          <div className="container">
            <div className="download-banner">
              <div className="download-banner-accent" />
              <div className="download-app-icon"><img src={asset("logo-icon.png")} alt="أيقونة تطبيق Soug-XPRESS" /></div>
              <div className="download-details">
                <span className="section-kicker">النسخة الرسمية المتاحة الآن</span>
                <h2>حمّل Soug-XPRESS وابدأ.</h2>
                <p>كل ما تحتاجه من السوق المحلي، في تطبيق واحد.</p>
                <div className="download-meta" aria-label="تفاصيل التطبيق">
                  <span><b>Android</b></span>
                  <span>v{APP_VERSION}</span>
                  <span>{APK_SIZE}</span>
                  <span>APK مباشر</span>
                </div>
              </div>
              <DownloadButton />
            </div>
          </div>
        </section>

        <section className="section features-section" id="features">
          <div className="container">
            <div className="section-heading section-heading-split">
              <div>
                <span className="section-kicker">لماذا Soug-XPRESS؟</span>
                <h2>أقرب إلى يومك.<br /><em>أوضح في كل خطوة.</em></h2>
              </div>
              <p>من المتجر إلى بابك، صُممت التجربة لتجمع الاكتشاف والطلب والتوصيل في مسار واحد.</p>
            </div>
            <div className="feature-grid">
              {features.map((feature) => (
                <article className={`feature-card feature-card-${feature.tone}`} key={feature.title}>
                  <div className="feature-card-top"><span className="feature-index">0{features.indexOf(feature) + 1}</span><ArrowUpLeft size={18} /></div>
                  <div className="feature-image"><img src={asset(feature.icon)} alt="" /></div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section how-section" id="how-it-works">
          <div className="container how-grid">
            <div className="how-copy">
              <span className="section-kicker">كيف تبدأ؟</span>
              <h2>أربع خطوات،<br /><em>رحلة أوضح.</em></h2>
              <p>افتح التطبيق، اختر ما تحتاجه، وأرسل طلبك. الباقي نوصله إليك.</p>
              <div className="how-signature"><span>DISCOVER</span><i /><span>ORDER</span><i /><span>DELIVER</span></div>
            </div>
            <div className="steps-grid">
              {steps.map((step) => (
                <article className="step-card" key={step.number}>
                  <div className="step-card-head"><span>{step.number}</span><ChevronLeft size={17} /></div>
                  <img src={asset(step.image)} alt="" />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section version-section">
          <div className="container version-layout">
            <div className="version-copy">
              <span className="section-kicker">جاهز للخطوة التالية؟</span>
              <h2>نسخة خفيفة،<br /><em>سوق أقرب.</em></h2>
              <p>ثبّت الإصدار الرسمي على Android وابدأ تجربة Soug-XPRESS من هاتفك.</p>
              <DownloadButton />
            </div>
            <div className="version-card">
              <div className="version-card-top"><span className="mono">RELEASE / 01</span><PackageCheck size={20} /></div>
              <img src={asset("logo-horizontal.png")} alt="Soug-XPRESS" />
              <div className="version-name"><strong>v{APP_VERSION}</strong><span>Android APK</span></div>
              <div className="version-facts"><span><b>الحجم</b>{APK_SIZE}</span><span><b>المنصة</b>Android</span><span><b>الحالة</b>متاح الآن</span></div>
              <div className="version-card-line" />
              <span className="version-note"><ShieldCheck size={15} /> ملف رسمي موثق</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <Brand footer />
          <div className="footer-copy"><span>سوقك يوصلك لبابك.</span><small>Soug-XPRESS v{APP_VERSION} · Android</small></div>
          <div className="footer-location"><MapPin size={15} /> عين الصفراء · الجزائر</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
