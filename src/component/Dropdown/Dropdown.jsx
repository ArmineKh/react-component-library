import MenuItems from "./MenuItems";
import PropTypes from 'prop-types'


const Dropdown = ({ submenus, dropdown, depthLevel}) => {

  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
   <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
    {submenus.map((submenu, index) => (
      <MenuItems depthLevel={depthLevel}  items={submenu} key={index} link={submenu.link}/>
    ))}
   </ul>
  );
 };

 Dropdown.propTypes = {
  submenus: PropTypes.array,
  dropdown: PropTypes.bool,
  depthLevel: PropTypes.number,
  
};

Dropdown.defaultProps = {
  submenus: [],
  dropdown: false,
  depthLevel: 0,
};
 
 export default Dropdown;