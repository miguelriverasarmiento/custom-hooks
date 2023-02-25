import ToggleComponent from "./useToggle/ToggleComponent";
import TimeoutComponent from "./useTimeout/TimeoutComponent"
import DebounceComponent from "./useDebounce/DebounceComponent"
import UpdateEffectComponent from "./useUpdateEffect/UpdateEffectComponent"
import ArrayComponent from "./useArray/ArrayComponent"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Five Custom Hooks</h1>

      <h3>Toggle</h3>
      <ToggleComponent />
      <hr />
      <h3>Timeout</h3>
      <TimeoutComponent />
      <hr />
      <h3>Debounce</h3>
      <DebounceComponent />
      <hr />
      <h3>UpdateEffect</h3>
      <UpdateEffectComponent />
      <hr />
      <h3>Array</h3>
      <ArrayComponent />
      <hr />
    </div>
  );
}

export default App;
