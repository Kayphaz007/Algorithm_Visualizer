import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./HomeComponents/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Switch>
        <Route path="/pathfinder" component={Pathfinder} />
        <Route path="/prime" component={Seive} />
        <Route path="/sort" component={Sort} />
        <Route path="/nqueen" component={Queen} />
        <Route path="/convexhull" component={ConvexHull} />
        <Route path="/binarysearch" component={BinarySearch} />
        <Route path="/recursivesort" component={RecursiveSort} />
        <Route path="/turing" component={TuringMachine} />
        <Route path="/15puzzle" component={Puzzle} />
        <Route path="/graph" component={Graph} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
