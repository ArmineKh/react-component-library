import React from 'react'
import MenuItems from "./MenuItems";
import PropTypes from 'prop-types'

const MultilevelDropdown = ({ listaitems }) => {
  
  return (
    <div className="nav-area">
      <nav>
        <ul className="menus">
          {listaitems.map((item, index) => {
            const depthLevel = 0;
            return (
               <MenuItems items={item} key={index} depthLevel={depthLevel} icon={item.icon} link={item.link} />
            );
          })}
        </ul>
      </nav>
    </div>
  )
}


MultilevelDropdown.propTypes = {
  listaitems: PropTypes.array,  
};

MultilevelDropdown.defaultProps = {
  listaitems: [],
};

export default MultilevelDropdown;
