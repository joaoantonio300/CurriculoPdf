import './App.css';
import CurriculoPdf from './components/CurriculoPdf';
import Curriculo from './pages/Curriculo';

function App() {


  return (
    <div className="App">
      <title>Seu curriculo</title>
         <div>
            <Curriculo/>
            {/* <CurriculoPdf/> */}
         </div>
    </div>
  );
}

export default App;
