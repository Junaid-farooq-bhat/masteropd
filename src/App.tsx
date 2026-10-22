import { useEffect, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  FileText,
  HeartPulse,
  Menu,
  Microscope,
  PencilLine,
  ShieldAlert,
  Stethoscope,
  X,
  Zap,
} from 'lucide-react';

const checkoutUrl = 'https://superprofile.bio/vp/opd-diseases-pocket-guide---guide-for-every-medical-student';

const featureCards = [
  { icon: HeartPulse, title: '68 common OPD diseases', text: 'A practical spread across fevers, respiratory, gastrointestinal, metabolic, dermatology and more.' },
  { icon: Stethoscope, title: 'Real-world symptoms', text: 'Patient complaints are explained in Hindi and English, the way they are commonly described.' },
  { icon: ClipboardCheck, title: 'Diagnostic criteria', text: 'Structured disease-specific information to help you revise the right clinical points.' },
  { icon: Microscope, title: 'Relevant investigations', text: 'A focused reference to investigations associated with the conditions covered.' },
  { icon: FileText, title: 'Medicine information', text: 'Generic names, brand information, doses, duration and medicine function as included in the guide.' },
  { icon: BabyIcon, title: 'Pediatric dose sections', text: 'Separate pediatric guidance where provided, with a clear reminder to verify every dose.' },
  { icon: ShieldAlert, title: 'Red flags & referral', text: 'Warning signs and considerations for urgent assessment, referral or admission.' },
  { icon: BookOpen, title: 'Additional clinical sections', text: 'IPD protocols, Ayurvedic alternatives, patient advice and follow-up information.' },
];

const audience = [
  'MBBS, BAMS, BHMS, BDS & BPTH students',
  'Medical interns',
  'Medical practitioners',
  'Nursing students',
  'Healthcare professionals',
  'Clinical examination candidates',
];

const sampleTestimonials = [
  ['Dr. Aarav Mehta', 'Medical intern', '“A practical layout with investigations, dosage information and referral considerations is the kind of resource I look for during clinical learning.”'],
  ['Ananya Sharma', 'MBBS student', '“Having common OPD topics organized in one place would make clinical revision easier.”'],
  ['Riya Nair', 'Nursing student', '“I prefer study resources that are easy to navigate and help me revise important clinical concepts.”'],
  ['Kunal Verma', 'Healthcare professional', '“A well-organized pocket reference can be useful for reviewing common conditions and identifying areas that need further verification.”'],
];

const faqs = [
  ['What is the Master OPD Pocket Guide?', 'It is a digital PDF reference covering 68 common OPD diseases and related clinical information.'],
  ['Who can benefit from this guide?', 'It is designed for medical students, interns, practitioners, nursing students, healthcare professionals and people preparing for clinical examinations.'],
  ['Is the guide available in Hindi and English?', 'The product includes patient symptom descriptions in Hindi and English. Confirm the language coverage of every section before making broader claims.'],
  ['What information does it contain?', 'It covers disease-specific diagnostic criteria, investigations, medicine information, dosage and duration guidance, pediatric sections, red flags, patient advice and follow-up, according to the actual content.'],
  ['How much does it cost?', 'The listed one-time price is ₹249.'],
  ['Is this a physical book?', 'No. It is a digital PDF download.'],
  ['How will I receive it?', 'Digital access is provided after successful payment through the configured delivery process.'],
  ['Can this guide replace medical textbooks or official guidelines?', 'No. It is a supplementary reference. Verify clinical decisions against current authoritative guidelines, patient-specific findings and appropriate professional supervision.'],
];

function BabyIcon({ size = 24, strokeWidth = 1.8 }: { size?: number; strokeWidth?: number }) {
  return <span className="baby-icon" style={{ width: size, height: size, fontSize: size * 0.58, borderWidth: strokeWidth }}>+</span>;
}

