/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [catagories, setCatagories] = useState([])

    useEffect(() =>{
  fetch("http://localhost:5022/catagories")
  .then(res => res.json())
  .then(data => setCatagories(data))
  .catch(error => console.error(error))
    },[])
    return (
      <div>
        <h3>All Category</h3>
        {/* {catagories.map((Category) => console.log(Category.name))} */}
        {catagories.map((Category) => (
          <p key={Category.id}>
            <Link to={`/catagories/${Category.id}`}>{Category.name}</Link>
          </p>
        ))}
      </div>
    );
};

export default LeftNav;