import React from 'react';
import {Link} from 'react-router-dom';
import Menu from '../Componentes/Menu'
import { } from 'react-icons/fi'
import '../Styles/Pages/home.css';


function Home() {
  return (
    <div id="page-landing">
     <div className="content-wrapper">
        <main>
          <h1>O que eu faço pra relaxar</h1>
          <p>Meu modo favorito de procrastinar</p>
        </main>       

        <Link  to="/filmes" className ="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0 , 0, 0.6)"/>
        </Link>
     </div>
    </div>
  );
}

export default Home;



// function Home() {
//   return(
//     <div>
//       <Menu/>
//       <Link to="/sobre"></Link>
//     </div>
//   )
// }

// export default Home;