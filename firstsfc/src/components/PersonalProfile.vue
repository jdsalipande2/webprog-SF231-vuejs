<template
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Janice Salipande | Personal Website</title>
      <link rel="stylesheet" href="css/styles.css">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
   </head>
   <body>
      <!-- Navigation -->
      <nav class="navbar">
         <a href="#" class="logo">
         <img src="assets/jmds%20logo%20black%20version.png" alt="My Logo" class="logo-img"> 
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
               <source src="assets/masthead.mp4" type="video/mp4">
            </video>
         </div>
         <div class="masthead-content">
            <h1>Hi, I am<br><span class="name">Janice <i>Salipande</i></span></h1>
            <a href="#portfolio" class="btn-outline">PORTFOLIO</a>
            <div class="icon-buttons">
               <a href="https://www.linkedin.com/in/janice-maxene-salipande-8aa856216" target="_blank">
                  <div class="icon-circle">
                     <img src="assets/linkedin%20icon.png" alt="LinkedIn Icon">
                  </div>
               </a>
               <a href="mailto:jdsalipande2@student.apc.edu.ph">
                  <div class="icon-circle">
                     <img src="assets/mail%20icon.png" alt="Mail Icon">
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
                  <img src="assets/Profile%20Picture.jpg" alt="Janice's Portrait">
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
                     <img src="assets/education%20star%201.png" alt="Asia Pacific College Icon"> 
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
                     <img src="assets/education%20star%202.png" alt="Asia Pacific College Icon"> 
                  </div>
                  <h3>BS COMPUTER SCIENCE</h3>
                  <p>2023 - 2027</p>
                  <p><strong>Asia Pacific College</strong></p>
                  <p><strong>Awards:</strong></p>
                  <p>Dean's Lister (A.Y. 2023 - 2024)</p>
               </div>
               <div class="education-card">
                  <div class="education-card-header">
                     <img src="assets/education%20star%203.png" alt="Pasay City National Science High School Icon"> 
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
                        <img src="assets/Python.png" alt="Python">
                     </div>
                     <div class="tool-item">
                        <img src="assets/Java.png" alt="Java">
                     </div>
                     <div class="tool-item">
                        <img src="assets/HTML.png" alt="HTML">
                     </div>
                     <div class="tool-item">
                        <img src="assets/CSS.png" alt="CSS">
                     </div>
                     <div class="tool-item">
                        <img src="assets/MySQL.png" alt="MySQL">
                     </div>
                     <div class="tool-item">
                        <img src="assets/VSC.png" alt="Visual Studio Code">
                     </div>
                     <div class="tool-item">
                        <img src="assets/GitHub.png" alt="GitHub">
                     </div>
                  </div>
               </div>
               <!-- Graphic Design & Video Editing Tools -->
               <div class="tools-category">
                  <h3>Graphic Design & Video Editing</h3>
                  <div class="tools-list">
                     <div class="tool-item">
                        <img src="assets/Canva.png" alt="Canva">
                     </div>
                     <div class="tool-item">
                        <img src="assets/Figma.png" alt="Figma">
                     </div>
                     <div class="tool-item">
                        <img src="assets/CapCut.png" alt="CapCut">
                     </div>
                     <div class="tool-item">
                        <img src="assets/Filmora.png" alt="Filmora">
                     </div>
                  </div>
               </div>
               <!-- Administrative Tools -->
               <div class="tools-category">
                  <h3>Administrative</h3>
                  <div class="tools-list">
                     <div class="tool-item">
                        <img src="assets/MS%20Office.png" alt="Microsoft Office">
                     </div>
                     <div class="tool-item">
                        <img src="assets/G%20Suite.png" alt="Google Suite">
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
      <!-- Service Section -->
      <div class="fade-in">
         <div id="services">
            <section class="services">
               <h2>Services</h2>
               <div class="service-grid">
                  <div class="service-item" v-for="(service, index) in services" :key="`service-${index}`">
                     <div class="service-content">
                        <img v-if="service.icon && service.icon.trim() !== ''"
                           :src="service.icon || 'fallback-icon.png'"
                           :alt="service.title || 'Service Icon'"
                           class="service-icon"
                           src="fallback-icon.png"
                           alt="Service Icon">
                        <h3 class="service-title">{{ service.title }}</h3>
                     </div>
                     <div class="service-hover-content">
                        <ul>
                           <li v-for="(detail, i) in service.details" :key="i">{{ detail }}</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </div>
      <!-- Vue Script -->
      <script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
      <!-- Portfolio Section -->
      <div class="fade-in">
         <section id="portfolio" class="portfolio">
            <h2>Portfolio</h2>
            <div class="portfolio-container">
               <!-- Portfolio Item 1 -->
               <div class="portfolio-item">
                  <img src="assets/APC%20Ramket%20Website.png" alt="APC Ramket Website" data-description="
                     <p class='portfolio-title'>APC RAMKET WEBSITE</p>
                     <p class='portfolio-date'>August - November 2024</p>
                     <p class='portfolio-course'>USERDES Course 2nd Year - 1st Term</p>
                     <p class='portfolio-description'>An e-commerce platform where we crafted the user interface to ensure a seamless and intuitive shopping experience for buying and selling products made by the APC community.</p>
                     ">
               </div>
               <!-- Portfolio Item 2 -->
               <div class="portfolio-item">
                  <img src="assets/APC%20Ramket%20Mobile%20App.png" alt="APC Ramket Mobile App" data-description="
                     <p class='portfolio-title'>APC RAMKET MOBILE APP</p>
                     <p class='portfolio-date'>August - November 2024</p>
                     <p class='portfolio-course'>USERDES Course 2nd Year - 1st Term</p>
                     <p class='portfolio-description'>A mobile app designed to complement the e-commerce platform, where we focused on creating a user-friendly interface for easy navigation and seamless transactions on-the-go for APC students.</p>
                     ">
               </div>
               <!-- Portfolio Item 3 -->
               <div class="portfolio-item">
                  <img src="assets/dreambuildsla.png" alt="dreambuildsla" data-description="
                     <p class='portfolio-title'>@dreambuildsla on IG</p>
                     <p class='portfolio-date'>August - November 2024</p>
                     <p class='portfolio-description'>Instagram Reels showcasing real estate located in West Los Angeles, CA to captivate audiences and drive inquiries.</p>
                     ">
               </div>
               <!-- Portfolio Item 4 -->
               <div class="portfolio-item">
                  <img src="assets/athletezerous.png" alt="athletezerous" data-description="
                     <p class='portfolio-title'>@athletezerous on IG</p>
                     <p class='portfolio-date'>April - June 2024</p>
                     <p class='portfolio-description'>Instagram Reels enhancing social media presence and audience engagement.</p>
                     ">
               </div>
               <!-- Portfolio Item 5 -->
               <div class="portfolio-item">
                  <img src="assets/Instagram%20Feed%20Posts.png" alt="Instagram Feed Posts" data-description="
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
                  <img src="assets/Marksman.png" alt="Marksman Grade Tracking System" data-description="
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
      <!-- Vue Script -->
      <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
      <!-- Footer Section -->
      <footer class="footer">
         <div class="footer-container">
            <img src="assets/jmds%20logo%20white%20version.png" alt="My Logo" class="footer-logo"> 
            <p class="footer-text">© 2025 Janice Maxene D. Salipande | All Rights Reserved.</p>
            <div class="footer-socials">
               <a href="https://www.linkedin.com/in/janice-maxene-salipande-8aa856216" target="_blank" class="social-icon">
                  <div class="social-circle">
                     <img src="assets/linkedin%20icon.png" alt="LinkedIn Icon" class="social-img">
                  </div>
               </a>
               <a href="mailto:jdsalipande2@student.apc.edu.ph" target="_blank" class="social-icon">
                  <div class="social-circle">
                     <img src="assets/mail%20icon.png" alt="Mail Icon" class="social-img">
                  </div>
               </a>
            </div>
         </div>
      </footer>
      <!-- Scripts -->
      <script src="js/scripts.js"></script>
   </body>
