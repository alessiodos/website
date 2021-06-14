import { Component } from 'react';
import gsap from 'gsap'

class Spinner extends Component {
    
      
      componentDidMount(){
        var holdersSVG = gsap.timeline({ repeat: -1 });
        var holdersG = gsap.timeline({ repeat: -1 });
        var chainSVG = gsap.timeline({ repeat: -1 });
        var chainG = gsap.timeline({ repeat: -1 });
        var distributionSVG = gsap.timeline({ repeat: -1 });
        var distributionG = gsap.timeline({ repeat: -1 });

        //3.1s
        holdersSVG.add( gsap.to("#slogan-logo-wrap svg:nth-child(1)", {duration: .3, opacity: 1}) );
        holdersSVG.add( gsap.to("#slogan-logo-wrap svg:nth-child(1)", {duration: .6, ease: "expo.out", rotation: 0}) );
        holdersSVG.add( gsap.to("#slogan-logo-wrap svg:nth-child(1)", {duration: 2.2, opacity:1}) );

        holdersG.add( gsap.to("#slogan-logo-wrap svg:nth-child(1) g", {duration: .5, delay: .3, fill: "rgba(237,10,139,1)"}) );
        holdersG.add( gsap.to("#slogan-logo-wrap svg:nth-child(1) g", {duration: .5, delay: .3, fill: "rgba(237,10,139, .3)"}) );
        holdersG.add( gsap.to("#slogan-logo-wrap svg:nth-child(1) g", {duration: .6, delay: .3, fill: "rgba(237,10,139, 0)"}) );
        holdersG.add( gsap.to("#slogan-logo-wrap svg:nth-child(1) g", {duration: .6, fill: "rgba(237,10,139, .3)"}) );

        chainSVG.add( gsap.to("#slogan-logo-wrap svg:nth-child(2)", {duration: .3, delay: 1.1,  opacity: 1}) );
        chainSVG.add( gsap.to("#slogan-logo-wrap svg:nth-child(2)", {duration: .3, delay: 1.4, opacity: 0}) );

        chainG.add( gsap.to("#slogan-logo-wrap svg:nth-child(2) g", {duration: .6,  delay: .6, fill: "rgba(237,10,139,1)"}) );
        chainG.add( gsap.to("#slogan-logo-wrap svg:nth-child(2) g", {duration: .5,  delay: 1.4, fill: "rgba(44, 42, 42, 0.618)"}) );
        
        distributionSVG.add( gsap.to("#slogan-logo-wrap svg:nth-child(3)", {duration: 1, delay: 1.5, opacity: 1}) );
        distributionSVG.add( gsap.to("#slogan-logo-wrap svg:nth-child(3)", {duration: .3, delay: .3, opacity: 0}) );
        
        distributionG.add( gsap.to("#slogan-logo-wrap svg:nth-child(3) g", {duration: .3, delay: 2.5,  fill: "rgba(44, 42, 42, 0.618)"}) );
        distributionG.add( gsap.to("#slogan-logo-wrap svg:nth-child(3) g", {duration: .3, opacity:1}) );

      }
      

  

  render () {
    
        return (
            <div>
                <div id="slogan-wrap">
                <div id="slogan-logo-wrap">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="207.000000pt" height="207.000000pt" viewBox="0 0 207.000000 207.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,207.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M938 1763 l-97 -98 97 -100 97 -100 97 100 98 101 -98 97 -97 97 -97 -97z"/>
                <path d="M307 1132 l-97 -97 98 -98 97 -97 98 98 97 97 -98 98 -97 97 -98 -98z"/>
                <path d="M1568 1133 l-97 -98 98 -96 99 -97 96 97 96 96 -98 98 -97 97 -97 -97z"/>
                <path d="M937 502 l-97 -97 98 -98 97 -97 98 98 97 97 -98 98 -97 97 -98 -98z"/>
                </g>
            </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="207.000000pt" height="207.000000pt" viewBox="0 0 207.000000 207.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,207.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M620 1445 l-215 -215 98 -97 97 -98 217 217 218 218 -95 95 c-52 52 -97 95 -100 95 -3 0 -102 -97 -220 -215z"/>
                <path d="M1130 1565 l-95 -95 218 -218 217 -217 97 98 98 97 -215 215 c-118 118 -217 215 -220 215 -3 0 -48 -43 -100 -95z"/>
                <path d="M500 935 l-95 -96 211 -209 c116 -116 217 -210 224 -210 7 0 54 40 104 90 l91 90 -215 215 c-118 118 -217 215 -220 215 -3 0 -48 -43 -100 -95z"/>
                <path d="M1250 815 l-215 -215 98 -97 97 -98 215 215 c118 118 215 218 215 222 0 8 -181 188 -189 188 -4 0 -103 -97 -221 -215z"/>
                </g>
            </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="207.000000pt" height="207.000000pt" viewBox="0 0 207.000000 207.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,207.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M432 2050 c-257 -69 -432 -296 -432 -560 0 -143 57 -289 154 -395 l55 -60 97 97 98 97 -43 46 c-65 71 -86 124 -85 220 0 66 5 89 26 130 58 111 154 170 278 170 90 0 146 -23 215 -86 l46 -43 97 98 97 97 -45 40 c-124 111 -239 160 -390 166 -72 2 -113 -2 -168 -17z"/>
                <path d="M1356 2054 c-86 -21 -172 -66 -248 -129 -38 -31 -68 -60 -68 -63 0 -4 43 -50 94 -101 l95 -95 46 43 c69 63 125 86 215 86 88 0 145 -22 210 -81 67 -60 94 -123 94 -219 1 -96 -20 -149 -85 -220 l-43 -46 98 -97 97 -97 55 60 c97 106 154 252 154 395 0 207 -121 415 -297 508 -125 66 -286 88 -417 56z"/>
                <path d="M147 964 c-71 -86 -103 -145 -127 -240 -52 -204 3 -408 150 -554 219 -220 574 -227 805 -16 l60 55 -97 97 -97 98 -44 -41 c-76 -70 -119 -88 -217 -88 -70 0 -93 4 -130 24 -61 32 -116 86 -148 146 -22 42 -27 63 -27 130 0 96 21 150 86 220 l43 46 -95 95 c-51 51 -97 94 -101 94 -3 0 -31 -30 -61 -66z"/>
                <path d="M1761 936 l-95 -95 43 -46 c65 -70 86 -124 86 -220 0 -67 -5 -88 -27 -130 -32 -60 -87 -114 -148 -146 -37 -20 -60 -24 -130 -24 -98 0 -141 18 -217 88 l-44 41 -97 -98 -97 -97 60 -55 c231 -211 584 -204 806 16 106 105 169 257 169 406 0 84 -29 207 -66 274 -27 50 -130 180 -142 180 -4 0 -50 -43 -101 -94z"/>
                </g>
            </svg>
                  
                </div>

                <div id="slogan-txt-wrap">
                    <p>CTENA</p>
                </div>
                </div>
            </div>
        )
    
   
  }
}
export default Spinner
