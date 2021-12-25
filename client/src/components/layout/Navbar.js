import React, { Fragment, useState } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { SidebarDataAuth } from './SidebarDataAuth';
import './Navbar.css';
import { IconContext } from 'react-icons';



function Navbar(props) {
    const [sidebar, setSidebar ] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const isLoggedIn = props.auth.isAuthenticated
    console.log(isLoggedIn)
        
    return (
        <>
        <IconContext.Provider value={{color: 'fff'}}>
        <div className='navbar'>
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>
        </div>  
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to="#" className='menu-bars'>
                    <AiIcons.AiOutlineClose onClick={showSidebar} />
                    </Link>
                </li>                
                {!isLoggedIn ? SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                }) : SidebarDataAuth.map((item, index) => {
                    return (
                        
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
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


Navbar.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
    { loginUser }
  )(Navbar);
