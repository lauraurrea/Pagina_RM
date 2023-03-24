import React from 'react';
import './Sugerencias.css'

export default class SugerenciasPagina extends React.Component{

    constructor(props){
        super(props);

        this.state={
            nombre:'',
            correo:'',
            mensaje:''
        }
        this.submitted=this.submitted.bind(this);
        this.changed=this.changed.bind(this);
    }

    submitted(event){
        alert("Se envió el formulario de " + this.state.nombre );
        event.preventDefault();
    }

    changed(event){
        this.setState({
            nombre: event.target.value
        })
    }

    render(){
        return(
            <>
            <div className='p-xl-5'></div>
            <div className='p-xl-1 p-5'></div>
            <div className='p-xl-1 p-5'></div>
            <div className='p-xl-1 p-3'></div>
            <div className='p-5'>
                <h2 className='titulo '>Buzón de Sugerencias</h2>
                <form onSubmit={this.submitted}>
                    <div className="contenido1 form-group my-3">
                        <label>Nombre</label>
                        <input type="text" class= "form-control" onChange={this.changed}/>
                    </div>
                    <div className='contenido2 form-group my-3'>
                    <label>Correo</label>
                    <input type="mail" class= "form-control" />
                    </div>
                    <div className="contenido3 form-group my-3">
                        <label>Mensaje de sugerencia</label>
                        <textarea className="form-control"></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary mt-2">Enviar</button>

                </form>
            </div>

            </>
        )
    }
}