</html>
</template>

<style>
    /* General Variables */
:root {
	--primary-color: #333;
	--secondary-color: #f9f9f9;
	--accent-color: #000;
	--light-color: #fff;
	--font-family: 'Poppins', sans-serif;
	--button-hover-color: black;
	--transition-duration: 0.3s;
}

/* General Styles */
body {
	margin: 0;
	font-family: var(--font-family);
	background-color: var(--secondary-color);
	color: var(--primary-color);
}

/* Navigation */
.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--light-color);
	padding: 10px 20px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	position: sticky;
	top: 0;
	z-index: 1000;
}

.logo {
	display: flex;
	align-items: center;
}

.logo-img {
	width: 100px;
	height: auto;
	object-fit: contain;
}

.nav-menu {
	list-style: none;
	display: flex;
	margin: 0;
	padding: 0;
}

.nav-menu li {
	margin: 0 15px;
}

.nav-menu a {
	text-decoration: none;
	color: var(--primary-color);
	font-size: 16px;
	font-weight: 400;
	padding: 5px 10px;
	border-radius: 5px;
	transition: border var(--transition-duration), color var(--transition-duration);
}

.nav-menu a:hover {
	border: 2px solid black;
	border-radius: 0;
	color: black;
}

/* Masthead */
.masthead {
	position: relative;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: var(--light-color);
	padding: 20px;
	overflow: hidden;
}

