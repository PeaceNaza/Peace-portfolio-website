
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import "../Styles/App.css"

const Projects = () => {
  
  return (
    <>
    <section className="my-10 pb-10 px-3">
    <h1 className="text-center mt-8 font-bold text-2xl text-[#22024A]">Project Highlights</h1>
   
    <div className="mt-5 grid lg:grid-cols-3 sm:grid-cols-2 gap-5 pr-4 pl-1">

      <div className="card1 ml-2 text-white sm:w-[400px] sm:h-[200px] bg-[#22024A] shadow-xl transform transition-transform duration-300 hover:scale-[1.08] text-start text-wrap">
       <div className="card-body">
        <h2 className="card-title font-extralight text-xl">
        Tmdb api Movie App
     </h2>
      <p className="text-[10.4px] font-medium leading-8">REACT + TailwindCSS +  useQuery</p>
      <p className="font-extralight text-sm">Movie data from tmdb api for web application </p>
       <div className="card-actions justify-start text-sm font-extralight gap-5 leading-8">
       <div className="flex justify-between text-sm font-extralight leading-8">
           <a href="https://github.com/PeaceNaza/movie-mate-tmdb.git"> <FontAwesomeIcon icon={faGithub} className="mr-2" />
           Code</a>
         </div>
       <div className="flex justify-between">
         <a href="https://movie-mate-tmdb.vercel.app/"> <FontAwesomeIcon icon={faEye} className="mr-2" />
           Live</a>
         </div>
       </div>
    </div>
</div>
      
      <div className="card1 ml-2 text-white sm:w-[400px] sm:h-[200px] bg-[#22024A] shadow-xl transform transition-transform duration-300 hover:scale-[1.08] text-start text-wrap">
       <div className="card-body">
        <h2 className="card-title font-extralight text-xl">
        Feedback Review App
     </h2>
      <p className="text-[10.4px] font-medium leading-8">REACT + CSS + LOCALSTORAGE</p>
      <p className="font-extralight text-sm">Feedback Review App with user ratings and comments</p>
       <div className="card-actions justify-start text-sm font-extralight gap-5 leading-8">
       <div className="flex justify-between text-sm font-extralight leading-8">
           <a href="https://github.com/PeaceNaza/Feedback-App.git"> <FontAwesomeIcon icon={faGithub} className="mr-2" />
           Code</a>
         </div>
       <div className="flex justify-between">
         <a href="https://feedback-aurs1thf5-peaces-projects-1e9140df.vercel.app
"> <FontAwesomeIcon icon={faEye} className="mr-2" />
           Live</a>
         </div>
       </div>
    </div>
</div>
    
      <div className="card1 ml-2 text-white sm:w-[400px] sm:h-[200px] bg-[#22024A] shadow-xl transform transition-transform duration-300 hover:scale-[1.08] text-start text-wrap">
       <div className="card-body">
        <h2 className="card-title font-extralight text-xl">
        Task Manager
     </h2>
      <p className="text-[10.4px] font-medium leading-8">REACT + TailwindCSS + Zustand</p>
      <p className="font-extralight text-sm">State management with Zustand</p>
       <div className="card-actions justify-start text-sm font-extralight gap-5 leading-8">
       <div className="flex justify-between text-sm font-extralight leading-8">
           <a href="https://github.com/PeaceNaza/Zustand-mgt-store.git"> <FontAwesomeIcon icon={faGithub} className="mr-2" />
           Code</a>
         </div>
       <div className="flex justify-between">
         <a href="https://zustand-mgt-store.vercel.app/"> <FontAwesomeIcon icon={faEye} className="mr-2" />
           Live</a>
         </div>
       </div>
    </div>
</div>
      
      <div className="card1 ml-3 text-white sm:w-[400px] sm:h-[200px] bg-[#22024A] shadow-xl transform transition-transform duration-300 hover:scale-[1.08]">
       <div className="card-body">
        <h2 className="card-title font-extralight text-xl">
        Todo App
     </h2>
     <p className="text-[10.4px] font-medium leading-8">React + TailwindCSS + LOCALSTORAGE</p>
      <p  className="font-extralight text-sm">Todo App for efficient task management</p>
       <div className="card-actions justify-start text-sm font-extralight gap-5 leading-8">
       <div className="flex justify-between text-sm font-extralight leading-8">
           <a href="https://github.com/PeaceNaza/Todo-app.git"> <FontAwesomeIcon icon={faGithub} className="mr-2" />
           Code</a>
         </div>
       <div className="flex justify-between">
         <a href="https://todo-app-zeta-kohl.vercel.app/"> <FontAwesomeIcon icon={faEye} className="mr-2" />
           Live</a>
         </div>
       </div>
    </div>
</div>
     
      <div className="card1 ml-2 text-white sm:w-[400px] sm:h-[200px] bg-[#22024A] shadow-xl transform transition-transform duration-300 hover:scale-[1.08]">
       <div className="card-body">
        <h2 className="card-title font-extralight text-xl">
        Quiz App
     </h2>
      <p className="text-[10.4px] font-medium leading-8">HTML + CSS + javaScript</p>
      <p  className="font-extralight text-sm">Random question with multiple choices</p>
       <div className="card-actions justify-start text-sm font-extralight gap-5 leading-8">
         <div className="flex justify-between text-sm font-extralight leading-8">
           <a href="https://github.com/PeaceNaza/Quiz-App.git"> <FontAwesomeIcon icon={faGithub} className="mr-2" />
           Code</a>
         </div>
         <div className="flex justify-between">
         <a href="https://quiz-app-taupe-eight.vercel.app/"> <FontAwesomeIcon icon={faEye} className="mr-2" />
           Live</a>
         </div>
       </div>
    </div>
</div>
      
      <div className="card1 ml-1 text-white sm:w-[400px] sm:h-[200px] bg-[#22024A] shadow-xl transform transition-transform duration-300 hover:scale-[1.08]">
       <div className="card-body">
        <h2 className="card-title font-extralight text-xl">
        FAQ Dropdown Accordion
     </h2>
     <p className="text-[10.4px] font-medium leading-8">HTML + CSS + JavaScript</p>
      <p  className="font-extralight text-sm"> FAQ Dropdown Accordion for users to access frequently asked questions</p>
       <div className="card-actions justify-start text-sm font-extralight gap-5 leading-8">
         <div className="flex justify-between text-sm font-extralight leading-8">
           <a href="https://github.com/PeaceNaza/Faq-accordion-challenge.git"> <FontAwesomeIcon icon={faGithub} className="mr-2" />
           Code</a>
         </div>
         <div className="flex justify-between">
         <a href="https://faq-accordion-challenge-tau.vercel.app/"> <FontAwesomeIcon icon={faEye} className="mr-2" />
           Live</a>
         </div>
       </div>
    </div>
  </div>
     
      <div className="card1 text-white sm:w-[400px] sm:h-[200px] bg-[#22024A] shadow-xl transform transition-transform duration-300 hover:scale-[1.08] ml-3">
       <div className="card-body">
        <h2 className="card-title font-extralight text-xl">
        Login and Sign-Up Page
     </h2>
      <p className="text-[10.4px] font-medium leading-8">React + TailwindCSS + Firebase</p>
      <p  className="font-extralight text-sm">Login and Sign-Up with secure Firebase authentication</p>
       <div className="card-actions justify-start text-sm font-extralight gap-5 leading-8">
         <div className="flex justify-between text-sm font-extralight leading-8">
           <a href="https://github.com/PeaceNaza/Firebase-Auth.git"> <FontAwesomeIcon icon={faGithub} className="mr-2" />
           Code</a>
         </div>
         <div className="flex justify-between">
         <a href="https://firebase-project-tan.vercel.app/"> <FontAwesomeIcon icon={faEye} className="mr-2" />
           Live</a>
         </div>
       </div>
    </div>
</div>
     
    
   </div>
 </section>
</>
  )
}

export default Projects