import React from "react";
import './personaje.css'

export default class PersonajeFicha extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         seleccion:false
    //     }

    //     this.toggleSeleccionar=this.toggleSeleccionar.bind(this)
    // }

    // toggleSeleccionar(){
    //     this.setState(prevState => ({
    //         seleccion: !prevState.seleccion
    //     }))
    // }
    
    render(){
        return(
            <>
                {/* <div className={"tarjeta " + (this.state.seleccion ? 'select' : 'zoom')}>
                                       
                    <div className="MarcoImg">
                        <img src={this.props.img}/>
                    </div>
                    <div className={"InfPersonaje " +  (this.state.seleccion ? 'infoPersonajeSelect' : '')}>
                        
                        <div>{this.props.nombre}</div>
                        <div className={"caract "+ (this.state.seleccion ? '' : 'd-none')}>
                            <div >{"Estado: " + (this.props.estado) }</div>
                            <div >{"Especie: " + this.props.especie}</div>
                        </div>
                        <button className="btn btn-primary" onClick={this.toggleSeleccionar}>{(this.state.seleccion ? 'Quitar' : 'Seleccionar')}</button>
                    </div> 
                </div> */}
            </>
        )
    }
}