.video-background {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	object-fit: cover;
}

.video-bg {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.masthead-content {
	z-index: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	gap: 20px;
}

.masthead-content h1 {
	font-size: 50px;
	margin: 0;
	line-height: 1.3;
	white-space: nowrap;
	overflow: hidden;
	border-right: 3px solid var(--light-color);
	width: 0;
	animation: typing 4s steps(30, end), blink 0.75s step-end infinite;
	animation-iteration-count: infinite;
}

@keyframes typing {
	0% {
		width: 0;
	}

	50%,
	100% {
		width: 100%;
	}
}

@keyframes blink {

	from,
	to {
		border-color: transparent;
	}

	50% {
		border-color: var(--light-color);
	}
}

.masthead-content .name {
	font-size: 70px;
	font-weight: 700;
	font-style: italic;
}

.btn-outline {
	margin-top: 20px;
	padding: 10px 20px;
	font-size: 20px;
	font-weight: 600;
	color: var(--light-color);
	border: 2px solid var(--light-color);
	border-radius: 30px;
	text-decoration: none;
	transition: all 0.3s ease;
}

.btn-outline:hover {
	background-color: #fff;
	color: #000;
}

.icon-buttons {
	display: flex;
	gap: 20px;
	justify-content: center;
	margin-top: 40px;
}

.icon-circle {
	width: 50px;
	height: 50px;
	background-color: #fff;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: transform var(--transition-duration);
}

.icon-circle:hover {
	transform: scale(1.1);
}

.icon-circle img {
	width: 24px;
	height: 24px;
}

/* Section Styles */
section {
	padding: 60px 20px;
	text-align: center;
}

h2 {
	font-size: 36px;
	font-weight: 600;
	margin-bottom: 30px;
}

/* About Section */
.about-section {
	background-color: var(--secondary-color);
}

.about-content {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	max-width: 1200px;
	margin: 0 auto;
}

.about-image {
	flex: 1 1 300px;
	text-align: center;
	margin: 0 20px;
}

.about-image img {
	width: 300px;
	height: 350px;
	object-fit: cover;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.about-text {
	flex: 2 1 500px;
	text-align: justify;
	line-height: 1.8;
	font-size: 16px;
	margin: 0 20px;
}

.about-text strong {
	font-size: 18px;
	color: var(--primary-color);
}

/* Education Section */
.education-content {
	display: flex;
	justify-content: center;
	gap: 30px;
	flex-wrap: wrap;
	max-width: 1200px;
	margin: 0 auto;
}

.education-card {
	background-color: var(--light-color);
	padding: 20px;
	width: 300px;
	height: 350px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	text-align: center;
	transition: transform var(--transition-duration);
	border: 2px solid black;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.education-card:hover {
	transform: translateY(-10px);
}

.education-card-header {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0px;
}

.education-card-header img {
	width: 50px;
	height: 50px;
	object-fit: contain;
}

.education-card h3 {
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 8px;
}

.education-card p {
	font-size: 14px;
	margin-top: 5px;
	margin-bottom: 5px;
}

/* Experience Section */
.experience-content {
	display: flex;
	flex-direction: column;
	gap: 30px;
	max-width: 1200px;
	margin: 0 auto;
}

.experience-item {
	background-color: var(--light-color);
	padding: 20px;
	border: 2px solid black;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	text-align: left;
	transition: transform var(--transition-duration);
}

.experience-item:hover {
	transform: translateY(-10px);
}

.experience-item h3 {
	font-size: 20px;
	font-weight: 600;
}

/* Skills & Tools Section */
.skills-tools {
	background-color: var(--secondary-color);
	padding: 60px 20px;
	text-align: center;
}

.skills-tools h2 {
	font-size: 36px;
	font-weight: 600;
	margin-bottom: 30px;
}

.skills-categories {
	display: flex;
	flex-direction: column;
	gap: 40px;
}

.tools-category {
	text-align: center;
}

.tools-category h3 {
	font-size: 28px;
	font-weight: 600;
	color: var(--primary-color);
	margin-top: 0px;
	margin-bottom: 20px;
}

.tools-list {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 30px;
	max-width: 1200px;
	margin: 0 auto;
}

.tool-item {
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
	margin-bottom: 0px;
}

.tool-item img {
	margin: 20px;
	max-width: 50px;
	max-height: 50px;
	object-fit: contain;
	transition: transform 0.3s ease;
}

.tool-item img:hover {
	transform: translateY(-10px) scale(1.2);
	/* Rises up and enlarges */
}

/* Services Section */
.services {
	text-align: center;
	padding: 50px 20px;
	background-color: #f8f9fa;
}

.services h2 {
	font-size: 2.5rem;
	margin-bottom: 30px;
}

.service-grid {
	display: flex;
	justify-content: center;
	gap: 30px;
	flex-wrap: wrap;
	max-width: 1200px;
	margin: 0 auto;
}

/* Service Item */
.service-item {
	background-color: black;
	color: white;
	text-align: center;
	padding: 1rem;
	border-radius: 8px;
	overflow: hidden;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	width: 18rem;
	height: 18rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.service-item:hover {
	background-color: white;
	color: black;
	border: 2px solid black;
}

.service-icon {
	max-width: 70px;
	max-height: 70px;
	margin-bottom: 1rem;
}

.service-title {
	font-size: 1.25rem;
	font-weight: bold;
	margin: 0;
}

.service-hover-content {
	display: none;
	flex-direction: column;
	text-align: center;
}

.service-item:hover .service-content {
	display: none;
}

.service-item:hover .service-hover-content {
	display: flex;
}

.service-hover-content ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

.service-hover-content li {
	font-size: 1rem;
	margin: 5px 0;
}

.rectangular-logo {
	max-width: 150px;
	max-height: 100px;
}

/* Portfolio Section */
.portfolio {
	text-align: center;
	padding: 50px 0;
}

.portfolio h2 {
	font-size: 2.5rem;
	margin-bottom: 30px;
}

.portfolio-container {
	display: flex;
	justify-content: center;
	gap: 30px;
	flex-wrap: wrap;
	max-width: 1200px;
	margin: 0 auto;
}

.portfolio-item {
	position: relative;
	width: 100%;
	max-width: 450px;
	aspect-ratio: 4 / 3;
	overflow: hidden;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	border: 2px solid black;
	border-radius: 10px;
}

.portfolio-item img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: 0.3s ease-in-out;
}

.portfolio-overlay {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.7);
	opacity: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.3s ease-in-out;
}

.portfolio-item:hover img {
	opacity: 0.7;
}

.portfolio-item:hover .portfolio-overlay {
	opacity: 1;
}

.portfolio-text {
	color: white;
	text-align: center;
	padding: 20px;
	max-width: 80%;
}

.portfolio-title {
	font-weight: bold;
	font-size: 1.5rem;
	margin-bottom: 10px;
}

.portfolio-date {
	font-style: italic;
	font-size: 1rem;
	margin-bottom: 10px;
}

.portfolio-course {
	font-size: 1rem;
	margin-bottom: 10px;
}

.portfolio-description {
	font-size: 1rem;
	line-height: 1.6;
}

/* Lightbox Styles */
.lightbox {
	display: none;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.8);
	justify-content: center;
	align-items: flex-start;
	overflow-y: auto;
	z-index: 1000;
	padding: 20px;
	box-sizing: border-box;
}

.lightbox-content {
	position: relative;
	max-width: 90%;
	margin: auto;
	text-align: center;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.lightbox img {
	max-width: 100%;
	margin-bottom: 10px;
	object-fit: contain;
}

.lightbox-description {
	font-size: 1rem;
	padding: 10px;
	text-align: center;
	width: 100%;
	box-sizing: border-box;
	border-radius: 5px;
}

/* Scrollbar */
.lightbox-description::-webkit-scrollbar {
	width: 6px;
}

.lightbox-description::-webkit-scrollbar-thumb {
	background: #888;
	border-radius: 3px;
}

.lightbox-description::-webkit-scrollbar-thumb:hover {
	background: #555;
}

.lightbox-close {
	position: absolute;
	top: 10px;
	right: 10px;
	font-size: 2rem;
	color: white;
	cursor: pointer;
}

.fade-in {
	animation: fadeIn 1.5s ease-in;
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

/* Contact Section */
.contact {
	color: #fff;
	padding: 50px 20px;
	text-align: center;
}

.contact-container {
	max-width: 800px;
	margin: 0 auto;
	padding: 30px;
	background-color: #111;
	border-radius: 12px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.contact h2 {
	font-size: 2rem;
	font-weight: bold;
	margin-bottom: 10px;
	color: #fff;
}

.contact p {
	font-size: 1rem;
	font-weight: bold;
	margin-bottom: 30px;
	color: #fff;
}

/* Contact Form */
.contact-form {
	display: flex;
	flex-direction: column;
	gap: 15px;
}

.contact-form input,
.contact-form textarea {
	padding: 15px;
	font-size: 1rem;
	font-family: inherit;
	border: 1px solid #444;
	border-radius: 8px;
	color: #000;
	background-color: #fff;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
	font-family: inherit;
	color: #aaa;
}

.contact-form textarea {
	resize: none;
}

/* Submit Button */
.send-btn {
	width: 200px;
	padding: 15px 20px;
	font-size: 1rem;
	font-weight: bold;
	border: 2px solid #fff;
	background-color: transparent;
	color: #fff;
	border-radius: 25px;
	cursor: pointer;
	transition: all 0.3s ease;
	margin: 0 auto;
	display: block;
}

.send-btn:hover {
	background-color: #fff;
	color: #000;
}

/* Reset Button */
.reset-btn {
	width: 200px;
	padding: 15px 20px;
	font-size: 1rem;
	font-weight: bold;
	border: 2px solid #fff;
	background-color: transparent;
	color: #fff;
	border-radius: 25px;
	cursor: pointer;
	transition: all 0.3s ease;
	margin: 10px auto;
	display: block;
}

.reset-btn:hover {
	background-color: #fff;
	color: #000;
}

/* Footer Section */
.footer {
	background-color: #111;
	color: #fff;
	padding: 20px;
	text-align: center;
}

.footer-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1200px;
	margin: 0 auto;
}

.footer-logo {
	width: 100px;
	height: auto;
	object-fit: contain;
	margin-right: 15px;
}

.footer-text {
	font-size: 1rem;
	font-weight: normal;
	color: #fff;
}

.footer-socials {
	display: flex;
	gap: 20px;
	align-items: center;
	justify-content: center;
	margin-top: 0;
	margin-bottom: 0px;
}

.social-icon {
	display: inline-block;
	text-decoration: none;
}

.social-circle {
	width: 50px;
	height: 50px;
	background-color: white;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: transform 0.3s ease, background-color 0.3s ease;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.social-circle:hover {
	transform: scale(1.1);
}

.social-img {
	width: 24px;
	height: 24px;
	object-fit: contain;
}

html {
	scroll-behavior: smooth;
}

.fade-in {
	opacity: 0;
	transform: translateY(20px);
	transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in.visible {
	opacity: 1;
	transform: translateY(0);
}
</style>