import { HashRouter, Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

const App = () => {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} />
    </HashRouter>
  );
};

export default App;
