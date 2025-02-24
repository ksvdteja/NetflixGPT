import { Provider } from "react-redux";
import Body from "./components/Body";
import { Analytics } from "@vercel/analytics/react";
import appStore from "./utils/store";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
      <Analytics />
    </Provider>
  );
}

export default App;
