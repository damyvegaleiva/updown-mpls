import FormContainer from "./FormContainer";

const ContactContainer = () => {
  return (
    <main className="contact-us__contenedor">
      <h1 className="headline-pages">Contact</h1>

      <div className="contact-us__box">
        <div className="contact-us__left">
          <img src="./images/up-down-minneapolis.png" alt="" />
        </div>

        <FormContainer />
      </div>
    </main>
  );
};

export default ContactContainer;
