// Portfolio Data
const portfolioData = {
  "projects": [
    {
      "id": 1,
      "title": "E-Commerce Web Application",
      "description": "Developed a full-stack e-commerce web app using Angular, Express.js, and MySQL. Implemented advanced product search with query correction by type, name, and color, improving accuracy by 30%. Integrated JWT authentication for secure user sessions and deployed via GitHub Pages.",
      "category": "Personal Projects",
      "image": "https://lh3.googleusercontent.com/pw/AP1GczMxsWq95nkRt9ZbjC_4Fl4ugZoO08dYWvZkpRNC0lgCVZQ0iOSwPpTP7SerEE9MMcOAu_mzgkCFHAqPjc6-nzwvkbXO5Hexzxb6spHTVg_LdGrFM8-o5f_017QMHngZnkb6ZxFz5iTDqriaB8Z-w0_zSg=w1919-h826-s-no-gm?authuser=0",
      "technologies": [
        "Angular",
        "Node.js",
        "Express.js",
        "MySQL",
        "JWT"
      ],
      "github": "https://github.com/tarunboricha/angular-crud",
      "demo": "https://tarunboricha.github.io/e-commerce",
      "achievements": [
        "Built modular Angular components with reusable design patterns",
        "Improved search accuracy by 30% using query correction",
        "Enhanced security through JWT-based authentication"
      ]
    },
    {
      "id": 2,
      "title": "Keeper Web Application",
      "description": "Created a note-keeping web app inspired by Google Keep, featuring CRUD functionality, user authentication, and personalized note storage. Utilized React for the frontend and Express.js with MySQL for backend and database integration. Deployed via GitHub Pages and ngrok.",
      "category": "Personal Projects",
      "image": "https://lh3.googleusercontent.com/pw/AP1GczNpcT3bbL04v4hf_h7nehOcUK_sMVfa0-rnJ7GvzrcZ4wBfZ43f9zJU5Qfc-v_Q0V84qvor3Hjtweq-U3upvgHUcjh0Q7BRsCO0omVHX7gB3DzCzz7eGCa_RKFt2XYwB3BIf6Six-g43VO9fU9PZISwzQ=w1023-h573-s-no-gm?authuser=0",
      "technologies": [
        "React",
        "Express.js",
        "MySQL",
        "Node.js"
      ],
      "github": "https://github.com/tarunboricha/React-Keeper",
      "demo": "https://tarunboricha.github.io/React-Keeper",
      "achievements": [
        "Developed a responsive React UI for quick note management",
        "Implemented secure authentication and user-specific storage",
        "Successfully deployed with a lightweight backend using ngrok"
      ]
    },
    {
      "id": 3,
      "title": "Hardware Manufacturing Task Management System",
      "description": "Designed a database-driven workflow management system for hardware manufacturing. Supported 50+ concurrent users with optimized SQL queries, real-time task tracking, and CRUD operations for improved resource allocation efficiency.",
      "category": "Academic Project",
      "image": "https://lh3.googleusercontent.com/pw/AP1GczPaQaIfIjA2O9_GroWzRqQtQrrQ7lfLraj3GZsjFjL8QzF2MmtPOyMg-jJiGLPt-FbubGQSDSeGZg4fS8rdOAmLRQKQIANc3l_RtP_UyKg638VUl-ivM8j_MvJ8niDEgDo3ooX_jquLK-8l43mKAwnF0g=w1035-h699-s-no-gm?authuser=0",
      "technologies": [
        "MySQL",
        "SQL",
        "Java",
        "Database Design"
      ],
      "github": "https://github.com/tarunboricha/Hardware-Manufacturing-Task-Management-System",
      "demo": "https://drive.google.com/file/d/1fGAMzV7JmTrCJuLTlTTrRadkUCP0y6zd/view?usp=sharing",
      "achievements": [
        "Enabled real-time tracking and reporting for manufacturing tasks",
        "Reduced query execution time by 45% through optimized SQL design",
        "Improved resource allocation efficiency by 35%"
      ]
    }
  ],
  "experience": [
    {
      "id": 1,
      "company": "First American (India)",
      "logo": "FA",
      "role": "Software Engineer",
      "duration": "Jul 2025 — Present",
      "description": "Enhancing AI-based automation framework for large-scale property and tax data extraction across U.S. counties.",
      "achievements": [
        "Building fault-tolerant modules for distributed web scraping and data validation",
        "Improving scalability and maintainability of automation systems",
        "Collaborating on AI-assisted automation architecture for high-volume data processing"
      ]
    },
    {
      "id": 2,
      "company": "First American (India)",
      "logo": "FA",
      "role": "Member Technical Staff",
      "duration": "Jul 2024 — Jul 2025",
      "description": "Developed an AI-assisted scraping framework using C#, Selenium, and Azure OpenAI to handle frequent website layout changes across 3,000+ county sites.",
      "achievements": [
        "Created dynamic JavaScript-based extraction logic stored in database for runtime execution and self-updating",
        "Implemented automated logic recovery using Azure OpenAI to generate new JS scripts during layout changes",
        "Reduced Azure OpenAI API costs by optimizing field-level data extraction logic",
        "Delivered a scalable, low-maintenance data automation system used in title policy workflows"
      ]
    },
    {
      "id": 3,
      "company": "First American (India)",
      "logo": "FA",
      "role": "Technical Trainee",
      "duration": "Apr 2024 — Jun 2024",
      "description": "Trained in Angular, ASP.NET Core, and SDLC best practices for building enterprise-grade web applications.",
      "achievements": [
        "Learned full-stack development and CI/CD workflows for production-ready solutions",
        "Gained exposure to frontend and backend integration using REST APIs"
      ]
    },
    {
      "id": 4,
      "company": "Clomotech Pvt. Ltd.",
      "logo": "CL",
      "role": "Frontend Developer",
      "duration": "Mar 2023 — Jul 2023",
      "description": "Developed responsive Angular-based web applications integrated with RESTful APIs and optimized for performance.",
      "achievements": [
        "Enhanced UI responsiveness and accessibility for enterprise platforms",
        "Collaborated with backend team to build reusable components and improve data flow",
        "Resolved 15+ UI bugs and implemented multiple user-facing feature enhancements"
      ]
    }
  ]
};

