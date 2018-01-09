import React from 'react';
import ReactDom from 'react-dom';
import Table from './Table.jsx';

class App extends React.Component{
   constructor(props){
     super(props);
       this.state= {
         playerX: 0,
         playerO: 0,
         board: [['+', '+', '+'], ['+', '+', '+'], ['+', '+', '+']],
         turn: 0,
         drawCount: 0,
       }
     }

    componentDidMount(){
      this.startGame();
    }

    startGame(){
      if(this.state.turn === 0){
        alert('PLAYER X STARTS');
      } else {
        if(this.state.turn % 2 === 0){
          alert('PLAYER O STARTS');
        } else {
          alert('PLAYER X STARTS');
        }
      }
      this.setState({
        drawCount: 0,
      });
    }  

  changeInput(i,j){
    let marker = '';
    if(this.state.board[i][j] === 'x' || this.state.board[i][j] === 'o'){
        return;
    }
    if(this.state.turn % 2 === 0){
      let newBoard = this.state.board;
      newBoard[i][j] = 'x';
      marker = 'x';
      let newTurn = this.state.turn + 1;
      this.setState({
        board: newBoard,
        turn: newTurn,
        drawCount: this.state.drawCount += 1,
      }) 
    } else {
      let newBoard = this.state.board;
      newBoard[i][j] = 'o';
      marker = 'o'
      let newTurn = this.state.turn + 1;
      this.setState({
        board: newBoard,
        turn: newTurn,
        drawCount: this.state.drawCount += 1,
      });
    }
    if(this.checkRows(marker) || this.checkColumns(marker) || this.checkMajorDiagonals(marker) ||this.checkMinorDiagonals(marker)){
        marker = marker.toUpperCase();
        alert(`YOU WON, PLAYER ${marker}!`);
        let name = `player${marker}`;
        let score = this.state[name] + 1;
        this.setState({
           board: [['+', '+', '+'], ['+', '+', '+'], ['+', '+', '+']],
           [name]: score,
           drawCount: 0,
        });
        return this.startGame();
    }
    this.endGame();
  }
  
  endGame(){
    if(this.state.drawCount === 9){
      alert(`This is a draw`);
      this.setState({
        board: [['+', '+', '+'], ['+', '+', '+'], ['+', '+', '+']],
      });
      this.startGame();
    }
  }

  checkRows(marker){
    for(var i = 0; i < this.state.board.length; i++){
      let row = this.state.board[i];
      let count = 0;
      for(var j = 0; j < row.length; j++){
        if(row[j] === marker){
            count++;
        }
      }
      if(count === 3){
          return true;
      }
    }
    return false;
  }

  checkColumns(marker){
    for(var i = 0; i < this.state.board.length; i++){
      let count = 0;
      for(var j = 0; j < this.state.board.length; j++){
        if(this.state.board[j][i] === marker){
            count++;
        }
      }
      if(count === 3){
          return true;
      }
    }
    return false;
  }

  checkMajorDiagonals(marker){
    let count = 0;
    for(var i = 0; i < this.state.board.length; i++){
      if(this.state.board[i][i] === marker){
        count++;
      }
    }
    if(count === 3){
      return true;
    }
    return false;  
  }

  checkMinorDiagonals(marker){
    let count = 0;
    let j = this.state.board.length - 1;
    for(var i = 0; i < this.state.board.length; i++){
      if(this.state.board[i][j] === marker){
        count++;
      }
      j -= 1;
    }
    if(count === 3){
      return true;
    }
    return false;
  }

  render(){
    return(
      <div>
      <div><Table table={this.state.board} changeInput={this.changeInput.bind(this)} /></div>
      <h3>Player X Score: {this.state.playerX}</h3>
      <h3>Player O Score: {this.state.playerO}</h3>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));