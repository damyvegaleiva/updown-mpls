import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

const numbersOnlyRegExp = /^[0-9]+$/;
const lettersOnlyRegExp = /^[a-zA-Z\s]*$/;

const FormContainer = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    location: "",
    interests: [],
    message: "",
    subscribe: "",
  };

  const onSubmit = (values) => {
    console.log("onSubmit", values);
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required.")
      .min(5, "Name must be at least 5 characters.")
      .max(50, "Name cannot exceed 50 characters.")
      .matches(lettersOnlyRegExp, "Name can only contain letters."),

    email: Yup.string()
      .required("Email is required.")
      .email("Invalid email address."),

    phone: Yup.string()
      .required("Phone is required.")
      .matches(numbersOnlyRegExp, "Invalid phone number.")
      .min(10, "Phone must be 10 characters.")
      .max(10, "Phone cannot exceed 10 characters."),

    message: Yup.string().max(150, "Message cannot exceed 150 characters."),

    location: Yup.string().required("Please select a location."),

    subscribe: Yup.string().required("Please select an option."),
  });

  return (
    <div className="contact-us__right">
      <h2>Contact Us / Requests</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <label htmlFor="name">Your Name</label>
            <Field
              name="name"
              id="name"
              placeholder="Your Name"
              className="contact-us__field"
            />
            <ErrorMessage name="name" component="p" />

            <label htmlFor="email">Your Email</label>
            <Field
              name="email"
              id="email"
              placeholder="Your Email"
              className="contact-us__field"
            />
            <ErrorMessage name="email" component="p" />

            <label htmlFor="phone">Phone Number</label>
            <Field
              name="phone"
              id="phone"
              placeholder="Your Number"
              className="contact-us__field"
            />
            <ErrorMessage name="phone" component="p" />

            <label htmlFor="location">Choose your location: </label>
            <Field
              name="location"
              id="location"
              as="select"
              className="contact-us__city-select"
            >
              <option value="" disabled>
                --Select one--
              </option>
              <option value="desMoines">Des Moines</option>
              <option value="kansas">Kansas City</option>
              <option value="milwaukee">Milwaukee</option>
              <option value="minneapolis">Minneapolis</option>
              <option value="nashville">Nashville</option>
              <option value="oklahoma">Oklahoma City</option>
              <option value="stLouis">St. Louis</option>
            </Field>
            <ErrorMessage name="location" component="p" />

            <fieldset className="contact-us__fieldset">
              <legend>I would like more:</legend>
              <label htmlFor="interests-beer">Beer</label>
              <Field
                name="interests"
                id="interests-beer"
                type="checkbox"
                value="beer"
              />
              <label htmlFor="interests-games">Games</label>
              <Field
                name="interests"
                id="interests-games"
                type="checkbox"
                value="games"
              />
              <label htmlFor="interests-pizza">Pizza</label>
              <Field
                name="interests"
                id="interests-pizza"
                type="checkbox"
                value="pizza"
              />
            </fieldset>

            <label htmlFor="message">Message</label>
            <Field
              name="message"
              id="message"
              as="textarea"
              placeholder="Your Message"
              className="contact-us__field contact-us__area"
            />
            <ErrorMessage name="message" component="p" />

            <label className="contact-us__subscribe">
              Subscribe to our newsletter?
            </label>
            <label htmlFor="subscribe_yes">Yes</label>
            <Field
              id="subscribe_yes"
              name="subscribe"
              type="radio"
              value="yes"
              className="contact-us__subscribe-yes-no"
            />
            <label htmlFor="subscribe_no">No</label>
            <Field
              id="subscribe_no"
              name="subscribe"
              type="radio"
              value="no"
              className="contact-us__subscribe-yes-no"
            />
            <ErrorMessage name="subscribe" component="p" />

            <button type="submit" className="contact-us__btn--submit">
              Submit
            </button>

            <button type="reset" className="contact-us__btn--cancel">
              Cancel
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormContainer;
