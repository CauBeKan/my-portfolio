import { motion } from 'framer-motion'

export default function FadeInSection({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: false, amount: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}