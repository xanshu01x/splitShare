import PropTypes from 'prop-types';

import './modal.css';

const Modal = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <div onClick={onClose} className='overlay'>
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className='modalContainer'
            >
                <div className='modalRight'>
                    <p className='closeBtn' onClick={onClose}>
                        x
                    </p>
                    <div className='content'>
                        <h2>Add Expense</h2>
                        <input
                            type='text'
                            placeholder='Title'
                            className='title-input'
                        />
                        <input
                            type='number'
                            placeholder='Amuont'
                            className='title-input'
                        />
                        <select className='title-select'>
                            <option value='0'>Select Friend</option>
                            <option value='1'>Friend 1</option>
                            <option value='2'>Friend 2</option>
                            <option value='3'>Friend 3</option>
                            <option value='4'>Friend 4</option>
                        </select>
                    </div>
                    <div className='btnContainer'>
                        <button className='btnPrimary'>
                            <span className='bold'>YES</span>
                        </button>
                        <button className='btnOutline'>
                            <span className='bold'>NO</span>, thanks
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;

Modal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func.isRequired
};
