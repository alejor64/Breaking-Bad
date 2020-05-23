import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Frase from './components/Frase'

const StyledContenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`

const StyledButton = styled.button`
  cursor: pointer;
  background: -webkit-linear-gradient(top left, #4CA31E 0%, #305E19 30%, #19300E 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .7s ease;

  :hover{
    background-size: 400px;
    background-color: #4CA31E;
  }
`

function App() {

  const [frase, setFrase] = useState({})

  const consultarApi = async () => {
    const resultadoApi = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const frase = await resultadoApi.json()
    setFrase(frase[0])
  }
  
  useEffect(() => {
    consultarApi()
  },[])

  return (
    <StyledContenedor>
      <Frase frase={frase}/>
      <StyledButton
        onClick={consultarApi}
      >
        Get Phrase
      </StyledButton>
    </StyledContenedor>
  );
}

export default App;
