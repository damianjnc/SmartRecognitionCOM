import React from 'react';

const Navigation = (props) => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => props.onRouteChange('signin')} className='f3 link dim black underline pa3 painter'>Sign out</p>
        </nav>
    );
};

export default Navigation;
