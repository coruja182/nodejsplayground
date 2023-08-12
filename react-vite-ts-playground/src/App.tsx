import { RouterProvider } from "react-router";
import router from "./routes";


const App = (): React.ReactElement => {
    return (<RouterProvider router={router} />);
}

export default App;
