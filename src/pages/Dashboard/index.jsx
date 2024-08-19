import './dashboard.css';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Dashboard = () => {
    const friendsData = [
        { name: 'Friend 1', amount: 100 },
        { name: 'Friend 2', amount: 200 },
        { name: 'Friend 3', amount: 300 },
        { name: 'Friend 4', amount: 400 },
        { name: 'Friend 5', amount: 500 },
        { name: 'Friend 6', amount: 600 },
        { name: 'Friend 7', amount: 700 },
        { name: 'Friend 8', amount: 800 },
        { name: 'Friend 9', amount: 900 },
        { name: 'Friend 10', amount: 1000 }
    ];
    return (
        <>
            <div className='main-container'>
                <Header />
                <div className='dashboard-container'>
                    <div className='total-box'>
                        <h2 className='total'>Overall: ₹100</h2>
                        <h2 className='owe'>Total Owe: ₹100</h2>
                        <h2 className='get'>Total Get: ₹200</h2>
                    </div>
                    {friendsData.map((friend, index) => (
                        <Card
                            key={index}
                            name={friend.name}
                            amount={friend.amount}
                        />
                    ))}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Dashboard;
