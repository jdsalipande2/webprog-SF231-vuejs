<template>
   <div>
      <!-- Navigation -->
      <nav class="navbar">
         <a href="#" class="logo">
         <img src="/assets/jmds%20logo%20black%20version.png" alt="My Logo" class="logo-img"> 
         </a>
         <ul class="nav-menu">
            <li><a href="#about" @click.prevent="smoothScroll('#about')">ABOUT</a></li>
           <li><a href="#services" @click.prevent="smoothScroll('#services')">SERVICES</a></li>
           <li><a href="#portfolio" @click.prevent="smoothScroll('#portfolio')">PORTFOLIO</a></li>
           <li><a href="#contact" @click.prevent="smoothScroll('#contact')">CONTACT</a></li>
           <li><a href="resources.html">RESOURCES</a></li>
         </ul>
      </nav>
      <!-- Masthead -->
      <header class="masthead">
         <div class="video-background">
            <video autoplay muted loop class="video-bg">
               <source src="/assets/masthead.mp4" type="video/mp4">
            </video>
         </div>
         <div class="masthead-content">
            <h1>Hi, I am<br><span class="name">Janice <i>Salipande</i></span></h1>
            <a href="#portfolio" class="btn-outline">PORTFOLIO</a>
            <div class="icon-buttons">
               <a href="https://www.linkedin.com/in/janice-maxene-salipande-8aa856216" target="_blank">
                  <div class="icon-circle">
                     <img src="/assets/linkedin%20icon.png" alt="LinkedIn Icon">
                  </div>
               </a>
               <a href="mailto:jdsalipande2@student.apc.edu.ph">
                  <div class="icon-circle">
                     <img src="/assets/mail%20icon.png" alt="Mail Icon">
                  </div>
               </a>
            </div>
         </div>
      </header>
      <!-- About Section -->
      <div class="fade-in">
         <section class="about-section" id="about">
            <h2>About</h2>
            <div class="about-content">
               <div class="about-image">
                  <img src="/assets/Profile%20Picture.jpg" alt="Janice's Portrait">
               </div>
               <div class="about-text">
                  <p><strong>HELLO!</strong><br><br>
                     I am Janice, a second-year college student studying Computer Science with a focus on Cybersecurity and Forensics. I also do freelance work in graphic design, video editing, and social media management.
                  </p>
                  <p><strong>Hobbies/Interests:</strong><br>
                     - Watching movies, series, and anime<br>
                     - Trying different cuisines<br>
                     - Walking/Jogging in the morning<br>
                     - Freelance Work
                  </p>
               </div>
            </div>
         </section>
      </div>
      <!-- Education Section -->
      <div class="fade-in">
         <section class="education-section" id="education">
            <h2>Education</h2>
            <div class="education-content">
               <div class="education-card">
                  <div class="education-card-header">
                     <img src="/assets/education%20star%201.png" alt="Asia Pacific College Icon"> 
                  </div>
                  <h3>SENIOR HIGH SCHOOL</h3>
                  <p>2021 - 2023</p>
                  <p><strong>Asia Pacific College</strong></p>
                  <p><strong>Awards:</strong></p>
                  <p>With High Honors</p>
                  <p>Most Outstanding Student in Mathematics</p>
                  <p>Most Outstanding Student in Science</p>
                  <p>Meritorious Award in HUMSS</p>
               </div>
               <div class="education-card">
                  <div class="education-card-header">
                     <img src="/assets/education%20star%202.png" alt="Asia Pacific College Icon"> 
                  </div>
                  <h3>BS COMPUTER SCIENCE</h3>
                  <p>2023 - 2027</p>
                  <p><strong>Asia Pacific College</strong></p>
                  <p><strong>Awards:</strong></p>
                  <p>Dean's Lister (A.Y. 2023 - 2024)</p>
               </div>
               <div class="education-card">
                  <div class="education-card-header">
                     <img src="/assets/education%20star%203.png" alt="Pasay City National Science High School Icon"> 
                  </div>
                  <h3>JUNIOR HIGH SCHOOL</h3>
                  <p>2017 - 2021</p>
                  <p><strong>Pasay City National Science High School</strong></p>
                  <p><strong>Awards:</strong></p>
                  <p>With High Honors</p>
               </div>
            </div>
         </section>
      </div>
      <!-- Experience Section -->
      <div class="fade-in">
         <section class="experience-section" id="experience">
            <h2>Experience</h2>
            <div class="experience-content">
               <div class="experience-item">
                  <h3>UX/UI DESIGNER</h3>
                  <p>August 2024 - November 2024</p>
                  <p><strong>APC Ramket (E-commerce Website and Mobile App)</strong></p>
                  <p><strong>Asia Pacific College 2nd Year - 1st Term</strong></p>
                  <ul>
                     <li>Led the UX/UI design process for the e-commerce platform.</li>
                     <li>Designed wireframes, mockups, and high-fidelity prototypes for both the website and mobile app, ensuring a consistent user experience across all devices.</li>
                  </ul>
               </div>
               <div class="experience-item">
                  <h3>VIDEO EDITOR & SOCIAL MEDIA MANAGER</h3>
                  <p>August 2024 - November 2024</p>
                  <p><strong>DreamBuildsLA</strong></p>
                  <ul>
                     <li>Edited Instagram Reels showcasing real estate to captivate audiences and drive inquiries.</li>
                     <li>Managed the Instagram account, ensuring consistent engagement and implementing strategies to grow followers and interactions.</li>
                  </ul>
               </div>
               <div class="experience-item">
                  <h3>PROJECT DESIGNER</h3>
                  <p>May 2023 - June 2023</p>
                  <p><strong>Marksman Grade Tracking System</strong></p>
                  <p><strong>Asia Pacific College SHS Bootcamp</strong></p>
                  <ul>
                     <li>Conceptualized and developed the idea, focused on streamlining the user experience and meeting project objectives.</li>
                     <li>Created comprehensive project documentation, outlining system processes, design decisions, and technical specifications for future reference and development.</li>
                  </ul>
               </div>
            </div>
         </section>
      </div>
      <!-- Skills & Tools -->
      <div class="fade-in">
         <section class="skills-tools">
            <h2>Skills & Tools</h2>
            <div class="skills-categories">
               <!-- Programming Tools -->
               <div class="tools-category">
                  <h3>Programming</h3>
                  <div class="tools-list">
                     <div class="tool-item">
                        <img src="/assets/Python.png" alt="Python">
                     </div>
                     <div class="tool-item">
                        <img src="/assets/Java.png" alt="Java">
                     </div>
                     <div class="tool-item">
                        <img src="/assets/HTML.png" alt="HTML">
                     </div>
                     <div class="tool-item">
                        <img src="/assets/CSS.png" alt="CSS">
                     </div>
                     <div class="tool-item">
                        <img src="/assets/MySQL.png" alt="MySQL">
                     </div>
                     <div class="tool-item">
                        <img src="/assets/VSC.png" alt="Visual Studio Code">
                     </div>
                     <div class="tool-item">
                        <img src="/assets/GitHub.png" alt="GitHub">
                     </div>
                  </div>
               </div>
               <!-- Graphic Design & Video Editing Tools -->
               <div class="tools-category">
                  <h3>Graphic Design & Video Editing</h3>
                  <div class="tools-list">
                     <div class="tool-item">
                        <img src="/assets/Canva.png" alt="Canva">
                     </div>
                     <div class="tool-item">
                        <img src="/assets/Figma.png" alt="Figma">
                     </div>
                     <div class="tool-item">
                        <img src="/assets/CapCut.png" alt="CapCut">
                     </div>
                     <div class="tool-item">
                        <img src="/assets/Filmora.png" alt="Filmora">
                     </div>
                  </div>
               </div>
               <!-- Administrative Tools -->
               <div class="tools-category">
                  <h3>Administrative</h3>
                  <div class="tools-list">
                     <div class="tool-item">
                        <img src="/assets/MS%20Office.png" alt="Microsoft Office">
                     </div>
                     <div class="tool-item">
                        <img src="/assets/G%20Suite.png" alt="Google Suite">
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
      <!-- Service Section -->
      <Services />
      <!-- Portfolio Section -->
      <div class="fade-in">
         <section id="portfolio" class="portfolio">
            <h2>Portfolio</h2>
            <div class="portfolio-container">
               <!-- Portfolio Item 1 -->
               <div class="portfolio-item">
                  <img src="/assets/APC%20Ramket%20Website.png" alt="APC Ramket Website" data-description="
                     <p class='portfolio-title'>APC RAMKET WEBSITE</p>
                     <p class='portfolio-date'>August - November 2024</p>
                     <p class='portfolio-course'>USERDES Course 2nd Year - 1st Term</p>
                     <p class='portfolio-description'>An e-commerce platform where we crafted the user interface to ensure a seamless and intuitive shopping experience for buying and selling products made by the APC community.</p>
                     ">
               </div>
               <!-- Portfolio Item 2 -->
               <div class="portfolio-item">
                  <img src="/assets/APC%20Ramket%20Mobile%20App.png" alt="APC Ramket Mobile App" data-description="
                     <p class='portfolio-title'>APC RAMKET MOBILE APP</p>
                     <p class='portfolio-date'>August - November 2024</p>
                     <p class='portfolio-course'>USERDES Course 2nd Year - 1st Term</p>
                     <p class='portfolio-description'>A mobile app designed to complement the e-commerce platform, where we focused on creating a user-friendly interface for easy navigation and seamless transactions on-the-go for APC students.</p>
                     ">
               </div>
               <!-- Portfolio Item 3 -->
               <div class="portfolio-item">
                  <img src="/assets/dreambuildsla.png" alt="dreambuildsla" data-description="
                     <p class='portfolio-title'>@dreambuildsla on IG</p>
                     <p class='portfolio-date'>August - November 2024</p>
                     <p class='portfolio-description'>Instagram Reels showcasing real estate located in West Los Angeles, CA to captivate audiences and drive inquiries.</p>
                     ">
               </div>
               <!-- Portfolio Item 4 -->
               <div class="portfolio-item">
                  <img src="/assets/athletezerous.png" alt="athletezerous" data-description="
                     <p class='portfolio-title'>@athletezerous on IG</p>
                     <p class='portfolio-date'>April - June 2024</p>
                     <p class='portfolio-description'>Instagram Reels enhancing social media presence and audience engagement.</p>
                     ">
               </div>
               <!-- Portfolio Item 5 -->
               <div class="portfolio-item">
                  <img src="/assets/Instagram%20Feed%20Posts.png" alt="Instagram Feed Posts" data-description="
                     <p class='portfolio-title'>Instagram Feed Posts for</p>
                     <p class='portfolio-course'>LocalPro Renovations</p>
                     <p class='portfolio-course'>SuppDog</p>
                     <p class='portfolio-course'>Bayside Endermologie</p>
                     <p class='portfolio-course'>Vasavi Kumar</p>
                     <p class='portfolio-course'>Biohackk</p>
                     ">
               </div>
               <!-- Portfolio Item 6 -->
               <div class="portfolio-item">
                  <img src="/assets/Marksman.png" alt="Marksman Grade Tracking System" data-description="
                     <p class='portfolio-title'>MARKSMAN GRADE TRACKING SYSTEM</p>
                     <p class='portfolio-date'>May - June 2023</p>
                     <p class='portfolio-course'>APC Senior High School Bootcamp</p>
                     <p class='portfolio-description'>A web application conceptualized and designed to help students track their grades, with a focus on intuitive user flow and a clean, efficient interface for seamless grade management.</p>
                     ">
               </div>
            </div>
         </section>
      </div>
      <!-- Lightbox Modal -->
      <div id="lightbox" class="lightbox">
         <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img id="lightbox-img" src="" alt="Portfolio Image">
            <div class="lightbox-description" id="lightbox-description"></div>
         </div>
      </div>
      <!-- Contact Section -->
      <div class="fade-in">
         <div id="app">
            <!-- Vue app here -->
            <section class="contact" id="contact">
               <div class="contact-container">
                  <h2>SEND US YOUR FEEDBACK!</h2>
                  <p>What do you think of my website?</p>
                  <!-- Contact Form -->
                  <form v-on:submit.prevent="submitForm" class="contact-form">
                     <!-- Input for Name -->
                     <input 
                        type="text" 
                        v-model="name" 
                        placeholder="Full Name" 
                        required 
                        aria-label="Full Name"
                        >
                     <!-- Textarea for Message -->
                     <textarea 
                        v-model="message" 
                        placeholder="Message" 
                        rows="5" 
                        required 
                        aria-label="Message"
                        ></textarea>
                     <!-- Submit Button -->
                     <button 
                        type="submit" 
                        class="send-btn" 
                        aria-label="Send Message"
                        >
                     SEND MESSAGE
                     </button>
                  </form>
                  <!-- Display Submitted Data -->
                  <div v-if="submitted" class="submitted-container">
                     <h3>Thank you, {{ name }}!</h3>
                     <p>Your message: {{ message }}</p>
                     <button 
                        class="reset-btn" 
                        @click="resetForm" 
                        aria-label="Submit Another Message"
                        >
                     Submit Another
                     </button>
                  </div>
               </div>
            </section>
         </div>
      </div>
      <!-- Footer Section -->
      <footer class="footer">
         <div class="footer-container">
            <img src="/assets/jmds%20logo%20white%20version.png" alt="My Logo" class="footer-logo"> 
            <p class="footer-text">© 2025 Janice Maxene D. Salipande | All Rights Reserved.</p>
            <div class="footer-socials">
               <a href="https://www.linkedin.com/in/janice-maxene-salipande-8aa856216" target="_blank" class="social-icon">
                  <div class="social-circle">
                     <img src="/assets/linkedin%20icon.png" alt="LinkedIn Icon" class="social-img">
                  </div>
               </a>
               <a href="mailto:jdsalipande2@student.apc.edu.ph" target="_blank" class="social-icon">
                  <div class="social-circle">
                     <img src="/assets/mail%20icon.png" alt="Mail Icon" class="social-img">
                  </div>
               </a>
            </div>
         </div>
      </footer>
   </div>
</template>

<script>
import Services from './ServicesSection.vue';

export default {
  components: {
    Services,
  },
  data() {
    return {
      name: '',
      message: '',
      submitted: false
    };
  },
  methods: {
    submitForm() {
      this.submitted = true;
    },
    resetForm() {
      this.name = '';
      this.message = '';
      this.submitted = false;
    }
  },
  mounted() {
    // HTML DOM (for scroll smooth behavior and fade-in elements)
    document.querySelectorAll('.nav-menu a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
          e.preventDefault();
          document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    document.addEventListener("DOMContentLoaded", () => {
      const fadeInElements = document.querySelectorAll('.fade-in');

      const handleScroll = () => {
        fadeInElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible) {
            el.classList.add('visible');
          }
        });
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();
    });
  }
};
</script>

<style scoped>
</style>
