import React from "react";
import "./Carousel.css";
import images from "./images";


let imageUrl = images.src ? images.src : './pexels-godisable-jacob-1191531.jpg';
export const CarouselItem = ({ children, width, background}) => {
    return(
        <div className="carousel-item" style={{width: width, background: background}}>
            {children}
        </div>
    );
};

const Carousel = ({children}) => {
    return(

        <div className="carousel">
            <div className="inner" style={{transform: "translateX(-0%)"}}>
                {
                    React.Children.map(children, (child, index) => {
                        return React.cloneElement(child, {width: "100%", background: imageUrl });
                    })
                }
            </div>
        </div>

    );
};


export default Carousel;

