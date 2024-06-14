import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function ProductListCard({ img, name, price }) {
  return (
      
    <Card shadow={false} className="border border-gray-300">
      <CardBody className="pb-0">
        <img src={img} alt={img} className="min-w-[280px] w-full" />
        <div className="flex justify-between">
          <div>
            <Typography className="mb-2" color="blue-gray" variant="h5">
              {name}
            </Typography>
            <div className="mb-5 flex items-center gap-2">
              <div className="h-5 w-5 rounded border border-gray-900 bg-brown-300 "></div>
              <div className="h-5 w-5 rounded border border-blue-gray-100 "></div>
              <div className="h-5 w-5 rounded border border-blue-gray-100 bg-gray-900 "></div>
            </div>
          </div>
          <Typography
            variant="h5"
            className="text-gray-600"
          >
            {price}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}

const CONTENTS = [
  {
    img: "./product_bag.svg",
    name: "Backpack",
    price: "$250"
  },
  {
    img: "./product_cap.svg",
    name: "HeadWear",
    price: "$120"
  },
  {
    img: "./product_jacket.svg",
    name: "Track Jacket",
    price: "$390"
  },
  {
    img: "./product_jacket.svg",
    name: "Track Jacket",
    price: "$390"
  },
  {
    img: "./product_jacket.svg",
    name: "Track Jacket",
    price: "$390"
  },
  {
    img: "./product_jacket.svg",
    name: "Track Jacket",
    price: "$390"
  },
];

export function ProductListSection4() {
  return (
    <section className="py-24 px-8">
      <div className="mx-auto text-center mb-16">
        <Typography className="font-medium text-lg">
          Tailored Product Search
        </Typography>
        <Typography variant="h1" className="my-4 text-4xl">
          Find What You Need
        </Typography>
        <Typography className="!font-normal text-gray-500 mx-auto max-w-2xl">
          Simplify your shopping experience with our intuitive filter system.
          Whether you&apos;re looking for specific features, price ranges, or
          brands.
        </Typography>
      </div>
      <div className="mx-auto container">
<div className="grid grid-cols-1 gap-12 lg:grid-cols-3 md:grid-cols-2">
  {CONTENTS.map(({ img, name, price }, index) => (
    <div
      key={index}
      className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
    >
      <img src={img} alt={name} className="w-full h-70 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600 my-2">${price}</p>
        <div className="flex justify-between items-center mt-4">
          <button className="bg-black text-white px-24 py-2 rounded-lg shadow-md hover:bg-gray-800 transition-colors">
            Add to Cart
          </button>
          <button className="text-black rounded-lg border border-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
</div>

    </section>
  );
}

export default ProductListSection4;
