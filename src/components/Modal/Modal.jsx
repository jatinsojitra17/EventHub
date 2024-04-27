import SignUpForm from "../SignUpForm/SignUpForm.jsx";
import LoginForm from "../LoginForm/LoginForm.jsx";
import './Modal.css'

export default function Modal({ setUser, showModal, setShowModal, buttonClicked, setButtonClicked, attendees }) {
  return (
    <>
      <div className={`modal ${showModal ? '' : 'hidden'}`}>
        <button className="close-modal-btn" onClick={() => { setShowModal(!showModal); if (setButtonClicked) setButtonClicked(null) }}>&times;</button>
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
              <h1 className='attendee-heading'>Current attendees</h1>
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
      <div className={`overlay ${showModal ? '' : 'hidden'}`} onClick={() => { setShowModal(!showModal); if (setButtonClicked) setButtonClicked(null) }}></div>
    </>
  );
}