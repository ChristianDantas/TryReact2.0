import React,{Component}  from 'react';
import axios from 'axios';
import {parseJwt} from '../../services/auth';
class Login extends Component{
    constructor(props){
        super(props);
        this.state=  {
            email: "",
            senha: "",
            erroMensagem: "",
            isLoading: false
        }
    }
    Login=(event)=>{
        event.preventDefault();
        this.setState({erroMensagem : "", isLoading : true})
        axios.post('http://localhost:5000/api/Login',{
            Email : this.state.email,
            Senha : this.state.senha
        })
        .then(resposta => {
            if (resposta.status=== 200) {
                 localStorage.setItem('Usuario-login', resposta.data.token)
                  console.log('meu token é ' + resposta.data.token)
                this.setState({isLoading : false})
                  let base64=localStorage.getItem('Usuario-login').split('.')[1]
                  console.log(base64)
                 
                console.log(base64.role)
                console.log(parseJwt.role)
                if (parseJwt.role=== "1" || "3") {
                    this.props.history.push('/novaconsulta');
                } else {
                    this.props.history.push('/consultas');
                }
            }
            // this.props.history.push('/NotFound');
        })
        .catch(()=>{
            this.setState({erroMensagem: "E-mail ou senha invalidos! Tente novamente", isLoading :false})
        })
    }

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value }); 
        
      };
    render(){
        return(
            <div>
                <main>
                    <section>
                        <p>ei meu consagras, faz a boa</p>
                        <form onSubmit={this.Login}>
                            <input
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.atualizaStateCampo}
                            placeholder="Email"
                            />
                            <input
                            type="password"
                            name="senha"
                            value={this.state.senha}
                            onChange={this.atualizaStateCampo}
                            placeholder="Senha"
                            />
                            <p>{this.state.erroMensagem}</p>
                            
                            {
                                this.state.isLoading=== true&&
                                <button type="submit" disabled>Loading...</button>
                            }
                            {
                                this.state.isLoading===false &&
                                <button
                                type="submit"
                                disabled={this.state.senha === ''||this.state.email === '' ? 'none' : ''}
                                >
                                    Login
                                </button>
                            }
                        </form>
                    </section>
                </main>
            </div>        
        )
    }
}
export default Login;