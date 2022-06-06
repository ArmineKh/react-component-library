import React from 'react'
import PropTypes from 'prop-types'

import './card.css'

const Card = ({img, title, author, text, actionLink, actionTitle }) => {
  return (
    <div className="card">
          {img ? (<img src={img} alt={title}/>) : ('')}
          <div className="card-body">
            <h2>{title}</h2>
            <p>{text}</p>
            {author ? (<h5>by: {author}</h5>) : ('')}
            {actionLink ? (
            <div className="card-actions">
              <button ><a href={actionLink} >{actionTitle}</a></button>
            </div>
            ) : ('')}
            
          </div>
        </div>
  )
}

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  text: PropTypes.string,
  actionLink: PropTypes.string,
  actionTitle: PropTypes.string,
};

Card.defaultProps = {
  img: '',
  title: '',
  author: '',
  text: '',
  actionLink: '',
  actionTitle: '',
};

export default Card