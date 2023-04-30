/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const {_id,title,details,image_url}= news
    return (
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <img className="img-fluid" src={image_url} alt="" />
          <p>{details.length <250 ? 
          <>{details}</> 
          :

          <>{details.slice(0,250)}... 
          <Link to={`/news/${_id}`} className='border p-2 d-inline-block btn'>Show more</Link> </>
          
          
          }</p>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    );
};

export default NewsCard;