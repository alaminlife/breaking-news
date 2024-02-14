
import './App.css';
import { Button,} from 'react-bootstrap';
import Card from './Components/News/News';
import TopHeadline from './Components/TopHeaddline/TopHeadline';

function App() {
  return (
    <div className="App">
      <h4>Reacat bootstrap</h4>
      <Button variant="primary">Primary</Button>
      <TopHeadline></TopHeadline>
      <Card></Card>
 
    </div>
  );
}

export default App;
