import "./App.css";
import {Button} from "./stories/Button"
function App() {
	return (
		<div className="App">
			<Button primary={true} >Click Me!</Button>
			<h1 className={"text-3xl text-red-300 font-bold underline"}>Hello world!</h1>
		</div>
	);
}

export default App;
