/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from '../EditorsInsight/EditorsInsight';

const News = () => {
    const news = useLoaderData();
    const { title, details, image_url, category_id } = news;

    return (
      <div>
        <Card style={{ width: "58rem" }}>
          <Card.Img variant="top" src={image_url} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <Link to={`/catagories/${category_id}`}>
              <Button variant="primary">All news in this category</Button>
            </Link>
          </Card.Body>
        </Card>
        <EditorsInsight></EditorsInsight>
      </div>
    );
};

export default News;