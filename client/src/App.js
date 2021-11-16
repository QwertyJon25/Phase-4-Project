import './App.css';
import LoginPage from "./LoginPage"
import Header from "./Header"
import ExercisePage from "./ExercisePage"
import UserPage from "./UserPage"

function App() {
  return (
    <div className="App">
        <LoginPage />
        <Header />
        <ExercisePage />
        <UserPage />
    </div>
  );
}

export default App;
