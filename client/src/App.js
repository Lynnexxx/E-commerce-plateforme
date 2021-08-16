import NavBar from './Components/Navbar/NavBar'
import Log from './Components/Log/Log';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {item} from './Components/CardItem/Items';

import './Scss/style.scss';
import Footer from './Components/Footer/Footer';
import CradItem from './Components/CardItem/CradItem';
import HomeCard from './Components/HomeCard/HomeCard';

function App() {
  let path =window.location.href
console.log(path);
  return (
    <div className="App">
      

      <Router>

        <NavBar/>
        <Route path="/log">
          <Log/>
        </Route>

        <Route path="/home">
          <HomeCard/>
        </Route>

        <Route exact path="/">
          <HomeCard/>
        </Route>

        {item.map((item, index)=>{
          return(
            <Route exact path={`/article/${index+1}`}>
              <CradItem item={item}/>
            </Route>
          )
        })}

<Footer/>

      </Router>

      

    </div>
  );
}
export default App;
