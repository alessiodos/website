import { Component } from 'react'
class SectionAbout extends Component {

    state= {
        content: [
            { 
                emoji: "🔍",
                name: "Explorer",
                link: ["https://explorer.bitquery.io/bsc/token/0x8f4fc37bff97e6e7fd4355a5df76a486ac1e2e1c"],
                linkTitle: ["Bitquery"],
                indications:""
            },
            { 
                emoji: "📃",
                name: "Contract",
                link: ["https://bscscan.com/address/0x8f4fc37bff97e6e7fd4355a5df76a486ac1e2e1c"],
                linkTitle: ["BscScan"],
                indications:""
            },
            { 
                emoji: "💲",
                name: "Token",
                link: ["https://bscscan.com/token/0x8f4fc37bff97e6e7fd4355a5df76a486ac1e2e1c"],
                linkTitle: ["BscScan"],
                indications:""
            },
            { 
                emoji: "💸",
                name: "Trade",
                link: ["https://dex.guru/token/0x8f4fc37bff97e6e7fd4355a5df76a486ac1e2e1c-bsc",
                        "https://exchange.pancakeswap.finance/#/swap"],
                        linkTitle: ["dex.guru","PancakeSwap"],
                indications:`Add address "0x8f4fc37bff97e6e7fd4355a5df76a486ac1e2e1c" to "Select a token" and set SLIPPAGE 12% in the options.`
            },
            { 
                emoji: "🧫",
                name: "Liquidity pool",
                link: ["https://exchange.pancakeswap.finance/#/add/BNB"],
                linkTitle: ["PancakeSwap"],
                indications: `Add  address "0x8f4fc37bff97e6e7fd4355a5df76a486ac1e2e1c" to "Select a currency".`
            },
            { 
                emoji: "📈",
                name: "Chart",
                link: ["https://bsc.tools/pair-explorer/0xbce2a84ced47b7f29c5a29e4d158294772cba272",
                        "https://dex.guru/token/0x8f4fc37bff97e6e7fd4355a5df76a486ac1e2e1c-bsc",
                        "https://charts.bogged.finance/?token=0x8f4fc37BFf97e6e7fD4355a5df76A486Ac1e2E1c",
                        "https://poocoin.app/tokens/0x8f4fc37bff97e6e7fd4355a5df76a486ac1e2e1c"],
                        linkTitle: ["BSC.TOOLS","DexGuru","BoggedFinance","PooCoin"],
                indications:""
            },
            { 
                emoji: "🔥",
                name: "Token burn",
                link: ["https://bscscan.com/tx/0x7352ef03343d1a737f20674e7434eb85af4b1f666717288e9e866269a193a1c1"],
                linkTitle: ["BscScan"],
                indications:""
            },
            { 
                emoji: "🔒",
                name: "Liquidity lock",
                link: ["https://app.unicrypt.network/amm/pancake-v2/pair/0xbcE2a84CED47b7f29c5a29e4d158294772cbA272"],
                linkTitle: ["UniCrypt"],
                indications:""
            },
            { 
                emoji: "🚀",
                name: "Roadmap",
                link: ["https://www.notion.so/7397a1c01e3b40d2889cba833a35f4fa?v=682b420b3c344f89a126c2df86506360"],
                linkTitle: ["Notion"],
                indications:""
            },
            { 
                emoji: "🧾",
                name: "Listing",
                link: ["https://www.livecoinwatch.com/price/Catena-CTENA",
                        "https://coinsniper.net/coin/1015",
                        "https://coincodex.com/crypto/catena/",
                        "https://freshcoins.io/AQ00T48feZm2pS2mn96t/coin/catena/ctena",
                        "https://coinvote.cc/coin/CATENA",
                        "https://coinhunt.cc/coin/2135751361",
                        "https://rival.finance/0x8f4fc37bff97e6e7fd4355a5df76a486ac1e2e1c",
                        "https://cointoplist.net/coin/catena"

                    ],
                linkTitle: ["LiveCoinWatch","CoinSniper","CoinCodex","FreshCoins","CoinVote", "CoinHunt","Rival","CoinTopList"],
                indications:""
            },
            { 
                emoji: "📢",
                name: "Proposal",
                link: ["https://catenaprotocol.kampsite.co/"],
                linkTitle: ["Kampsite"],
                indications:""
            },
        ]
    }

     copyToClipboard = (e) => {
        const el = document.createElement('textarea');
        el.value = "0x8f4fc37bff97e6e7fd4355a5df76a486ac1e2e1c";
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        e.target.innerHTML=" Copied! :)";
        setTimeout(() => {
            e.target.innerHTML=" Copy Address";  
        }, 3000);
      };
      
    render () {
        return (
            <div className="section-wrap" id="faq-wrap">
                <p id="faq-title">ABOUT</p>
                { this.state.content.map( (box, index) => (
                    <div key={index} className="question-box">
                        <p className="question-q"><span className="question-q1">{box.emoji}</span>
                            <span className="question-q2">{box.name}</span>
                            {(box.indications === "")? null : <span class="copy-address-button" onClick={e => this.copyToClipboard(e)}> Copy Address </span>}
                        </p>
                        <div  className="question-boxForButtons">
                            {box.link.map( (link, index) => <a href={link} ><button key={index}> {box.linkTitle[index]}</button> </a>)}
                        </div>
                        {(box.indications === "")? null : <p key={index} className="question-indications"> {box.indications}</p>}
                    </div>
                ))
                }
                

                

          

            </div>
  
        )
    }
}

export default SectionAbout