import React from 'react'
import PropTypes from 'prop-types'
import { List, ListSubheader } from './index';

const NestedList = ({ classes, subheader, items }) => {

  return (
  <>
    <ListSubheader subheader={subheader} />
    <List
      items={items}
      classes={classes}
    />
  </>
  )
}

NestedList.propTypes = {
  classes: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  subheader: PropTypes.string,
  items: PropTypes.array
};

NestedList.defaultProps = {
  classes: '',
  subheader: '',
};

export default NestedList;