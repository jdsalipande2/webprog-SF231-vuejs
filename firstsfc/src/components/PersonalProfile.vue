<template>
   <div>
      <nav class="navbar">
         <a href="#" class="logo">
         <img :src="logo" alt="My Logo" class="logo-img">
         </a>
         <ul class="nav-menu">
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#contact">CONTACT</a></li>
            <li><a href="resources.html">RESOURCES</a></li>
         </ul>
      </nav>
      <!-- Masthead -->
      <header class="masthead">
         <div class="video-background">
            <video autoplay muted loop class="video-bg">
               <source :src="mastheadVideo" type="video/mp4">
            </video>
         </div>
         <div class="masthead-content">
            <h1>Hi, I am<br><span class="name">Janice <i>Salipande</i></span></h1>
            <a href="#portfolio" class="btn-outline">PORTFOLIO</a>
            <div class="icon-buttons">
               <a href="https://www.linkedin.com/in/janice-maxene-salipande-8aa856216" target="_blank">
                  <div class="icon-circle">
                     <img :src="linkedinIcon" alt="LinkedIn Icon">
                  </div>
               </a>
               <a href="mailto:jdsalipande2@student.apc.edu.ph">
                  <div class="icon-circle">
                     <img :src="mailIcon" alt="Mail Icon">
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
                  <img :src="profilePicture" alt="Janice's Portrait">
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
                     <img :src="educationStar" alt="Asia Pacific College Icon">
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
                     <img :src="educationStar2" alt="Asia Pacific College Icon">
                  </div>
                  <h3>BS COMPUTER SCIENCE</h3>
                  <p>2023 - 2027</p>
                  <p><strong>Asia Pacific College</strong></p>
                  <p><strong>Awards:</strong></p>
                  <p>Dean's Lister (A.Y. 2023 - 2024)</p>
               </div>
               <div class="education-card">
                  <div class="education-card-header">
                     <img :src="educationStar3" alt="Pasay City National Science High School Icon">
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
                        <img :src="pythonLogo" alt="Python">
                     </div>
                     <div class="tool-item">
                        <img :src="javaLogo" alt="Java">
                     </div>
                     <div class="tool-item">
                        <img :src="htmlLogo" alt="HTML">
                     </div>
                     <div class="tool-item">
                        <img :src="cssLogo" alt="CSS">
                     </div>
                     <div class="tool-item">
                        <img :src="mysqlLogo" alt="MySQL">
                     </div>
                     <div class="tool-item">
                        <img :src="vscLogo" alt="Visual Studio Code">
                     </div>
                     <div class="tool-item">
                        <img :src="githubLogo" alt="GitHub">
                     </div>
                  </div>
               </div>
               <!-- Graphic Design & Video Editing Tools -->
               <div class="tools-category">
                  <h3>Graphic Design & Video Editing</h3>
                  <div class="tools-list">
                     <div class="tool-item">
                        <img :src="canvaLogo" alt="Canva">
                     </div>
                     <div class="tool-item">
                        <img :src="figmaLogo" alt="Figma">
                     </div>
                     <div class="tool-item">
                        <img :src="capcutLogo" alt="CapCut">
                     </div>
                     <div class="tool-item">
                        <img :src="filmoraLogo" alt="Filmora">
                     </div>
                  </div>
               </div>
               <!-- Administrative Tools -->
               <div class="tools-category">
                  <h3>Administrative</h3>
                  <div class="tools-list">
                     <div class="tool-item">
                        <img :src="msOfficeLogo" alt="Microsoft Office">
                     </div>
                     <div class="tool-item">
                        <img :src="gSuiteLogo" alt="Google Suite">
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   </div>
</template>
<script setup>
   import logo from '@/assets/jmds_logo_black_version.png';
   import mastheadVideo from '@/assets/masthead.mp4';
   import linkedinIcon from '@/assets/linkedin_icon.png';
   import mailIcon from '@/assets/mail_icon.png';
   import profilePicture from '@/assets/Profile Picture.jpg';
   import educationStar from '@/assets/education star 1.png';
   import educationStar2 from '@/assets/education star 2.png';
   import educationStar3 from '@/assets/education star 3.png';
   import pythonLogo from '@/assets/Python.png';
   import javaLogo from '@/assets/Java.png';
   import htmlLogo from '@/assets/HTML.png';
   import cssLogo from '@/assets/CSS.png';
   import mysqlLogo from '@/assets/MySQL.png';
   import vscLogo from '@/assets/VSC.png';
   import githubLogo from '@/assets/GitHub.png';
   import canvaLogo from '@/assets/Canva.png';
   import figmaLogo from '@/assets/Figma.png';
   import capcutLogo from '@/assets/CapCut.png';
   import filmoraLogo from '@/assets/Filmora.png';
   import msOfficeLogo from '@/assets/MS%20Office.png';
   import gSuiteLogo from '@/assets/G%20Suite.png';
   import apcRamketWebsite from '@/assets/APC%20Ramket%20Website.png';
   import apcRamketMobileApp from '@/assets/APC%20Ramket%20Mobile%20App.png';
   import dreambuildsla from '@/assets/dreambuildsla.png';
   import athletezerous from '@/assets/athletezerous.png';
   import instagramFeedPosts from '@/assets/Instagram%20Feed%20Posts.png';
   import marksmanGradeTracking from '@/assets/Marksman.png';
   import jmdsLogoWhite from '@/assets/jmds%20logo%20white%20version.png';
</script>
<style scoped>
   @import '@/css/styles.css';
</style>
