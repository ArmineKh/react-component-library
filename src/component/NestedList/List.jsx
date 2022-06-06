import React from 'react'
import PropTypes from 'prop-types'
import { ListItem } from "./index";

const List = ({items, classes}) => {

  let listItems = items.map((item, index) => {
      
        return (<ListItem key={item.id} item={item} children={item.child}></ListItem>)
    })
    
  return (
    <ul className={classes}>
      {listItems}
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.array,
  classes: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  
  
};

List.defaultProps = {
  classes: '',
};

export default List;