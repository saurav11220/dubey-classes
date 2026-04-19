import {
  Phone,
  MapPin,
  BookOpen,
  Star,
  GraduationCap,
  CheckCircle2,
  MessageCircle,
  Users,
  Trophy,
  Clock,
} from 'lucide-react'

export default function App() {
  const programs = [
    {
      title: 'Classes 1 to 10',
      subtitle: 'All Subjects',
      desc: 'Complete academic support with concept clarity, homework help, revision, and exam preparation for school students.',
      icon: <BookOpen size={24} />,
    },
    {
      title: 'Classes 11 & 12',
      subtitle: 'Physics, Chemistry, Mathematics',
      desc: 'Focused teaching for PCM students with step-by-step explanation, practice sessions, and stronger board preparation.',
      icon: <GraduationCap size={24} />,
    },
    {
      title: 'Home Tuition',
      subtitle: 'Ghitorni & South Delhi',
      desc: 'Personalized one-to-one or small group learning at home with individual attention and flexible support.',
      icon: <MessageCircle size={24} />,
    },
  ]

  const highlights = [
    '50+ students taught in the past 1 year',
    'Home tuition available in Ghitorni and nearby South Delhi areas',
    'All subjects up to Class 10',
    'PCM for Class 11 and 12',
    'Regular practice and exam-focused guidance',
    'Personal attention for weak students',
  ]

  const reasons = [
    'Concept-based teaching, not rote learning',
    'Support for homework, revision, and school exams',
    'Comfortable environment for steady improvement',
    'Special focus on weak areas and doubt solving',
  ]

  const subjects = [
    'All Subjects up to 10th',
    'Physics',
    'Chemistry',
    'Mathematics',
    'English',
    'Hindi',
    'Social Science',
    'Exam Preparation',
  ]

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container header-inner">
          <div>
            <h1 className="brand-title">Dubey Classes</h1>
            <p className="brand-subtitle">Premium Tuition Centre & Home Tuition</p>
          </div>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#home-tuition">Home Tuition</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-bg"></div>
          <div className="container hero-grid">
            <div>
              <div className="pill-badge">
                <Star size={16} />
                <span>Trusted by 50+ students in the past 1 year</span>
              </div>

              <h2 className="hero-title">Better learning, stronger basics, and smarter results.</h2>

              <p className="hero-text">
                Dubey Classes offers premium tuition for students from Class 1 to 12, along with
                personalized home tuition in Ghitorni and nearby areas of South Delhi.
              </p>

              <div className="cta-row">
                <a href="tel:9873714122" className="btn btn-dark">
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
                <a href="#contact" className="btn btn-light">
                  <MessageCircle size={18} />
                  <span>Enquire Now</span>
                </a>
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  <p className="stat-value">1–12</p>
                  <p className="stat-label">Classes Covered</p>
                </div>
                <div className="stat-card">
                  <p className="stat-value">50+</p>
                  <p className="stat-label">Students Taught</p>
                </div>
                <div className="stat-card">
                  <p className="stat-value small">Home Tuition</p>
                  <p className="stat-label">South Delhi</p>
                </div>
              </div>
            </div>

            <div className="highlight-wrap">
              <div className="highlight-card">
                <p className="section-kicker dark">Why choose us</p>
                <h3 className="highlight-title">A trusted place for focused study and real progress</h3>
                <div className="highlight-list">
                  {highlights.map((item) => (
                    <div key={item} className="highlight-item">
                      <CheckCircle2 size={18} />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section section-muted">
          <div className="container two-col">
            <div>
              <p className="section-kicker">About Dubey Classes</p>
              <h3 className="section-title">Premium tuition support for school students with personal attention.</h3>
              <p className="section-text">
                At Dubey Classes, we teach students from Class 1 to 12 with a strong focus on
                concept clarity, regular practice, and exam confidence. We believe every student can
                improve with the right support and discipline.
              </p>
              <p className="section-text">
                For Class 11 and 12, we teach Physics, Chemistry, and Mathematics. For students up
                to Class 10, we provide all subjects with proper guidance, revision, and exam-focused
                preparation.
              </p>
            </div>

            <div className="reason-grid">
              {reasons.map((item) => (
                <div key={item} className="reason-card">
                  <div className="icon-box">
                    <Trophy size={20} />
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="programs" className="section">
          <div className="container">
            <div className="section-head center">
              <p className="section-kicker">Programs</p>
              <h3 className="section-title centered">Courses designed for school success</h3>
              <p className="section-text centered narrow">
                Choose classroom tuition or home tuition based on your child’s academic needs and
                learning style.
              </p>
            </div>

            <div className="program-grid">
              {programs.map((program) => (
                <div key={program.title} className="program-card">
                  <div className="icon-box">{program.icon}</div>
                  <h4>{program.title}</h4>
                  <p className="program-subtitle">{program.subtitle}</p>
                  <p className="program-desc">{program.desc}</p>
                  <a href="#contact" className="link-arrow">
                    Enquire for Admission →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="home-tuition" className="section section-dark">
          <div className="container two-col home-grid">
            <div>
              <p className="section-kicker dark">Home Tuition</p>
              <h3 className="section-title light">Personalized home tuition in Ghitorni and South Delhi</h3>
              <p className="section-text light">
                Home tuition is available for students who need personal guidance, focused doubt
                solving, and a flexible learning schedule in a comfortable home environment.
              </p>
              <div className="feature-list">
                {[
                  'One-to-one attention for better understanding',
                  'Ideal for weak students and board exam preparation',
                  'Available in Ghitorni and nearby South Delhi areas',
                  'Timing and fees shared on direct contact',
                ].map((item) => (
                  <div key={item} className="feature-item">
                    <CheckCircle2 size={18} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="enquiry-card">
              <h4>Quick Enquiry</h4>
              <p>Contact Dubey Classes for admissions, home tuition, fees, and timings.</p>
              <form className="enquiry-form" onSubmit={(e) => e.preventDefault()}>
                <input placeholder="Student Name" />
                <input placeholder="Class" />
                <input placeholder="Subject Needed" />
                <input placeholder="Phone Number" />
                <button type="submit" className="btn btn-dark full">Submit Enquiry</button>
              </form>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container subject-section">
            <div className="section-head">
              <p className="section-kicker">Subjects Offered</p>
              <h3 className="section-title">Strong subject coverage for every stage</h3>
              <p className="section-text narrow">
                We teach all subjects up to Class 10, and Physics, Chemistry, and Mathematics for
                Class 11 and 12.
              </p>
            </div>
            <div className="subject-grid">
              {subjects.map((subject) => (
                <div key={subject} className="subject-card">{subject}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container">
            <div className="section-head center">
              <p className="section-kicker">Why Parents Trust Us</p>
              <h3 className="section-title centered">A learning environment built for confidence and progress</h3>
            </div>
            <div className="trust-grid">
              <div className="trust-card">
                <Users size={34} />
                <h4>Personal Attention</h4>
                <p>
                  Every student gets careful guidance according to their level, pace, and weak areas.
                </p>
              </div>
              <div className="trust-card">
                <Clock size={34} />
                <h4>Regular Practice</h4>
                <p>
                  Consistent revision, homework support, and practice sessions help students improve steadily.
                </p>
              </div>
              <div className="trust-card">
                <Trophy size={34} />
                <h4>Exam Readiness</h4>
                <p>
                  Focused preparation, subject understanding, and doubt solving help students perform better.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-grid">
            <div>
              <p className="section-kicker">Contact Us</p>
              <h3 className="section-title">Get in touch for admission, home tuition, timing, and fees</h3>
              <p className="section-text">
                Parents can contact us directly for student admission, subject details, home tuition
                availability, timing, and fee information.
              </p>

              <div className="contact-list">
                <div className="contact-item">
                  <div className="icon-box dark-box"><Phone size={20} /></div>
                  <div>
                    <p className="contact-heading">Phone / WhatsApp</p>
                    <p className="contact-text">+91 9873714122</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon-box dark-box"><MapPin size={20} /></div>
                  <div>
                    <p className="contact-heading">Address</p>
                    <p className="contact-text">
                      Sudama Chowk, New Keshav Colony, Gali No. 2, Ghitorni, New Delhi - 110030
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-cta-card">
              <h4>Ready to join Dubey Classes?</h4>
              <p>For timing and fees, please contact directly on phone or WhatsApp.</p>
              <div className="cta-stack">
                <a href="tel:9873714122" className="btn btn-light full dark-text">
                  <Phone size={18} />
                  <span>Call 9873714122</span>
                </a>
                <a href="https://wa.me/919873714122" target="_blank" rel="noreferrer" className="btn btn-outline full light-outline">
                  <MessageCircle size={18} />
                  <span>WhatsApp Now</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
