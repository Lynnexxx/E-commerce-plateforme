import NavBar from './Components/Navbar/NavBar'
// import Log from './Components/Log/Log';

import './Scss/style.scss';
import Footer from './Components/Footer/Footer';
import CradItem from './Components/CardItem/CradItem';
// import HomeCard from './Components/HomeCard/HomeCard';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Log/> */}
      {/* <HomeCard/> */}
      <CradItem/>
      <Footer/>
    </div>
  );
}

export default App;
