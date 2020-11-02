import '../App.css';
import logo from '../logo.svg';
import React from 'react';
import { Context, Controller, Route, State } from "@typeclient/core";
import { CustomState, TCustomState } from "./custom.state";
import { useReactiveState } from '@typeclient/react';

@Controller()
export class CustomController {
  @Route()
  @State(CustomState)
  Page(ctx: React.PropsWithRef<Context<TCustomState>>) {
    const count = useReactiveState(() => ctx.state.count);
    return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => ctx.state.count++}>count is: {count}</button>
        </p>
        <p>
          Edit <code>custom/custom.controller.tsx</code> and save to test HMR updates.
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
  }
}