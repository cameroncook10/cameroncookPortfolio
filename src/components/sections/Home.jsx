
export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center"> 
            <div className="w-full md:w-1/2 flex flex-col items-center text-center px-8">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                    Hi, I'm Cameron Cook
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg">
                    I'm a student at Virginia Tech studying Cybersecurity and Computer Science. 
                    I'm passionate about technology and love to learn new things. 
                    I'm always looking for new opportunities to grow and expand my knowledge.
                    Here you will find all my personal projects, experiences, and skills!
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-lg">
                        View Projects
                    </a>
                    <a href="#contact" className="border-blue-500 text-blue-500 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-md hover:bg-blue-500/10">
                        Contact Me
                    </a>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-20">
                <div className="border-4 border-blue-500 p-4 rounded-lg shadow-lg">
                    <img src="https://i.postimg.cc/13TvYSY8/Adobe-Express-file.png" alt="Cameron Cook" className="max-h-[2000px]" loading="lazy" /> 
                </div>
            </div>
        </section>
    );
};