// Theme Management
class ThemeService {
  constructor() {
    this.themeKey = 'portfolio-theme';
    this.theme = this.getStoredTheme() || 'dark';
    this.applyTheme();
  }

  getStoredTheme() {
    // Use in-memory storage instead of localStorage
    return null;
  }

  setStoredTheme(theme) {
    // In-memory storage only - no localStorage
    this.storedTheme = theme;
  }

  toggle() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme();
    this.setStoredTheme(this.theme);
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
  }
}

// Scroll Animation Service
class ScrollAnimationService {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    this.observer = null;
    this.init();
  }

  init() {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(this.onIntersection.bind(this), this.observerOptions);
      this.observeElements();
    } else {
      // Fallback for older browsers
      this.showAllElements();
    }
  }

  observeElements() {
    const elements = document.querySelectorAll('.reveal-on-scroll, .fun-fact-card, .skill-category, .project-card, .timeline-item');
    elements.forEach(el => this.observer.observe(el));
  }

  onIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Animate skill bars
        if (entry.target.classList.contains('skill-category')) {
          this.animateSkillBars(entry.target);
        }
      }
    });
  }

  animateSkillBars(container) {
    const progressBars = container.querySelectorAll('.skill-progress');
    progressBars.forEach(bar => {
      const width = bar.style.width;
      bar.style.setProperty('--skill-width', width);
    });
  }

  showAllElements() {
    const elements = document.querySelectorAll('.reveal-on-scroll, .fun-fact-card, .skill-category, .project-card, .timeline-item');
    elements.forEach(el => el.classList.add('visible'));
  }
}

// Typing Animation
class TypingAnimation {
  constructor(element, texts, typeSpeed = 100, deleteSpeed = 50, pauseTime = 2000) {
    this.element = element;
    this.texts = texts;
    this.typeSpeed = typeSpeed;
    this.deleteSpeed = deleteSpeed;
    this.pauseTime = pauseTime;
    this.textIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.start();
  }

  start() {
    this.type();
  }

  type() {
    const currentText = this.texts[this.textIndex];

    if (this.isDeleting) {
      this.element.textContent = currentText.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.element.textContent = currentText.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let speed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

    if (!this.isDeleting && this.charIndex === currentText.length) {
      speed = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      speed = 500;
    }

    setTimeout(() => this.type(), speed);
  }
}

// Projects Component
class ProjectsComponent {
  constructor(data) {
    this.projects = data;
    this.currentFilter = 'all';
    this.container = document.getElementById('projects-grid');
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.init();
  }

  init() {
    this.render();
    this.setupFilters();
    this.filterProjects();
  }

