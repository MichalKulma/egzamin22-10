import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import { useState } from 'react';


function App() {

  const [isChecked, setIsChecked] = useState(true)

  return (
    <div>
      <h1>Menedżer haseł - wykonał 00000000000</h1>

      <Form style={{'display': 'flex', 'flexDirection': 'column', 'alignItems': 'start', 'gap': '10px', 'width': '50%'}}>
        <FormGroup>

        <Form.Label>Adres WWW:</Form.Label>
        <Form.Control type='text' placeholder='Adres strony WWW'/>
        </FormGroup>
        <FormGroup>

        <Form.Label>Login:</Form.Label>
        <Form.Control type='text' placeholder='Twój login'/>
        </FormGroup>

        <div style={{'display': 'flex', 'flexDirection': 'row', 'gap': '5px'}}>
        <FormGroup>
        <Form.Check checked={isChecked ? true : false} onClick={()=>{setIsChecked(!isChecked)}}/>
        <Form.Label>Wygeneruj hasło</Form.Label>
        </FormGroup>
        </div>

        <FormGroup>

        <Form.Label>Hasło:</Form.Label>
        <Form.Control disabled={isChecked ? true : false} type='password'/>
        </FormGroup>
        <Button className='btn-primary' variant='primary' type='submit'>Zapisz</Button>
      </Form>
    <div>

    </div>

    <div>

    </div>

    </div>
  );
}

export default App;
