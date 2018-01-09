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
        this.props.changeInput(this.state.val, this.state.index[e.target])
    }
    render(){
        return(
            <tr>
            {this.props.row.map((item, j) => {
              return <td><span val = {j} onClick={function(e){
                let newIndex = this.state.index;
                newIndex[e.target] = j;
                this.setState({
                  index: newIndex
                });
                this.clicked(e)}.bind(this)}>{item}</span></td>
            })}
         </tr>
        );
    }
}

export default TableRow;