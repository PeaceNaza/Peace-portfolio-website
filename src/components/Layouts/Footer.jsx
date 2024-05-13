import React from 'react'
import desk from "../../assets/footer_mobile_bkg.jpg"
import "../Styles/App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import "../Styles/App.css"


const Footer = () => {
  return (
    <>
      <footer className="footer border-0 footer-center p-4 bg-[#F0CED9] h-auto text-[#22024A]">

        <div className="grid grid-cols-2 gap-9 w-full">
          <div className="text-container">
          <p className="text-2xl font-extralight">
          Quality is never an accident; it is always the result of intelligent effort.
          </p>
          <div className="icon-container flex justify-center gap-7">
          <a href="https://github.com/PeaceNaza"><FontAwesomeIcon icon={faGithub} className="text-4xl text-[#22024A] mt-10" /></a>
          <a href="https://www.linkedin.com/in/peace-nwosu-69047623a/"><FontAwesomeIcon icon={faLinkedin} className="text-4xl text-[#22024A] mt-10" /></a>
          <a href="https://twitter.com/PeaceNwosu11"><FontAwesomeIcon icon={ faTwitter} className="text-4xl text-[#22024A] mt-10" /></a>

          </div>
          
          </div>
          <div>
            <img src={desk} alt="office pink table and desk" className="h-[300px]" />
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