const FormActionsButtons = ({ isSubmitted }) => {
  return (
    <>
      <button type="submit" className="contact-us__btn--submit">
        {isSubmitted ? "Sending..." : "Submit"}
      </button>

      <button type="reset" className="contact-us__btn--cancel">
        Cancel
      </button>
    </>
  );
};

export default FormActionsButtons;
