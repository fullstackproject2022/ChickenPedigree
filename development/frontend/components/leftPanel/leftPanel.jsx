import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import LeftPanelContent from "./leftPanel.content.jsx"
import '../../styles/leftPanel.stylesheet.scss'
import { IconContext } from 'react-icons';

const LeftPanel = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSideBar = () => setSidebar(!sidebar)
  return (
    <>
    <IconContext.Provider value={ {color:"#ffff"}}>
      <div className="navbar">
          <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSideBar}/>
          </Link>
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className='nav-menu-items'>
              <li className='navbar-toggle'>
                  <Link to="#" className='menu-bars'>
                      <AiIcons.AiOutlineClose onClick={showSideBar} className="nav-text"/>
                  </Link>
              </li>
                {LeftPanelContent.map((item, index) => {
                    return(
                        <li key={index} className={item.className}>
                            <Link to={item.path}>
                                {item.icon}
                                <span className='nav-texts'>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
          </ul>
      </nav>
      </IconContext.Provider>
    </>
  )
}

export default LeftPanel