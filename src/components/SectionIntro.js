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
                        <span id="intro-titletxt-1">CTENA.</span>
                        <span id="intro-titletxt-3">(bitch!)</span>
                    </p>
                </div>
                <div id="intro-subtitle">
                    <p>
                    CATENA Protocol is a community driven, fair launched, DeFi token focused on offering advanced 
                    DeFi tools and products to meet the growing user demand for tamper-proof, high-yield DeFi products. 
                    $CTENA is a token on Binance Smart Chain boasting a number of impressive features.
                    Three simple functions occur during each trade: Reflection, LP Acquisition, and Burn.
                    </p>
                </div>
                <div id="intro-buttons">
                    <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x8f4fc37bff97e6e7fd4355a5df76a486ac1e2e1c"><button>Buy</button></a>
                    <a href="https://t.me/catenaprotocol"><button>Telegram</button></a>
                    <a href="https://twitter.com/CatenaProtocol"><button>Twitter</button></a>
                    <a href="https://www.notion.so/7397a1c01e3b40d2889cba833a35f4fa?v=682b420b3c344f89a126c2df86506360"><button>Roadmap</button></a>
                    <a href="https://catenaprotocol.medium.com/"><button>News</button></a>
                </div>
       

            </div>
  
        )
    }
}

export default SectionIntro
