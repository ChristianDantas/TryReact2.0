import {Component}  from 'react';
class Login extends Component{
    constructor(props){
        super(props);
        this.state=  {
            email: "",
            senha:"",
        }
    }
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
                            onChange={this.AtualizaStateCampo}
                            placeholder="Email"
                            />
                            <input
                            type="password"
                            name="senha"
                            value={this.state.senha}
                            onChange={this.AtualizaStateCampo}
                            placeholder="Senha"
                            />
                            <button>
                                Login
                            </button>
                        </form>
                    </section>
                </main>
            </div>        
        )
    }
}
export default Login;