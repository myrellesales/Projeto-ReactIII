import React from 'react'
import {BrowserRouter, Stwich, Route, Switch} from 'react-router-dom'

import Home from '../Pages/Home'
import Filmes from '../Pages/Filmes'
// import Sobre from '../Pages/Sobre'
// import Portifolio from '../Pages/Portifolio'
// import Contato from '../Pages/Contato'

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" excat component={Home}/>
        <Route path="/Filmes" component={Filmes}/>
        {/* <Route path="/sobre" excat component={Sobre}/>
        <Route path="/portifolio" excat component={Portifolio}/>
        <Route path="/contato" excat component={Contato}/> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;