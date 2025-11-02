'use client';

import { PropsWithChildren } from 'react';
import { motion } from 'motion/react';

type FadeUpProps = PropsWithChildren<{
  classes?: string;
}>;

export function FadeUp({ classes, children }: FadeUpProps) {
  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {children}
    </motion.div>
  );
}