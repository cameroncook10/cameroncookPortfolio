import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-10 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition">
                            <h3 className="text-xl font-bold mb-2">Cybersecurity Homelab</h3>
                            <p className="text-gray-300 mb-4">
                                A Cybersecurity homelab built with Oracle VirtualBox, Kali Linux, and Windows Server 2019.
                                It includes a Windows Active Directory Domain Controller, and a Kali Linux machine for penetration testing.
                                Expansions coming soon...
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                {["Linux", "VirtualBox", "Python", "Wireshark", "Penetration Testing", "Incident Response"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/40 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-center items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project 🢂
                                </a>
                            </div>
                            <div className="flex justify-center items-center">
                                <a href="https://github.com/cameroncook10/Cybersecurity-Homelab" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    Github Repository 🢂
                                </a>
                            </div>
                        </div>
                        <div className="p-10 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition">
                            <h3 className="text-xl font-bold mb-2">Personal Website Portfolio</h3>
                            <p className="text-gray-300 mb-4">
                                My personal website built with React and Tailwind CSS.
                                It showcases all my skills, projects, and experiences.
                                Also includes a mobile responsive interface.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                {["React", "TailwindCSS", "Visual Studio Code", "Vite", "Javascript", "HTML", "CSS"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/40 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-center items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project 🢂
                                </a>
                            </div>
                            <div className="flex justify-center items-center">
                                <a href="https://github.com/cameroncook10/cameroncookPortfolio.git" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    Github Repository 🢂
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