function PreviewPage({ second = false }: { second?: boolean }) {
  const groups = second
    ? [
        ['F. Musculoskeletal', ['Low Back Pain', 'Osteoarthritis (Knee)', 'Cervical Spondylosis / Neck Pain', 'Gout (Acute Gouty Arthritis)', 'Sprain / Muscle Strain', 'Rheumatoid Arthritis (Suspect & Early Referral)']],
        ['G. Urology', ['Urinary Tract Infection (Uncomplicated Cystitis)', 'Renal Colic (Ureteric Stone)', 'Benign Prostatic Hyperplasia (BPH)']],
        ['H. Gynaecology & Obstetrics', ['Primary Dysmenorrhea', 'Abnormal Uterine Bleeding (Menorrhagia)', 'Vaginal Candidiasis', 'Bacterial Vaginosis', 'Polycystic Ovary Syndrome (PCOS)', 'Nausea & Vomiting of Pregnancy']],
        ['I. Dermatology', ['Scabies', 'Tinea (Dermatophytosis / Ringworm)', 'Acne Vulgaris', 'Atopic Dermatitis / Eczema', 'Urticaria (Hives)', 'Pyoderma / Impetigo / Boils']],
        ['J. Eye, ENT, Dental & Emergency', ['Acute Conjunctivitis (Red Eye)', 'Asthous Ulcers (Mouth Ulcers)', 'Toothache / Dental Abscess', 'Epistaxis (Nosebleed)', 'Anaphylaxis / Severe Allergic Reaction']],
      ]
    : [
        ['A. Fever & Infections', ['Common Cold / Upper Respiratory Tract Infection', 'Acute Pharyngitis / Tonsillitis', 'Influenza / Viral Fever', 'Dengue Fever', 'Malaria', 'Typhoid (Enteric) Fever', 'Acute Sinusitis', 'Acute Otitis Media (Ear Infection)', 'Chikungunya', 'Pulmonary Tuberculosis (Suspect & Refer)']],
        ['B. Respiratory', ['Acute Bronchitis', 'Community-Acquired Pneumonia (Mild, OPD)', 'Bronchial Asthma', 'COPD (Chronic Obstructive Pulmonary Disease)', 'Allergic Rhinitis']],
        ['C. Gastro-Intestinal', ['Acute Gastroenteritis / Diarrhoea', 'GERD / Acidity (Gastro-Oesophageal Reflux)', 'Peptic Ulcer Disease / Dyspepsia', 'Constipation', 'Intestinal Worm Infestation', 'Amoebiasis / Giardiasis', 'Acute Viral Hepatitis (A / E)', 'Irritable Bowel Syndrome (IBS)', 'Haemorrhoids (Piles)', 'Anal Fissure']],
        ['D. Metabolic, CVS & Blood', ['Hypertension', 'Type 2 Diabetes Mellitus', 'Hypothyroidism', 'Dyslipidaemia', 'Iron Deficiency Anaemia', 'Vitamin D Deficiency', 'Vitamin B12 Deficiency', 'Acute Chest Pain - OPD Triage', 'Obesity / Overweight']],
        ['E. Neuro & Psychiatry', ['Tension-Type Headache', 'Migraine', 'Vertigo (BPPV)', 'Anxiety Disorder', 'Insomnia', 'Febrile Seizure (Child)']],
      ];
  return <div className="preview-page"><div className="preview-title">Contents</div>{groups.map(([title, rows], index) => <div className="toc-group" key={title as string}><div className={`toc-heading tone-${index}`}>{title as string}<span>{second ? 54 + index * 7 : [9, 20, 26, 37, 47][index]}</span></div>{(rows as string[]).map((row, rowIndex) => <div className="toc-row" key={row}><span>{second ? 41 + index * 9 + rowIndex : index * 10 + rowIndex + 1}. {row}</span><small>{second ? 55 + index * 7 + rowIndex : 10 + index * 10 + rowIndex}</small></div>)}</div>)}<div className="preview-footer">Master OPD Pocket Guide &nbsp; | &nbsp; Educational reference · verify doses with current guidelines</div></div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [timeLeft, setTimeLeft] = useState(12 * 60 * 60);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft((current) => (current <= 1 ? 12 * 60 * 60 : current - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <div className="site-shell">
      <div className="top-offer-bar"><span>EARLY ACCESS PRICE</span><strong>₹249</strong><span className="top-offer-divider">·</span><span>Ends in</span><b>{hours}:{minutes}:{seconds}</b><a href={checkoutUrl} target="_blank" rel="noreferrer">Get instant access <ArrowRight size={14} /></a></div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Master OPD Pocket Guide home"><span className="brand-mark"><HeartPulse size={21} /></span><span>Master <b>OPD</b></span></a>
        <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}><a href="#inside" onClick={() => setMenuOpen(false)}>Inside the guide</a><a href="#preview" onClick={() => setMenuOpen(false)}>Preview</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a><a className="nav-cta" href={checkoutUrl} target="_blank" rel="noreferrer">Get the guide <ArrowRight size={16} /></a></nav>
      </header>

      <main id="top">
        <section className="hero section-wrap"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot" /> DIGITAL MEDICAL PDF <span className="eyebrow-line" /> LIFETIME ACCESS</div><h1>Make every OPD revision <em>more practical.</em></h1><p className="hero-lede">The pocket-sized clinical reference for the conditions you see, revise and discuss most often.</p><p className="hero-body">Master OPD Pocket Guide brings 68 common OPD diseases into one structured, bilingual reference — with investigations, medicine information, pediatric sections, patient advice and red flags.</p><div className="hero-price"><s>₹2,599+</s><strong>₹249</strong><span>one-time payment · lifetime access</span></div><div className="hero-actions"><a className="button button-primary" href={checkoutUrl} target="_blank" rel="noreferrer">Get instant access <span>₹249</span> <ArrowRight size={18} /></a><a className="text-link" href="#preview">Explore what's inside <ArrowRight size={17} /></a></div><div className="trust-row"><div className="avatar-stack"><span>MB</span><span>IN</span><span>OP</span></div><span><strong>Built for clinical learning</strong><br />Students, interns & healthcare professionals</span></div></div><div className="hero-art"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="floating-note"><Zap size={15} /> 15 min daily revision</div><div className="book-shadow" /><div className="book"><div className="book-topline">CLINICAL REFERENCE · 2025</div><div className="book-cross"><HeartPulse size={44} strokeWidth={1.4} /></div><div className="book-kicker">THE</div><div className="book-title">MASTER<br /><span>OPD</span><br />POCKET GUIDE</div><div className="book-subtitle">68 common diseases<br />Practical. Structured. Bilingual.</div><div className="book-bottom"><span>FOR MEDICAL STUDENTS<br />& CLINICIANS</span><span className="book-seal">OPD<br />68</span></div></div><div className="phone"><div className="phone-notch" /><div className="phone-screen"><div className="mini-label">MASTER OPD</div><div className="mini-line wide" /><div className="mini-line" /><div className="mini-card teal" /><div className="mini-card blue" /><div className="mini-card orange" /><div className="mini-footer" /></div></div></div></section>

        <div className="proof-strip"><div><span className="proof-number">68</span><span>common OPD<br />diseases</span></div><div><span className="proof-number">2</span><span>languages for<br />symptom descriptions</span></div><div><span className="proof-number">₹249</span><span>one-time payment<br />lifetime access</span></div><div><span className="proof-number">PDF</span><span>instant digital<br />delivery after payment</span></div></div>

        <section className="section-wrap problem-section"><div className="section-intro"><div className="eyebrow">WHEN EVERY MINUTE COUNTS</div><h2>Less searching.<br /><em>More clinical clarity.</em></h2><p>Busy OPDs and exam prep have one thing in common: you need the right information without wading through an entire textbook.</p></div><div className="problem-grid"><article><div className="icon-box blue-icon"><Clock3 /></div><h3>Find information faster</h3><p>Navigate common disease topics in a structured, practical format built for quick revision.</p></article><article><div className="icon-box teal-icon"><FileText /></div><h3>Understand the prescription</h3><p>Review generic names, doses, duration and medicine function as documented in the guide.</p></article><article><div className="icon-box orange-icon"><ShieldAlert /></div><h3>Recognize red flags</h3><p>Keep warning signs and referral considerations visible while you learn and review.</p></article></div></section>

        <section className="inside-section" id="inside"><div className="section-wrap"><div className="section-heading centered"><div className="eyebrow">WHAT'S INSIDE</div><h2>Your OPD essentials,<br /><em>all in one place.</em></h2><p>Designed to help you move from a patient complaint to a more organized clinical review.</p></div><div className="feature-grid">{featureCards.map(({ icon: Icon, title, text }, index) => <article className="feature-card" key={title}><span className="feature-index">0{index + 1}</span><div className="feature-icon"><Icon size={22} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section className="preview-section section-wrap" id="preview"><div className="preview-copy"><div className="eyebrow">A CLEARER WAY TO REVISE</div><h2>See the structure<br /><em>before you buy.</em></h2><p>The supplied contents pages show the guide's organized clinical index across fever, respiratory, gastro-intestinal, metabolic, neurological, musculoskeletal, dermatology and emergency topics.</p><div className="check-list"><span><Check size={16} /> Structured contents</span><span><Check size={16} /> Practical topic grouping</span><span><Check size={16} /> Hindi + English symptom descriptions</span></div><a className="button button-dark" href={checkoutUrl} target="_blank" rel="noreferrer">Get the complete guide <ArrowRight size={18} /></a></div><div className="preview-gallery"><div className="page-wrap first-page"><PreviewPage /></div><div className="page-wrap second-page"><PreviewPage second /></div><span className="sample-label">CONTENTS PREVIEW · SUPPLIED SAMPLE PAGES</span></div></section>

        <section className="habit-section"><div className="section-wrap habit-layout"><div><div className="eyebrow">A SIMPLE DAILY SYSTEM</div><h2>Read. Write.<br /><em>Revise.</em></h2><p>Page 2 of the guide introduces a focused 15-minute routine — a suggested study habit, not a guaranteed outcome.</p></div><div className="steps"><div className="step"><span>01</span><div><h3>Read</h3><p>Review one disease or a short section.</p></div></div><div className="step active"><span>02</span><div><h3>Write</h3><p>Note the important diagnostic and management points.</p></div></div><div className="step"><span>03</span><div><h3>Revise</h3><p>Revisit the information to reinforce learning.</p></div></div></div><div className="habit-card"><PencilLine size={23} /><strong>15 minutes</strong><span>a suggested daily revision routine</span></div></div></section>

        <section className="audience-section section-wrap"><div className="section-heading"><div className="eyebrow">MADE FOR YOUR CLINICAL JOURNEY</div><h2>For the people<br /><em>doing the work.</em></h2></div><div className="audience-grid">{audience.map((item, index) => <div className="audience-item" key={item}><span>0{index + 1}</span><strong>{item}</strong><ArrowRight size={17} /></div>)}</div><p className="scope-note">Use this guide within your qualifications, training and scope of practice. It is a supplementary reference — not a replacement for clinical education or professional judgment.</p></section>

        <section className="testimonial-section"><div className="section-wrap"><div className="section-heading centered"><div className="eyebrow">ILLUSTRATIVE READER VOICES</div><h2>What readers look for<br /><em>in practical resources.</em></h2><p>These are named illustrative examples for layout only, not verified customer reviews.</p></div><div className="testimonial-grid">{sampleTestimonials.map(([name, role, quote]) => <article className="testimonial" key={name}><div className="quote-mark">“</div><p>{quote}</p><div><strong>{name}</strong><span>{role} · illustrative example, not a verified review</span></div></article>)}</div></div></section>

        <section className="offer-section section-wrap"><div className="offer-card"><div className="offer-left"><div className="eyebrow">YOUR CLINICAL POCKET REFERENCE</div><h2>One guide.<br /><em>₹249. One time.</em></h2><p>Practical information for the topics that come up again and again in OPD learning.</p><div className="offer-list">{['68 common OPD diseases','Hindi + English symptom descriptions','Diagnostic & investigation references','Medicine and pediatric dose sections','Red flags, patient advice & follow-up','Digital PDF · lifetime access'].map(item => <span key={item}><Check size={16} />{item}</span>)}</div></div><div className="price-box"><span>Stated reference value</span><s>₹2,599+</s><small>One-time payment</small><strong>₹249</strong><span>Instant digital access after successful payment</span><div className="countdown"><Clock3 size={14} /> Offer timer <b>{hours}:{minutes}:{seconds}</b></div><a className="button button-primary" href={checkoutUrl} target="_blank" rel="noreferrer">Buy now <ArrowRight size={18} /></a><p>No recurring subscription. Subject to the seller's stated terms.</p></div></div></section>

        <section className="faq-section section-wrap" id="faq"><div className="faq-intro"><div className="eyebrow">QUESTIONS, ANSWERED</div><h2>Good to know<br /><em>before you begin.</em></h2><p>Clear expectations help you use the guide responsibly and get the most from it.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'is-open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={18} /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></section>

      </main>

      <footer className="site-footer"><div className="section-wrap footer-grid"><div><a className="brand footer-brand" href="#top"><span className="brand-mark"><HeartPulse size={21} /></span><span>Master <b>OPD</b></span></a><p>A practical digital reference for everyday clinical learning.</p></div><div className="footer-links"><a href="#inside">Inside the guide</a><a href="#preview">Preview</a><a href="#faq">FAQ</a><a href={checkoutUrl} target="_blank" rel="noreferrer">Checkout</a></div><div className="footer-note">Digital product · ₹249 one-time payment<br />Verify all clinical information with current authoritative sources.</div></div><div className="section-wrap footer-bottom"><span>© 2025 Master OPD Pocket Guide</span><span>Privacy · Terms · Refund policy · Medical disclaimer</span></div></footer>
      <a className="sticky-buy" href={checkoutUrl} target="_blank" rel="noreferrer"><span>Get instant access</span><strong>₹249 <ArrowRight size={17} /></strong></a>
    </div>
  );
}

export default App;
