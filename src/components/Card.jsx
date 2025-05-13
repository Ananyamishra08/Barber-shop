import { motion } from "motion/react"
// import { motion } from "@motionone/react";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

export default function Card({ emoji, hueA, hueB, i, title, description }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className={`card-container-${i} overflow-hidden flex justify-center items-center relative pt-5 w-[300px]`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
          background,
        }}
      />
      <motion.div
        className="w-[300px] h-[200px] flex flex-col justify-center items-center rounded-xl bg-gray-800/90 text-white shadow-[0_0_1px_rgba(0,0,0,0.075),0_0_2px_rgba(0,0,0,0.075),0_0_4px_rgba(0,0,0,0.075),0_0_8px_rgba(0,0,0,0.075),0_0_16px_rgba(0,0,0,0.075)]"
        style={{ transformOrigin: "center" }}
        variants={cardVariants}
      >
        <span className="text-4xl mb-2">{emoji}</span>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-center px-4">{description}</p>
      </motion.div>
    </motion.div>
  );
}