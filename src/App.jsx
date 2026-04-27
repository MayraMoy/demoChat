import ChatContainer from "./components/Chat/ChatContainer";
import "./styles/chat.css";
import Footer from "./components/footer";

function App() {
  return (
    <main className="app-wrapper">
      <ChatContainer />
      <Footer />
    </main>
  );
}

export default App;