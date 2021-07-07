import React from 'react';
import PropTypes from 'prop-types';
 import 'bootstrap/dist/css/bootstrap.min.css'
import Rate from './Rate';  

import {
  BrowserRouter as Router,
  Link
}from "react-router-dom";
 
 const MovieCard = ({ movie: { title, posterUrl, rate } }) => {

  return (
    <>
      <div class="card" style={{marginRight: '5em'  }} >
      <img src={posterUrl}style={{ height: `300px`, maxWidth:'100%' }}/ >
  <div class="card-body">
  <h5 className="card-title" >{title}</h5>
        <Rate rating={rate}/>

     <Link to="/Description" class="btn btn-primary">More Details</Link>
  </div>
</div>
 
 </> 

  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
