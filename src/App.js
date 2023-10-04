import './App.css';
import React from 'react';
import Header from './components/header';
import Time from './components/time';
import List from './components/list';
// Import Bootstrap CSS in your component or main CSS file
import 'bootstrap/dist/css/bootstrap.min.css';


//import { Container, Row, Col, Card } from 'reactstrap';
//768px

function App() {

  const [isCardView, setIsCardView] = React.useState(false);

  React.useEffect(() => {

    const checkScreenSize = () => {
      console.log(window.innerWidth);
      setIsCardView(window.innerWidth >= 768);
    };

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    }
  }, []);

  const screenStyle = {
    minHeight: isCardView ? '90vh': 'auto',
  };
  const screenCard = {
    height: isCardView ? '600px': 'auto',
    overflowY: isCardView ? 'auto': 'auto',
  }

  return (
          <div className="row justify-content-center align-items-center app-main" style ={screenStyle}>
            <div className={`col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 justify-content-center align-items-center app-card ${isCardView ? 'rounded border border-secondary pb-5 shadow-lg' : ''}`} style={screenCard}>
            
              <Header className="head" />
              <Time />
              <List />
            </div>
          </div>

      
      );
}

export default App;
