import React from 'react'
import PropTypes from 'prop-types'
import { ListItemText } from './index'

const ListItem = ({item, children }) => {
  let childnodes = null;

  if (children) {
    childnodes = (
      <ul>
        {children.map(i => <ListItem item={i} key={i.id}  />)}
      </ul>
    );
  }

  return (
    <li>
      <ListItemText  />
      {item.category} - {item.text}
      {childnodes}
    </li>
  );
}

ListItem.propTypes = {
  item: PropTypes.string,
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
};

ListItem.defaultProps = {
  item: '',
};

export default ListItem;

