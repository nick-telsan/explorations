/* @refresh reload */
import { render } from "solid-js/web";
import "@fontsource/audiowide";

import "./index.css";
import { Providers } from "./core/providers";

const root = document.getElementById("root");

render(() => <Providers />, root!);
