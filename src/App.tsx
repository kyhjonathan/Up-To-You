import "./App.css";
import ChooseFood from "./assets/components/ChooseFood";

function App() {
  return (
    <>
      <div>
        <h1 className="title">Hello</h1>
        <p style={{ color: "blue" }}>What you want eat?</p>
        <p>
          <span style={{ color: "red" }}>I don't know </span>
          <span style={{ fontSize: "100px", fontWeight: "bold" }}>
            UP TO YOU
          </span>
        </p>
      </div>
      <ChooseFood position="left" />
      <ChooseFood position="right" />
    </>
  );
}

export default App;
