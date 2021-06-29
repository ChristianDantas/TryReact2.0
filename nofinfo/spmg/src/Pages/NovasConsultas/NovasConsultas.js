import {Component}  from 'react';

class NovasConsultas extends Component{
    constructor(props){
        super(props);
        this.state= {
            IdConsulta : '',
            idMedico : 0,
            idPaciente: 0,
            idSituacao:0,
            descricaoConsulta: '',
            dataConsulta: new Date ()

        }
        
      
        
    }
    CadastrarConsultas= (event) =>{
      event.preventDefault();
      fetch('http://localhost:5000/api/consulta',{
        method: 'POST',
        body: JSON.stringify({idMedico : this.state.idMedico}),
        headers:{
          "Content-Type" : "application/json"
        }
      })
      
      .then(console.log("eita bixo"))
      
    }

    attmedicoo= (eEuseila)=>{
this.setState({idMedico : eEuseila.target.value })
    }



    componentDidMount(){
          
  
    }
    render(){
        return(
          <div>
            <main>
              <section>
                <h2>CADASTRA ESSA COISA</h2>
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
                <form onSubmit={this.CadastrarAsConsultas}>
                <input type="text" name="medico"  value={this.state.idMedico} onChange={this.attmedicoo} placeholder="Insira idMedico"/>
                {/* <input type="text" name="paciente" value={this.state.idPaciente} onChange={this.attmedicoo} placeholder="Insira idpaciente"/>
                <input type="text" value={this.state.descricaoConsulta} onChange={this.attdescricaoo} placeholder="Insira a descrição"/>
                <input type="text" value={this.state.dataConsulta} onChange={this.attdataDaConsultaa} placeholder="Insira a data"/>
                <input type="text" value={this.state.idSituacao} onChange={this.attSituacaoo} placeholder="Insira a situação"/>  */}
                <button type="submit">Cadastrar</button>
                </form>
              </section>
            </main>
          </div>
        )
      }
} 
export default NovasConsultas;