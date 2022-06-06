import React from 'react'
import PropTypes from 'prop-types'


const ListSubheader = ({ subheader }) => {
  return (
    <div>{subheader}</div>
  )
}

ListSubheader.propTypes = {
  subheader: PropTypes.string,
};

ListSubheader.defaultProps = {
  subheader: '',
};

export default ListSubheader