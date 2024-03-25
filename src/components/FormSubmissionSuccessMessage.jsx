const FormSubmissionSuccessMessage = () => {
  return (
    <div className="contact-us_form-success">
      <p className="contact-us__form-success-text">
        Form submitted successfully
      </p>
      <img src="./images/up-down-logo.png" alt="" style={{ width: "50px" }} />
      <p>Redirecting you to Home page...</p>
    </div>
  );
};

export default FormSubmissionSuccessMessage;
