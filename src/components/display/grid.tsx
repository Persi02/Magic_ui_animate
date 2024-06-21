import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

import { motion } from "framer-motion";

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
        
        />
      ))}
    </BentoGrid>
  );
}


const SkeletonOne = () => {
 
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <img src="https://www.plantezcheznous.com/wp-content/uploads/2017/03/SavonMarseille-1200x600.jpg" className="w-100 h-full rounded-sm" alt="" />
      
    </motion.div>
  );
};
const SkeletonTwo = () => {
 
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
     <img src="https://www.plantezcheznous.com/wp-content/uploads/2017/03/SavonMarseille-1200x600.jpg" className="w-100 h-full rounded-sm" alt="" />
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      
    >
      <img src="https://www.plantezcheznous.com/wp-content/uploads/2017/03/SavonMarseille-1200x600.jpg" className="w-100 h-full rounded-sm" alt="" />
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="https://www.plantezcheznous.com/wp-content/uploads/2017/03/SavonMarseille-1200x600.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-sm h-full w-full"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Lorem, ipsum dolor sit amet consectetur
        </p>
        <p className="border border-violet-500 bg-violet-100 dark:bg-red-900/20 text-violet-600 text-xs rounded-sm px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <img
          src="https://www.plantezcheznous.com/wp-content/uploads/2017/03/SavonMarseille-1200x600.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-sm h-full w-full"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
        Lorem, ipsum dolor sit amet consectetur
        </p>
        <p className="border border-blue-500 bg-blue-100 dark:bg-red-900/20 text-blue-600 text-xs rounded-sm px-2 py-0.5 mt-4">
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="https://www.plantezcheznous.com/wp-content/uploads/2017/03/SavonMarseille-1200x600.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-sm h-full w-full"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
        Lorem, ipsum dolor sit amet consectetur
        </p>
        <p className="border border-yellow-500 bg-yellow-100 dark:bg-red-900/20 text-yellow-600 text-xs rounded-sm px-2 py-0.5 mt-4">
          Helpless
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <img
          src="https://www.plantezcheznous.com/wp-content/uploads/2017/03/SavonMarseille-1200x600.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-sm h-sm w-sm"
        />
        <p className="text-xs text-neutral-500 pt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel tempora quod ipsum labore quisquam neque doloribus 
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">lorem</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Titre",
    description: (
      <span className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
  },
  {
    title: "Titre",
    description: (
      <span className="text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corpori
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
  },
  {
    title: "Titre",
    description: (
      <span className="text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis r
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
  },
  {
    title: "titre",
    description: (
      <span className="text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
  },

  {
    title: "Titre",
    description: (
      <span className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor 
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
  },
];
