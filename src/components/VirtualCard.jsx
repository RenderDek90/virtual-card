/* eslint-disable react/prop-types */
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { SocialMedia } from "./SocialMedia";
import { Skills } from "./Skills";

export default function VirtualCard({ props }) {
  return (
    <>
      <Card className="mt-6 w-96 shadow-slate-500 shadow-lg">
        <div className="h-80 overflow-hidden relative rounded-t-lg">
          <img
            src="https://renderdek90.github.io/V2-DSITE/static/media/dardar4.8ee125f882d34493d631.jpeg"
            alt="card-image"
            className="w-full absolute place-self-center"
          />
          <div className="absolute bg-black/40 hover:bg-transparent duration-300 ease-in-out mix-blend-darken w-full h-80"></div>
          <SocialMedia />
        </div>
        <CardBody className="relative">
          <Typography
            variant="lead"
            color="blue-gray"
            className="mb-2 absolute top-[-10%] bg-cyan-500 text-white shadow-lg rounded px-7 py-2"
          >
            {props.name}
          </Typography>
          <Typography variant="h6" className="mt-2">
            {props.positions && props.positions.join(" | ")}
          </Typography>
          <Typography className="mt-5">{props.story}</Typography>
          <Skills />
          <Typography className="mt-5 italic">~ {props.motto} ~</Typography>
        </CardBody>
      </Card>
    </>
  );
}
