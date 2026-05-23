import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DomainCard from './components/DomainCard';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import CertificationCard from './components/CertificationCard';
import SectionHeading from './components/SectionHeading';
import SocialLinks from './components/SocialLinks';
import { personalInfo, experience, projects, certifications, skills } from './data/portfolioData';
import { domains } from './data/commonData';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="home" id="home">
          <div className="home-content">
            <h3>Hi, I'm</h3>
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
              <img src="/images/profile.JPG" alt={personalInfo.name} className="profile-pic" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about" id="about">
          <div className="about-img">
            <img src="/images/profile.JPG" alt="About Priyal" />
          </div>
          <div className="about-text">
            <h2>About <span>Me</span></h2>
            <h4>Full-Stack Engineer & Founder</h4>
            <p>
              I am a passionate developer with a knack for building scalable applications and solving real-world problems.
              With a strong foundation in computer science and hands-on experience in modern web technologies, I love
              transforming ideas into robust products. My journey involves not just writing clean code, but also leading technical teams and successfully launching
              ventures like Coding Champs and PhotoDost. I thrive in dynamic environments where technology meets business impact.
            </p>
            <a href="#experience" className="btn-box">View Experience</a>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills" id="skills">
          <SectionHeading title="Technical" subtitle="Skills" />

          <div className="skills-container">
            {Object.entries(skills).map(([category, items]) => (
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

        {/* Experience Section */}
        <section className="experience" id="experience">
          <SectionHeading title="Work" subtitle="Experience" />
          <div className="experience-container">
            {experience.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects" id="projects">
          <SectionHeading title="Featured" subtitle="Projects" />
          <div className="projects-container">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="certifications" id="certifications">
          <SectionHeading title="My" subtitle="Certifications" />
          <div className="certifications-container">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} />
            ))}
          </div>
        </section>

        {/* Domain Navigation Section */}
        <section className="domains" id="domains">
          <SectionHeading title="Explore" subtitle="Domains" />
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
              />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact" id="contact">
          <div className="contact-content">
            <SectionHeading title="Contact" subtitle="Me" />
            <p className="contact-desc">
              I am currently open to full-time, internship, and freelance opportunities. 
              Whether you have a strategic project, need full-stack expertise, or just want to connect—let's talk.
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
            
            <div className="contact-resume-cta" style={{ marginTop: '2rem' }}>
              <a href={personalInfo.resumeUrl} className="btn-box resume-btn" download>
                <i className='bx bxs-download' style={{ marginRight: '8px' }}></i> Download Resume
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