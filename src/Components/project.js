import React,{ Component } from 'react';

class Card extends Component{

constructor(){
   super()
   this.state = {

       initialValue : 0
     }

  }

   incrementButton =() =>{
     
       this.setState({initialValue : this.state.initialValue +1});
         
   }

   decrementButton =()=>{

    this.setState({initialValue :this.state.initialValue -1});
   }

   reset=() =>{
     this.setState({initialValue : 0});

   }
 
   render(){
       return(
        <div className = 'myCard'>

            <button onClick={this.incrementButton}>+</button>
            <button onClick ={this.decrementButton}>-</button>
            <button onClick ={this.reset}>refresh</button>

        <div className = 'yourCard'>{this.state.initialValue}</div>

        </div>

        
       )


   }



}


export default Card;

