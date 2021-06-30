import './App.css';
import {Component}  from 'react';

class Consultas extends Component{
  constructor (props){
    super (props);
    this.state={
      ListaConsultasa:[],
      alterDes:'',
      idConsultaAlterado:0,
      idSituacao:0
    }
  }

  BuscarConsultas= () =>{
  
    fetch('http://localhost:5000/api/consulta')
    
    .then(responde=>responde.json())

    .then(dados=>this.setState({ListaConsultasa : dados}))
    .catch(erro=> console.log(erro))
  }

  componentDidMount(){
    
    this.BuscarConsultas()

  }

  BuscarConsultasPorId=(ListaConsultasa)=>{
    this.setState({ 
      idConsultaAlterado : ListaConsultasa.idConsulta,
      idSituacao : ListaConsultasa.idSituacao,
    })
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
                
                  {
                    this.state.ListaConsultasa.map((ListaConsultasa)=>{
                      return(
                        <tr key={ListaConsultasa.idConsulta} >
                          <td>{ListaConsultasa.idConsulta}</td>
                          
                          
                          <td>{ListaConsultasa.idMedicoNavigation.nomeMedico}</td>
                          <td>{ListaConsultasa.idPacienteNavigation.nomePaciente}</td>
                          <td>{ListaConsultasa.idSituacaoNavigation.situacao1}</td>
                          <td>{ListaConsultasa.descricaoConsulta}</td>
                          <td>{ListaConsultasa.dataConsulta}</td>
                          <td><button onClick={()=>this.BuscarConsultasPorId(ListaConsultasa)}>Editar</button></td>
                        </tr>
                      )
                    })
                  }
                
              </tbody>
            </table>
          </section>
        </main>
      </div>
    )
  }
}

export default Consultas;