import { Component } from 'react'

class Banner extends Component {


    render () {
        return (
            <div id="banner-wrap">
                <p> Hi!👋 <br></br><br></br>
                    We use cookies to analyze our traffic. We also share information about how 
                    you use our site with our partners who deal with web data analysis, advertising and social media, who may
                    combine them with other information that you have provided to them or that they have collected from your
                    use of their services. For more detailed information click 
                    <span onClick={e => {
                        document.getElementById("cooki-cont0").style.animationName="policyIn";
                        document.getElementById("banner-wrap").style.animationName="bannerOut";
                        
                    }}> here</span>. </p>
                <div id="banner-buttons-wrap">
                    <button  onClick={e => this.props.stopc()}> Deny</button>
                    <button  onClick={e => this.props.startc()}> Allow</button>
                </div>
            </div>
        
        )
    }
}

export default Banner