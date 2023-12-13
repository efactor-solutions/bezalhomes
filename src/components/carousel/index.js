import React from 'react';
import { Carousel } from 'antd';

const CarouselComponent = ({ children }) => {
    const slider = React.useRef(null);
    return (
        <div>
            <Carousel ref={slider} slidesToShow={2} dots={false}
                nextArrow={<p id="nexusyasas" className='text-black'>Next</p>}
                prevArrow={<p>Prev</p>}
            >
                {children}
            </Carousel>
            <div className='flex '>
                <p onClick={() => slider.current.prev()} className='text-black'>Prev</p>
                <p onClick={() => slider.current.next()} className='text-black'>Next</p>
            </div>
        </div>
    );
};

export default CarouselComponent;
