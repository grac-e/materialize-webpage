import handlebars from "vite-plugin-handlebars";
import data from "./data.json";

export default {
  base : '/responsive_webpages/',
    plugins: [handlebars({
      context : data
    })],
  };