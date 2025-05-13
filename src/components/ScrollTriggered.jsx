// import * as motion from "@motionone/react";
import Card from "./Card.jsx";
import { Container} from 'react-bootstrap';
const services = [
  ["✂️", 200, 230, "Haircut", "Precision cuts tailored to your style, from classic to modern."],
  ["🧔", 180, 210, "Beard Trim", "Sharp beard shaping and trims for a clean, confident look."],
  ["🪒", 160, 190, "Shave", "Hot towel shaves with premium razors and soothing aftercare."],
  ["💈", 140, 170, "Hair Styling", "Blow-dry and style with quality products that last all day."],
];

export default function ScrollTriggered() {
  return (
    <div className="mx-auto my-24 max-w-4xl pb-24 w-full flex flex-wrap justify-center gap-6">
    <Container>
      <h2 className="text-center mb-5 ">Our <span className="my-component"></span>Services</h2>
      <p className="text-center mb-4">
        <em>"Costly compared to other barbershops with better haircuts." - Customer Review</em>
      </p>
    </Container>
      {services.map(([emoji, hueA, hueB, title, description], i) => (
        <Card
          key={title}
          i={i}
          emoji={emoji}
          hueA={hueA}
          hueB={hueB}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
}