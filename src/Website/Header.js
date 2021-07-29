import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      // Userdetails : JSON.parse(localStorage.getItem("Userdetails")) == null ? [] : JSON.parse(localStorage.getItem("Userdetails")) ,
    }
  }

  async componentDidMount(){
    try {

      // if(!this.state.Userdetails.length){
      //   window.location.href = `/`
      // }
      
    } catch (error) {
      console.log(error);
    }
  }

  Logout = async()=>{

    localStorage.removeItem("Userdetails");

    window.location.href='/home'

  }

  render() {
    return (
      <React.Fragment>

<nav class="navbar navbar-expand-lg  navbar-dark bg-primary">
  <a class="navbar-brand" href="/">React</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/home">Home<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/location">Location</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/rule">Rule</a>
      </li>
     
      <li class="nav-item">
        <a class="nav-link" onClick={this.Logout} href="javascript:void(0)">Logout</a>
      </li>
    </ul>
    
  </div>
</nav>             
      </React.Fragment>
        
      
    );
  }
}

export default Header;