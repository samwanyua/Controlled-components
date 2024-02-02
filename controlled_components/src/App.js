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
    country: 'Egypt', //default value
    agree: false
  })

  const onChange = (e) => {
      // const value = e.target.value;
      const {value, name, type, checked} = e.target //same way but with some destructuring
      setForm((state) => ({
        ...state,
        [name]: type === 'checkbox' ? checked : value
      }))
  }

  const showData = () => {
    console.log('Form: ', form)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    showData()
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
          <hr />
          <label>
            Agree
            <input type="checkbox" name="agree" onChange={onChange} value={form.agree} />
          </label>
          <div>
            <button>Submit</button>
          </div>
          
          
        </form>
      </header>
    </div>
  );
}

export default App;
