import React from 'react';
import TableRow from './TableRow.jsx'
class Table extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.props.table)
    }
    render(){
      return(
          <div>
          {this.props.table.map((array, i) => {
             return <div><TableRow row={array} changeInput={this.props.changeInput} value = {i}/></div>
          })}
          </div>
       );
    }
}

export default Table;