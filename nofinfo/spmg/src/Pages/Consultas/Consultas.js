import './App.css';
import {Component}  from 'react';

class Consultas extends Component{
  constructor (props){
    super (props);
    this.state={
      ListaConsultasa:[],
      alterDes:''
    }
  }

  BuscarConsultas= () =>{
    console.log();
    fetch('http://localhost:5000/api/consulta')
    
    .then(responde=>responde.json())

    .then(dados=>this.setState({ListaConsultasa : dados}))
    .catch(erro=> console.log(erro))
  }

  componentDidMount(){
    
    this.BuscarConsultas()

  }
  render(){
    return(
      <div>
        <main>
          <section>
            <h2>Lista Consultas</h2>
            <table>
              <thead>
                <tr>
                  <th>idConsulta</th>
                  <th>idMedico</th>
                  <th>idSituacao</th>
                  <th>Descricao</th>
                  <th>data</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {
                    this.state.ListaConsultasa.map((ListaConsultasa)=>{
                      return(
                        <tr key={ListaConsultasa.idConsulta} >
                          <td>{ListaConsultasa.idConsulta}</td>
                          
                          <td>{ListaConsultasa.idMedico}</td>
                          <td>{ListaConsultasa.idPaciente}</td>
                          <td>{ListaConsultasa.idSituacao}</td>
                          <td>{ListaConsultasa.descricaoConsulta}</td>
                          <td>{ListaConsultasa.dataConsulta}</td>
                        </tr>
                      )
                    })
                  }
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    )
  }
}

export default Consultas;