  setupFilters() {
    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.filterButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.currentFilter = e.target.dataset.filter;
        this.filterProjects();
      });
    });
  }

  filterProjects() {
    const cards = this.container.querySelectorAll('.project-card');
    cards.forEach(card => {
      const category = card.dataset.category;
      if (this.currentFilter === 'all' || category === this.currentFilter) {
        card.classList.remove('hidden');
        setTimeout(() => card.classList.add('visible'), 10);
      } else {
        card.classList.add('hidden');
        card.classList.remove('visible');
      }
    });
  }

  render() {
    this.container.innerHTML = this.projects.map(project => this.createProjectCard(project)).join('');
  }

  createProjectCard(project) {
    return `
      <div class="project-card" data-category="${project.category}">
        <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
        <div class="project-content">
          <div class="project-header">
            <h3 class="project-title">${project.title}</h3>
            <span class="project-category">${project.category}</span>
          </div>
          <p class="project-description">${project.description}</p>
          <div class="project-tech">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
          <div class="project-achievements">
            ${project.achievements.map(achievement => `<div class="achievement-item">${achievement}</div>`).join('')}
          </div>
          <div class="project-links">
            <a href="${project.github}" target="_blank" class="project-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="${project.demo}" target="_blank" class="project-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Demo
            </a>
          </div>
        </div>
      </div>
    `;
  }
}

// Experience Timeline Component
class ExperienceComponent {
  constructor(data) {
    this.experience = data;
    this.container = document.getElementById('experience-timeline');
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    this.container.innerHTML = this.experience.map(exp => this.createTimelineItem(exp)).join('');
    // Make timeline items visible on initial render
    requestAnimationFrame(() => {
      this.container.querySelectorAll('.timeline-item').forEach(el => el.classList.add('visible'));
    });
  }

  createTimelineItem(exp) {
    return `
      <div class="timeline-item">
        <div class="timeline-marker">${exp.logo}</div>
        <div class="timeline-content">
          <div class="company-header">
            <div>
              <h3 class="company-name">${exp.company}</h3>
              <p class="company-role">${exp.role}</p>
              <p class="company-duration">${exp.duration}</p>
            </div>
          </div>
          <p class="company-description">${exp.description}</p>
          <div class="achievements-list">
            ${exp.achievements.map(achievement => `<span class="achievement-badge">✓ ${achievement}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  }
}

// Contact Form Handler
class ContactFormHandler {
  constructor() {
    this.form = document.getElementById('contact-form');
    this.submitBtn = document.getElementById('submit-btn');
    this.message = document.getElementById('form-message');
    this.init();
  }

  init() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));

    // Real-time validation
    const inputs = this.form.querySelectorAll('.form-control');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearError(input));
    });
  }

  validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';

    if (!value) {
      isValid = false;
      errorMessage = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
    } else if (fieldName === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
      }
    }

    if (!isValid) {
      field.classList.add('invalid');
      field.classList.remove('valid');
      const errorEl = document.getElementById(`${fieldName}-error`);
      if (errorEl) errorEl.textContent = errorMessage;
    } else {
      field.classList.remove('invalid');
      field.classList.add('valid');
      this.clearError(field);
    }

    return isValid;
  }

  clearError(field) {
    const errorEl = document.getElementById(`${field.name}-error`);
    if (errorEl) errorEl.textContent = '';
    field.classList.remove('invalid');
  }

  async handleSubmit(e) {
    e.preventDefault();

    // Validate all fields
    const inputs = this.form.querySelectorAll('.form-control');
    let isFormValid = true;
    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isFormValid = false;
      }
    });

    if (!isFormValid) return;

    // Show loading state
    const btnText = this.submitBtn.querySelector('.btn-text');
    const btnLoading = this.submitBtn.querySelector('.btn-loading');
    btnText.style.display = 'none';
    btnLoading.style.display = 'flex';
    this.submitBtn.disabled = true;

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Success
      this.showMessage('success', 'Thank you! Your message has been sent successfully.');
      this.form.reset();
      inputs.forEach(input => input.classList.remove('valid'));

      console.log('Form submitted:', {
        name: this.form.name.value,
        email: this.form.email.value,
        subject: this.form.subject.value,
        message: this.form.message.value
      });
    } catch (error) {
      this.showMessage('error', 'Oops! Something went wrong. Please try again.');
    } finally {
      btnText.style.display = 'block';
      btnLoading.style.display = 'none';
      this.submitBtn.disabled = false;
    }
  }

  showMessage(type, text) {
    this.message.className = `form-message ${type}`;
    this.message.textContent = text;
    setTimeout(() => {
      this.message.className = 'form-message';
    }, 5000);
  }
}

