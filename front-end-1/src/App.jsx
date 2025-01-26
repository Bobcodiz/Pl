import {Provider} from "react-redux";
import store from "./assets/redux/store.jsx";

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
        <Provider store={store}>
            <App/>
        </Provider>
    </>
  )
}

export default App
