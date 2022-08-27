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
var firstNonMemoComponentRender = 0;
var firstMemoComponentRender = 0;


function createComponent() {

  return ({index}) => {
    if(index == 0) firstNonMemoComponentRender = performance.now();
    if(index == settings.REACT_APP_N_COMPONENTS - 1) {
      console.log(`Rendering non memo components took: ${performance.now() - firstNonMemoComponentRender}ms`)
    }
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
  return memo(({index}) => {
    if(index == 0) firstMemoComponentRender = performance.now();
    if(index === settings.REACT_APP_N_COMPONENTS - 1) {
      console.log(`Rendering memo components took: ${performance.now() - firstMemoComponentRender}ms`)
    }
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

console.log(`Creating memo components took: ${performance.now() - startMemo}ms`)
console.log(process.env)

function App() {
  return (
    <div className="App">
     {noMemoComponents.map((C, i)=>(<C index={i}/>))}
     {memoComponents.map((C, i)=>(<C index={i}/>))}
    </div>
  );
}

export default App;
