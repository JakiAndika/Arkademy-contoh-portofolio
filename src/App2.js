import React, { Component } from 'react';
import "./App2.css";


class App extends Component {
  render() {
    return (
      <div class="wrapper with-image"> 
        <div class="flex-wrapper">Sekolah <b class="color"> Unggul</b></div>
        <div class="description"><b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
        <div class="line">
          <div class="flex-form">
            Baca Selengkapnya
          </div>
        </div>
        <div class="opacity"></div>
        <div class="right">
          <i class="fa fa-chevron-right"></i>
        </div>
        <div class="left">
          <i class="fa fa-chevron-left"></i>
        </div>
      </div>
    )
  }
}
// function App() {
// return (

// );
//}

export default App;
