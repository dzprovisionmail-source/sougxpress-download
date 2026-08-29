/*
 * Style philosophy: «ورق التوصيل» — a warm neo-editorial download page for Soug Express.
 * Keep the official brand assets, paper texture, midnight navy, and Soug orange intact.
 */
import { useState } from "react";
import {
  ArrowDownToLine,
  ArrowLeft,
  Check,
  ChevronDown,
  Clock3,
  HeartHandshake,
  Menu,
  PackageCheck,
  QrCode,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Truck,
  X,
} from "lucide-react";

const APK_URL =
  "./downloads/sougxpress.apk";
const OFFICIAL_LOGO = "./assets/sougxpress-official-logo-user_94f9faa7.png";
const LOGO_ICON = OFFICIAL_LOGO;
const LOGO_FULL = OFFICIAL_LOGO;
const LOGO_WORDMARK = OFFICIAL_LOGO;
const HOME_SCREEN = "./assets/home_3d_ca75c80e.png";
const ORDERS_SCREEN = "./assets/orders_3d_421091ec.png";
const STORE_SCREEN = "./assets/store_3d_cdb970d0.png";
const COURIER_ICON = "./assets/icon-courier_4a6d55ef.png";
const IVORY_SCREEN = "./assets/ivory_theme_71d7ea68.png";
const DARK_SCREEN = "./assets/dark_theme_e7ce6c6f.png";
const QR_URL = "./assets/qr-download_92587ace.png";
const PAPER_HERO = "./assets/sougxpress-paper-hero_9b3bfde3.png";
const PAPER_DETAIL = "./assets/sougxpress-paper-detail_af796a98.png";
const PAPER_FOOTER = "./assets/sougxpress-paper-footer_40b1987d.png";

const navItems = [
  { label: "المميزات", href: "#features" },
  { label: "كيف يعمل", href: "#how-it-works" },
  { label: "للتجار", href: "#merchants" },
];

const features = [
  {
    index: "01",
    title: "السوق أقرب",
    description: "تصفّح ما تحتاجه من المتاجر المحلية في تجربة واحدة واضحة.",
    icon: Store,
    image: HOME_SCREEN,
  },
  {
    index: "02",
    title: "الطلب في مساره",
    description: "تابع حالة طلبك من التأكيد إلى التوصيل دون خطوات زائدة.",
    icon: PackageCheck,
    image: ORDERS_SCREEN,
  },
  {
    index: "03",
    title: "توصيل يعرف الطريق",
    description: "رحلة منظمة بين المتجر والباب، مع حضور واضح للموصل.",
    icon: Truck,
    image: COURIER_ICON,
  },
];

function DownloadButton({ compact = false }: { compact?: boolean }) {
  return (
    <a
      className={compact ? "button button-primary button-compact" : "button button-primary"}
      href={APK_URL}
      download
      target="_blank"
      rel="noreferrer"
    >
      <ArrowDownToLine size={18} strokeWidth={2.4} />
      <span>{compact ? "تحميل APK" : "تحميل التطبيق للأندرويد"}</span>
    </a>
  );
}

