import React from 'react';
import './Home.scss';
import {Link} from 'react-router-dom';

const Home = () => {
 return (
     <div className="Home">

                <Link to="/Home"><>Home</></Link>
                <Link to="/Parceria"><>Parceria</></Link>
                <Link to="/Como doar"><>Como doar</></Link>
                <div>
                <Link to="/Cadastro">
                     <button>Cadastro</button>
                </Link>
                </div>
     </div>
 )
}

export default Home;