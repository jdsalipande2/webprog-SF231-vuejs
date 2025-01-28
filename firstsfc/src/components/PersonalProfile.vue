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
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.2 } 
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });
  }
};
</script>

<style scoped>
</style>