function PhoneMockup({ image, label, dark = false }: { image: string; label: string; dark?: boolean }) {
  return (
    <div className={`phone-wrap ${dark ? "phone-wrap-dark" : ""}`}>
      <div className="phone-shadow" />
      <div className="phone-device">
        <div className="phone-speaker" />
        <div className="phone-screen">
          <img src={image} alt={label} loading="lazy" />
        </div>
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
          <a className="brand-lockup" href="#top" aria-label="Soug Express — الصفحة الرئيسية">
            <img className="brand-official-logo" src={LOGO_ICON} alt="Soug Express" />
          </a>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="التنقل الرئيسي">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <DownloadButton compact />
          </nav>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-texture" style={{ backgroundImage: `url(${PAPER_HERO})` }} />
          <div className="hero-inner container">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span className="eyebrow-dot" /> تطبيق السوق والتوصيل المحلي</div>
              <h1 id="hero-title">من رفّ السوق<br /><em>إلى بابك.</em></h1>
              <p className="hero-lead">Soug Express يجمع المتاجر والطلبات والتوصيل في رحلة واحدة واضحة — مصممة لتكون قريبة، سريعة، ومفهومة من أول نقرة.</p>
              <div className="hero-order-note">
                <span className="mono">DOWNLOAD SLIP / 01</span>
                <span>نسخة Android الحالية · 1.0.0</span>
              </div>
              <div className="hero-actions">
                <DownloadButton />
                <a className="text-link" href="#how-it-works"><span>كيف يعمل التطبيق</span><ArrowLeft size={16} /></a>
              </div>
              <div className="hero-meta">
                <span><Check size={14} /> Android APK مباشر</span>
                <span><Check size={14} /> الإصدار 1.0.0</span>
                <span className="mono">com.sougxpress.founder</span>
              </div>
            </div>
            <div className="hero-visual reveal reveal-delay">
              <div className="hero-paper-sheet" aria-hidden="true">
                <div className="paper-sheet-top"><span className="mono">SOUG / EXPRESS</span><span className="mono">ORDER 01</span></div>
                <div className="paper-sheet-rule" />
                <div className="paper-sheet-body"><span>السوق المحلي</span><strong>يوصلك لبابك</strong><span>DELIVERY / DZ</span></div>
                <div className="paper-sheet-barcode" />
              </div>
              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />
              <div className="paper-stamp">جاهز<br /><strong>للطلب</strong></div>
              <div className="hero-logo-card">
                <span className="mono">OFFICIAL MARK</span>
                <img src={LOGO_FULL} alt="الشعار الرسمي لـ Soug Express" />
              </div>
              <div className="hero-phone-cluster">
                <PhoneMockup image={DARK_SCREEN} label="واجهة Soug Express الداكنة" dark />
                <div className="hero-phone-back"><PhoneMockup image={IVORY_SCREEN} label="واجهة Soug Express الفاتحة" /></div>
              </div>
            </div>
          </div>
          <div className="hero-bottom-line" />
        </section>

        <section className="trust-strip" aria-label="معلومات الإصدار">
          <div className="container trust-inner">
            <div className="trust-label"><span className="mono">SOUG / 01</span><span>كل ما تحتاجه في مسار واحد</span></div>
            <div className="trust-items">
              <span><ShieldCheck size={17} /> هوية رسمية</span>
              <span><Smartphone size={17} /> Android أولًا</span>
              <span><Clock3 size={17} /> إصدار مستقر</span>
            </div>
          </div>
        </section>

        <section className="features-section section-pad" id="features" aria-labelledby="features-title">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <div className="eyebrow eyebrow-dark"><span className="eyebrow-dot" /> داخل التطبيق</div>
                <h2 id="features-title">أقل تعقيدًا.<br /><span>أكثر إنجازًا.</span></h2>
              </div>
              <p>صُممت تجربة Soug Express حول ما يريده المستخدم فعلًا: أن يجد، يطلب، ويتابع — دون أن يضيع بين الخطوات.</p>
            </div>
            <div className="feature-rail">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <article className={`feature-card feature-card-${index + 1}`} key={feature.index}>
                    <div className="feature-card-top"><span className="mono">{feature.index}</span><Icon size={19} /></div>
                    <div className="feature-art"><img src={feature.image} alt="" loading="lazy" /></div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="how-section section-pad" id="how-it-works" aria-labelledby="how-title">
          <div className="how-texture" style={{ backgroundImage: `url(${PAPER_DETAIL})` }} />
          <div className="container how-grid">
            <div className="how-copy">
              <div className="eyebrow eyebrow-dark"><span className="eyebrow-dot" /> رحلة الطلب</div>
              <h2 id="how-title">ثلاث خطوات،<br /><span>باب واحد.</span></h2>
              <p>كل مرحلة واضحة في مكانها. لا تحتاج إلى شرح طويل كي تبدأ.</p>
              <div className="route-note"><span className="route-note-line" /><span className="mono">ORDER / FLOW</span></div>
            </div>
            <div className="step-list">
              <div className="step-item"><span className="step-number">01</span><div><h3>اختر من السوق</h3><p>تصفح المتاجر والمنتجات المتاحة بالقرب منك.</p></div><ChevronDown size={18} /></div>
              <div className="step-item"><span className="step-number">02</span><div><h3>أكد طلبك</h3><p>راجع التفاصيل وأرسل الطلب بوضوح.</p></div><ChevronDown size={18} /></div>
              <div className="step-item"><span className="step-number">03</span><div><h3>تابع وصوله</h3><p>ابقَ على اطلاع حتى يصل طلبك إلى الباب.</p></div><Check size={19} /></div>
            </div>
          </div>
        </section>

        <section className="merchant-section section-pad" id="merchants" aria-labelledby="merchant-title">
          <div className="container merchant-grid">
            <div className="merchant-visual">
              <div className="merchant-label mono">FOR LOCAL STORES</div>
              <div className="merchant-image-frame"><img src={STORE_SCREEN} alt="واجهة متجر داخل Soug Express" loading="lazy" /></div>
              <div className="merchant-orb"><img src={COURIER_ICON} alt="" loading="lazy" /></div>
            </div>
            <div className="merchant-copy">
              <div className="eyebrow eyebrow-dark"><span className="eyebrow-dot" /> مساحة للتاجر</div>
              <h2 id="merchant-title">متجرك حاضر<br /><span>في نفس الرحلة.</span></h2>
              <p>Soug Express لا يتوقف عند تجربة العميل. يمنح المتجر حضورًا أوضح لإدارة المنتجات واستقبال الطلبات ومتابعة النشاط من مكان واحد.</p>
              <div className="merchant-points">
                <div><Check size={16} /><span>إدارة واجهة المتجر والمنتجات</span></div>
                <div><Check size={16} /><span>استقبال الطلبات ومتابعة حالتها</span></div>
                <div><Check size={16} /><span>تجربة محلية أقرب إلى عملائك</span></div>
              </div>
              <a className="text-link text-link-dark" href="#download"><span>اكتشف التجربة</span><ArrowLeft size={16} /></a>
            </div>
          </div>
        </section>

        <section className="screens-section section-pad" aria-labelledby="screens-title">
          <div className="container">
            <div className="section-heading screens-heading">
              <div className="eyebrow eyebrow-dark"><span className="eyebrow-dot" /> من داخل Soug Express</div>
              <h2 id="screens-title">واجهة تعرف<br /><span>ما تحتاجه.</span></h2>
            </div>
            <div className="screens-stage">
              <div className="screens-caption"><span className="mono">CURRENT APP ASSETS</span><span>لقطات الثيم الحالية من التطبيق</span></div>
              <div className="screen-card screen-card-main"><PhoneMockup image={DARK_SCREEN} label="لقطة الثيم الداكن الحالية" dark /></div>
              <div className="screen-card screen-card-side screen-card-side-one"><PhoneMockup image={IVORY_SCREEN} label="لقطة الثيم العاجي الحالية" /></div>
              <div className="screen-card screen-card-side screen-card-side-two"><PhoneMockup image={HOME_SCREEN} label="أصل بصري من واجهة السوق" /></div>
            </div>
          </div>
        </section>

        <section className="download-section section-pad" id="download" aria-labelledby="download-title">
          <div className="container download-grid">
            <div className="download-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> جاهز للخطوة التالية؟</div>
              <h2 id="download-title">خلي السوق<br /><em>يوصلك.</em></h2>
              <p>حمّل النسخة الحالية من Soug Express للأندرويد وابدأ أول رحلة طلب.</p>
              <DownloadButton />
              <div className="download-status"><span className="status-dot" /> رابط APK الرسمي من EAS · الإصدار 1.0.0</div>
            </div>
            <div className="qr-panel">
              <div className="qr-copy"><QrCode size={22} /><div><strong>حمّل من هاتفك</strong><span>امسح الرمز لفتح ملف APK</span></div></div>
              <div className="qr-frame"><img src={QR_URL} alt="رمز QR لتحميل تطبيق Soug Express للأندرويد" loading="lazy" /></div>
              <div className="qr-foot mono">ANDROID / DIRECT APK</div>
            </div>
          </div>
          <div className="store-availability container">
            <span>روابط المتاجر الرسمية:</span><span className="store-pill is-muted"><span className="store-pill-dot" /> Google Play غير متاح في المستودع الحالي</span><span className="store-pill is-muted"><span className="store-pill-dot" /> App Store غير متاح في المستودع الحالي</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-texture" style={{ backgroundImage: `url(${PAPER_FOOTER})` }} />
        <div className="container footer-inner">
          <div className="footer-brand"><img className="footer-official-logo" src={LOGO_FULL} alt="Soug Express" /><div><p>سوقك يوصلك لبابك.</p></div></div>
          <div className="footer-right"><span className="mono">SOUG-XPRESS / 2026</span><span>تطبيق السوق والتوصيل المحلي</span></div>
        </div>
      </footer>
    </div>
  );
}
