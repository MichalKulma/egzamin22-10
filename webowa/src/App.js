import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import { useState } from 'react';


function App() {

  const [isChecked, setIsChecked] = useState(true)
  const [adress, setAdress] = useState("")
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [newAdress, setNewAdress] = useState("")
  const [newLogin, setNewLogin] = useState("")
  const [newPassword, setNewPassword] = useState("")

  const submit = ()=>{
    setAdress(newAdress)
    setLogin(newLogin)
    setPassword(newPassword)
  }

  return (
    <div>
      <h1>Menedżer haseł - wykonał 00000000000</h1>

      <Form style={{'display': 'flex', 'flexDirection': 'column', 'alignItems': 'start', 'gap': '10px', 'width': '50%'}}>
        <FormGroup>

        <Form.Label>Adres WWW:</Form.Label>
        <Form.Control onChange={(e)=>{setNewAdress(e.target.value)}} type='text' placeholder='Adres strony WWW'/>
        </FormGroup>
        <FormGroup>

        <Form.Label>Login:</Form.Label>
        <Form.Control onChange={(e)=>{setNewLogin(e.target.value)}} type='text' placeholder='Twój login'/>
        </FormGroup>

        <div style={{'display': 'flex', 'flexDirection': 'row', 'gap': '5px'}}>
        <FormGroup>
        <Form.Check checked={isChecked ? true : false} onChange={()=>{setIsChecked(!isChecked)}}/>
        <Form.Label>Wygeneruj hasło</Form.Label>
        </FormGroup>
        </div>

        <FormGroup>

        <Form.Label>Hasło:</Form.Label>
        <Form.Control onChange={(e)=>{setNewPassword(e.target.value)}} disabled={isChecked ? true : false} type='password'/>
        </FormGroup>
        <Button onClick={submit} className='btn-primary' variant='primary'>Zapisz</Button>
      </Form>
    <div>

    </div>

    <div>

      <p>Adres: {adress}</p>
      <p>Login: {login}</p>
      <p>{isChecked ? "Hasło generowane automatycznie" : "Hasło: " + password}</p>

    </div>

    </div>
  );
}

export default App;
