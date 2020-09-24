import React,{useState,useEffect} from 'react';
import styled from '@emotion/styled'
import Frase from './components/Frase';

//Styles

const Contenedor = styled.div`

  display:flex;
  align-items:center;
  padding-top:5rem;
  flex-direction:column;


`;

const Boton = styled.button`

  background: -webkit-linear-gradient(top left ,#007d35 0%, #007d35 40%  , #0f574e 100% );
  background-size:100%;
  font-family: Ariel , Helvetica , sans-serif;
  color:#fff;  
  margin-top:2rem;
  padding:1rem 3rem;
  font-size:2rem;
  border:2px solid black ;
  cursor:pointer;

`;

function App() {


  // State del Api.js

  const [ frase , guardarFrase] = useState({})



  // utilizo useEffect para obtener una frase al cargar la pagina 


  useEffect(()=>{

    consultarApi()

  },[])


//Function de Click (Boton )

const consultarApi = async () => {

  const api = await fetch(`https://breaking-bad-quotes.herokuapp.com/v1/quotes`) ;
  const frase = await api.json();
  guardarFrase(frase[0])
}


  return (

    <Contenedor>

      <Frase
      
      frase={frase}
      
      />

      <Boton
        onClick={consultarApi}
      >
        Obtener Frase
      </Boton>

    </Contenedor>
    
     
    
  );
}

export default App;
