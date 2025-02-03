import { useState } from "react";
import watch1 from "../../assets/watch/blue-watch.png";
import watch2 from "../../assets/watch/yellow-watch.png";
import watch3 from "../../assets/watch/orange-watch.png";

const ImageList = [
  {
    id: 1,
    image: watch1,
    price: "200.00",
    tag: "New",
    title: "Next Gen Blue Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laboriosam maxime quae inventore distinctio architecto sint nostrum cumque nesciunt alias. Temporibus eum placeat non? Unde, provident sequi! Molestias quasi facere quia.mollitia.",
  },
  {
    id: 2,
    image: watch2,
    price: "13.00",
    tag: "Sale",
    title: "Best & Smart Yellow Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laboriosam maxime quae inventore distinctio architecto sint nostrum cumque nesciunt alias. Temporibus eum placeat non? Unde, provident sequi! Molestias quasi facere quia.mollitia.",
  },
  {
    id: 3,
    image: watch3,
    price: "14.00",
    tag: "Hot",
    title: "Apple Ultra Smart Watch 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laboriosam maxime quae inventore distinctio architecto sint nostrum cumque nesciunt alias. Temporibus eum placeat non? Unde, provident sequi! Molestias quasi facere quia.mollitia.",
  },
];

const Hero = () => {
  const [imageId, setImageId] = useState(watch1);
  const [title, setTitle] = useState("Best & Smart Digital Products");
  const [description, setDescription] = useState(
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatem eius doloribus natus, sapiente quasi aperiam, corrupti maiores aspernatur eaque similique accusamus alias, nam repellendus blanditiis culpa quidem quod rem."
  );

  return (
    <>
      <div className="min-h-[550px] sm:min-h-[700px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white ">
        {/* background asset */}
        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
        <div className="container p-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text conent section */}
            <div className="flex flex-col justify-center gap-6 pt-12 lg:pr-8 sm:pt-0 text-center sm:text-left order-2 sm:order1">
              <h1
                data-aos="zoom-out"
                className="text-4xl lg:text-6xl font-bold"
              >
                {title}
              </h1>
              <p data-aos="slide-up" className="text-sm">
                {description}
              </p>
              <div data-aos="slide-up" data-aos-delay="200">
                <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded hover:scale-105 duration-200">
                  Order Now
                </button>
              </div>
              {/* Watch controller section */}
              <div className="flex justify-center lg:justify-left gap-6 py-2 lg:gap-14 bg-white dark:bg-black rounded-3xl">
                {ImageList.map((item) => (
                  <div
                    key={item.id}
                    data-aos="zoom-in"
                    onClick={() => {
                      setImageId(
                        item.id === 1 ? watch1 : item.id === 2 ? watch2 : watch3
                      );
                      setTitle(item.title);
                      setDescription(item.description);
                    }}
                    className="flex flex-col lg:flex-row items-center gap-1"
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                    />
                    <div className="flex flex-col items-center justify-center lg:items-start">
                      <p className="font-bold lg:text-lg">{item.price}</p>
                      <p className="text-sm">{item.tag}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* image content section */}
            <div className="order-1 sm:order-2 min-h-[450px] flex justify-center items-center relative">
              <div className="h-[400px] w-[400px] overflow-hidden rounded-3xl items-center">
                <img
                  src={imageId}
                  alt=""
                  data-aos="zoom-in"
                  className="w-[300px] h-[450px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
