import authImg from "./assets/bg.png";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Header } from "./components/Header";

function App() {
  return (
    <section className="auth">
      <div className="container">
        <div className="auth-info">
          <Header />
          <Form />
          <Footer />
        </div>

        <div className="auth-img">
          <img src={authImg} alt="BG" />
        </div>
      </div>
    </section>
  );
}

export default App;
