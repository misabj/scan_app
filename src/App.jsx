import React, { Component } from 'react';
import logo from './logo.svg';
// import DWTLogo from './icon-dwt.svg';
// import DynamsoftLogo from './logo-dynamsoft-white-159X39.svg';
import './App.css';
import DWT from './DynamsoftSDK.jsx';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {/* 
                    <a href="https://www.dynamsoft.com/Products/WebTWAIN_Overview.aspx" target="_blank" rel="noopener noreferrer">
                        <img src={DWTLogo} className="dwt-logo" alt="Logo firme" />
                    </a>
                    */}
                    <div style={{ width: "10px" }}></div>
                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" >
                        <img src={logo} className="App-logo" alt="logo" />
                    </a>
                    <div style={{ width: "770px" }}></div>
                    <a href="https://www.nikolicmilos.com" target="_blank" rel="noopener noreferrer" >
                        {/* <img src={DynamsoftLogo} className="ds-logo" alt="Logo" /> */}
                        <span className="ds-logo-text">Developed by Milos Nikolic</span>
                    </a>
                </header>
                <br />
                <DWT
                    features={[
                        "scan",
                        "camera",
                        "load",
                        "save",
                        "upload",
                        "barcode",
                        "uploader"
                    ]}
                />
            </div>
        );
    }
}

export default App;
