import React from 'react';
import { CardImg } from 'reactstrap';


const startImg = () => {
    return (
        <CardImg
            alt="Card image cap"
            src="https://picsum.photos/900/270?grayscale"
            style={{
                height: 300,
                marginTop: "15%",
                borderRadius: "10px",
                boxShadow: "2px 2px 5px 3px #888"
            }}
            width="100%"
        />
    )
};

export default startImg;
