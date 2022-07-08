import React from 'react';
import styled from 'styled-components'; //importando styled

 function ComponentStyled() {
  
  const MyButton = styled.button`
    padding:20px;
    color:black;
    background-color: white;
    border:none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    border-radius: 4px;
  `;
   
    return ( 
        <React.Fragment>
            <MyButton>Hoy soy un styled component</MyButton>
        </React.Fragment>
     );
}

export default ComponentStyled;

