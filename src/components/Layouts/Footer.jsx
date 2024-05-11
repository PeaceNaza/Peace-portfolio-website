import React from 'react'
import desk from "../../assets/footer_mobile_bkg.jpg"
import "../Styles/App.css"


const Footer = () => {
  return (
    <>
      <footer className="footer border-0 footer-center p-4 bg-[#F0CED9] h-auto text-[#22024A]">

        <div className="grid grid-cols-2 gap-9 w-full">
          <div>
          <p className="text-2xl font-extralight">
          Quality is never an accident; it is always the result of intelligent effort.
          </p>
          </div>
          <div>
            <img src={desk} alt="office pink table and desk" />
          </div>
        </div>
        
        <aside className="mb-5">
          <p className="font-normal text-base"> Crafted with ♥ by me © 2024 Peace Chinaza Nwosu - All rights reserved.</p>
        </aside>
        
   </footer>
    </>
  )
}

export default Footer