import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import background from "../images/ham.jpg";
import background3 from "../images/hammy.jpg";
const Example = () => {


    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${background})` }}>
                    
                </div>
    
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${background3})` }}>
                    
                </div>
    
            </div>
        </Slide>
    );
};

export default Example;