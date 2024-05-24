import phone from "../../assets/mobile_small.png"
import "../Styles/App.css"

const Contact = () => {
  return (
    <div className='contact bg-[#D8B2E1] mb-10 text-center text-[#22024A] h-[280px]'>
      <div className="grid grid-cols-2 gap-10">
        <div>
         <h1 className="mb-4 text-4xl font-bold mt-6">GET IN TOUCH</h1>
         <p className="mb-10 mt-5 text-2xl font-normal">Send me an email</p>
         <a className="border-2 shadow border-opacity-5 px-4 py-1 text-2xl font-bold rounded hover:bg-[#22024A] hover:text-white" href="mailto:peacedonatus38@gmail.com">Click Here</a>
        </div>

        <div className="relative mobile">
          <img src={phone} alt="phone contact image" className="h-[380px] absolute lg:right-60 -top-[100px]" />
        </div>

      </div>
      

    </div>
  )
}

export default Contact