// Navigation Handler
class NavigationHandler {
  constructor() {
    this.navbar = document.getElementById('navbar');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.mobileToggle = document.getElementById('mobile-menu-toggle');
    this.navMenu = document.getElementById('nav-menu');
    this.init();
  }

  init() {
    // Scroll behavior
    window.addEventListener('scroll', this.handleScroll.bind(this));

    // Active link on scroll
    window.addEventListener('scroll', this.updateActiveLink.bind(this));

    // Smooth scroll to sections
    this.navLinks.forEach(link => {
      link.addEventListener('click', this.handleNavClick.bind(this));
    });

    // Mobile menu toggle
    this.mobileToggle.addEventListener('click', this.toggleMobileMenu.bind(this));

    // Close mobile menu on link click
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.navMenu.classList.remove('active');
        this.mobileToggle.classList.remove('active');
      });
    });
  }

  handleScroll() {
    if (window.scrollY > 50) {
      this.navbar.classList.add('scrolled');
    } else {
      this.navbar.classList.remove('scrolled');
    }
  }

  updateActiveLink() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        this.navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  handleNavClick(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }

  toggleMobileMenu() {
    this.navMenu.classList.toggle('active');
    this.mobileToggle.classList.toggle('active');
  }
}

// Cursor Glow Effect
class CursorGlow {
  constructor() {
    this.cursor = document.getElementById('cursor-glow');
    this.init();
  }

  init() {
    if (window.innerWidth >= 1024) {
      document.addEventListener('mousemove', this.updatePosition.bind(this));
    }
  }

  updatePosition(e) {
    this.cursor.style.left = `${e.clientX}px`;
    this.cursor.style.top = `${e.clientY}px`;
  }
}

// Particles Background
class ParticlesBackground {
  constructor() {
    this.container = document.getElementById('particles-bg');
    this.particleCount = 30;
    this.init();
  }

  init() {
    for (let i = 0; i < this.particleCount; i++) {
      this.createParticle();
    }
  }

  createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';

    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const duration = Math.random() * 10 + 15;
    const delay = Math.random() * 5;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${left}%`;
    particle.style.bottom = '0';
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    this.container.appendChild(particle);
  }
}

// Back to Top Button
class BackToTopButton {
  constructor() {
    this.button = document.getElementById('back-to-top');
    this.init();
  }

  init() {
    window.addEventListener('scroll', this.toggleVisibility.bind(this));
    this.button.addEventListener('click', this.scrollToTop.bind(this));
  }

  toggleVisibility() {
    if (window.scrollY > 300) {
      this.button.classList.add('visible');
    } else {
      this.button.classList.remove('visible');
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

// Scroll Indicator
class ScrollIndicator {
  constructor() {
    this.indicator = document.getElementById('scroll-indicator');
    this.init();
  }

  init() {
    if (this.indicator) {
      this.indicator.addEventListener('click', this.scrollToNext.bind(this));
    }
  }

  scrollToNext() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const offsetTop = aboutSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }
}

// Resume Download Handler
class ResumeHandler {
  constructor() {
    this.downloadBtn = document.getElementById('download-resume');
    this.init();
  }

  init() {
    if (this.downloadBtn) {
      this.downloadBtn.addEventListener('click', this.downloadResume.bind(this));
    }
  }

  downloadResume() {
    // Create a temporary link to download the resume
    const link = document.createElement('a');
    link.href = 'resume.pdf'; // Path to resume file
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log('Resume download initiated');
  }
}

// Application Initialization
class PortfolioApp {
  constructor() {
    this.init();
  }

  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.start());
    } else {
      this.start();
    }
  }

  start() {
    // Initialize all services and components
    new ThemeService();
    new ScrollAnimationService();
    new NavigationHandler();
    new CursorGlow();
    new ParticlesBackground();
    new BackToTopButton();
    new ScrollIndicator();
    new ResumeHandler();

    // Initialize typing animation
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
      new TypingAnimation(
        typingElement,
        ['Angular Developer', 'Full‑Stack (.NET)', 'Web Performance Nerd', 'Problem Solver'],
        100,
        50,
        2000
      );
    }

    // Initialize projects component
    new ProjectsComponent(portfolioData.projects);

    // Initialize experience component
    new ExperienceComponent(portfolioData.experience);

    // Initialize contact form
    new ContactFormHandler();

    // Theme toggle handler
    const themeToggle = document.getElementById('theme-toggle');
    const themeService = new ThemeService();
    if (themeToggle) {
      themeToggle.addEventListener('click', () => themeService.toggle());
    }

    console.log('Portfolio application initialized successfully');
  }
}

// Start the application
const app = new PortfolioApp();