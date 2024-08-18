import './dashboard.css';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Dashboard = () => {
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
                    <Card name='Friend 1' amount='100' />
                    <Card name='Friend 2' amount='200' />
                    <Card name='Friend 3' amount='300' />
                    <Card name='Friend 4' amount='400' />
                    <Card name='Friend 5' amount='500' />
                    <Card name='Friend 6' amount='600' />
                    <Card name='Friend 7' amount='700' />
                    <Card name='Friend 8' amount='800' />
                    <Card name='Friend 9' amount='900' />
                    <Card name='Friend 10' amount='1000' />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Dashboard;
