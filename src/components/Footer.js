import { Component } from 'react'
import CookiePolicy from './CookiePolicy'
import insta from '../imgs/instagram.png'
import twitter from '../imgs/twitter.png'
import github from '../imgs/github.png'
import facebook from '../imgs/facebook.png'
import telegram from '../imgs/telegram.png'

class Footer extends Component {

    showPolicy = () => {
        document.getElementById("cooki-cont0").style.animationName="policyIn";

    }
    hidePolicy = () => {
        document.getElementById("cooki-cont0").style.animationName="policyOut";

    }
    render () {
        return (
            <div id="footer-wrap">
            <div id="footer-svg-wrap">            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="315.000000pt" height="316.000000pt" viewBox="0 0 315.000000 316.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,316.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
<path d="M1450 3149 c-384 -28 -715 -181 -991 -458 -228 -229 -360 -475 -430 -801 -33 -154 -34 -456 -1 -617 98 -485 400 -886 832 -1103 442 -222 985 -223 1425 -3 438 220 731 603 836 1093 31 141 34 463 6 610 -77 412 -323 788 -665 1019 -204 138 -488 239 -717 256 -163 12 -192 12 -295 4z m-215 -504 c93 -24 194 -78 265 -144 l65 -60 -97 -97 -97 -98 -46 43 c-69 64 -124 84 -225 85 -78 1 -92 -2 -154 -33 -107 -52 -165 -151 -166 -282 0 -95 24 -161 84 -226 l49 -54 -96 -97 -97 -96 -40 39 c-100 97 -161 220 -182 365 -15 101 7 222 60 330 72 149 244 287 404 326 73 17 202 17 273 -1z m954 0 c105 -25 196 -79 286 -170 92 -92 136 -166 165 -281 49 -191 -4 -390 -142 -538 l-63 -67 -94 95 -94 94 36 43 c61 71 81 123 85 219 6 148 -46 243 -165 302 -57 28 -77 33 -142 33 -100 0 -166 -24 -231 -82 l-52 -46 -96 96 -96 96 29 32 c72 75 191 145 300 174 67 18 196 18 274 0z m-839 -830 c-121 -121 -220 -227 -220 -236 0 -9 97 -115 215 -235 118 -120 215 -221 215 -224 0 -3 -42 -47 -93 -98 l-92 -92 -223 223 -222 222 90 90 c54 53 90 98 90 110 0 11 -38 57 -92 112 l-93 93 225 225 225 225 97 -97 98 -98 -220 -220z m655 185 l220 -220 -98 -97 -97 -98 -222 222 -223 223 95 95 c52 52 97 95 100 95 3 0 104 -99 225 -220z m-1140 -672 c-114 -127 -114 -339 -1 -452 68 -69 125 -90 236 -90 109 0 157 17 233 84 l44 39 94 -95 93 -94 -44 -45 c-66 -67 -143 -115 -240 -148 -161 -56 -351 -33 -496 61 -86 56 -185 167 -228 254 -39 78 -66 184 -66 258 0 131 69 300 166 408 l57 64 98 -98 98 -97 -44 -49z m1135 -173 l-225 -225 -95 95 -95 95 225 225 225 225 95 -95 95 -95 -225 -225z m575 244 c59 -101 80 -178 80 -299 0 -76 -5 -120 -19 -160 -34 -102 -88 -191 -156 -259 -104 -104 -212 -159 -358 -181 -154 -24 -344 40 -473 159 l-64 59 94 95 93 95 64 -49 c81 -61 152 -83 245 -77 118 9 205 66 261 171 20 36 23 57 23 147 0 97 -2 109 -29 157 -15 28 -44 66 -62 84 l-34 33 97 99 98 98 52 -55 c29 -31 68 -83 88 -117z"/>
</g>
</svg>
</div>

            <div id="footer-button">
               <p> Stay connected with us!</p> 
            </div>
            <div id="social-wrap">
            <a href="https://www.instagram.com/catena_protocol/"><img src={insta}></img></a>
            <a href="https://twitter.com/CatenaProtocol"><img src={twitter}></img></a>
            <a href="https://github.com/catenaprotocol"><img src={github}></img></a>
            <a href="https://www.facebook.com/catenaprotocol"><img src={facebook}></img></a>
            <a href="https://t.me/catenaprotocol"><img src={telegram}></img></a>

            </div>
            <div id="mail-wrap">
                <p>📫 info@ctena.finance</p>
            </div>
            <button onClick={this.showPolicy} id="cookiepol-button">cookie policy</button>
            
            <div id="footer-foot">
                <p> made with 💓</p>
            </div>
            <CookiePolicy
                startc={this.props.startc}
                stopc={this.props.stopc}
                close={this.hidePolicy}
             />
            </div>
        )
    }
}

export default Footer