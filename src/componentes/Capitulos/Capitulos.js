import React from 'react';
import CapituloFicha from './Capitulo';
import './Capitulos.css'

export default class CapitulosPagina extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            path:"",
        }
    }

    componentDidMount(){
        const path = "https://rickandmortyapi.com/api/episode"
        fetch(path)
        .then(response => response.json())
        .then(data => {
            this.setState(
                {
                    items: data.results,
                    path:data.info.next
                }
            )
        })
    }

    verMas1 = () =>{

        fetch(this.state.path)
        .then(response => response.json())
        .then(data => {
            this.setState(
                {items: [...this.state.items, ...data.results],
                path:data.info.next,
                }
            )
        })
    }

    render(){
        return(
            <>
            <div className='espacio p-5'></div>
            <div className='espacio p-5 '></div>
            <div className='espacio p-xl-1 p-5 '></div>

            <div className='row'>
                {this.state.items.map((capitulo)=>(
                    <CapituloFicha className="col-6 " 
                        nombre={capitulo.name} 
                        id={capitulo.id}
                        episodio={capitulo.episode}
                        fecha={capitulo.air_date}
                    />
                ))}
                <div>
                <button type="submit" className=" col-12 VerMas1 btn btn-primary mt-5 align-items-center" onClick={this.verMas1}>Ver más</button>

                </div>
                
            </div>
            </>
            
        )
    }
}