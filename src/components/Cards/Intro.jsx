import "../Styles/App.css";
import head from "../../assets/my_small_head.png";
import shoulder from "../../assets/shoulders.png";

const Intro = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen text-[#22024A]">
        <h1 className="text-center font-bold text-4xl mt-10">
          Front-End Developer & Technical Writer
        </h1>

        <h2 className="text-center text-2xl font-light mt-5">
          HTML - CSS - JavaScript - Typescript - React - TailwindCSS - Mantine UI 
        </h2>

        <div className="flex justify-items-center flex-col mt-16 pb-2 w-[350px] rounded-[50%] shadow-lg bg-[#F3D8E0]">
          <div className="relative mr-[60px] -mt-5">
            <img
              src={head}
              alt="3D avatar head image"
              className="tossing max-w-[200px] ml-[70px] absolute "
            />
            <img
              src={shoulder}
              alt="3D avatar shoulder image"
              className="max-w-[330px] mt-[16px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
