const ContactContainer = () => {
  return (
    <main className="contact-us__contenedor">
      <h1 className="headline-pages">Contact</h1>
      <div className="contact-us__box">
        <div className="contact-us__left">
          <img src="./images/up-down-minneapolis.png" alt="" />
        </div>

        <div className="contact-us__right">
          <h2>Contact Us / Requests</h2>

          <form action="./error404.html">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              placeholder="Your Name"
              id="name"
              className="contact-us__field"
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              id="email"
              className="contact-us__field"
            />

            <label htmlFor="phone-number">Phone Number</label>
            <input
              type="tel"
              placeholder="Your Phone"
              id="phone-number"
              className="contact-us__field"
            />

            <label htmlFor="city">Choose your city:</label>
            <select
              className="contact-us__city-select"
              name="city"
              id="city"
              defaultValue="none"
            >
              <option value="" disabled>
                --Select one--
              </option>
              <option value="minneapolis">Minneapolis</option>
              <option value="desMoines">Des Moines</option>
              <option value="kansasCity">Kansas City</option>
              <option value="milwaukee">Milwaukee</option>
              <option value="stLouis">St. Louis</option>
              <option value="nashville">Nashville</option>
              <option value="oklahomaCity">Oklahoma City</option>
            </select>

            <fieldset className="contact-us__fieldset">
              <legend>I would like more:</legend>
              <label htmlFor="beers">Beers</label>
              <input type="checkbox" id="beers" value="more-beers" />
              <label htmlFor="games">Games</label>
              <input type="checkbox" id="games" value="more-games" />
              <label htmlFor="pizzas">Pizzas</label>
              <input type="checkbox" id="pizzas" value="more-pizzas" />
            </fieldset>

            <label htmlFor="text-area">Your Message</label>
            <textarea
              placeholder="Message"
              id="text-area"
              className="contact-us__field contact-us__area"
            ></textarea>

            <label className="contact-us__subscribe" htmlFor="yes-no-subscribe">
              Subscribe to our newsletter?
            </label>
            <label className="contact-us__subscribe-yes-no">
              <input
                type="radio"
                id="yes-no-subscribe-yes"
                name="yes-no"
                value="yes"
                className="contact-us__subscribe-yes-no"
              />
              Yes
            </label>

            <label className="contact-us__subscribe-yes-no">
              <input
                type="radio"
                id="yes-no-subscribe-no"
                name="yes-no"
                value="no"
              />
              No
            </label>

            <button
              type="submit"
              value="submit"
              className="contact-us__btn--submit"
            >
              Submit
            </button>

            <button
              type="reset"
              value="cancel"
              className="contact-us__btn--cancel"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactContainer;
