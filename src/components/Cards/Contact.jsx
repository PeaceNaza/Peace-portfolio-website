import phone from "../../assets/mobile_small.png";
import "../Styles/App.css";

const Contact = () => {
  return (
    <>
      <div className="contact bg-[#F0CED9] text-center text-[#22024A] h-[310px] w-full">
        <div className="grid grid-cols-2">
          <div className="relative mobile">
            <img
              src={phone}
              alt="phone contact image"
              className="max-h-[410px] absolute lg:right-60 -top-[100px] duration-75"
            />
          </div>

          <div className="contact-text lg:mr-24">
            <h1 className="mb-4 text-2xl font-bold mt-6">TO GET IN TOUCH </h1>
            <p className="mb-10 mt-5 text-2xl font-extralight">
              Send me an email and I'll get back to you <br />
              as soon as I can.
            </p>
            <a
              className="email-link border-2 shadow border-opacity-5 px-4 py-1 text-2xl font-bold rounded hover:bg-[#22024A] hover:text-white"
              href="mailto:peacedonatus38@gmail.com"
            >
              Click Here
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
