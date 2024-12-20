import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter';
import { PixelPaint } from './components/PixelPaint';
import { GeradorDeNomes } from './components/exercicios_de_aula/GeradorDeNomes';
import { GeradorDeNumeros } from './components/exercicios_de_aula/GeradorDeNumeros';
import { Counterdor } from './components/gestao_de_estado/Counter';
import { FormularioExemplo } from './components/formularios_exemplo';
import { useClock } from './hooks/useClock';

const vIniciais = {password: "Manteiga"}

function App() {
  const currentDate = useClock()



  return (
    <div className="App">
      {currentDate.valueOf()}
      {/* <Counter /> */}
      {/* <GeradorDeNomes /> */}
      {/* <GeradorDeNumeros /> */}
      {/* <PixelPaint /> */}
      <Counterdor/>
      {/* <FormularioExemplo valoresIniciais={vIniciais} /> */}
    </div>
  );
}

function ComponenteAltaOrdem() {
  return function Component() {
    return (
      <div>
        
      </div>
    )
  }
}

export default App;
