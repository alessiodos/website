import { Component } from 'react'
import airdrop from '../imgs/airdrop.png'

class AirDrop extends Component {
    componentDidMount () {
        document.getElementById("airdrop-wrap-txt").innerHTML=`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 300 300"  xml:space="preserve">
            <defs>
                <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
            </defs>
            <g>
                <text fill="#ffffff">
                    <textPath xlink:href="#circlePath">Join our  Airdrop! 
        Win 1,000,000,000,000 CTENA! </textPath>
                </text>
            </g>
        </svg>
        `;
    }
    goTo = () => {
        window.open("https://gleam.io/aHPA1/catena-airdrop", '_blank').focus();
    }
    openAirDrop = () => {
      var script = document.createElement("script");
      script.setAttribute("type","text/javascript");
      script.setAttribute("src","https://widget.gleamjs.io/e.js");
      script.setAttribute("async","true");
      document.body.appendChild(script);
      document.getElementById("airdrop-close").style.display="block";
    } 

    render () {
        return (
            
            <div id="airdrop-wrap" onClick={e => this.goTo()}>
            <div id="airdrop-wrap-txt"></div>
            <img src={airdrop}></img>
          
            </div>
            /*
            <div>
                <p onClick={e => this.props.close()} id="airdrop-close">×</p>
                <a className="e-widget" href="https://gleam.io/aHPA1/catena-airdrop" rel="nofollow">Catena Airdrop</a>  
                <button onClick={e => this.openAirDrop()}>airdrpope</button>
            </div>
            */
          )
    }
}

export default AirDrop            
