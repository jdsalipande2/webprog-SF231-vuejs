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
          <source src="/masthead.mp4" type="video/mp4">
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
    <div class="fade-in" v-show="fadeInVisible">
      <section class="about-section" id="about">
        <h2>About</h2>
        <div class="about-content">
          <div class="about-image">
            <img src="/assets/Profile%20Picture.jpg" alt="Janice's Portrait">
          </div>
          <div class="about-text">
            <p><strong>HELLO!</strong><br><br>
              I am Janice, a second-year college student studying Computer Science with a focus on Cybersecurity and Forensics.
              I also do freelance work in graphic design, video editing, and social media management.
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      fadeInVisible: false
    };
  },
  methods: {
    smoothScroll(target) {
      document.querySelector(target).scrollIntoView({
        behavior: "smooth"
      });
    },
    handleScroll() {
      const aboutSection = document.querySelector(".fade-in");
      if (!aboutSection) return;
      const rect = aboutSection.getBoundingClientRect();
      this.fadeInVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
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
</style>
