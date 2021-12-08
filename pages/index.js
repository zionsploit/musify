import { Provider } from "react-redux";
import Layout from "../components/Layout";
import { store } from "./features/store";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Layout />
      </Provider>
    </>
  )
}
