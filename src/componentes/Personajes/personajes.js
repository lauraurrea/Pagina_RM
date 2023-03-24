import React from 'react';
import PersonajeFicha from './Personaje';
import './personajes.css'

// hola

export default class PersonajesPagina extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         items:[],
    //         path:"",
    //     }
    // }

    // componentDidMount(){
    //     const path = "https://rickandmortyapi.com/api/character"
    //     fetch(path)
    //     .then(response => response.json())
    //     .then(data => {
    //         this.setState(
    //             {
    //                 items: data.results,
    //                 path:data.info.next
    //             }
    //         )
    //     })
    // }

    // verMas = () =>{

    //     fetch(this.state.path)
    //     .then(response => response.json())
    //     .then(data => {
    //         this.setState(
    //             {items: [...this.state.items, ...data.results],
    //             path:data.info.next,
    //             }
    //         )
    //     })
    // }

    render(){
        return(
            <>
            {/* <div className='m-xl-1 m-5'>.</div>
                <div className='row my-5'>
                    
                    {this.state.items.map((personaje)=>(
                        <PersonajeFicha className="col-6" 
                            nombre={personaje.name} 
                            img={personaje.image}
                            estado={personaje.status}
                            especie={personaje.species} 
                        />
                    ))}
                    <div>
                    <button type="submit" className=" col-12 VerMas btn btn-primary mt-5 align-items-center" onClick={this.verMas}>Ver más</button>

                    </div>
                    
                </div> */}
            </>
        )
    }
}