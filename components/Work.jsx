export default function Work() {
  const work = [
    {
      name: "library management System",
      icon: "/assets/lms1.jpg",
      description: "Library Management System where we can lend, borrow books.",
      link: "https://finallibrary.netlify.app/",
    },
    {
      name: "Ecommerce website",
      icon: "/assets/ecommerce.jpg",
      description: "Web ecommerce where we can buy electronic devices.",
      link: "https://ls-electronic.netlify.app/",
    },
    {
      name: "Portfolio website",
      icon: "/assets/portfolio.jpg",
      description: "Portfolio website to showcase my skills and projects.",
      link: "https://lakpa.netlify.app/",
    },
    {
      name: "School Web application",
      icon: "/assets/school.jpg",
      description: "School website with detailed information about the school.",
      link: "https://ramailopathsala.netlify.app/",
    },
  ];

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-16 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 -bottom-5">
        {work.map((item) => (
          <div key={item.name} className="relative">
            {/* Image */}
            <div className="rounded-2xl overflow-visible shadow-lg">
              <img
                src={item.icon}
                alt={item.name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Overlapping Card */}
            <div
              className="relative -top-5 p-5
                         bg-white dark:bg-darkCard rounded-xl shadow-lg
                         w-[100%] text-center
                         transition hover:-translate-y-1"
            >
              <h3 className="font-semibold text-lg  text-gray-800 dark:text-gray-500 ">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 my-3">
                {item.description}
              </p>

              <a
                href={item.link || "#"}
                className="inline-block px-6 py-2 text-sm font-medium
                           rounded-lg bg-violet-100 text-violet-700
                           hover:bg-violet-200 transition"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Spacer for overlapping cards */}
      <div className="h-24"></div>

      {/* Show more */}
      <a
        href="https://github.com/lakpa05"
        className="w-max flex items-center gap-2 text-gray-700 border border-gray-300
                   dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover
                   rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white"
      >
        Show more
        <img src="/assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
        <img src="/assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
      </a>
    </div>
  );
}
