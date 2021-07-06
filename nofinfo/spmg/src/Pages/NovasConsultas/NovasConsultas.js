import axios from 'axios';
import { Component } from 'react';


class NovasConsultas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListaConsultasa: [],
      IdConsulta: '',
      idMedico: 0,
      idPaciente: 0,
      idSituacao: '',
      descricaoConsulta: '',
      dataConsulta: new Date(),
      idConsultaAlterado: 0,
    }



  }
  BuscarConsultas = () => {

    fetch('http://localhost:5000/api/consulta/')

      .then(responde => responde.json())

      .then(dados => this.setState({ ListaConsultasa: dados }))
      .catch(erro => console.log(erro))
  }

  CadastrarConsultas = (event) => {
    event.preventDefault();
    if (this.state.idConsultaAlterado !== 0) {
      axios.patch('http://localhost:5000/api/consulta/' + this.state.idConsultaAlterado, {
        Situacao1: this.state.idSituacao,
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
        }
      }

      )
    }




    else {
      axios.post('http://localhost:5000/api/consulta', {
        idMedico: this.state.idMedico,
        idPaciente: this.state.idPaciente,
        idSituacao: this.state.idSituacao,
        descricaoConsulta: this.state.descricaoConsulta,
        dataConsulta: this.state.dataConsulta,
        headers: {
          "Content-Type": "application/json",
         // 'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
        }
      },


      )
    }




  }
  AtualizaDescricao = (event) => {
    event.preventDefault();

    axios.patch('http://localhost:5000/api/consulta/descricao/' + this.state.idConsultaAlterado, {
      descricaoConsulta: this.state.descricaoConsulta,
      headers: {
        //'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
      }

    }

    )
    console.log('foi fml')
  }

  attmedicoo = async (campo) => {
    await this.setState({ [campo.target.name]: campo.target.value })
    console.log('id da situacao ' + this.state.idSituacao)
  };



  componentDidMount() {

    this.BuscarConsultas()
  }
  EditSituacao = async (consulta) => {
    await this.setState({
      idConsultaAlterado: consulta.idConsulta,
      idSituacao: consulta.idSituacao
    })

    console.log('id da consulta alterada ' + this.state.idConsultaAlterado)
    console.log('id da situacao ao alterar a sit ' + this.state.idSituacao)
  }
  EditDes = async (consulta) => {
    await this.setState({
      idConsultaAlterado: consulta.idConsulta,
      descricaoConsulta: consulta.descricaoConsulta
    })

    console.log(this.state.idConsultaAlterado)
    console.log(this.state.descricaoConsulta)
  }

  render() {
    return (
      <div>
        <main>
          <section>
            <h2>CADASTRA ESSA COISA</h2>
            <table>
              <thead>
                <tr>
                  <th>idConsulta</th>
                  <th>idMedico</th>
                  <th>idPaciente</th>
                  <th>idSituacao</th>
                  <th>Descricao</th>
                  <th>data</th>
                </tr>
              </thead>
              <tbody>

                {
                  this.state.ListaConsultasa.map((consulta) => {
                    return (
                      <tr key={consulta.idConsulta} >
                        <td>{consulta.idConsulta}</td>


                        <td>{consulta.idMedicoNavigation.nomeMedico}</td>
                        <td>{consulta.idPacienteNavigation.nomePaciente}</td>
                        <td>{consulta.idSituacaoNavigation.situacao1}</td>
                        <td>{consulta.descricaoConsulta}</td>
                        <td>{consulta.dataConsulta}</td>

                        <td><button onClick={() => this.EditSituacao(consulta)}>Editar situacao</button></td>
                        <td><button onClick={() => this.EditDes(consulta)}>Editar des</button></td>
                      </tr>
                    )
                  })
                }

              </tbody>
            </table>
            <form onSubmit={this.CadastrarConsultas}>
              <input type="number" name="idMedico" value={this.state.idMedico} onChange={this.attmedicoo} placeholder="Insira idMedico" />
              <input type="number" name="idPaciente" value={this.state.idPaciente} onChange={this.attmedicoo} placeholder="Insira idpaciente" />
              <input type="text" name="descricaoConsulta" value={this.state.descricaoConsulta} onChange={this.attmedicoo} placeholder="Insira a descrição" />
              <input type="text" name="dataConsulta" value={this.state.dataConsulta} onChange={this.attmedicoo} placeholder="Insira a data" />
              <input type="number" name="idSituacao" value={this.state.idSituacao} onChange={this.attmedicoo} placeholder="Insira a situação" />
              <button type="submit">Cadastrar</button>
            </form>
            <form onSubmit={this.AtualizaDescricao}>
              <input type="text" name="descricaoConsulta" value={this.state.descricaoConsulta} onChange={this.attmedicoo} placeholder="Insira a descrição" />
              <button type="submit">Atualiza coisa linda</button>
            </form>


          </section>
        </main>
      </div>
    )
  }
}
export default NovasConsultas;