import logo from './logo.svg';
import './App.css';
import { memo, useState } from 'react';
import React from 'react';

const settings = {
  REACT_APP_N_COMPONENTS: 5000,
  REACT_APP_N_STATES: 10

}

function NestedComponent() {
  return (
    <div></div>
  )
}


function createComponent() {
  return () => {
    const states = [];
    for (var i = 0; i < process.env.REACT_APP_N_STATES; i++) {
      const state = useState();
      states.push(state)
    }
    return (
      <>
        <div>
          A component
          <div>
            A component
            <div>
              A component
              <div>
                A component
              </div>
            </div>
          </div>
          <div>
            A component
          </div>
          <div>
            A component
          </div>
          <div>
            A component
          </div>
        </div>
        <div>
          A component
          <div>
            A component
            <div>
              A component
              <div>
                A component
              </div>
            </div>
          </div>
          <div>
            A component
          </div>
          <div>
            A component
          </div>
          <div>
            A component
          </div>
        </div>
        <div>
          A component
          <div>
            A component
            <div>
              A component
              <div>
                A component
              </div>
            </div>
          </div>
          <div>
            A component
          </div>
          <div>
            A component
          </div>
          <div>
            A component
          </div>
        </div>
        <div>
          A component
          <div>
            A component
            <div>
              A component
              <div>
                A component
              </div>
            </div>
          </div>
          <div>
            A component
          </div>
          <div>
            A component
          </div>
          <div>
            A component
          </div>
        </div>
        <div>
          A component
          <div>
            A component
            <div>
              A component
              <div>
                A component
              </div>
            </div>
          </div>
          <div>
            A component
          </div>
          <div>
            A component
          </div>
          <div>
            A component
          </div>
        </div>
        <NestedComponent />
      </>
    )
  }
}

function createMemoComponent() {
  return memo(() => {
    const states = [];
    for (var i = 0; i < settings.REACT_APP_N_STATES; i++) {
      const state = useState();
      states.push(state)
    }
    return (
      <>
        <div>
          A component
          <div>
            A component
            <div>
              A component
              <div>
                A component
              </div>
            </div>
          </div>
          <div>
            A component
          </div>
          <div>
            A component
          </div>
          <div>
            A component
          </div>
        </div>
        <div>
          A component
          <div>
            A component
            <div>
              A component
              <div>
                A component
              </div>
            </div>
          </div>
          <div>
            A component
          </div>
          <div>
            A component
          </div>
          <div>
            A component
          </div>
        </div>
        <div>
          A component
          <div>
            A component
            <div>
              A component
              <div>
                A component
              </div>
            </div>
          </div>
          <div>
            A component
          </div>
          <div>
            A component
          </div>
          <div>
            A component
          </div>
        </div>
        <div>
          A component
          <div>
            A component
            <div>
              A component
              <div>
                A component
              </div>
            </div>
          </div>
          <div>
            A component
          </div>
          <div>
            A component
          </div>
          <div>
            A component
          </div>
        </div>
        <div>
          A component
          <div>
            A component
            <div>
              A component
              <div>
                A component
              </div>
            </div>
          </div>
          <div>
            A component
          </div>
          <div>
            A component
          </div>
          <div>
            A component
          </div>
        </div>
        <NestedComponent />
      </>
    )
  })
}
console.log(`Running with settings:`)
console.log(`Number of components: ${settings.REACT_APP_N_COMPONENTS}`)
console.log(`Number of useState calls per component: ${settings.REACT_APP_N_STATES}`)

console.log(`Creating components (no memo).`)
const startNoMemo = performance.now();
var noMemoComponents = []
console.log(process.env)
for (var i = 0; i < parseInt(settings.REACT_APP_N_COMPONENTS); i++) {
  noMemoComponents.push(createComponent());
}
console.log(`Creating no memo components took ${performance.now() - startNoMemo}ms`)

const startMemo = performance.now();
var memoComponents = [];

console.log("Creating components (memo)")

for (var i = 0; i < settings.REACT_APP_N_COMPONENTS; i++) {
  memoComponents.push(createMemoComponent())

}

console.log(`Creating memo components took: ${performance.now() - startNoMemo}ms`)
console.log(process.env)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
