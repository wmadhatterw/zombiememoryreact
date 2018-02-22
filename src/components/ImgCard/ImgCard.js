import React from "react";
import PropTypes from 'prop-types';

const ImgCard = props => (
  <img src={props.image} alt={props.name} className="img-fluid img-thumbnail" data-id={props.id}
  onClick={props.handleClick}/>
);

ImgCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default ImgCard;