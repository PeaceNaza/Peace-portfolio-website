import React from 'react'

const Header = () => {

  return (
    <>
      <div className="navbar bg-[#F3D8E0] text-[#313140] ">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Peace Chinaza Nwosu</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>
           Blog
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a href="https://hashnode.com/@PeaceChinaza">Hashnode</a></li>
            <li><a href="https://medium.com/@peacedonatus38">Medium</a></li>
          </ul>
        </details>
      </li>
      <li><a href="https://github.com/PeaceNaza">Github</a></li>
      <li><a href="https://www.linkedin.com/in/peace-nwosu-69047623a/">LinkedIn</a></li>
    </ul>
  </div>
</div>
    </>
  )
}

export default Header