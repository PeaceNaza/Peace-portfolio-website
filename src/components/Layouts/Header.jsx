import React from "react";
import "../Styles/App.css";

const Header = () => {
  return (
    <>
      <div className="navbar bg-[#F3D8E0] text-[#22024A]">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Peace Chinaza Nwosu</a>
        </div>
        <div className="flex-none font-normal text-sm">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className="lg:mr-4 sm:ml-10">Blog</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <a href="https://hashnode.com/@PeaceChinaza">Hashnode</a>
                  </li>
                  <li>
                    <a href="https://medium.com/@peacedonatus38">Medium</a>
                  </li>
                  <li>
                    <a href="https://thebookmarketng.com/hooks-in-react-a-beginners-guide/">Article</a>
                  </li>
                </ul>
              </details>
            </li>

            <li className="lg:mr-4">
              <a href="https://github.com/PeaceNaza">Github</a>
            </li>
            <li className="lg:mr-5">
              <a href="https://www.linkedin.com/in/peace-nwosu-69047623a/">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
