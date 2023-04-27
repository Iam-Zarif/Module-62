/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [catagories, setCatagories] = useState([])

    useEffect(() =>{
  fetch("http://localhost:5020/catagories")
  .then(res => res.json())
  .then(data => setCatagories(data))
  .catch(error => console.error(error))
    },[])
    return (
      <div>
        <h3>All Caterogy</h3>
        {catagories.map((catagory) => console.log(catagory.name))}
        {catagories.map((catagory) => (
          <p key={catagory.id}>
            <Link to={`/catagories/${catagory.id}`}>{catagory.name}</Link>
          </p>
        ))}
      </div>
    );
};

export default LeftNav;