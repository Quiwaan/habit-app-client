import React, { Component } from 'react';

class Habit extends Component {
  render() {
    if(this.props.user){
      return (
          <div>
            {/*<h2>{this.props.habit.name}</h2>*/}
            <p>Display habit info, the completions -/+ button, and some graphical display here! This info is needed as props.</p>
            
          </div>
        );
    }
    return(
      <div>
        <p>This is a habit page. You must be logged in to see it.</p>
        <p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign up</a>?</p>
      </div>
      );
  }
}

export default Habit;