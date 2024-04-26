import { useEffect, useState } from 'react';

import axios from 'axios';  // 引入axios

import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input';
import './assets/all.scss';

function App() {
  const [text, setText] = useState('')

  const onChangeHandler = (e) => {
    setText(e.target.value)
  }

  useEffect(() => {
    (async () => {
      console.log(process.env.REACT_APP_PATH);
      const path = process.env.REACT_APP_PATH;
      const result = await axios.get(path)
      console.log(result)
    })()
  })


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React App</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum aspernatur accusantium culpa ipsum, deleniti cum optio sunt reprehenderit magnam nam. Voluptas, temporibus cupiditate nobis consequatur nesciunt earum perspiciatis consequuntur, dignissimos rerum adipisci ex vitae reprehenderit amet dolore asperiores eum, atque architecto eaque tempore veritatis explicabo voluptatibus sunt enim? Quo, corrupti.</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* 練習片段 */}
        {text}
        <Input id="sampleText" text="這是Input" value={text} onChangeHandler={onChangeHandler} />

        <button type="button" className="btn btn-primary">Primary</button>

      </header>
    </div>
  );
}

export default App;
