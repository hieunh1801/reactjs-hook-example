import React from 'react';
import logo from './logo.svg';
import './App.css';

const useGetInfoUser = () => {
  return {
    user
  }
}

const useGetData = () => {
  const { user } = useGetInfoUser()
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    window.addEventListener(event)
    return () => {
      window.removeEventListener(event)
    }
  }, [user])
  return {
    data,
    setData
  }
}

function App(props) {

  const [name, setName] = React.useState(() => callback)
  const [page, setPage] = React.useState(0)
  const { data } = useGetData(user)

  React.useEffect(() => {
    document.title = "Hello World"
  }, [])

  React.useEffect(() => {
    window.api(page) // >name=props.name
  }, [page, props.name])



  function handleLoadmore() {
    setPage(page + 1)
  }

  // data

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{name}</h1>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleLoadmore}>load more</button>
      </header>
    </div>
  );
}

export default React.memo(App);
