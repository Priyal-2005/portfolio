import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import DomainCard from './components/DomainCard';
import CertificationCard from './components/CertificationCard';
import SectionHeading from './components/SectionHeading';
import SocialLinks from './components/SocialLinks';
import {
  personalInfo,
  homeAbout,
  homeSkills,
  homeCertifications,
  domains,
} from './data/commonData';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="home" id="home">
          <div className="home-content">
            <h3>Hi, I&apos;m</h3>
            <h1>{personalInfo.name}</h1>
            <h3><span className="text">{personalInfo.role}</span></h3>
            <p>{personalInfo.bio}</p>

            <SocialLinks className="home-sci" />

            <div className="btn-group">
              <a href={personalInfo.resumeUrl} className="btn-box resume-btn" download>Download Resume</a>
              <a href="#contact" className="btn-box btn-secondary">Get In Touch</a>
            </div>
          </div>

          <div className="profile-container" role="img" aria-label={`Profile picture of ${personalInfo.name}`}>
            <div className="profile-box">
              <Image src="/images/profile.JPG" alt={personalInfo.name} className="profile-pic" width={320} height={320} priority />
            </div>
          </div>
        </section>

        {/* Domain Navigation Section — primary navigation layer */}
        <section className="domains" id="domains">
          <SectionHeading title="Explore My" subtitle="Engineering Domains" />
          <p className="domains-desc">
            My work spans two engineering disciplines. Dive into either domain to see
            focused experience, projects, and skills.
          </p>
          <div className="domains-container">
            {domains.map((domain) => (
              <DomainCard
                key={domain.id}
                title={domain.title}
                description={domain.description}
                href={domain.href}
                icon={domain.icon}
                tags={domain.tags}
                theme={domain.theme}
              />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="about" id="about">
          <div className="about-img">
            <Image src="/images/profile.JPG" alt="About Priyal" width={350} height={400} />
          </div>
          <div className="about-text">
            <h2>About <span>Me</span></h2>
            <h4>{homeAbout.subtitle}</h4>
            {homeAbout.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <a href="#domains" className="btn-box">Explore Domains</a>
          </div>
        </section>

        {/* Unified Skills Section */}
        <section className="skills" id="skills">
          <SectionHeading title="Technical" subtitle="Skills" />

          <div className="skills-container">
            {Object.entries(homeSkills).map(([category, items]) => (
              <div key={category} className="skill-category" data-category={category}>
                <h3>{category}</h3>
                <div className="skill-list">
                  {items.map((skill) => (
                    <span key={skill} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section — Entrepreneurship & Cross-Domain */}
        <section className="certifications" id="certifications">
          <SectionHeading title="Entrepreneurship" subtitle="Certifications" />
          <div className="certifications-container">
            {homeCertifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact" id="contact">
          <div className="contact-content">
            <SectionHeading title="Contact" subtitle="Me" />
            <p className="contact-desc">
              I am currently open to full-time, internship, and freelance opportunities. 
              Whether you have a strategic project, need full-stack expertise, or just want to connect—let&apos;s talk.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <i className='bx bxs-envelope'></i>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
              <div className="contact-item">
                <i className='bx bxs-phone'></i>
                <span>{personalInfo.phone}</span>
              </div>
              <div className="contact-item">
                <i className='bx bxs-location-plus'></i>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <SocialLinks className="contact-socials" />
            
            <div className="contact-resume-cta">
              <a href={personalInfo.resumeUrl} className="btn-box resume-btn" download>
                <i className='bx bxs-download'></i> Download Resume
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" aria-label="Contact Form">
              <div className="input-box">
                <input type="text" placeholder="Full Name" required aria-label="Full Name" />
                <input type="email" placeholder="Email Address" required aria-label="Email Address" />
              </div>
              <div className="input-box">
                <input type="tel" placeholder="Mobile Number" aria-label="Mobile Number" />
                <input type="text" placeholder="Email Subject" aria-label="Email Subject" />
              </div>
              <textarea cols="30" rows="10" placeholder="Your Message" required aria-label="Your Message"></textarea>
              <button type="submit" className="btn-box form-btn">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}