import { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import Dropdown from "./Dropdown";
import PropTypes from 'prop-types'

const iconList = Object
  .keys(Icons)
  .filter(key => key !== "fas" && key !== "prefix" )
  .map(icon => Icons[icon])

library.add(...iconList)


const MenuItems = ({ items, depthLevel, icon, link }) => {
  const [dropdown, setDropdown] = useState(false);

 return (
  <li 
    className="menu-items" 
  >
   {items.child ? (
    <>
     <button 
      type="button" 
      aria-haspopup="menu"
      aria-expanded={dropdown ? "true" : "false"}
      onClick={() => setDropdown((prev) => !prev)}
    >
      {icon ? <FontAwesomeIcon icon={icon} /> : '' }
      {items.text}{" "}
      {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
     </button>
     <Dropdown depthLevel={depthLevel} dropdown={dropdown} submenus={items.child}  />
    </>
   ) : (
    !!link && <Link to={link}>{items.text}</Link>
   )}
  </li>
 );
};

MenuItems.propTypes = {
  items: PropTypes.object,
  icon: PropTypes.string,
  link: PropTypes.string,
  depthLevel: PropTypes.number,
  
};

MenuItems.defaultProps = {
  items: {},
  icon: '',
  link: '',
  depthLevel: 0,
};

export default MenuItems;