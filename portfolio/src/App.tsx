import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Github, Linkedin, Mail, Code, Sparkles, Send } from "lucide-react";
import ProjectCard from "./components/ProjectCard";
import profileimg from "./aboutmepic.png"
function App() {
  const projects = [
    {
      title: "Real-time chat application",
      description:
        "A real-time chat application featuring authentication with one on one and group chats using websockets.",
      image:
        "https://www.gtechme.com/wp-content/uploads/2024/07/Top-Chatting-Apps-In-UAE-2024-Update-image-1024x576.jpg",
      sourceCode: "https://github.com/RuturajChandgude/Chat-app",
      liveDemo: "https://example.com",
      tags: ["React", "Node.js", "Websocket", "MongoDB"],
    },
    {
      title: "Mockmate",
      description:
        "MockMate is an AI-driven platform for realistic mock interviews with feedback and analytics to improve performance.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2Z_mK96kGLQKh1TkKsRvXbXJ23beAGx4iQ&s",
      sourceCode: "https://github.com/RuturajChandgude/MockMate",
      liveDemo: "https://example.com",
      tags: ["Next.js", "React", "PostgreSQL", "GeminiAPI"],
    },
    {
      title: "Medicare",
      description:
        "MediCare is a doctor booking platform that connects patients with healthcare professionals for appointments and consultations.",
      image:
        "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/doctor-doing-a-medical-exam-1296x728-header.jpg?w=1155&h=1528",
      sourceCode: "https://github.com/RuturajChandgude/Medicare",
      liveDemo: "https://example.com",
      tags: ["React", "Node.js", "Express.js", "MongoDB"],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
        <Navbar />

        {/* home */}
        <section
          id="home"
          className="min-h-screen flex items-center relative overflow-hidden"
        >
          <div className="absolute inset-0 gradient-bg opacity-5"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-in">
                <h1 className="text-6xl font-bold mb-6 leading-tight text-gradient">
                  Hello! I'm Ruturaj Chandgude
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 font-medium mb-8">
                  Web developer-Crafting beautiful, interactive experiences for
                  the modern web
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="#contact"
                    className="px-8 py-3 bg-indigo-600 text-white rounded-full flex items-center space-x-2 hover:bg-indigo-700 transition-all duration-300 hover:scale-105"
                  >
                    <Send className="h-5 w-5" />
                    <span>Get in Touch</span>
                  </a>
                  <a
                    href="#projects"
                    className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                  >
                    <Code className="h-5 w-5" />
                    <span>View Work</span>
                  </a>
                  {/* Resume Button */}
                  <a
                    href="https://drive.google.com/file/d/1c0duNFfJsKzc81JI1jpMTp1vQH29h_nv/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-indigo-600 text-white rounded-full flex items-center space-x-2 hover:bg-indigo-700 transition-all duration-300 hover:scale-105"
                  >
                    <Sparkles className="h-5 w-5" />
                    <span>My Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* aboutMe */}
        <section id="about" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-5"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-scale-in">
                <h2 className="text-4xl font-bold text-gradient mb-4">
                  About Me
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-slide-in">
                  <img
                    src={profileimg}
                    alt="Profile"
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div className="space-y-6 animate-fade-in-delay">
                  <p className="text-gray-600 dark:text-gray-300">
                    I'm Ruturaj Chandgude,final year computer engineering
                    student at Thadomal Shahani Engineering college.I am
                    passionate MERN developer with a keen eye for design and a
                    love for creating seamless user experiences. With expertise
                    in modern web technologies and a background in both
                    front-end and back-end development, I bring ideas to life
                    through clean, efficient code.
                  </p>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      Skills & Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "Next.js",
                        "Node.js",
                        "Express.js",
                        "SQL",
                        "MongoDB",
                        "Java",
                        "Python",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-scale-in">
              <h2 className="text-4xl font-bold text-gradient mb-4">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore my latest work across various domains and technologies
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* contact */}
        <section id="contact" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-5"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-scale-in">
                <h2 className="text-4xl font-bold text-gradient mb-4">
                  Get in Touch
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Let's discuss your next project
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8 animate-slide-in">
                  <div className="flex items-center space-x-4">
                    <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        Email
                      </h3>
                      <a
                        href="chandguderuturaj@gmail.com"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        chandguderuturaj@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full">
                      <Github className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        GitHub
                      </h3>
                      <a
                        href="https://github.com/RuturajChandgude"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        github.com/RuturajChandgude
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full">
                      <Linkedin className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        LinkedIn
                      </h3>
                      <a
                        href="https://www.linkedin.com/in/ruturaj-chandgude-923101230/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        linkedin.com/in/RuturajChandgude
                      </a>
                    </div>
                  </div>
                </div>
                <form className="space-y-6 animate-fade-in-delay">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
