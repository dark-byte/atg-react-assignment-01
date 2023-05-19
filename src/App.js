import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Main from './Components/Main'
import { useState } from 'react';

const heroImg = 'https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1987&q=80'
const title = "Computer Engineering"
const followers = "142,765"
const profileImg = "https://xsgames.co/randomusers/avatar.php?g=male"
const username = "Siddharth Goyal"

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  return (
    <div className="App">
      <Header isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} profileImg = {profileImg} username={username}/>
      <Hero heroImg = {heroImg} title = {title} followers = {followers}/>
      <Main isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />
    </div>
  );
}

export default App;
