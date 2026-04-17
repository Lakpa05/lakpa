export default function About() {
    const tools = [
        { name: 'VS Code', icon: '/assets/vscode.png', description: 'VS Code' },
        { name: 'Firebase', icon: '/assets/firebase.png', description: 'Firebase' },
        { name: 'MySQL', icon: '/assets/mysql.svg', description: 'MySQL' },
        { name: 'Figma', icon: '/assets/figma.png', description: 'Figma' },
        { name: 'Canva', icon: '/assets/canva.svg', description: 'Canva' },
        { name: 'React', icon: '/assets/react.svg', description: 'React' },
        { name: 'Git', icon: '/assets/git.png', description: 'Git' },
        { name: 'PHP', icon: '/assets/php.svg', description: 'PHP' },
    ];

    const data = [
        {
            name: 'Languages',
            icon1: '/assets/code-icon.png',
            icon2: '/assets/code-icon-dark.png',
            description: 'HTML, CSS, JavaScript, React JS, Next JS',
        },
        {
            name: 'Education',
            icon1: '/assets/edu-icon.png',
            icon2: '/assets/edu-icon-dark.png',
            description: 'Bachelors in Computer Application',
        },
        {
            name: 'Projects',
            icon1: '/assets/project-icon.png',
            icon2: '/assets/project-icon-dark.png',
            description: 'Built more than 4 projects',
        },
    ];

    return (
        <section id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo">About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                
                {/* Image Section */}
                <div className="max-w-max mx-auto relative">
                    <img
                        src="/assets/user-image.png"
                        alt="User"
                        className="w-64 sm:w-80 max-w-none rounded-full"
                    />

                    <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
                        <img
                            src="/assets/dev-icon.png"
                            alt="Developer icon"
                            className="w-1/4"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full">
                    <p className="max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                        I am an experienced Frontend Developer with professional expertise in building modern web applications.
                        I enjoy creating clean, responsive, and user-friendly interfaces.
                    </p>

                    {/* Info Cards */}
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                        {data.map((item) => (
                            <li
                                key={item.name}
                                className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50"
                            >
                                <img src={item.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={item.icon2} alt="" className="w-7 mt-3 hidden dark:block" />

                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                                    {item.name}
                                </h3>

                                <p className="text-gray-600 text-sm dark:text-white/80">
                                    {item.description}
                                </p>
                            </li>
                        ))}
                    </ul>

                    {/* Tools */}
                    <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">
                        Tools I Use
                    </h4>

                    <ul className="flex flex-wrap items-center gap-3 sm:gap-5">
                        {tools.map((tool) => (
                            <li
                                key={tool.name}
                                className="flex flex-col items-center justify-center w-12 sm:w-14 aspect-square
                                           border border-gray-300 dark:border-white/30 rounded-lg
                                           cursor-pointer hover:-translate-y-1 duration-500"
                            >
                                <img
                                    src={tool.icon}
                                    alt={tool.name}
                                    className="w-5 sm:w-7"
                                />
                                <p className="text-[10px] sm:text-xs mt-1 text-center leading-tight">
                                    {tool.name}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}