import React from "react";
import './Capitulo.css'

export default class CapituloFicha extends React.Component{
    constructor(props){
        super(props);
        this.state={
            seleccion:false
        }

        this.toggleSeleccionar=this.toggleSeleccionar.bind(this)
    }

    toggleSeleccionar(){
        this.setState(prevState => ({
            seleccion: !prevState.seleccion
        }))
    }

    render(){
        return(
            <>
           
            <div className={"tarjetaCap " + (this.state.seleccion ? 'd-none' : 'zoom')}>
                <div className={"InfCapitulo " +  (this.state.seleccion ? 'infoCapituloSelect' : '')}>
                    <div><b>{"Capítulo " + this.props.id + ": "}</b>{ this.props.nombre}</div>
                    <div><b>Episodio: </b> {this.props.episodio}</div>
                    <div><b>Fecha: </b> {this.props.fecha}</div>
                </div> 
            </div>
            </>
        )
    }
}