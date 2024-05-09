import React from 'react'

const Projects = () => {
  return (
    <>
    <div className="mr-2 -ml-5">
    <h1 className="text-center mt-10 font-bold text-2xl">Project Highlights</h1>
    <div className="container grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-5 sm:ml-10 mt-5 mb-10 text-white lg:gap-x-10 w-auto mr-10">

    <div className="w-[295px] bg-[#22024A] shadow-xl transform transition-transform duration-300 hover:scale-[1.08] text-start -mr-10">
  
       <div className="card-body">
        <h2 className="card-title font-extralight text-xl">
        Feedback Review
     </h2>
      <p className="text-[10.4px] font-medium leading-4">REACT + CSS + LOCALSTORAGE</p>
      <p className="font-extralight text-sm">Feedback Review App with user ratings and comments</p>
       <div className="card-actions justify-end">
        <div className="badge badge-outline ">Fashion</div> 
         <div className="badge badge-outline">Products</div>
       </div>
    </div>
</div>

    <div className="w-[295px] bg-[#22024A] shadow-xl transform transition-transform duration-300 hover:scale-[1.08]">
       <div className="card-body">
        <h2 className="card-title font-extralight text-xl">
        Todo App
     </h2>
     <p className="text-[10.4px] font-medium leading-4">React + TailwindCSS + LOCALSTORAGE</p>
      <p  className="font-extralight text-sm">Todo App for efficient task management</p>
       <div className="card-actions justify-end">
        <div className="badge badge-outline">Fashion</div> 
         <div className="badge badge-outline">Products</div>
       </div>
    </div>
</div>

    <div className="w-[295px] bg-[#22024A] shadow-xl transform transition-transform duration-300 hover:scale-[1.08]">
       <div className="card-body">
        <h2 className="card-title font-extralight text-xl">
        Login and Sign-Up Page
     </h2>
      <p className="text-[10.4px] font-medium leading-4">React + TailwindCSS + Firebase</p>
      <p  className="font-extralight text-sm">Login and Sign-Up page with secure Firebase authentication</p>
       <div className="card-actions justify-end">
        <div className="badge badge-outline">Fashion</div> 
         <div className="badge badge-outline">Products</div>
       </div>
    </div>
</div>

    <div className="w-[295px] bg-[#22024A] shadow-xl transform transition-transform duration-300 hover:scale-[1.08]">
       <div className="card-body">
        <h2 className="card-title font-extralight text-xl">
        FAQ Dropdown Accordion
     </h2>
     <p className="text-[10.4px] font-medium leading-4">HTML + CSS + JavaScript</p>
      <p  className="font-extralight text-sm"> FAQ Dropdown Accordion for users to access frequently asked questions</p>
       <div className="card-actions justify-end">
        <div className="badge badge-outline">Fashion</div> 
         <div className="badge badge-outline">Products</div>
       </div>
    </div>
</div>

  </div>
 </div>
</>
  )
}

export default Projects