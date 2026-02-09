import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Database, 
  Server, 
  Globe, 
  Cpu, 
  Layout, 
  GitBranch, 
  MessageSquare, 
  Monitor,
  Github,
  Mail,
  Linkedin,
  ArrowRight,
  Sun,
  Moon,
  Phone,
  MapPin,
  Download
} from 'lucide-react';
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, 
  SiExpress, SiMongodb, SiMysql, SiRedux, SiTailwindcss, 
  SiTypescript, SiPostman, SiGit, SiWebrtc, SiSocketdotio,
  SiWhatsapp
} from 'react-icons/si';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function App() {
  const [scrolled, setScrolled] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };



  const skills = [
    { name: 'HTML5', icon: <SiHtml5 className="w-6 h-6" /> },
    { name: 'CSS3', icon: <SiCss3 className="w-6 h-6" /> },
    { name: 'JavaScript', icon: <SiJavascript className="w-6 h-6" /> },
    { name: 'React', icon: <SiReact className="w-6 h-6" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="w-6 h-6" /> },
    { name: 'Express', icon: <SiExpress className="w-6 h-6" /> },
    { name: 'MongoDB', icon: <SiMongodb className="w-6 h-6" /> },
    { name: 'SQL', icon: <SiMysql className="w-6 h-6" /> },
    { name: 'Redux', icon: <SiRedux className="w-6 h-6" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="w-6 h-6" /> },
    { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6" /> },
    { name: 'Postman', icon: <SiPostman className="w-6 h-6" /> },
    { name: 'Git', icon: <SiGit className="w-6 h-6" /> },
    { name: 'WebRTC', icon: <SiWebrtc className="w-6 h-6" /> },
    { name: 'WebSockets', icon: <SiSocketdotio className="w-6 h-6" /> },
  ];

  const projects = [
    {
      title: 'Bedtalk',
      description: 'A platform where strangers can connect over voice calls, text, and photos. Features real-time communication using WebRTC.',
      tech: ['React', 'Express', 'Node.js', 'WebSockets', 'WebRTC', 'Tailwind'],
      icon: <MessageSquare className="w-8 h-8 mb-4" />,
      link: 'https://www.bedtalk.in',
      image: '/bedtalk.png'
    },
    {
      title: 'Pillow',
      description: 'A fully responsive website offering a smooth user experience. Built with a robust MERN stack backend.',
      tech: ['React', 'Express', 'Node.js', 'MongoDB'],
      icon: <Monitor className="w-8 h-8 mb-4" />,
      link: 'https://pillow-pi.vercel.app',
      image: '/pillow.png'
    }
  ];

  const experience = [
    {
      company: 'Ayodhya Websoft Pvt Ltd',
      role: 'Full Stack Developer',
      period: 'Present',
      location: 'Bhilai, Durg, Chattisgarh',
      description: 'Currently working as a Full Stack Developer, contributing to various web application projects.',
      points: [
        'Built highly secure Admin panels.',
        'Optimized API calls with accuracy.',
        'Boosted system performance with optimized architecture.',
        'Integrated RESTful APIs and implemented secure, validated forms using React Hooks.'
      ]
    }
  ];

  const contactLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/codeemoon", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/akhand-upadhyay-a78444313", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:upadhyayakhand909@gmail.com", label: "Email", text: "upadhyayakhand909@gmail.com" },
    { icon: <SiWhatsapp className="w-5 h-5" />, href: "https://wa.me/916392934409", label: "WhatsApp", text: "+91 6392934409" },
    { icon: <Phone className="w-5 h-5" />, href: "tel:+916392934409", label: "Phone", text: "+91 6392934409" }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans selection:bg-black selection:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out border-b ${scrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md border-gray-100 dark:border-gray-800 py-4 text-black dark:text-white' : 'bg-transparent border-transparent py-4 text-white mix-blend-difference'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-6 md:gap-12">
          <div className="flex items-center gap-2">
            <Code2 className="w-7 h-7 md:w-8 md:h-8" />
          </div>

          {/* Navigation Items - Visible on all screens */}
          <div className="flex items-center gap-3 md:gap-8 mr-auto md:mr-0">
            {['Projects', 'Experience', 'Skills'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-xs md:text-sm font-medium hover:opacity-75 transition-opacity uppercase tracking-widest cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="ml-auto">
            <button
              onClick={toggleTheme}
              className="p-1.5 md:p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
            >
              {theme === 'light' ? <Moon size={18} className="md:w-5 md:h-5" /> : <Sun size={18} className="md:w-5 md:h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Split Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
           {/* White Background (Default) */}
           <div className="absolute inset-0 bg-white dark:bg-black transition-colors duration-300" />
           {/* Black Diagonal Overlay - In Dark mode, this becomes Dark Gray or stays Black for subtle texture */}
           <div 
             className="absolute inset-0 bg-black dark:bg-neutral-900 hidden md:block transition-colors duration-300" 
             style={{ clipPath: 'polygon(65% 0, 100% 0, 100% 100%, 35% 100%)' }} 
           />
           {/* Mobile: Top/Bottom Split */}
           <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black dark:bg-neutral-900 md:hidden transition-colors duration-300" />
        </div>

        <div className="max-w-7xl w-full mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center h-full pt-20">
          {/* Left Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-left"
          >
            <motion.h2 variants={fadeInUp} className="text-sm font-bold tracking-[0.2em] mb-4 text-gray-500 dark:text-gray-400 uppercase">
              Full Stack Developer
            </motion.h2>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-display font-bold mb-6 leading-none tracking-tighter uppercase dark:text-white">
              AKHAND<br/>UPADHYAY
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md leading-relaxed">
              Based in India. <br/>
              Crafting seamless digital experiences with precision and passion.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black font-bold tracking-wider hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center gap-2 cursor-pointer"
              >
                VIEW WORK <ArrowRight size={18} />
              </button>
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white font-bold tracking-wider hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center gap-2 cursor-pointer"
              >
                RESUME / CV <Download size={18} />
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex gap-4 mt-8">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.label === "Email" || link.label === "Phone" ? "_self" : "_blank"}
                  rel={link.label === "Email" || link.label === "Phone" ? "" : "noopener noreferrer"}
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all transform hover:-translate-y-1 text-black dark:text-white cursor-pointer"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content / Image Area */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative h-[400px] md:h-[600px] flex items-center justify-center md:justify-end"
          >
            {/* Image Container masked to fit the diagonal theme roughly, or just floating */}
            <div className="relative w-full h-full max-w-md md:max-w-lg overflow-hidden">
                <img 
                  src="/profile.webp" 
                  alt="Akhand Upadhyay" 
                  className="w-full h-full object-contain md:object-cover filter grayscale contrast-125 drop-shadow-2xl"
                />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tighter uppercase">Projects</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm">A collection of projects that demonstrate my passion for building robust applications.</p>
          </motion.div>

          <div className="grid gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border-b border-gray-100 dark:border-gray-800 pb-16 last:border-0"
              >
                {/* Mobile: Full width layout, Desktop: Grid */}
                <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
                  {/* Content Column */}
                  <div className="md:order-1">
                    {/* Icon + Featured Project Label */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-black text-white dark:bg-white dark:text-black rounded-lg transition-colors">
                        {project.icon}
                      </div>
                      <span className="text-sm font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500">Featured Project</span>
                    </div>
                    
                    {/* Project Title */}
                    <h3 className="text-3xl font-display font-bold mb-6 group-hover:underline decoration-2 underline-offset-4">
                      {project.title}
                    </h3>

                    {/* Mobile only: Image here */}
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="md:hidden bg-gray-100 dark:bg-gray-900 aspect-video rounded-xl overflow-hidden relative group-hover:shadow-2xl transition-all duration-500 mb-6"
                    >
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-contain p-2"
                      />
                    </motion.div>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.tech.map((techName, i) => {
                        const skill = skills.find(s => s.name.toLowerCase() === techName.toLowerCase()) || 
                                     skills.find(s => s.name.toLowerCase().includes(techName.toLowerCase()));
                        const Icon = skill ? skill.icon : <Code2 className="w-4 h-4" />;
                        
                        return (
                          <span 
                            key={i}
                            className="px-3 py-1 text-sm font-medium border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-300 flex items-center gap-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                          >
                            {React.cloneElement(Icon, { className: "w-4 h-4" })}
                            {techName}
                          </span>
                        );
                      })}
                    </div>

                    {/* View Project Link */}
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold hover:gap-3 transition-all cursor-pointer">
                      View Project <ArrowRight size={18} />
                    </a>
                  </div>
                  
                  {/* Desktop only: Image on right side */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="hidden md:block md:order-2 bg-gray-100 dark:bg-gray-900 aspect-video rounded-xl overflow-hidden relative group-hover:shadow-2xl transition-all duration-500"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-contain p-2"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-neutral-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-display font-bold mb-4 uppercase tracking-wider">Experience</h2>
          </motion.div>

          <div className="relative border-l-2 border-black/10 dark:border-white/10 ml-4 md:ml-0 space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-12"
              >
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-black dark:bg-white border-4 border-white dark:border-black shadow-sm" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                  <h3 className="text-2xl font-bold dark:text-white">{exp.role}</h3>
                  <span className="font-mono text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 px-2 py-1 rounded">{exp.period}</span>
                </div>
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                  <div className="text-lg font-medium text-gray-700 dark:text-gray-300">{exp.company}</div>
                  <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 italic">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-4">
                  {exp.description}
                </p>
                
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 dark:text-gray-400 max-w-2xl">
                  {exp.points.map((point, i) => (
                    <li key={i} className="pl-1">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-col items-center text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tighter">SKILLS</h2>
            <div className="h-1 w-20 bg-white" />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="p-4 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                  {React.cloneElement(skill.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="font-semibold tracking-wider text-gray-300">{skill.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-white dark:bg-black text-black dark:text-white text-center border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter"
          >
            LET'S TALK
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-xl mb-12"
          >
            Have a project in mind? Let's build something great together.
          </motion.p>
          
          
          <div className="flex flex-col items-center gap-6 mb-12">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.label === "Email" || link.label === "Phone" ? "_self" : "_blank"}
                rel={link.label === "Email" || link.label === "Phone" ? "" : "noopener noreferrer"}
                className="flex items-center gap-4 p-4 bg-gray-100/50 dark:bg-neutral-800/50 rounded-xl hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all w-full max-w-md mx-auto group cursor-pointer"
              >
                <div className="p-3 bg-white dark:bg-black text-black dark:text-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <div className="text-left flex-1 min-w-0">
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{link.label}</div>
                  <div className="text-lg font-bold text-black dark:text-white break-words overflow-hidden">{link.text || "View Profile"}</div>
                </div>
                <ArrowRight className="ml-auto w-5 h-5 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
          
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Akhand Upadhyay. All Rights Reserved.
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
