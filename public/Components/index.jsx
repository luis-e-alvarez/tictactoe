import React from 'react';
import ReactDom from 'react-dom';
import Table from './Table.jsx';

class App extends React.Component{
   constructor(props){
       super(props);
       this.state= {
         playerOneScore : 0,
         playerTwoScore :0,
         board: [['+', '+', '+'], ['+', '+', '+'], ['+', '+', '+']],
         turn: 0,
       }
    }

   changeInput(i,j){
    if(this.state.board[i][j] === 'x' || this.state.board[i][j] === 'o'){
        return;
    }
    if(this.state.turn % 2 === 0){
      let newBoard = this.state.board;
      newBoard[i][j] = 'x';
      let newTurn = this.state.turn + 1;
      this.setState({
        board: newBoard,
        turn: newTurn,
      }) 
    } else {
        let newBoard = this.state.board;
        newBoard[i][j] = 'o';
        let newTurn = this.state.turn + 1;
        this.setState({
            board: newBoard,
            turn: newTurn,
       });
    }
 }
  
  render(){
      return(
          <div>
          <div><Table table={this.state.board} changeInput={this.changeInput.bind(this)} /></div>
          <h3>Player One Score: {this.state.playerOneScore}</h3>
          <h3>Player Two Score: {this.state.playerTwoScore}</h3>
          </div>
      );
  }
}

ReactDom.render(<App />, document.getElementById('app'));