import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import '../css/Edit.css';


class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      nome: '',
      cargo: '',
      dataBatismo: '',
      dataNascimento: '',
      rg: '',
      janeiro:'',
      fevereiro:'',
      marco:'',
      abril:'',
      maio:'',
      junho:'',
      julho:'',
      agosto:'',
      setembro:'',
      outubro:'',
      novembro:'',
      dezembro:'',
      decimo:''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          key: doc.id,
          nome: board.nome,
          cargo: board.cargo,
          dataBatismo: board.dataBatismo,
          dataNascimento: board.dataNascimento,
          rg: board.rg,
          janeiro: board.janeiro, 
          fevereiro: board.fevereiro,
          marco:board.marco,
          abril:board.abril,
          maio:board.maio,
          junho:board.junho,  
          julho:board.julho,
          agosto:board.agosto,
          setembro:board.setembro,
          outubro:board.outubro,
          novembro:board.novembro,
          dezembro:board.dezembro,
          decimo:board.decimo
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({ board: state });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { nome, cargo, dataBatismo, dataNascimento, rg, janeiro, fevereiro, marco, maio, abril, junho, julho, agosto, setembro, outubro, novembro, dezembro, decimo } = this.state;

    const updateRef = firebase.firestore().collection('boards').doc(this.state.key);
    updateRef.set({
      nome,
      cargo,
      dataBatismo,
      dataNascimento,
      rg,
      janeiro,
      fevereiro,
      marco,
      abril,
      maio,
      junho,
      julho,
      agosto,
      setembro,
      outubro,
      novembro,
      dezembro,
      decimo
    }).then((docRef) => {
      this.setState({
        key: '',
        nome: '',
        cargo: '',
        dataBatismo: '',
        dataNascimento: '',
        rg: '',
        janeiro:'',
        fevereiro:'',
        marco:'',
        abril:'',
        maio:'',
        junho:'',
        julho:'',
        agosto:'',
        setembro:'',
        outubro:'',
        novembro:'',
        dezembro:'',
        decimo:''
      });
      this.props.history.push("/show/" + this.props.match.params.id)
    })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  render() {
    return (
      <div class="container-fluid-lg">
        <div class="row">
          <div class="col-lg-12">
            <div class="jumbotron jumbotron-fluid">
              <div class="container-fluid">
                <h1 class="display-4">Editar Membro</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="card">
            <div class="card-body">
              <div class="panel panel-default">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col">
                      <div class="panel-body">
                        <form onSubmit={this.onSubmit}>
                          <div class="form-group">
                            <label for="nome">Nome:</label>
                            <input type="text" class="form-control" name="nome" value={this.state.nome} onChange={this.onChange} placeholder="Nome" />
                          </div>
                          <div class="form-group">
                            <label for="cargo">Cargo:</label>
                            <input type="text" class="form-control" name="cargo" value={this.state.cargo} onChange={this.onChange} placeholder="Cargo" />
                          </div>
                          <div class="form-group">
                            <label for="dataBatismo">Data de Batismo:</label>
                            <input type="text" class="form-control" name="dataBatismo" value={this.state.dataBatismo} onChange={this.onChange} placeholder="Data de Batismo" />
                          </div>
                          <div class="form-group">
                            <label for="dataNascimento">Data de Nascimento:</label>
                            <input type="text" class="form-control" name="dataNascimento" value={this.state.dataNascimento} onChange={this.onChange} placeholder="Data de Nascimento" />
                          </div>
                          <div class="form-group">
                            <label for="rg">RG:</label>
                            <input type="number" class="form-control" name="rg" value={this.state.rg} onChange={this.onChange} placeholder="RG" />
                          </div>


                          <div class="form-group">
                            <label for="rg">Contribuíções de Dízimo</label>
                          </div>
                          <div class="row">
                            <div class="col-md-6">

                              <div class="form-group">
                                <label for="janeiro">Janeiro:</label>
                                <input type="number" class="form-control" name="janeiro" value={this.state.janeiro} onChange={this.onChange} />
                              </div>
                              <div class="form-group">
                                <label for="fevereiro">Fevereiro:</label>
                                <input type="number" class="form-control" name="fevereiro" value={this.state.fevereiro} onChange={this.onChange} />
                              </div>
                              <div class="form-group">
                                <label for="marco">Março:</label>
                                <input type="number" class="form-control" name="marco" value={this.state.marco} onChange={this.onChange} />
                              </div>
                              <div class="form-group">
                                <label for="abril">Abril:</label>
                                <input type="number" class="form-control" name="abril" value={this.state.abril} onChange={this.onChange} />
                              </div>
                              <div class="form-group">
                                <label for="maio">Maio:</label>
                                <input type="number" class="form-control" name="maio" value={this.state.maio} onChange={this.onChange} />
                              </div>
                              <div class="form-group">
                                <label for="junho">Junho:</label>
                                <input type="number" class="form-control" name="junho" value={this.state.junho} onChange={this.onChange} />
                              </div>

                            </div>
                            <div class="col-md-6">

                              <div class="form-group">
                                <label for="julho">Julho:</label>
                                <input type="number" class="form-control" name="julho" value={this.state.julho} onChange={this.onChange} />
                              </div>
                              <div class="form-group">
                                <label for="agosto">Agosto:</label>
                                <input type="number" class="form-control" name="agosto" value={this.state.agosto} onChange={this.onChange} />
                              </div>
                              <div class="form-group">
                                <label for="setembro">Setembro:</label>
                                <input type="number" class="form-control" name="setembro" value={this.state.setembro} onChange={this.onChange} />
                              </div>
                              <div class="form-group">
                                <label for="outubro">Outubro:</label>
                                <input type="number" class="form-control" name="outubro" value={this.state.outubro} onChange={this.onChange} />
                              </div>
                              <div class="form-group">
                                <label for="novembro">Novembro:</label>
                                <input type="number" class="form-control" name="novembro" value={this.state.novembro} onChange={this.onChange} />
                              </div>
                              <div class="form-group">
                                <label for="dezembro">Dezembro:</label>
                                <input type="number" class="form-control" name="dezembro" value={this.state.dezembro} onChange={this.onChange} />
                              </div>

                            </div>

                          </div>
                          <div class="form-group">
                            <label for="decimo">Décimo Terceiro:</label>
                            <input type="number" class="form-control" name="decimo" value={this.state.decimo} onChange={this.onChange} />
                          </div>



                          <div class="row">
                            <div class="col-md-4">
                              <button type="submit" id="botoesEdit"class="list-group-item list-group-item-action list-group-item-success">Salvar Modificações</button>
                            </div>
                            <div class="col-md-4">
                            </div>
                            <div class="col-md-4">
                              <Link to={`/show/${this.state.key}`}id="botoesEdit" class="list-group-item list-group-item-action list-group-item-success">Voltar</Link>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;