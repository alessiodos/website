import { Component } from 'react'

class SectionFeatures extends Component {


    render () {
        return (
            <div className="section-wrap" id="features-wrap-0">
            <p id="features-title">FEATURES</p>
            <div  id="features-wrap">
                <div id="features-row1">
                    <div className="features-item" id="features-item1">
                        <div className="features-item-box">
                            <p className="features-item-logo" id="feat-logo-1">
                            📒
                            </p>
                            <p className="features-item-title">4% Added to liquidity</p>
                            <p className="features-item-description">Auto added to the liquidity pool to locked forever when selling.</p>
                        
                        </div>
                    </div>
                    <div className="features-item" id="features-item2">
                        <div className="features-item-box">
                            <p className="features-item-logo" id="feat-logo-2">
                            ➗
                            </p>
                            <p className="features-item-title">4% Auto distributed to all holders</p>
                            <p className="features-item-description">I will add 0.1 BNB and all the left 49.5% total supply to the pool.</p>
                        </div>
                    </div>
                </div>
                <div id="features-row2">
                    <div className="features-item" id="features-item3">
                        <div className="features-item-box">
                            <p className="features-item-logo" id="feat-logo-3">
                            🔥
                            </p>
                            <p className="features-item-title">45% Burned in the Blackhole</p>
                            <p className="features-item-description">Big black hole + 3% fee = a strong holder gets a valuable reward.</p>
                        </div>
                    </div>
                    <div className="features-item" id="features-item4">
                        <div className="features-item-box">
                            <p className="features-item-logo" id="feat-logo-4">
                            🧍🧍‍♀️🧍‍♂️
                            </p>
                            <p className="features-item-title">100% Community driven</p>
                            <p className="features-item-description">To keep a healthy and consistent grow within our community.</p>
                        </div>
                    </div>
                </div>
            </div>

            </div>
  
        )
    }
}

export default SectionFeatures