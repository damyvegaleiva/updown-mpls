import FormActionsButtons from "./FormActionsButtons";
import FormSubmissionSuccessMessage from "./FormSubmissionSuccessMessage";

const FormActions = ({ isValid, isSubmitted }) => {
  if (isValid) return <FormSubmissionSuccessMessage />;

  return <FormActionsButtons isSubmitted={isSubmitted} />;
};

export default FormActions;
