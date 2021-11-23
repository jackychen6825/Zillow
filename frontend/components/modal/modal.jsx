import React from 'react';

function Modal() {
    return (
        <div className="modal-background">
            <div className="modal-container">
                <button> X </button>
                <div className="title">
                    <h1>Welcome to Millow</h1>
                </div>
                <div className="body">
                    <p>Michelle is indeed pretty</p>
                </div>
                <div className="footer">
                    <button>Sign Up</button>
                    <button>Guest</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;
