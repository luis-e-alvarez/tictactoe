import React from 'react';
import TableRow from './TableRow.jsx'

class Table extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
      return(
          <div>
          {this.props.table.map((array, i) => {
             return <div id="grid" key={i}><TableRow row={array} changeInput={this.props.changeInput} value={i}/></div>
          })}
          </div>
       );
    }
}

export default Table;