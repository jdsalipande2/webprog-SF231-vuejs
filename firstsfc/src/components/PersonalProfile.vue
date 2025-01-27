<template>
  <section class="personal-profile">
    <!-- About Section -->
    <div class="about-section">
      <h2>About Me</h2>
      <div class="about-content">
        <div class="about-image">
          <img src="@/assets/Profile%20Picture.jpg" alt="Janice's Portrait">
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
    </div>

    <!-- Education Section -->
    <div class="education-section">
      <h2>Education</h2>
      <div class="education-content">
        <div v-for="(education, index) in educationList" :key="index" class="education-card">
          <div class="education-card-header">
            <img :src="education.icon" :alt="education.institution">
          </div>
          <h3>{{ education.degree }}</h3>
          <p>{{ education.year }}</p>
          <p><strong>{{ education.institution }}</strong></p>
          <p><strong>Awards:</strong></p>
          <ul>
            <li v-for="award in education.awards" :key="award">{{ award }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Experience Section -->
    <div class="experience-section">
      <h2>Experience</h2>
      <div v-for="(job, index) in experienceList" :key="index" class="experience-item">
        <h3>{{ job.title }}</h3>
        <p>{{ job.date }}</p>
        <p><strong>{{ job.company }}</strong></p>
        <ul>
          <li v-for="(task, taskIndex) in job.tasks" :key="taskIndex">{{ task }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PersonalProfile',
  data() {
    return {
      educationList: [
        {
          degree: 'Senior High School',
          year: '2021 - 2023',
          institution: 'Asia Pacific College',
          icon: '@/assets/education%20star%201.png',
          awards: ['With High Honors', 'Most Outstanding Student in Mathematics', 'Most Outstanding Student in Science'],
        },
        {
          degree: 'BS Computer Science',
          year: '2023 - 2027',
          institution: 'Asia Pacific College',
          icon: '@/assets/education%20star%202.png',
          awards: ['Dean\'s Lister (A.Y. 2023 - 2024)'],
        },
      ],
      experienceList: [
        {
          title: 'UX/UI Designer',
          date: 'August 2024 - November 2024',
          company: 'APC Ramket (E-commerce Website and Mobile App)',
          tasks: [
            'Led the UX/UI design process for the e-commerce platform.',
            'Designed wireframes, mockups, and high-fidelity prototypes for both the website and mobile app.',
          ],
        },
        {
          title: 'Video Editor & Social Media Manager',
          date: 'August 2024 - November 2024',
          company: 'DreamBuildsLA',
          tasks: [
            'Edited Instagram Reels showcasing real estate to captivate audiences.',
            'Managed the Instagram account to grow followers and engagement.',
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.personal-profile {
  padding: 20px;
}

.about-section,
.education-section,
.experience-section {
  margin-bottom: 40px;
}

.about-content {
  display: flex;
  gap: 20px;
}

.about-image img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.education-card,
.experience-item {
  background: #f9f9f9;
  padding: 20px;
  margin-bottom: 20px;
}

.education-card-header img {
  width: 50px;
}

h2 {
  font-size: 2em;
  margin-bottom: 20px;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}

ul li {
  margin-bottom: 5px;
}
</style>