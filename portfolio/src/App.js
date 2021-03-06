import Main from './pages/Main'
import About from './pages/About'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact={true} component={Main} />
        <Route path="/about" component={About} />        
      </div>
    </BrowserRouter>
  );
}

export default App;
