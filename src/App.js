import React,{useState, useEffect} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Header from './components/ui/header';
import axios from 'axios';
import CharacterCard from './components/characters/characterCard';
import SearchBar from './components/ui/search';
import CharacterPage from './components/characters/characterPage';


function App() {  
  const [items,setItems]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [query,setQuery]=useState('');  
  
  useEffect(() => {
    axios.get(`https://www.breakingbadapi.com/api/characters/?name=${query}`)
    .then(res=>{
      setItems(res.data);
    })
    .catch(err=>{
      console.log(err)
    })
    setIsLoading(false);
  }, [query])
  
  return (
    <Router>
      <div className="container">
        <Header/>
        <Switch>
          <Route exact path="/">
            <SearchBar getQuery={(que)=>setQuery(que)}/>
            <CharacterCard isLoading={isLoading} items={items}/>  
          </Route>
          <Route path="/characters/:char_id">
            <CharacterPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
