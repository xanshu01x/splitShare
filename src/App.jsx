import './App.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <div className='main-container'>
                <Header />
                <Dashboard />
                <Footer />
            </div>
        </>
    );
}

export default App;
