import React from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import LoginForm from "../LoginForm/LoginForm";
import './Modal.module.css'

function Modal({ setUser, showModal, setShowModal, buttonClicked, setButtonClicked, attendees }) {
    return (
        <>
            <div className={`Modal ${showModal ? '' : 'hidden'}`}>
                <button className="CloseModalbtn" onClick={() => { setShowModal(!showModal); if (setButtonClicked) setButtonClicked(null) }}>&times;</button>
                {
                    buttonClicked === 'Sign Up' ? (
                        <SignUpForm setUser={setUser} showModal={showModal} setShowModal={setShowModal} setButtonClicked={setButtonClicked} />
                    ) : buttonClicked === 'Sign In' ? (
                        <LoginForm setUser={setUser} showModal={showModal} setShowModal={setShowModal} setButtonClicked={setButtonClicked} />
                    ) : (
                        ''
                    )
                }
                {
                    attendees ? (
                        <>
                            <h1 className='AttendeeHeading'>Current attendees</h1>
                            <ul>
                                {attendees.map(attendee => {
                                    return (
                                        <li key={attendee._id}>{attendee.name}</li>
                                    )
                                })}
                            </ul>
                        </>
                    ) : (
                        ''
                    )
                }
            </div>
            <div className={`Overlay ${showModal ? '' : 'hidden'}`} onClick={() => { setShowModal(!showModal); if (setButtonClicked) setButtonClicked(null) }}></div>
        </>
    );
}

export default Modal;