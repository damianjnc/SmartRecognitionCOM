import React from 'react';

const FaceRecognition = (props) => {
    return (
        <div className='center'>
            <div className='absolute mt2'>
                <img
                    id='inputImage'
                    src={props.imageUrl}
                    width='500px'
                    height='auto'
                    alt='face'/>
            </div>

        </div>
    );
};

export default FaceRecognition;
