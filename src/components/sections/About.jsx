import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  
  const technicalSkills = [
    "Python",
    "C++",
    "HTML", 
    "CSS", 
    "JavaScript",
     "React", 
     "Tailwind CSS",
      "HTML",
       "Git",
        "Linux",
         "Windows",
          "Networking",
           "Web Development",
            "Powershell",
             "Google Suite", 
             "Microsft Office",
              "Microsoft Azure",
               "Microsoft Defender",
                "Microsoft Visual Studio/VS Code", 
                "Compliance", 
                "Security"
            ] ;
    const Certifications = [
        "Microsoft SC-900: Microsoft Security, Compliance, and Identity Fundamentals"
    ];
           
    return (
    <section 
    id="about" 
    className="min-h-screen flex items-center justify-center py-20"
    >
     <RevealOnScroll>
    <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
      {""}
       About Me
    </h2>

    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
      <p className="text-lg text-gray-300 mb-6">
       Passionate Cybersecurity student striving for excellence, 
       and knowledge of information security, security engineering, and software development.
      </p>
      <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
       <h3 className="text-xl font-bold mb-4"> Technical Skills</h3>
       <div className="flex flex-wrap gap-2"> 
      {technicalSkills.map((tech,key) => (
         <span
         key={key}
        className="bg-blue-500/40 text-white-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
         hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition
         ">
         {tech}
         </span>
      ))}
       </div>
      </div>
       
      <div className="rounded-xl p-6 hover:translate-y-1 transition-all mt-6">
       <h3 className="text-xl font-bold mb-4"> Certifications</h3>
       <div className="flex flex-wrap gap-2"> 
      {Certifications.map((tech,key) => (
         <span
         key={key}
        className="bg-blue-500/40 text-white-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
         hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition
         ">
         {tech}
         </span>
      ))}
       </div>
      </div>
    </div>
     
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong> B.S. in Cybersecurity Management and Analytics - Virginia Tech (2024 - 2028)</strong> 
          </li>
          <li>
            <strong> Minor: Computer Science</strong> 
          </li>
          <li>
          Relevant Coursework: Introduction to Python, Business Statistics Analytics and Modeling, Business Calculus, Business Analytics
          </li>
          <li>
          IC CAE (Intelligence Community Centers for Academic Excellence) Scholar
          </li>
          </ul>
        </div>
        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-bold mb-4"> 👋🏾 Involvement </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
           ColorStack 
          </li>
          <li>
            Deans Adviosry Board of Students
          </li>
          <li>
            CyberVT
          </li>
          <li>
            NSBE (National Society of Black Engineers)
          </li>
          <li>
            Delta Sigma Pi (Professional Business Fraternity)
          </li>
          <li>
            Swim Club
          </li>
          <li>
            SEO Career (Technolgy Track)
          </li>
          </ul>
        </div>
       </div>
       <div className="rounded-xl p-6 border-white/10 border hover:translate-y-1 transition-all mt-8">
       <h3 className="text-xl font-bold mb-4"> 📱 Work Expereince </h3>
      <div className="space-y-4 text-gray-300">
       <div>
        <h4 className="font-semibold"> SEO Tech Developer First Year Academy (Jan 2025 - Current)</h4>
        <p>Complete an 8-week program focusing on Python fundamentals and game development using Pygame.
         Learn programming concepts including variables, data types, control structures, functions, and object-oriented programming</p>
       </div>
       <div>
        <h4 className="font-semibold"> Pamplin's Deans Advisory Board of Students (Social Impact Chair/Alumni Partenerships Committee) (Jan 2025 - Current)</h4>
        <p>Create initiatives surrounding the Pamplin College of Business with diversity, equity, inclusion, and belonging. 
        Work with the Dean and Associate Dean of Pamplin to spread these initiatives and implement them in daily student life.
        Collaborate with student organizations/faculty to foster an inclusive and supportive environment for students in the college</p>
       </div>

      </div>
      
     
     </div>
     
    </div>
    </RevealOnScroll>
    </section>
    );
};

