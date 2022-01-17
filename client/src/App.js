
import './App.css';

function App() {

  const{nomeLugar, setNomeLugar} = useState('')
  const{descricaoLugar, setDescricaoLugar} = useState('')
  const{enderecoLugar, setEnderecoLugar} = useState('')
  const{estadoLugar, setEstadoLugar} = useState('')
  const{cidadeLugar, setCidadeLugar} = useState('')


  return (
    <div className="App">
      <h1>CRUD Pontos Turísticos</h1>

      <div className="form">
        <label>Nome do Ponto Turístico:</label>
        <input type="text" name="nomeLugar"></input>
        <label>Descrição:</label>
        <input type="text" name="descricaoLugar"></input>
        <label>Endereço:</label>
        <input type="text" name="enderecoLugar"></input>
        <label>Estado:</label>
        <input type="text" name="estadoLugar"></input>
        <label>Cidade:</label>
        <input type="text" name="cidadeLugar"></input>

        <button>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
