/* eslint-disable no-unused-vars */
import React from 'react';
import qZon1 from '../../../../../assets/qZone1.png'
import qZon2 from '../../../../../assets/qZone2.png'
import qZon3 from '../../../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='mt-5 bg-light p-3'>
            <h3>QZone</h3>
            <div>
                <img src={qZon1} alt="" />
                <img src={qZon2} alt="" />
                <img src={qZon3} alt="" />
            </div>
        </div>
    );
};

export default QZone;