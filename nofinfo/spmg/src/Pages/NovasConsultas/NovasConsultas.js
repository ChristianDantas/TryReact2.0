import {Component}  from 'react';

class NovasConsultas extends Component{
    constructor(props){
        super(props);
        this.state= {
            idMedico : 0,
            idPaciente: 0,
            descricaoConsulta: '',
            dataConsulta: new Date ()

        }
    }
    render(){
        return(
          <div>
            <main>
              <section>
                <h2>Lista Consulta</h2>
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
                </table>
              </section>
            </main>
          </div>
        )
      }
} 
export default NovasConsultas;