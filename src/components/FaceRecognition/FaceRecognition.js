import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
    console.log(box);
    return (
        <div className='center'>
            <div className='absolute mt2'>
                <img
                    id='inputImage'
                    src={imageUrl}
                    width='500px'
                    height='auto'
                    alt='face'/>
                <div className='bounding-box'
                     style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    );
};

export default FaceRecognition;
