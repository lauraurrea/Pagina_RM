import React from "react";
import './Menu.css';
import { Link } from "react-router-dom";

export default class Menu extends React.Component{

    render(){
        return(
            <div className="fondo row  fixed-top px-5 ">
                <div className="col-xl-6 col-12" >
                    <img className="img-fluid" src="./titulo.png"  width="530" height="150"/>
                </div>
                <div className= "row d-flex text-center align-items-center col-6">
                    <Link to="/" className="mx-3 letra col-xl-2 col-sm-6 col-12 " >Inicio</Link>
                    <Link to="/personajes" className=" letra col-xl-4 col-sm-1 col-12 ">Personajes</Link>
                    <Link to="/capitulos" className=" letra col-xl-3 col-sm-6 col-12 ">Capítulos</Link>
                    <Link to="/sugerencias" className=" letra col-xl-1 col-sm-1 col-12 p-">Sugerencias</Link>
                </div>
            </div>          

        )
    }
}