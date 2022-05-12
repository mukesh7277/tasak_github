import React, { useEffect, useState } from 'react';
import Header from './header/Header'
import Issue from './issues-table/Issue'
import "../App.css"
import IssuesTableHeader from './issues-table/IssuesTableHeader';


const App = () => {

  const [data,setData]=useState([]);

  useEffect(()=>{
    fetch(
      "https://api.github.com/repos/facebook/react/issues"
    )
      .then(response => response.json())
      .then(data=> setData(data));
  },[]);
  return (
  <div className="container">
    <Header/>
    <div className="issue_container">
    <IssuesTableHeader/>
    {data.map(item => <Issue key={item.id} issue={item} />)}
    </div>
  </div>
)};


export default App;
