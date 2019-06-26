import React from 'react';

const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3'>
                {'This magic bar will detect faces in your pictures. Give it a try!'}
            </p>
            <div>
                <input type='text' className='f3 pa2 w-70 center'/>
                <button className='w-30 grow f3 link ph3 pv2 dib white bg-light-purple'>Detect</button>
            </div>
        </div>
    );
};

export default ImageLinkForm;
