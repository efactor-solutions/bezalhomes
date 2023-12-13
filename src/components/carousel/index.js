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
            <div className='flex  gap-4 justify-center'>
                <p onClick={() => slider.current.prev()} className='text-black text-3xl'>&#8592;</p>
                <p onClick={() => slider.current.next()} className='text-black text-3xl'>&#8594;</p>
            </div>
        </div>
    );
};

export default CarouselComponent;

