import React from 'react';

const Navigation = (props) => {
    if (props.isSigned === true) {
        return (<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => props.onRouteChange('signin')} className='f3 link dim black underline pa3 painter'>Sign
                out</p>
        </nav>)
    }else{
        return (
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={() => props.onRouteChange('signin')} className='f3 link dim black underline pa3 painter'>Sign
                        in</p>
                    <p onClick={() => props.onRouteChange('register')} className='f3 link dim black underline pa3 painter'>Register</p>
                </nav>
           );
    }
};

export default Navigation;
