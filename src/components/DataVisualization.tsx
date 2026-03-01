import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const districtPriceData = [
  { district: "Gangnam", growth: 82 },
  { district: "Seocho", growth: 75 },
  { district: "Songpa", growth: 71 },
  { district: "Yongsan", growth: 65 },
  { district: "Mapo", growth: 58 },
  { district: "Seongdong", growth: 54 },
  { district: "Dongjak", growth: 48 },
  { district: "Gwangjin", growth: 44 },
  { district: "Yeongdeungpo", growth: 40 },
  { district: "Gangdong", growth: 38 },
  { district: "Nowon", growth: 22 },
  { district: "Dobong", growth: 18 },
];

const timeSeriesData = [
  { year: "2015", sale: 100, jeonse: 100 },
  { year: "2016", sale: 108, jeonse: 104 },
  { year: "2017", sale: 118, jeonse: 107 },
  { year: "2018", sale: 132, jeonse: 112 },
  { year: "2019", sale: 140, jeonse: 115 },
  { year: "2020", sale: 158, jeonse: 119 },
  { year: "2021", sale: 182, jeonse: 125 },
  { year: "2022", sale: 175, jeonse: 130 },
  { year: "2023", sale: 170, jeonse: 128 },
  { year: "2024", sale: 178, jeonse: 132 },
];

const radarData = [
  { amenity: "Safety", gangnam: 85, nowon: 60 },
  { amenity: "Transport", gangnam: 95, nowon: 55 },
  { amenity: "Education", gangnam: 90, nowon: 65 },
  { amenity: "Green", gangnam: 70, nowon: 75 },
  { amenity: "Culture", gangnam: 92, nowon: 40 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
        <p className="text-sm font-semibold text-foreground">{label}</p>
        {payload.map((p: any) => (
          <p key={p.name} className="text-xs text-muted-foreground">
            {p.name}: <span className="text-primary font-medium">{p.value}%</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const DataVisualization = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-navy">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Sample Visualizations
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Preliminary data insights
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <h3 className="font-display text-lg font-semibold mb-1">
              Housing Price Growth by District
            </h3>
            <p className="text-xs text-muted-foreground mb-6">
              % change in apartment sale prices, 2015–2024
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={districtPriceData} layout="vertical" margin={{ left: 20 }}>
                <XAxis type="number" tick={{ fill: "hsl(220,10%,55%)", fontSize: 11 }} />
                <YAxis
                  type="category"
                  dataKey="district"
                  tick={{ fill: "hsl(40,20%,85%)", fontSize: 11 }}
                  width={90}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="growth"
                  name="Growth"
                  fill="hsl(40, 75%, 55%)"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Line Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <h3 className="font-display text-lg font-semibold mb-1">
              Sale vs. Jeonse Price Index
            </h3>
            <p className="text-xs text-muted-foreground mb-6">
              Seoul average, indexed to 2015 = 100
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={timeSeriesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,15%,22%)" />
                <XAxis
                  dataKey="year"
                  tick={{ fill: "hsl(220,10%,55%)", fontSize: 11 }}
                />
                <YAxis tick={{ fill: "hsl(220,10%,55%)", fontSize: 11 }} />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="sale"
                  name="Sale Price"
                  stroke="hsl(40, 75%, 55%)"
                  strokeWidth={2.5}
                  dot={{ r: 3, fill: "hsl(40, 75%, 55%)" }}
                />
                <Line
                  type="monotone"
                  dataKey="jeonse"
                  name="Jeonse Price"
                  stroke="hsl(200, 65%, 50%)"
                  strokeWidth={2.5}
                  dot={{ r: 3, fill: "hsl(200, 65%, 50%)" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-lg p-6 lg:col-span-2"
          >
            <h3 className="font-display text-lg font-semibold mb-1">
              Amenity Profile Comparison
            </h3>
            <p className="text-xs text-muted-foreground mb-6">
              Gangnam vs. Nowon — amenity scores (0–100)
            </p>
            <div className="flex justify-center">
              <ResponsiveContainer width="100%" height={350} className="max-w-lg">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="hsl(220,15%,22%)" />
                  <PolarAngleAxis
                    dataKey="amenity"
                    tick={{ fill: "hsl(40,20%,85%)", fontSize: 12 }}
                  />
                  <PolarRadiusAxis
                    tick={{ fill: "hsl(220,10%,55%)", fontSize: 10 }}
                    domain={[0, 100]}
                  />
                  <Radar
                    name="Gangnam"
                    dataKey="gangnam"
                    stroke="hsl(40, 75%, 55%)"
                    fill="hsl(40, 75%, 55%)"
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                  <Radar
                    name="Nowon"
                    dataKey="nowon"
                    stroke="hsl(200, 65%, 50%)"
                    fill="hsl(200, 65%, 50%)"
                    fillOpacity={0.15}
                    strokeWidth={2}
                  />
                  <Tooltip content={<CustomTooltip />} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary" />
                Gangnam
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-accent" />
                Nowon
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DataVisualization;
