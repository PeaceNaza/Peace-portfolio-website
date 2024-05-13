import React from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faRightLong } from '@fortawesome/free-solid-svg-icons/faRightLong'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "swiper/css";
import "../Styles/App.css"


const Projects = () => {
  return (
    <>
    <section className="my-10 mb-20 border shadow-inner pb-10">
    <h1 className="text-center mt-8 font-bold text-2xl text-[#22024A]">Project Highlights</h1>
   <div className="flex justify-end items-end"> 
   <FontAwesomeIcon icon={faRightLong} className="icon h-7 mr-5 animate-ping" style={{animationDuration: "2s",animationIterationCount: "infinite", animationTimingFunction: "ease-out"}} /></div>
    <div className="mt-5">
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
         // when window width is >= 640px
         640: {
           width: 640,
           slidesPerView: 1,
         },
         // when window width is >= 768px
         768: {
           width: 768,
           slidesPerView: 2,
         },

         //when window width is >= 1024px
         1024: {
           width: 1024,
           slidesPerView: 3,
         },

         //when window width is >= 1280px
         1280: {
           width: 1280,
           slidesPerView: 3,
         },
       }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <div className="card1 ml-2 text-white lg:w-[400px] lg:h-[200px] bg-[#22024A] shadow-xl transform transition-transform duration-300 hover:scale-[1.08] text-start text-wrap">
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
      </SwiperSlide>

      <SwiperSlide>
      <div className="card1 ml-3 text-white lg:w-[400px] lg:h-[200px] bg-[#22024A] shadow-xl transform transition-transform duration-300 hover:scale-[1.08]">
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
         <a href="https://todo-6ulk9zr3f-peaces-projects-1e9140df.vercel.app/
"> <FontAwesomeIcon icon={faEye} className="mr-2" />
           Live</a>
         </div>
       </div>
    </div>
</div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="card1 ml-2 text-white lg:w-[400px] lg:h-[200px] bg-[#22024A] shadow-xl transform transition-transform duration-300 hover:scale-[1.08]">
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
      </SwiperSlide>

      <SwiperSlide>
      <div className="card1 ml-1 text-white lg:w-[400px] lg:h-[200px] bg-[#22024A] shadow-xl transform transition-transform duration-300 hover:scale-[1.08]">
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
      </SwiperSlide>

      <SwiperSlide>
      <div className="card1 text-white lg:w-[400px] lg:h-[200px] bg-[#22024A] shadow-xl transform transition-transform duration-300 hover:scale-[1.08]">
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
      </SwiperSlide>
      

    </Swiper>
    
   </div>
 </section>
</>
  )
}

export default Projects