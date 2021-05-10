import React, { Component } from 'react';
import firebase from './Firebase';
import './css/Inicio.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Inicio extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards');
    this.logout = this.logout.bind(this);
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { nome, cargo, dataBatismo, dataNascimento, rg, dizimo } = doc.data();
      boards.push({
        key: doc.id,
        doc,
        nome,
        cargo,
        dataBatismo,
        dataNascimento,
        rg,
        dizimo
      });
    });
    this.setState({
      boards
    });
  }

  logout() {
    firebase.auth().signOut();
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      
      <div class="container-md">
        
        <div class="row">
          <div class="col-md-12">
            <div class="jumbotron">
              <div class="container-fluid">
                <h1 class="display-3">INVICTUS</h1>
                <p class="lead">Sistema de armazenamento de dados de membros</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">
                  </h3>
                </div>
                <div class="panel-body">
                  <div class="row">
                    <div class="col-sm-4">
                      <a href="/create" id="botoes" class="list-group-item list-group-item-action list-group-item-success">Adicionar Pessoas</a>
                    </div>
                    <div class="col-sm-4">
                    </div>
                    <div class="col-sm-4">
                      <button id="botoes" class="list-group-item list-group-item-action list-group-item-success" onClick={this.logout}>Logout</button>
                    </div>
                  </div>
                  <table class="table table-responsive-sm">
                    <thead class="thead-dark">
                      <tr>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>Data de Batismo</th>
                        <th>Data de Nascimento</th>
                        <th>RG</th>
                        <th>Dízimos</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.boards.map(board =>
                        <tr>
                          <td>
                            <a class="editar" href={`/show/${board.key}`}>{board.nome}</a>
                          </td>
                          <td>{board.cargo}</td>
                          <td>{board.dataBatismo}</td>
                          <td>{board.dataNascimento}</td>
                          <td>{board.rg}</td>
                          <td>{board.dizimo}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer">
          <div id="jumboFooter" class="container-fluid-sm" >
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
      </div>  
    );
  }
}

export default Inicio;