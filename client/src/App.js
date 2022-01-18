import React, {useState, useEffect} from "react";
import './App.css';
import Axios from 'axios';
import ReactDOM from 'react-dom';


//import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  const[nomeLugar, setNomeLugar] = useState("")
  const[nomeLugar2, setNomeLugar2] = useState("")
  const[descricaoLugar, setDescricaoLugar] = useState("")
  const[enderecoLugar, setEnderecoLugar] = useState('')
  const[estadoLugar, setEstadoLugar] = useState('')
  const[cidadeLugar, setCidadeLugar] = useState('')

  const[listaPontos, setListaPontos] = useState([])

  useEffect(() => { //receber os pontos turisticos já cadastrados
    Axios.get('http://localhost:3001/api/get').then((response) =>{
      setListaPontos(response.data)
    })
  })

  const submitLugar = () => { //enviar um novo ponto turistico
    Axios.post("http://localhost:3001/api/insert", {nomeLugar: nomeLugar, descricaoLugar: descricaoLugar, enderecoLugar: enderecoLugar, estadoLugar: estadoLugar, cidadeLugar: cidadeLugar}).then(() => {
      alert("Sucesso!");
    })
  };


  const deleteLugar = (nomeL) => { //deletar um ponto

    Axios.delete(`http://localhost:3001/api/delete/${nomeL}`);
  }

  const searchLugar = () =>{
    listaPontos.map((val) =>{
      if(nomeLugar2 == val.nome){
        alert("Nome: " + val.nome + " | Descrição: " + val.descricao + " | Endereço: " + val.endereco + " | Estado: " + val.estado + " | Cidade: " + val.cidade);
      }
    })
  }

  


  return (
          <div className="App">
            <div className="screen">
              <h1>CRUD Pontos Turísticos</h1>
              <br></br><br></br>

              <h2>Cadastro de Pontos Turísticos</h2>

              <div className="form">
                <label>Nome do Ponto Turístico:</label>
                <input type="text" name="nomeLugar" onChange={(e) =>{
                  setNomeLugar(e.target.value);
                }}></input>
                <label>Descrição:</label>
                <input type="text" name="descricaoLugar" onChange={(e) =>{
                  setDescricaoLugar(e.target.value);
                }}></input>
                <label>Endereço:</label>
                <input type="text" name="enderecoLugar" onChange={(e) =>{
                  setEnderecoLugar(e.target.value);
                }}></input>
                <label>Estado:</label>
                <input type="text" name="estadoLugar" onChange={(e) =>{
                  setEstadoLugar(e.target.value);
                }}></input>
                <label>Cidade:</label>
                <input type="text" name="cidadeLugar" onChange={(e) =>{
                  setCidadeLugar(e.target.value);
                }}></input>

                <button onClick={submitLugar}>Cadastrar</button>

                <br></br><br></br>

                <h2>Listagem de Pontos Turisticos</h2>

                {listaPontos.map((val) => { //listar os pontos turísticos
                  return <div className="card"> <h1> {val.nome}  </h1> <p> Descrição: {val.descricao} </p> <p> Endereço: {val.endereco} </p> <p> Estado: {val.estado} </p> <p> Cidade: {val.cidade} </p>
                    <button onClick={() => {deleteLugar(val.nome)}}>Deletar</button>
                  </div>
                })}

                <h2>Buscar Ponto Turístico</h2>
                <input type="text" name="nomeLugar2" onChange={(e) =>{
                  setNomeLugar2(e.target.value);
                }}></input>
                <button onClick={searchLugar}>Buscar</button>

              </div>
            </div>
          </div>
        
  );
}



export default App;
