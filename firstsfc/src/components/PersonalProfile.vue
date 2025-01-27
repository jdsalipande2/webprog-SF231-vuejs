<template>
  <section class="personal-profile">
    <!-- About Section -->
    <div class="about-section">
      <h2>About Me</h2>
      <p>Hello! I am Janice, a second-year college student studying Computer Science with a focus on Cybersecurity and Forensics. I also do freelance work in graphic design, video editing, and social media management.</p>
      <p><strong>Hobbies/Interests:</strong></p>
      <ul>
        <li>Watching movies, series, and anime</li>
        <li>Trying different cuisines</li>
        <li>Walking/Jogging in the morning</li>
        <li>Freelance Work</li>
      </ul>
    </div>

    <!-- Education Section -->
    <div class="education-section">
      <h2>Education</h2>
      <p><strong>Senior High School</strong> (2021 - 2023) - Asia Pacific College</p>
      <p><strong>BS Computer Science</strong> (2023 - 2027) - Asia Pacific College</p>
    </div>

    <!-- Services Section -->
    <div class="services-section">
      <h2>Services</h2>
      <ul>
        <li>Graphic Design</li>
        <li>Video Editing</li>
        <li>Social Media Management</li>
        <li>UX/UI Design</li>
      </ul>
    </div>
  </section>
</template>

<style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }

    .personal-profile {
      max-width: 800px;
      margin: 20px auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    h2 {
      color: #333;
      border-bottom: 2px solid #ddd;
      padding-bottom: 5px;
      margin-bottom: 15px;
    }

    p {
      color: #555;
      line-height: 1.6;
    }

    ul {
      list-style-type: square;
      padding-left: 20px;
      color: #555;
    }

    .about-section, .education-section, .services-section {
      margin-bottom: 30px;
    }

    .services-section ul {
      padding-left: 0;
    }

    .services-section li {
      background-color: #f9f9f9;
      margin: 5px 0;
      padding: 8px;
      border-radius: 4px;
    }
  </style>