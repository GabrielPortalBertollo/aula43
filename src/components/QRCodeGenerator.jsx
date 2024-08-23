import { useState } from 'react'
import styled from 'styled-components'
import QRCode from 'qrcode.react'
const Container=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Title=styled.h2`
font-size: 1.5rem;
padding: 10px 0;

`;
const Input=styled.input`
margin: 10px 0;
`;
const QRCodeContainer=styled.div`
border: 3px solid black;
box-shadow: black 2px 2px 10px;
`;

const QRCodeGenerator = () => {
    const [text, setText] = useState('');
  
    return (
      <Container>
        <Title>QR Code Generator</Title>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)} 
        />
        {text && (
          <QRCodeContainer>
            <QRCode value={text} size={256}/> 
          </QRCodeContainer>
        )}
      </Container>
    );
  };
  

export default QRCodeGenerator
