import './App.css';
import {Component}  from 'react';

class Consultas extends Component{
  constructor (props){
    super (props);
    this.state={
      Consultasa:[],
      alterDes:''
    }
  }

  BuscarConsultas= () =>{
    console.log();
  }

  componentDidMount(){
    //http://localhost:5000
    this.BuscarConsultas();

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
                    //this.state.Consultasa.map(())
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