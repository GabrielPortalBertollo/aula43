import styled from 'styled-components'
import '../estilos/header.css'
import { Link } from 'react-router-dom'

const Container=styled.header`
width: 100vw;
background-color:black;
color:white;`
const Elements=styled.div`
padding:20px;
display:flex;
justify-content: space-between;`
const Links=styled.div`
display:flex;
font-size: 1.5rem;
width: 30%;
align-items: center;
justify-content: end;
`


function Header(){


    return(
<Container>
    <Elements>
    <h1>MultiAPP</h1>
    <Links>
    <p className='links'><Link to="/qrcode" style={{ textDecoration: 'none', color: 'white' }}>QR Code</Link></p>
    <p className='links'><Link to="/tradutor" style={{ textDecoration: 'none', color: 'white' }}>Tradutor</Link></p>
    <p className='links'><Link to="/filmes" style={{ textDecoration: 'none', color: 'white' }}>Filmes</Link></p>
    <p className='links'><Link to="/ip" style={{ textDecoration: 'none', color: 'white' }}>Endereço IP</Link></p>
    </Links>
    </Elements>
    
</Container>
)

    
}

export default Header;