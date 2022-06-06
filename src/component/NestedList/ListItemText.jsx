import React from 'react'
import PropTypes from 'prop-types'

const ListItemText = ({className, text}) => {
  if(Array.isArray(className)){
    className = className.join(' ')
  }
  return (
    <div className={className} >{text}</div>
  )
}

ListItemText.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  text: PropTypes.string,
};

ListItemText.defaultProps = {
  className: '',
  text: '',

};
export default ListItemText