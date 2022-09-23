import React, { Component } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators, State } from "./state"
import GlobalStyle from './styles/global'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './components/Home';
import { Outlet } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <>
        <GlobalStyle />
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  }
}

export default App;
