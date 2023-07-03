// import local components
import Block from "./components/Block";
import Paragraphs from "./components/Paragraphs";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
// Import the express library
import * as expressModule from "@uniwebcms/express"; // See README for more details: https://github.com/uniwebcms/express/blob/main/README.md
// import CSS
import "./index.css";

export default { ...expressModule, Block, Paragraphs, Footer, CTA };
