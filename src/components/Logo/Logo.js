import React from 'react';
import Tilt from 'react-tilt';
import image from './icons8-artificial-intelligence-100.png';

const Logo = () => {
    return (
        <div className='ml4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{max: 55}}
                  style={{height: 150, width: 150, background: 'linear-gradient(89deg, orange 0%, yellow 100%)'}}>
                <div className="Tilt-inner pa3"><img alt='logo' style={{paddingTop: '5px'}} src={image}/></div>
            </Tilt>
        </div>
    );
};

export default Logo;
