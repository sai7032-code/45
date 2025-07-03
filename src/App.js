// React Portfolio for Prathiksha Marati with interactive hover effects

import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImg from "./prathiksha_profile.jpg"; // Add your profile image

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-pink-50 to-blue-100 text-gray-800 font-sans">

      {/* Hero Section */}
      <section data-aos="fade-down" className="bg-gradient-to-br from-[#141e30] via-[#243b55] to-[#141e30] text-white py-20 px-6 text-center">
        <img src={profileImg} alt="Prathiksha Marati" className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white shadow-2xl" />
        <h1 className="text-5xl font-extrabold mb-2 tracking-wider">Prathiksha Marati</h1>
        <p className="text-xl font-medium">AWS | DevOps | Linux | Cloud | Docker | Jenkins | Python (Basic)</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["summary", "technical-summary", "skills", "projects", "certifications", "education", "contact"].map(section => (
            <a key={section} href={`#${section}`} className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold shadow hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:text-white transition capitalize">
              {section.replace("-", " ")}
            </a>
          ))}
        </div>
        <a
          href="/PrathikshaMarati_Resume.pdf"
          download
          className="mt-6 inline-block bg-white text-indigo-900 px-6 py-3 rounded-full font-bold shadow-md hover:bg-indigo-100 transition duration-300"
        >
          ⬇️ Download Resume
        </a>
      </section>

      {/* Summary */}
<section id="summary" data-aos="fade-left" className="p-8 max-w-5xl mx-auto bg-white rounded-xl shadow-lg hover:bg-indigo-50 transition duration-300">
  <h2 className="text-3xl font-bold mb-4 text-indigo-800 border-b-4 border-indigo-300 pb-2 text-center">
    🧾 Summary
  </h2>
  <p className="text-lg leading-relaxed text-gray-800">
    Professionally trained in RedHat Linux, AWS, DevOps automation tools, and Windows OS with strong understanding of networking protocols, load balancers, and cloud architecture. Passionate about cloud solutions and infrastructure automation.
  </p>
</section>

      
      {/* Education */}
      <section id="education" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12 border-b-4 border-blue-400 pb-2">🎓 Education</h2>

        {[
          {
            title: "BE - Information Science & Engineering",
            desc: "Bapuji Institute of Engineering & Technology, Davangere (2020–2024)",
            color: "from-blue-100 via-white to-blue-50"
          },
          {
            title: "PU - PCMB",
            desc: "SES PU Science College, Sandur (2018–2020)",
            color: "from-indigo-100 via-white to-indigo-50"
          },
          {
            title: "SSLC",
            desc: "Vittalarao Lad Rotary High School, Sandur (2017–2018)",
            color: "from-green-100 via-white to-green-50"
          }
        ].map((edu, i) => (
          <div key={i} data-aos="fade-up" className={`bg-gradient-to-br ${edu.color} rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition`}>
            <h3 className="text-xl font-semibold mb-2">{edu.title}</h3>
            <p className="text-gray-700">{edu.desc}</p>
          </div>
        ))}
      </section>
      
      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-12 border-b-4 border-purple-400 pb-2">🧠 Technical Skills</h2>

        <div data-aos="fade-up" className="bg-gradient-to-r from-purple-100 via-white to-indigo-100 rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold text-purple-800 mb-2">☁️ AWS Services</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>EC2, S3, IAM, VPC, CloudFormation, CloudFront, CloudTrail</li>
            <li>RDS, Route 53, Lambda, DynamoDB, Auto Scaling</li>
          </ul>
        </div>

        <div data-aos="fade-up" className="bg-gradient-to-r from-pink-100 via-white to-rose-100 rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold text-pink-800 mb-2">🔧 DevOps Tools</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Git, Jenkins, Docker, Kubernetes, Maven</li>
            <li>Ansible (Playbooks)</li>
          </ul>
        </div>

        <div data-aos="fade-up" className="bg-gradient-to-r from-teal-100 via-white to-green-100 rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold text-green-800 mb-2">💻 Programming & OS</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Python (Basic), SQL</li>
            <li>Linux (RedHat), Windows OS</li>
          </ul>
        </div>
      </section>
{/* Technical Summary */}
<section id="technical-summary" data-aos="zoom-in" className="p-8 max-w-5xl mx-auto bg-gradient-to-r from-teal-100 via-white to-purple-100 rounded-xl shadow hover:shadow-2xl hover:bg-gradient-to-tr hover:from-teal-200 hover:via-purple-200 hover:to-white transition duration-300">
  <h2 className="text-3xl font-bold mb-4 text-teal-800 border-b-4 border-teal-400 pb-2 text-center">
    📘 Technical Summary
  </h2>
  <ul className="list-disc pl-6 space-y-2 text-gray-800">
    <li>Creating AWS EC2 instances and configuring S3 storage</li>
    <li>Managing IAM security, VPC creation, and DNS/firewall configurations</li>
    <li>Designing & deploying applications on the cloud</li>
    <li>Automation of development processes and cost-optimization</li>
    <li>Monitoring workloads using CloudWatch, maintaining infrastructure via Ansible & CloudFormation</li>
    <li>Interacting with clients and providing cloud support</li>
    <li>Root cause analysis and infrastructure issue resolution</li>
    <li>Developing scripts for automation & visualization tasks</li>
  </ul>
