import { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'


const Container= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title=styled.h2`
color: #333;
text-align: center;
margin: 10px 0;
`;

const Input=styled.input`
border-radius: 5px;
border: solid 1px;
margin-bottom: 5px;
`;

const Button=styled.button`
margin: 5px 0;
border-radius: 5px;
border: solid 1px;
background-color: #e7e7e7;
`;

const ResultsContainer=styled.div`
margin: 5px 0;
padding: 10px;
border: solid 1px;
border-radius: 5px;
`;





const IPAddressFinder = () => {
    const [ip, setIp] = useState('') 
    const [ipData, setIpData] = useState(null) 
  
    const findIP = async () => {
      try {
        const response = await axios.get(`https://ipinfo.io/${ip}/json`) 
        setIpData(response.data) 
      } catch (error) {
        console.error("Error fetching IP address data:", error) 
      }
    }
  
    return (
      <Container>
        <Title>IP Address Finder</Title>
        <Input
          type="text"
          value={ip} 
          onChange={(e) => setIp(e.target.value)} 
          placeholder="Enter IP address" 
        />
        <Button onClick={findIP}>Find IP</Button> 
        {ipData && ( 
          <ResultsContainer>
            <p><strong>IP:</strong> {ipData.ip}</p>
            <p><strong>Location:</strong> {ipData.city}, {ipData.region}, {ipData.country}</p>
            <p><strong>ISP:</strong> {ipData.org}</p>
          </ResultsContainer>
        )}
      </Container>
    )
  }
  
  export default IPAddressFinder 