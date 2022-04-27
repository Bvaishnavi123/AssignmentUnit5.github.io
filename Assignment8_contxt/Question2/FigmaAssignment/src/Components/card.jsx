import { Div } from "./div";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import { Drawer } from "./sideDrawer";
import "./card.css";

export const CardDetails = () => {
  const data = [
    {
      image: "https://bit.ly/dan-abramov",
      name: "saina",
      des: "software engineer",
    },
    {
      image: "https://bit.ly/kent-c-dodds",
      name: "saina",
      des: "software engineer",
    },
    {
      image: "https://bit.ly/prosper-baba",
      name: "saina",
      des: "software engineer",
    },
  ];

  return (
    <Div>
    
      
      <div className="container">
      <h4>User Details</h4>
        {data.map((e) => {
          return (
            <div className="mainDiv">
              <div className="submainDiv">
                <div>
                  <img src={e.image} alt="" srcset="" className="imageDiv" />
                </div>
                <div>
                  <p>{e.name}</p>
                  <p>{e.des}</p>
                </div>
              </div>
              <Slider aria-label="slider-ex-1" defaultValue={30}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </div>
          );
        })}
      </div>
    </Div>
  );
};
