import { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import styled from 'styled-components';
import './App.css'
import Header from './components/header';
import IPAddressFinder from "./components/IPAddressFinder";
import LanguageTranslator from "./components/LanguageTranslator";
import MovieSearchEngine from "./components/MovieSearchEngine";
import QRCodeGenerator from "./components/QRCodeGenerator";
import ProtectedRoute from "./components/ProtectedRoute";


const Container=styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width:40%;
margin: 2vh 30%;
`;

const Title=styled.h2`
margin-bottom: 1%;
`;
const Input=styled.input`
margin-bottom: 1%;
`;

function App() {
const [logado, setLogado]=useState(false);
const [login, setLogin]=useState("");
const [senha, setSenha]=useState("");
console.log(logado)


const handleLogin = () => {
        const l="adm";
        const s="adm";
        if(login==l && senha==s){
            alert("Logado com sucesso")
            setLogado(true);
            return <p>Logado com sucesso</p>
        } else{
            alert("Login ou senha incorretos")
        setLogado(false);
        return <p>Login ou senha incorretos</p>}
};



  return (
    <>
    <Router>
    <Header></Header>
      <Routes>
      <Route path="/ip" element={<ProtectedRoute isLoggedIn={logado}><IPAddressFinder></IPAddressFinder></ProtectedRoute>}/>
      <Route path="/tradutor" element={<ProtectedRoute isLoggedIn={logado}><LanguageTranslator></LanguageTranslator></ProtectedRoute>}/>
      <Route path="/filmes" element={<ProtectedRoute isLoggedIn={logado}><MovieSearchEngine></MovieSearchEngine></ProtectedRoute>}/>
      <Route path="/qrcode" element={<ProtectedRoute isLoggedIn={logado}><QRCodeGenerator></QRCodeGenerator></ProtectedRoute>}/>
    </Routes>
    {!logado && 
    <Container>
    <Title>Login</Title>
    <p>Login: </p>
    <Input onChange={(e)=>setLogin(e.target.value)}></Input>
    <p>Senha: </p>
    <Input onChange={(e)=>setSenha(e.target.value)}></Input>
    <button onClick={handleLogin}>Logar</button>
    </Container>
    }
      
    
    </Router>
    </>
  )
}

export default App