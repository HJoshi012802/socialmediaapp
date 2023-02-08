import './App.css';
import Header from './Components/Header'
import SideBar from './Components/SideBar';
import Feed from './Components/Feed'

function App() {
  return (
    <>
    <Header/>
    <main>
      {/* Left Side Bar */}
      <SideBar/>
      {/* Feed */}
      <Feed/>
      {/* Right Side Bar */}
    </main>
    </>
  );
}

export default App;
