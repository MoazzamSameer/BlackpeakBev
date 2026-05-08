import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed right-8 top-[35%] bottom-[35%] w-[1px] bg-white/10 z-40 hidden lg:block">
      <motion.div
        className="w-full bg-primary origin-top"
        style={{ scaleY, height: '100%' }}
      />
    </div>
  );
}
