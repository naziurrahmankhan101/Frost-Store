import React from 'react';
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";


export function LogoSection6() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container !mx-auto text-center place-content-center grid">
        <Typography
          color="blue-gray"
          variant="lead"
          className="!font-semibold lg:!text-lg !text-base"
        >
          Official Sports Gear Resellers
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="my-4 !text-2xl !leading-snug lg:!text-3xl"
        >
          Authorized by Leading Brands
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto max-w-5xl !text-gray-500 lg:px-8 mb-10"
        >
          We are authorized re-sellers of famous leading sports brands from all over the world.
        </Typography>
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6">
            <Card shadow={false} className="bg-[#FAFAFA] px-10">
              <CardBody>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
                  alt="logo"
                  className="w-40"
                />
                
              </CardBody>
            </Card>
            <Card shadow={false} className="bg-[#FAFAFA] px-10">
              <CardBody>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/88/Puma-Logo.png"
                  alt="logo"
                  className="w-40"
                />
                
              </CardBody>
            </Card>
          </div>
          <Card shadow={false} className="bg-[#FAFAFA] lg:px-10 justify-center max-w-[18rem] lg:max-w-lg">
            <CardBody className="text-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
                alt="logo"
                className="w-40 mx-auto"
              />
              <Typography variant="small" className="font-normal text-gray-500 mb-4">
              
              </Typography>
              <Typography variant="small" color="blue-gray" className="font-normal lg:max-w-[16rem]">
              
              </Typography>
            </CardBody>
          </Card>
          <div className="flex flex-col items-center justify-center gap-6">
          
            
          </div>
        </div>
      </div>
      <Button className="mt-6 mx-auto flex" variant="outlined">Grab Your Gears</Button>
    </section>
  );
}

export default LogoSection6;