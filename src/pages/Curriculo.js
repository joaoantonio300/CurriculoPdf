import CurriculoForm from '../components/CurriculoForm';
import './Curriculo.css'
import Footer from '../components/Footer';


const Curriculo = () => {
  return (
    <div>
       <div className='cards'>
       <CurriculoForm/>
       <Footer/>
       </div>
    </div>
  )
}

export default Curriculo