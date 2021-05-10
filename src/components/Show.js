import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import "../css/Show.css"


class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id) {
    firebase.firestore().collection('boards').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div class="container-fluid-md">
        <div class="row">
          <div class="col-lg-12">
            <div class="jumbotron jumbotron-fluid">
              <div class="container-fluid">
                <h1 class="display-3">INVICTUS</h1>
                <p class="lead">Sistema de armazenamento de dados de membros</p>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid-lg">
          <div class="card">
            <div class="card-body">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="display-4">
                    {this.state.board.nome}
                  </h3>
                </div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col">
                      <div class="panel-body">
                        <div class="row">
                          <div class="col-md-2">
                          </div>
                          <div class="col-md-8">
                            <ul class="list-group">
                              <dt class="nomes">Cargo:</dt>
                              <li class="list-group-item">{this.state.board.cargo}</li>
                              <dt class="nomes">Data de Batismo:</dt>
                              <li class="list-group-item">{this.state.board.dataBatismo}</li>
                              <dt class="nomes">Data de Nascimento:</dt>
                              <li class="list-group-item">{this.state.board.dataNascimento}</li>
                              <dt class="nomes">RG:</dt>
                              <li class="list-group-item">{this.state.board.rg}</li>
                            </ul>
                            <div class="col-md-2">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="container-fluid">
                  <div class="row">
                    <div class="col">
                      <div class="modal-body">
                        <button id="botaoDizimo" type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Dízimos</button>
                        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                          <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                              <div class="container-fluid">
                                <div class="row">
                                  <div class="col-md-6">
                                    <div class="form-group">
                                      <div class="col-form-label">
                                        <dt class="nomes">Janeiro</dt>
                                        <li class="list-group-item">{this.state.board.janeiro}</li>
                                        <dt class="nomes">Fevereiro</dt>
                                        <li class="list-group-item">{this.state.board.fevereiro}</li>
                                        <dt class="nomes">Março</dt>
                                        <li class="list-group-item">{this.state.board.marco}</li>
                                        <dt class="nomes">Abril</dt>
                                        <li class="list-group-item">{this.state.board.abril}</li>
                                        <dt class="nomes">Maio</dt>
                                        <li class="list-group-item">{this.state.board.maio}</li>
                                        <dt class="nomes">Junho</dt>
                                        <li class="list-group-item">{this.state.board.junho}</li>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="col-md-6">
                                    <div class="form-group">
                                      <div class="col-form-label">
                                        <dt class="nomes">Julho</dt>
                                        <li class="list-group-item">{this.state.board.julho}</li>
                                        <dt class="nomes">Agosto</dt>
                                        <li class="list-group-item">{this.state.board.agosto}</li>
                                        <dt class="nomes">Setembro</dt>
                                        <li class="list-group-item">{this.state.board.setembro}</li>
                                        <dt class="nomes">Outubro</dt>
                                        <li class="list-group-item">{this.state.board.outubro}</li>
                                        <dt class="nomes">Novembro</dt>
                                        <li class="list-group-item">{this.state.board.novembro}</li>
                                        <dt class="nomes">Dezembro</dt>
                                        <li class="list-group-item">{this.state.board.dezembro}</li>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col">
                                    <dt class="nomes">Décimo Terceiro</dt>
                                    <li class="list-group-item">{this.state.board.decimo}</li>
                                    <div class="modal-footer">
                                      <button type="button" class="btn btn-success" data-dismiss="modal">Fechar</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <Link to={`/edit/${this.state.key}`} id="botoes" class="list-group-item list-group-item-action list-group-item-success">Edit</Link>
                  </div>
                  <div class="col-md-4">
                    <button onClick={this.delete.bind(this, this.state.key)} id="botoes" class="list-group-item list-group-item-action list-group-item-danger">Delete</button>
                  </div>
                  <div class="col-md-4">
                    <a href="/" id="botoes" class="list-group-item list-group-item-action list-group-item-success">Voltar para lista de Membros</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <div id="rodape" class="jumbotron">
                <p id="footer1" class="lead">Igreja Pentecostal Unida do Brasil</p>
                <p id="footer1" class="lead">Parobé - Rio Grande do Sul - Brasil</p>
                <p id="footer1" class="lead">&reg; copyright 2019 Sistema INVICTUS - todos os direitos reservados</p>
                <p id="footer1" class="lead">Aislã Robson de Lucio</p>
                <p id="footer1" class="lead">Redes Sociais: <a href="https://www.facebook.com/aisl1n">Facebook</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;