</section>


      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-yellow-700 mb-12 border-b-4 border-yellow-400 pb-2">🚀 Projects</h2>

        {[
          {
            title: "Dockerized Flask App Deployment",
            desc: "Containerized a Python Flask app using Docker, deployed on AWS EC2 with public access setup.",
            link: "https://github.com/prathi1282/docker-flask-app.git"
          },
          {
            title: "Static Website Hosting on AWS S3",
            desc: "Designed and deployed a static website using AWS S3 to explore hosting and cloud storage concepts.",
            link: "https://github.com/prathi1282/aws-s3-static-website.git"
          },
          {
            title: "Optimizing Crop Management",
            desc: "A precision agriculture project using Krigging Technology for sustainable farming."
          },
          {
            title: "Garbage Management System",
            desc: "Developed using MySQL, HTML, and ZAMP with code implementation and presentation."
          },
          {
            title: "Full Stack Java App (Internship)",
            desc: "Created a frontend using React.js, Node.js, and VS Code during a full stack internship."
          }
        ].map((project, index) => (
          <div key={index} data-aos="fade-up" className="bg-gradient-to-br from-yellow-100 via-white to-yellow-50 rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">📌 {project.title}</h3>
            <p className="text-gray-700">{project.desc}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-600 underline">GitHub</a>
            )}
          </div>
        ))}
      </section>


      {/* Certifications */}
      <section id="certifications" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-12 border-b-4 border-teal-400 pb-2">📜 Certifications</h2>

        {[
          {
            title: "Smart India Hackathon – Internal (09/2023)",
            desc: "Participated in Internal Hackathon round for SIH 2023.",
            color: "from-teal-100 via-white to-blue-100"
          },
          {
            title: "Full Stack Java Internship (08/2023–09/2023)",
            desc: "Training focused on Java Full Stack Development (React.js, Node.js).",
            color: "from-purple-100 via-white to-pink-100"
          },
          {
            title: "IBM Developer Skills Network (02/2024)",
            desc: "Completed course on SQL and Relational Databases.",
            color: "from-blue-100 via-white to-indigo-100"
          },
          {
            title: "Skill India - Python Programming (09/02/2025)",
            desc: "Python programming certification via NSDC through Skill India Digital Hub.",
            color: "from-yellow-100 via-white to-orange-100"
          },
          {
            title: "Linux, AWS, DevOps Training Program (16/05/2025)",
            desc: "Completed in-depth training on Linux administration, AWS services and DevOps tools.",
            color: "from-green-100 via-white to-lime-100"
          }
        ].map((cert, idx) => (
          <div key={idx} data-aos="fade-up" className={`bg-gradient-to-br ${cert.color} rounded-xl shadow p-6 mb-6 hover:shadow-2xl transition`}>
            <h3 className="text-lg font-semibold">{cert.title}</h3>
            <p className="text-gray-700">{cert.desc}</p>
          </div>
        ))}
      </section>

      
      {/* Contact Section */}
      <section id="contact" data-aos="fade-up" className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">📬 Get in Touch</h2>
        <p className="mb-2">📧 <a href="mailto:prathikshamarati2002@gmail.com" className="hover:underline text-blue-300">prathikshamarati2002@gmail.com</a></p>
        <p className="mb-2">📞 <a href="tel:+918073295713" className="hover:underline text-blue-300">+91 80732 95713</a></p>
        <p>📍 Sandur, Ballari, Karnataka, India</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/prathi1282" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition"><FaGithub size={30} /></a>
          <a href="https://linkedin.com/in/prathiksha-marati-a78128224" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition"><FaLinkedin size={30} /></a>
          <a href="mailto:prathikshamarati2002@gmail.com" className="hover:text-yellow-300 transition"><MdEmail size={30} /></a>
          <a href="tel:8073295713" className="hover:text-yellow-300 transition"><MdPhone size={30} /></a>
        </div>
      </section>

    </main>
  );
}