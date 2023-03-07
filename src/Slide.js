import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import styled from "styled-components";
import { useRef, useState } from "react";

const dd = [1, 2, 3];

const Itm = styled.div`
  background: #333;
  height: 600px;
`;

const Dots = styled.ul`
  display: flex;

  position: absolute;
  bottom: 100px;
  right: 300px;
`;
const DotsItm = styled.li`
  width: 100px;
  height: 10px;
  background: #ddd;
  &.on {
    background: tomato;
  }
`;

const SlideWrapper = styled.section`
  position: relative;
`;

const Slide = () => {
  const [on, setOn] = useState(0);
  const slide = useRef(null);
  const option = {
    //arrows: false,
    fade: true,
    afterChange: (idx) => setOn(idx),
  };
  return (
    <SlideWrapper>
      <Slider {...option} ref={slide}>
        {dd.map((it) => (
          <Itm>{it}</Itm>
        ))}
      </Slider>
      <Dots>
        {dd.map((it, idx) => (
          <DotsItm
            className={idx === on ? "on" : ""}
            onClick={() => slide.current.slickGoTo(idx)}
          ></DotsItm>
        ))}
      </Dots>
    </SlideWrapper>
  );
};

export default Slide;
