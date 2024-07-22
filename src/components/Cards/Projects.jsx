import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import "../Styles/App.css";

const Projects = () => {
  const projectDetails = [
    {
      title: "Multi-Step Form",
      stack: "REACT + TailwindCSS + Zustand + Mantine",
      description: "Form-building challenge from Frontend Mentor",
      codeLink: "https://github.com/PeaceNaza/multi_step_form_fm.git",
      liveLink: "https://multi-step-form-fm-orpin.vercel.app/",
    },
    {
      title: "Tmdb api Movie App",
      stack: "REACT + TailwindCSS +  useQuery",
      description: "Movie data from tmdb api for web application",
      codeLink: "https://github.com/PeaceNaza/movie-mate-tmdb.git",
      liveLink: "https://movie-mate-tmdb.vercel.app/",
    },
    {
      title: "News Homepage",
      stack: "REACT + TailwindCSS +  Mantine",
      description: "News Homepage challenge from Frontend Mentor",
      codeLink: "https://github.com/PeaceNaza/news_homepage_fm",
      liveLink: "https://news-homepage-fm-three.vercel.app/",
    },
    {
      title: "Feedback Review App",
      stack: "REACT + CSS + LOCALSTORAGE",
      description: "Feedback Review App with user ratings and comments",
      codeLink: "https://github.com/PeaceNaza/Feedback-App.git",
      liveLink: "https://feedback-app-beige-mu.vercel.app/",
    },
    {
      title: "Task Manager",
      stack: "REACT + TailwindCSS + Zustand",
      description: "State management with Zustand",
      codeLink: "https://github.com/PeaceNaza/Zustand-mgt-store.git",
      liveLink: "https://zustand-mgt-store.vercel.app/",
    },
    {
      title: "Todo App",
      stack: "React + TailwindCSS + LOCALSTORAGE",
      description: "Todo App for efficient task management",
      codeLink: "https://github.com/PeaceNaza/Todo-app.git",
      liveLink: "https://todo-app-zeta-kohl.vercel.app/",
    },
    {
      title: "Quiz App",
      stack: "HTML + CSS + javaScript",
      description: "Random question with multiple choices",
      codeLink: "https://github.com/PeaceNaza/Quiz-App.git",
      liveLink: "https://quiz-app-taupe-eight.vercel.app/",
    },
    {
      title: "FAQ Dropdown Accordion",
      stack: "HTML + CSS + JavaScript",
      description: "FAQ Dropdown Accordion for users to access frequently asked questions",
      codeLink: "https://github.com/PeaceNaza/Faq-accordion-challenge.git",
      liveLink: "https://faq-accordion-challenge-tau.vercel.app/",
    },
    {
      title: "Login and Sign-Up Page",
      stack: "React + TailwindCSS + Firebase",
      description: "Login and Sign-Up with secure Firebase authentication",
      codeLink: "https://github.com/PeaceNaza/Firebase-Auth.git",
      liveLink: "https://firebase-project-tan.vercel.app/",
    },
  ];

  return (
    <>
      <section className="my-10 pb-10">
        <h1 className="text-center mt-8 font-bold text-2xl text-[#22024A]">Project Highlights</h1>
        <div className="flex flex-wrap justify-start gap-x-5 gap-y-5 mt-5 md:ml-10">
          {projectDetails.map((project, index) => (
            <div key={index}>
              <div className="card1 ml-2 w-[360px] h-[200px]  text-white bg-[#22024A] shadow-xl transform transition-transform duration-300 hover:scale-[1.08] text-start text-wrap">
                <div className="card-body">
                  <h2 className="card-title font-extralight text-xl">{project.title}</h2>
                  <p className="text-[10.4px] font-medium leading-8">{project.stack}</p>
                  <p className="font-extralight text-sm">{project.description}</p>
                  <div className="card-actions justify-start text-sm font-extralight gap-5 leading-8">
                    <div className="flex justify-between text-sm font-extralight leading-8">
                      <a href={project.codeLink}>
                        {" "}
                        <FontAwesomeIcon icon={faGithub} className="mr-2" />
                        Code
                      </a>
                    </div>
                    <div className="flex justify-between">
                      <a href={project.liveLink}>
                        {" "}
                        <FontAwesomeIcon icon={faEye} className="mr-2" />
                        Live
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
