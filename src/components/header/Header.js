import React, { useEffect, useState } from 'react';
import RepoDetail from '../commons/RepoDetail';
import NavigationItem from './NavigationItem';
import RepoLogoSVG from '../commons/svg/RepoLogoSVG';
import {navData} from './Navdata'
import "./Header.css"


const Header = () => {
  const [data,setData]=useState([]);

  useEffect(()=>{
    fetch(
      "https://api.github.com/repos/facebook/react"
    )
      .then(response => response.json())
      .then(data=> setData(data));
  },[]);

return (
  <nav className='Nav'>
    <div className="nav_menu" style={{justifyContent:"space-between"}}>
      <div className="title_info">
        <RepoLogoSVG />
        <a
          className="anchor"
          href={window.location.href}
          >
          Facebook
        </a>
        <span className="path_provider">/</span>
        <a
          className="anchor"
          style={{fontWeight:"bold"}}
          href={data.html_url}
        >
          {data.name}
        </a>
        <span style={{marginLeft:5,border:"2px solid light",borderRadius:10,backgroundColor:"lightgrey"}}>{data.visibility}</span>
      </div>
      <div className='right_nav'>
        <RepoDetail tag="Watch" value={data.subscribers_count} />
        <RepoDetail tag="Star" value={data.stargazers_count} />
        <RepoDetail tag="Fork" value={data.forks_count} />
      </div>
    </div>

    <div className="nav_menu">
      {
        navData.map(item => (
          <NavigationItem
            key={item.name}
            {...item}
          />
        ))
      }
    </div>
  </nav>
)};

export default Header;