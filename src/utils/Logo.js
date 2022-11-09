import React from 'react';
import styled from 'styled-components';


function Logo() {

    return (
        <StyledImage />
    )
}

const StyledImage = styled.img`
    height: 90px;
    width: 200px;
    min-height: 50px;
    min-width: 75px;
`;

StyledImage.defaultProps = {
    src: 'images/yugiohlogo.svg',
    alt: 'logo'
}

export default Logo;