import './App.css';
import { useState } from 'react'

function App() {

  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')

  //Instead of creating state for each form element
  const [form, setForm] = useState({
    name: '',
    email: '',
    description: '',
    country: 'Egypt' //default value
  })

  const onChange = (e) => {
      // const value = e.target.value;
      const {value, name} = e.target //same way but with some destructuring
      setForm((state) => ({
        ...state,
        [name]: value
      }))
  }

  const showData = () => {
    console.log('Form: ', form)
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
          <label >
            Name:
            <input 
              name="name" 
              value={form.name}
              onChange={onChange}
            />
          </label>
          <hr />
          <label >
            Email:
            <input 
              name="email" 
              value={form.email}
              onChange={onChange}
            />
          </label>
          <hr />
          <label >
            Description:
            <textarea 
              name="description" 
              value={form.description}
              onChange={onChange}
            />
          </label>
          <hr />
          <label > Country
            <select name="country" onClick={onChange} value={form.country} > 
              <option value="Kenya">Kenya</option>
              <option value="Egypt">Egypt</option>
              <option value="South Africa">South Africa</option>
            </select>
          </label>
          <div>
            <button onClick={showData}>Submit</button>
          </div>
          
          
        </form>
      </header>
    </div>
  );
}

export default App;
