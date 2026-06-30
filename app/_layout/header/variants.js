/** @type {import('framer-motion').Variants} */
export const slideUp = {
  initial: {
    y: 300,
  },
  enter: (isFirstLoad) => ({
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: isFirstLoad ? 2.5 : 0.2 },
  }),
};
