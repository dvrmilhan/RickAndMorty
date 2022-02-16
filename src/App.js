import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Cards from "./components/Cards/Cards";
import Pagination from './components/Pagination/Pagination';
import Navbar from './components/Navbar/Navbar';

import  { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Locations from './Pages/Locations/Locations';
import Location from './Pages/Locations/Location';

function App(){
  return(
    <Router>
      <div className="App">
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Charecters/>} />
        <Route path='/locations' element={<Locations/>} />
      </Routes> 
    </Router>
  )
}

const Charecters= ()=> {

  let [pageNumber, setPageNumber] = useState(1)
  let [fetchedData, updateFetchedData] = useState([])
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  let {info, results }= fetchedData
  

  useEffect(()=> {

    (async function(){
      let data = await fetch(api).then(res => res.json())
      updateFetchedData(data)
    })()


  } , [api])

  return (
    <div className="App"> 
      

        <div className="container">
          <div className="row"> 
                <div className="col">
                  <div className="row">
                    <Cards results={results} />
                  </div>
                </div>
          </div>
        </div>

        <Pagination pageNumber= {pageNumber} setPageNumber= {setPageNumber}/>

    </div>
  );
}

export default App;
