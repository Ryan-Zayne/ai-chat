import { render } from "solid-js/web";
import App from "./App";
import "./tailwind.css";

const root = document.querySelector("#app");

// eslint-disable-next-line ts-eslint/no-non-null-assertion
render(() => <App />, root!);
