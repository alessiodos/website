import '../App.css';
import Background from './Background'
import Header from './Header';
import SectionIntro from './SectionIntro';
import SectionFeatures from './SectionFeatures';
import SectionProjInfo from './SectionProjInfo';
import SectionAbout from './SectionAbout';
import Footer from './Footer';
import { Component } from 'react';
import Spinner from './Spinner';
import Cookies from 'js-cookie';
import Banner from './Banner';

class App extends Component {

  state= { start: true, scrollTop: 0, consentState: 0, consentInit: 0 }

  componentDidMount= () => {
    setTimeout(() => {
      this.setState({ start: false}) 
      }, 3100);
    
    window.addEventListener('scroll', this.showMe );
    if (!Cookies.get('ctena_cons'))
    {
      Cookies.remove('_ga');
      Cookies.remove('_ga_0RZ6RYM2N6');
      Cookies.set('ctena_cons','no', { expires: 365 });
      
      
    }
    else { 
      if(Cookies.get('ctena_cons') === 'no'){
        this.setState({ consentInit: 0})

      }
      else {
        this.setState({ consentInit: 1})
      }

      
    } 
  }

  gtag() {window.dataLayer.push(arguments);}

  stopCookie = () => {
    window.dataLayer = window.dataLayer || [];
    this.gtag('config', 'G-0RZ6RYM2N6', { 'send_page_view': false });
    this.setState({ consentState: 0}) 
    Cookies.remove('ctena_cons');
    Cookies.set('ctena_cons','no', { expires: 365 });

    if(document.getElementById("banner-wrap")!=null){
      document.getElementById("banner-wrap").style.animationName="bannerOut";    
      }      
  }
  startCookie = () => {
    window.dataLayer = window.dataLayer || [];
    this.gtag('js', new Date());
    this.gtag('config', 'G-0RZ6RYM2N6', { 'send_page_view': true });
    this.gtag('event', 'test', {'Prova': 'Ctena!'});
    this.setState({ consentState: 1});
    Cookies.remove('ctena_cons');
    Cookies.set('ctena_cons','yes', { expires: 365 });
    if(document.getElementById("banner-wrap")!=null){
    document.getElementById("banner-wrap").style.animationName="bannerOut";    
    }
  }
  manageConsent(x) {
    (x === 0)? this.startCookie() : this.stopCookie();
  }

  showMe = () => {

      
    var scroll = window.pageYOffset;
    this.setState({ scrollTop: window.pageYOffset});
    var sections = document.getElementsByClassName('section-wrap');

    for( let i=1; i < sections.length; i++) {

      if ( scroll > (sections[i].offsetTop - 300)) {
        sections[i].style.animationName = "sectIn";
      }
    }

  }

 
    
  

  render () {
    switch(this.state.start) {

      case true:
         return ( <Spinner />)
      
      case false:
        return (
          <div>
          <Background />
          <Header />
          <SectionIntro />
          <SectionFeatures />
          <SectionProjInfo />
          <SectionAbout />
          <Footer
            startc={this.startCookie}
            stopc={this.stopCookie} 
          />
          {(this.state.consentInit===0)? <Banner 
            startc={this.startCookie}
            stopc={this.stopCookie}
          />
          : null}
          </div>
        )
    }
   
  }
}
export default App;
