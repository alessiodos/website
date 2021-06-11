import { Component } from 'react'
import gsap from 'gsap'

class SectionIntro extends Component {
    componentDidMount(){
        var IntroIn = gsap.timeline();
       

        //3.1s
        IntroIn.add( gsap.from("#intro-wrap", {duration: 2.5, delay: .5, ease: "slow(0.2, 0.4, false)", opacity: 0}) );
       
    }
    render () {
        return (
            <div className="section-wrap" id="intro-wrap">
                <div id="intro-title">
                    <p>
                        <span id="intro-titletxt-2">WELCOME TO </span>
                        <span id="intro-titletxt-1">CTENA</span>
                        <span id="intro-titletxt-3">, bitch.</span>
                    </p>
                </div>
                <div id="intro-subtitle">
                    <p>
                    The Ctena Protocol is a community driven, fair launched DeFi Token. Three simple functions
                    occur during each trade: Reflection, LP Acquisition, and Burn.
                    </p>
                </div>
                <div id="intro-buttons">
                <a href="https://t.me/catenaprotocol"><button>Telegram</button></a>
                <a href="https://exchange.pancakeswap.finance/#/swap"><button>Buy</button></a>
                </div>
       

            </div>
  
        )
    }
}

export default SectionIntro