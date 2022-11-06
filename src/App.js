
import './App.css';
import Button from './Components/Button/Button';
import Card from './Components/Card/Card'

const { getData } = require("./db/db");

function App() {
  return (
      <>Im here !
          <Button title={'Add'} disable={false} type={'add'}/>
          <Button title={'Remove'} disable={false} type={'remove'}/>
          <Button title={'Checkout'} disable={false} type={'checkout'}/>
          <Card/>
      </>
  );
}

export default App;
