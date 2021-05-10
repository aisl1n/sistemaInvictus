import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import '../css/Create.css'


class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.state = {
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
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { nome, cargo, dataBatismo, dataNascimento, rg, janeiro, fevereiro, marco, maio, abril, junho, julho, agosto, setembro, outubro, novembro, dezembro, decimo } = this.state;

    this.ref.add({
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
      this.props.history.push("/")
    })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
  render() {
    const { nome, cargo, dataBatismo, dataNascimento, rg, janeiro, fevereiro, marco, maio, abril, junho, julho, agosto, setembro, outubro, novembro, dezembro, decimo } = this.state;
    return (
      <div class="container-fluid-lg">
        <div class="row">
          <div class="col-lg-12">
            <div class="jumbotron jumbotron-fluid">
              <div class="container-fluid">
                <h1 class="display-4">Adicionar um novo Membro</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="panel panel-default">
            <div class="panel-body">
              <form onSubmit={this.onSubmit}>
                <div class="form-group">
                  <label for="nome">Nome:</label>
                  <input type="text" class="form-control" name="nome" value={nome} onChange={this.onChange} placeholder="Nome" required />
                </div>
              
                <div class="form-group">
                  <label for="cargo">Cargo:</label>
                  <textArea class="form-control" name="cargo" onChange={this.onChange} placeholder="Cargo" cols="80" rows="3" required> {cargo}  </textArea>
                </div>
                <div class="form-group">
                  <label for="dataBatismo">Data de batismo:</label>
                  <input type="text" class="form-control" name="dataBatismo" value={dataBatismo} onChange={this.onChange} required />
                </div>
                <div class="form-group">
                  <label for="dataNascimento">Data de Nascimento:</label>
                  <input type="text" class="form-control" name="dataNascimento" value={dataNascimento} onChange={this.onChange} required />
                </div>
                <div class="form-group">
                  <label for="rg">RG:</label>
                  <input type="number" class="form-control" name="rg" value={rg} onChange={this.onChange} required />
                </div>
                <div class="form-group">
                  <label for="rg">Contribuíções de Dízimo</label>
                </div>
                <div class="row">
                  <div class="col-md-6">

                    <div class="form-group">
                      <label for="janeiro">Janeiro:</label>
                      <input type="number" class="form-control" name="janeiro" value={janeiro} onChange={this.onChange} />
                    </div>
                    <div class="form-group">
                      <label for="fevereiro">Fevereiro:</label>
                      <input type="number" class="form-control" name="fevereiro" value={fevereiro} onChange={this.onChange} />
                    </div>
                    <div class="form-group">
                      <label for="marco">Março:</label>
                      <input type="number" class="form-control" name="marco" value={marco} onChange={this.onChange} />
                    </div>
                    <div class="form-group">
                      <label for="abril">Abril:</label>
                      <input type="number" class="form-control" name="abril" value={abril} onChange={this.onChange} />
                    </div>
                    <div class="form-group">
                      <label for="maio">Maio:</label>
                      <input type="number" class="form-control" name="maio" value={maio} onChange={this.onChange} />
                    </div>
                    <div class="form-group">
                      <label for="junho">Junho:</label>
                      <input type="number" class="form-control" name="junho" value={junho} onChange={this.onChange} />
                    </div>

                  </div>
                  <div class="col-md-6">

                    <div class="form-group">
                      <label for="julho">Julho:</label>
                      <input type="number" class="form-control" name="julho" value={julho} onChange={this.onChange} />
                    </div>
                    <div class="form-group">
                      <label for="agosto">Agosto:</label>
                      <input type="number" class="form-control" name="agosto" value={agosto} onChange={this.onChange} />
                    </div>
                    <div class="form-group">
                      <label for="setembro">Setembro:</label>
                      <input type="number" class="form-control" name="setembro" value={setembro} onChange={this.onChange} />
                    </div>
                    <div class="form-group">
                      <label for="outubro">Outubro:</label>
                      <input type="number" class="form-control" name="outubro" value={outubro} onChange={this.onChange} />
                    </div>
                    <div class="form-group">
                      <label for="novembro">Novembro:</label>
                      <input type="number" class="form-control" name="novembro" value={novembro} onChange={this.onChange} />
                    </div>
                    <div class="form-group">
                      <label for="dezembro">Dezembro:</label>
                      <input type="number" class="form-control" name="dezembro" value={dezembro} onChange={this.onChange} />
                    </div>

                  </div>

                </div>
                <div class="form-group">
                  <label for="decimo">Décimo Terceiro:</label>
                  <input type="number" class="form-control" name="decimo" value={decimo} onChange={this.onChange} />
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <button type="submit" id="botoesCreate" class="list-group-item list-group-item-action list-group-item-success">Salvar</button>
                  </div>
                  <div class="col-md-4">
                  </div>
                  <div class="col-md-4">
                    <Link to="/" id="botoesCreate" class="list-group-item list-group-item-action list-group-item-success">Voltar para lista de Membros</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;