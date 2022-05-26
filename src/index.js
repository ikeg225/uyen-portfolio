import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Intro from './components/Intro';
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
const app = <div><Intro /><div style={{maxWidth: "1400px"}}><App /></div></div>;
if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}