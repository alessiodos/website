import { Component } from 'react'
class SectionProjInfo extends Component {


    render () {
        return (
            <div className="section-wrap" id="info-wrap">
                <p id="info-title">PROJECT INFO</p>
                <div id="info-txt">
                    <p> <span>CTENA</span> is a token on Binance Smart Chain boasting a number of impressive features. 
                        It is the first token with a Black Hole design that exponentially cuts the total supply in circulation by massive amounts. 
                        CTENA combines this with an innovative Auto-Liquidity feature that increases liquidity of the token rapidly. And finally, 
                        CTENA has massive decentralization on a scale rarely seen in other tokens. Combine these three together and you get a power house token out of the hands of anyone, except the community as a whole.
                        The Black Hole owned over 45% of supply at launch. The Black Hole counts as one of the 
                        wallet holders that 4% of transactions are distributed to. This results in exponential growth of 
                        the black hole and exponential burn of the token supply. At the time of this writing, the black hole 
                        has already grown to 46% percent ownership of the total supply.
                    </p>
                    <p>
                       The CTENA team reserves the possibility to invest in DeFi projects, so to increase the token's value.</p>
                </div>
                <div id="info-box2">
                   

                <div id="info-box2-1">
                
                    <div id="info-col1">
                        <p id="info-subtitle">Tokenomics</p>

                        <div id="info-progress-wrap">
                            <p>Total supply</p>
                            <div className="progress-item">
                            <div className="progress-fill" id="progress-fill-1"></div>
                            <p className="progress-txt" id="progress-txt-1">1,000,000,000,000,000</p>
                        </div>
                            <p>Blackhole</p>
                            <div className="progress-item">
                            <div className="progress-fill" id="progress-fill-2"></div>
                            <p className="progress-txt">45%</p>
                        </div>
                            <p>Liquidity</p>
                            <div className="progress-item">
                            <div className="progress-fill" id="progress-fill-3"></div>
                            <p className="progress-txt">50%</p>
                        </div>
                            
                            <p>Team</p>
                            <div className="progress-item">
                            <div className="progress-fill" id="progress-fill-4"></div>
                            <p className="progress-txt">5%</p>
                        </div>
                        </div>
                    </div>
                    
                    
                    
                    </div>

                </div>
                </div>



  
        )
    }
}

export default SectionProjInfo