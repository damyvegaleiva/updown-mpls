import { TbDeviceGamepad } from "react-icons/tb";
import { GiDrinkMe } from "react-icons/gi";
import { CiPizza } from "react-icons/ci";
import { RxCalendar } from "react-icons/rx";
import { TbCalendarCheck } from "react-icons/tb";
import { IoPawOutline } from "react-icons/io5";
import { lazy, Suspense } from "react";

const Parrafo = lazy(() => import("../components/Parrafo"));

const ParrafosContainer = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Parrafo
          className={"parrafo-one"}
          heading={"~Games~"}
          svgIcon={<TbDeviceGamepad />}
          text={`Up-Down Minneapolis features more than 50 arcade games from the '80s
          and '90s, pinball machines, four classic skee-ball alleys, bubble
          hockey, Nintendo 64 console gaming, life-size Jenga and Connect
          Four. All games cost just 25 cents.`}
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Parrafo
          className={"parrafo-two"}
          heading={"~Drinks~"}
          svgIcon={<GiDrinkMe />}
          text={`Our drink menu includes an extensive craft beer selection with over 60
          beers on tap and even more bottles and cans. We also feature a full
          bar and cocktails on tap.`}
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Parrafo
          className={"parrafo-three"}
          heading={"~Pizzas~"}
          svgIcon={<CiPizza style={{ transform: "rotate(-90deg)" }} />}
          text={` Up-Down has house-made pizza by the slice or you can also get a whole one with unique toppings.`}
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Parrafo
          className={"parrafo-four"}
          heading={"~Events~"}
          svgIcon={<RxCalendar />}
          text={`At Up-Down we like to have fun and we want to make sure that you too, that's why every month we have fun events including: tournaments with prizes, costume contests, ROKKR watch party and more. Make sure to check our events section so you don't miss any of these.`}
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Parrafo
          className={"parrafo-five"}
          heading={"~Private Party~"}
          svgIcon={<TbCalendarCheck />}
          text={`Looking for a place to do your company's employee party? Book it at Up-Down and have a unique experience, reach out to us on our contact section for more info & details.`}
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Parrafo
          className={"parrafo-six"}
          heading={"~Pet Friendly~"}
          svgIcon={<IoPawOutline />}
          text={`We are a pet-friendly place where you can bring your best friend with you. We have a front patio, a back patio and a full size rooftop area for you to bring and have a good time with your pet too.`}
        />
      </Suspense>
    </>
  );
};

export default ParrafosContainer;
