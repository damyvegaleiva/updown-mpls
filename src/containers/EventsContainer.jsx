const EventsContainer = () => {
  return (
    <main id="events">
      <h1 className="headline-pages">Events</h1>

      <section className="calendar__container">
        <iframe
          className="calendar__calendar-iframe"
          src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%234285F4&ctz=America%2FChicago&showTitle=1&showNav=1&showPrint=0&showTabs=0&showCalendars=1&src=YjRkaTNtbmRxam5oanZlc3N0MG1yN2NxbjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23E4C441"
        ></iframe>
      </section>
    </main>
  );
};

export default EventsContainer;
