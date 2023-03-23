import React from 'react';
import './Inicio.css'

export default class InicioPagina extends React.Component{

    render(){
        return(
            <div>
                <div className='espacio m-xl-1 m-5 p-2'></div>
                <div className='espacio m-xl-1 m-2 p-5'></div>
                <div className='espacio m-xl-1 m-5 p-5'></div>
                <div className='row px-5'>
                    <h2 className='col-xl-12 col-6 p-2 encabezado'>BIENVENIDOS</h2>
                    <div className='descripcion'>
                        <div>Acompañanos y conoce las desventuras de el científico <a href="https://es.wikipedia.org/wiki/Rick_S%C3%A1nchez_(Rick_y_Morty)">Rick Sanchez</a>, y su fácilmente influenciable nieto <a href="https://es.wikipedia.org/wiki/Morty_Smith">Morty</a>, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos.</div>
                        <div><img className=' imagen float-end' src='./personajes.png' width="450" height="380"/></div>
                    </div>
                </div>
            </div>
                    
        )
    }
}