"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ title }: { title: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-4 rounded-xl shadow hover:shadow-lg"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
    </motion.div>
  );
}
