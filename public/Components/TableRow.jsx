import React from 'react';

class TableRow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      val: this.props.value,
      index: {},
    }
  }

  clicked(e){
    this.props.changeInput(this.state.val, this.state.index[e.target]);
  }

  render(){
    return(
      <tr>
        {this.props.row.map((item, j) => {
          return <td key={j}><span id="piece" onClick={function(e){
            let newIndex = this.state.index;
            newIndex[e.target] = j;
            this.setState({
              index: newIndex
            });
            this.clicked(e)}.bind(this)}><font size="6">{item}</font></span>
          </td>
        })}
      </tr>
    );
  }
}

export default TableRow;