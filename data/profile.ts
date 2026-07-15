// Edit this file to customize your portfolio content.

export interface ContactInfo {
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
}

export interface Profile {
  name: string;
  photo: string;
  role: string;
  apprenticeId: string;
  shortBio: string;
  forgeCohort: string;
  skills: string[];
  contact: ContactInfo;
}

const profile: Profile = {
  name: "Haripriya N R",
  photo: "/haripriya.jpg", // Replace with your own image in /public if desired
  role: "Information Science Engineering Student | AI & Cloud Enthusiast",
  apprenticeId: "NCET-ISE-2027",
  shortBio:
    "I'm Haripriya N R, a Bachelor of Engineering student in Information Science at Nagarjuna College of Engineering and Technology. I enjoy building AI-powered applications, cloud-based solutions, and full-stack web applications using React, Flask, Python, Java, AWS, and Google Cloud. I'm passionate about solving real-world problems through technology and continuously expanding my skills in Artificial Intelligence, Machine Learning, and Cloud Computing.",
  forgeCohort: "Graduating in 2027",
  skills: [
    "Java",
    "Python",
    "JavaScript",
    "React",
    "Flask",
    "Django",
    "AWS",
    "Google Cloud",
    "TensorFlow",
    "Scikit-Learn",
    "SQL",
    "MySQL",
    "Git",
    "GitHub",
    "Machine Learning",
    "Generative AI",
    "LLMs"
  ],
  contact: {
    email: "haripriyarajshekar@gmail.com",
    phone: "+91-6360183971",
    linkedin: "https://linkedin.com/in/haripriya-nr-4640382b7",
    github: "https://github.com/PhenioxQueen",
  },
};

export default profile;
