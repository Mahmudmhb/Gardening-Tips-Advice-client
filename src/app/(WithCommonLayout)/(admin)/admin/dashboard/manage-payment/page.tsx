// import { Bar } from "react-chartjs-2";
"use client";

import { Chart, BarElement, CategoryScale, LinearScale } from "chart.js";
import { motion } from "framer-motion";

Chart.register(BarElement, CategoryScale, LinearScale);

const PaymentsGraph = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg mb-4">Monthly Payments</h3>
      {/* <Bar data={data} /> */}
    </motion.div>
  );
};

export default PaymentsGraph;
