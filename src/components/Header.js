import { Component } from 'react'
import Logo from './Logo'
import gsap from 'gsap'

class Header extends Component {

    state = {
        open: false
    }
    componentDidMount(){
        var headerDesIn = gsap.timeline();
        var headerMobIn = gsap.timeline();
        //3.1s
        headerDesIn.add( gsap.from("#header", {duration: 1,  ease: "slow(0.2, 0.2, false)", opacity: 0}) );
        headerMobIn.add( gsap.from("#header-mob", {duration: 1, ease: "slow(0.2, 0.2, false)", opacity: 0}) );
      }
    goTo = (where) => {
        const offs = document.getElementById(where).offsetTop;
        window.scrollTo(0, offs -130)

        
        document.getElementById('header-mob-list-box').style.animationName="navOut";
        const lines = document.getElementById('header-mob-nav-box').children;
        lines[0].style.animationName= "buttNavRestore1";
        lines[1].style.animationName= "buttNavRestore2";
        lines[2].style.animationName= "buttNavRestore3";
       this.setState( {
           open: false
       })
    }

    navHandler = (open) => {

        if (open === false) {
            document.getElementById('header-mob-list-box').style.animationName="navIn";
             const lines = document.getElementById('header-mob-nav-box').children;
             lines[0].style.animationName= "buttNavX1";
             lines[1].style.animationName= "buttNavX2";
             lines[2].style.animationName= "buttNavX3";
            this.setState( {
                open: true
            })
        }
        else {
            document.getElementById('header-mob-list-box').style.animationName="navOut";
            const lines = document.getElementById('header-mob-nav-box').children;
            lines[0].style.animationName= "buttNavRestore1";
            lines[1].style.animationName= "buttNavRestore2";
            lines[2].style.animationName= "buttNavRestore3";
           this.setState( {
               open: false
           })
           

        }
    }

    render () {
        return (
            <div id="header">
            <div id="header-box1">
            <div id="header-box2">
            <div className="header-item">
                <Logo /> 
            </div>
          
            <div className="header-item">
            <button onClick={ e => this.goTo('intro-wrap')}><p>Home</p></button>
                
            </div>
            <div className="header-item">
            <button onClick={ e => this.goTo('features-wrap-0')}><p>Token Features</p></button>

            </div>
            <div className="header-item">
            <button onClick={ e => this.goTo('info-wrap')}><p>Project Info</p></button>

            </div>
            <div className="header-item">
            <button onClick={ e => this.goTo('faq-wrap')}><p>About</p></button>

            </div>
            
            <div className="header-item">
            <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x8f4fc37bff97e6e7fd4355a5df76a486ac1e2e1c"><button><p>Buy</p></button></a>
            </div>
            </div>
            </div>
            <div id="header-mob">
                <div id="header-mob-logo-box">
                <Logo /> 
                </div>
            <div id="header-mob-nav-box" onClick={e => this.navHandler(this.state.open)}>
                
                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="603.000000pt" height="37.000000pt" viewBox="0 0 603.000000 37.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,37.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M61 356 c-13 -7 -30 -24 -37 -37 -17 -31 -19 -228 -2 -264 27 -59 -192 -55 2997 -55 2250 0 2936 3 2956 12 44 20 55 56 55 173 0 117 -11 153 -55 173 -40 19 -5880 17 -5914 -2z"/>
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="603.000000pt" height="37.000000pt" viewBox="0 0 603.000000 37.000000" preserveAspectRatio="xMidYMid meet">                 
                    <g transform="translate(0.000000,37.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M61 356 c-13 -7 -30 -24 -37 -37 -17 -31 -19 -228 -2 -264 27 -59 -192 -55 2997 -55 2250 0 2936 3 2956 12 44 20 55 56 55 173 0 117 -11 153 -55 173 -40 19 -5880 17 -5914 -2z"/>
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="603.000000pt" height="37.000000pt" viewBox="0 0 603.000000 37.000000" preserveAspectRatio="xMidYMid meet">                 

                    <g transform="translate(0.000000,37.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M61 356 c-13 -7 -30 -24 -37 -37 -17 -31 -19 -228 -2 -264 27 -59 -192 -55 2997 -55 2250 0 2936 3 2956 12 44 20 55 56 55 173 0 117 -11 153 -55 173 -40 19 -5880 17 -5914 -2z"/>
                    </g>
                </svg>
            </div>
            <div id="header-mob-list-box">
            <div className="header-mob-item">
            <button onClick={ e => this.goTo('intro-wrap')}><p>Home</p></button>
                
            </div>
            <div className="header-mob-item">
            <button onClick={ e => this.goTo('features-wrap-0')}><p>Token Features</p></button>

            </div>
            <div className="header-mob-item">
            <button onClick={ e => this.goTo('info-wrap')}><p>Project Info</p></button>

            </div>
            <div className="header-mob-item">
            <button onClick={ e => this.goTo('faq-wrap')}><p>About Catena</p></button>

            </div>
            
            <div className="header-mob-item">
            <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x8f4fc37bff97e6e7fd4355a5df76a486ac1e2e1c"><button><p>Buy</p></button>
            </a>
            </div>
            </div> 
            </div>
            </div>
  
        )
    }
}

export default Header
