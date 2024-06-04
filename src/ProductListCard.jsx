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
  ];
  
  export function ProductListSection4() {
    return (
      <section className="py-10 px-8">
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
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
            {CONTENTS.map(({ img, name, price }, index) => (
              <ProductListCard
                key={index}
                img={img}
                name={name}
                price={price}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default ProductListSection4;
  