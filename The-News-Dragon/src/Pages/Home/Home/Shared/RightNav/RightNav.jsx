/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';
import google from '../../../../../assets/google (1).png'
import gitHub from '../../../../../assets/github (1).png'
import QZone from '../QZone/QZone';
import bg from '../../../../../assets/bg.png'



const RightNav = () => {
    return (
      <div>
        <h4 className="fw-bold">Login With</h4>
        <Button variant="outline-primary" className="px-5 mt-3">
          <img src={google} alt="" /> <small> Log In With google</small>
        </Button>{" "}
        <Button variant="outline-dark" className="px-5 mt-3">
          <img src={gitHub} alt="" /> <small> Log In With Github</small>
        </Button>{" "}
        <div className="mt-5">
          <p className="fs-4 fw-bold">Find Us on</p>
        </div>
        <div className='border'>
          <p className=' border-bottom pb-3 pt-3 ps-3'>Facebook</p>
          <p className=' border-bottom pb-3 ps-3'>Twitter</p>
          <p className=' ps-3'>Instagram</p>
        </div>

        <QZone></QZone>

        <div>

        </div>
      </div>
    );
};

export default RightNav;