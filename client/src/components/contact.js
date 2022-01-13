import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Thanks for your message', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='container2'>
      <div className='ContactForm'>
        <div className='container'>
          <div>
            <h2>Feedback</h2>
            <p>
              If you want to give me a feedback or suggestion, please send me one.
            </p>
          </div>
          <div className='row'>
            <div className='col-12 text-center'>
              <div className='contactForm'>
                <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                  {/* Row 1 of form */}
                  <div className='row formRow'>
                    <div className='col-6'>
                      <input
                        type='text'
                        name='name'
                        {...register('name', {
                          required: { value: true, message: 'Please enter your name' },
                          maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less'
                          }
                        })}
                        className='form-control formInput'
                        placeholder='Name'
                      ></input>
                      {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                    </div>
                    <div className='col-6'>
                      <input
                        type='email'
                        name='email'
                        {...register('email', {
                          required: true,
                          pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        })}
                        className='form-control formInput'
                        placeholder='Email address'
                      ></input>
                      {errors.email && (
                        <span className='errorMessage'>Please enter a valid email address</span>
                      )}
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  <div className='row formRow'>
                    <div className='col'>
                      <input
                        type='text'
                        name='subject'
                        {...register('subject', {
                          required: { value: true, message: 'Please enter a subject' },
                          maxLength: {
                            value: 75,
                            message: 'Subject cannot exceed 75 characters'
                          }
                        })}
                        className='form-control formInput'
                        placeholder='Subject'
                      ></input>
                      {errors.subject && (
                        <span className='errorMessage'>{errors.subject.message}</span>
                      )}
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className='row formRow'>
                    <div className='col'>
                      <textarea
                        rows={3}
                        name='message'
                        {...register('message', {
                          required: true
                        })}
                        className='form-control formInput'
                        placeholder='Message'
                      ></textarea>
                      {errors.message && <span className='errorMessage'>Please enter a message</span>}
                    </div>
                  </div>
                  <button className='submit-btn' type='submit'>
                    Submit
                  </button>
                </form>
              </div>
              <ToastContainer />
            </div>
          </div>
          <div class="social-container" align='center'>
            <h3>Contact on Social Media</h3>
            <a href="https://www.youtube.com/channel/UCbYIi9tIXN5fPKj0awCu4qw"
              className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.facebook.com/biru.khatri"
              className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com/khatribru" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/khatrabiru"
              className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/khatribiru/"
              className="linkedin social">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;