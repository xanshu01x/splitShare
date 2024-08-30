import { useState } from 'react';
import Modal from '../Modal';
import './footer.css';

const Footer = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleAddExpense = () => {
        setModalOpen(true);
        console.log('Add Expense');
    };
    return (
        <div className='footer-container'>
            <div className='add-expense-button' onClick={handleAddExpense}>
                Add Expense
            </div>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default Footer;
