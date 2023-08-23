import logo from './logo.svg';
import './App.css';
import CicloDeVida from './components/CicloDeVida.jsx';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
function App() {
  return (
    <div className="App">
     console.log("ENTRANDO UN NUEVO A LA PAGINA ANTES DE RENDERIZADO!!!!")
      <AjaxApis/>
      <hr/>
      <ContadorHooks titulo="Seguidores"/>
      <hr/>
      <ScrollHooks/>
    </div>
  );
}

export default App;
