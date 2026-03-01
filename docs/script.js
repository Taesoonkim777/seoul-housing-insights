// ===== Scroll Animation (Intersection Observer) =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

  // ===== Navbar scroll effect =====
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  // ===== Smooth scroll =====
  document.querySelectorAll("[data-scroll]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.scroll);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  document.querySelector(".navbar-brand").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ===== Charts =====
  initBarChart();
  initLineChart();
  initRadarChart();
});

// ===== Bar Chart: Housing Price Growth by District =====
function initBarChart() {
  const ctx = document.getElementById("barChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Gangnam","Seocho","Songpa","Yongsan","Mapo","Seongdong","Dongjak","Gwangjin","Yeongdeungpo","Gangdong","Nowon","Dobong"],
      datasets: [{
        label: "Growth (%)",
        data: [82, 75, 71, 65, 58, 54, 48, 44, 40, 38, 22, 18],
        backgroundColor: "hsl(40, 75%, 55%)",
        borderRadius: 4,
      }],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "hsl(220, 22%, 14%)",
          titleColor: "hsl(40, 20%, 92%)",
          bodyColor: "hsl(40, 75%, 55%)",
          borderColor: "hsl(220, 15%, 22%)",
          borderWidth: 1,
        },
      },
      scales: {
        x: {
          ticks: { color: "hsl(220, 10%, 55%)", font: { size: 11 } },
          grid: { color: "hsl(220, 15%, 22%)" },
        },
        y: {
          ticks: { color: "hsl(40, 20%, 85%)", font: { size: 11 } },
          grid: { display: false },
        },
      },
    },
  });
}

// ===== Line Chart: Sale vs Jeonse =====
function initLineChart() {
  const ctx = document.getElementById("lineChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["2015","2016","2017","2018","2019","2020","2021","2022","2023","2024"],
      datasets: [
        {
          label: "Sale Price",
          data: [100, 108, 118, 132, 140, 158, 182, 175, 170, 178],
          borderColor: "hsl(40, 75%, 55%)",
          backgroundColor: "hsla(40, 75%, 55%, 0.1)",
          borderWidth: 2.5,
          pointRadius: 3,
          pointBackgroundColor: "hsl(40, 75%, 55%)",
          tension: 0.3,
        },
        {
          label: "Jeonse Price",
          data: [100, 104, 107, 112, 115, 119, 125, 130, 128, 132],
          borderColor: "hsl(200, 65%, 50%)",
          backgroundColor: "hsla(200, 65%, 50%, 0.1)",
          borderWidth: 2.5,
          pointRadius: 3,
          pointBackgroundColor: "hsl(200, 65%, 50%)",
          tension: 0.3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "hsl(220, 22%, 14%)",
          titleColor: "hsl(40, 20%, 92%)",
          bodyColor: "hsl(40, 75%, 55%)",
          borderColor: "hsl(220, 15%, 22%)",
          borderWidth: 1,
        },
      },
      scales: {
        x: {
          ticks: { color: "hsl(220, 10%, 55%)", font: { size: 11 } },
          grid: { color: "hsl(220, 15%, 22%)" },
        },
        y: {
          ticks: { color: "hsl(220, 10%, 55%)", font: { size: 11 } },
          grid: { color: "hsl(220, 15%, 22%)" },
        },
      },
    },
  });
}

// ===== Radar Chart: Amenity Profile =====
function initRadarChart() {
  const ctx = document.getElementById("radarChart").getContext("2d");
  new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["Safety", "Transport", "Education", "Green", "Culture"],
      datasets: [
        {
          label: "Gangnam",
          data: [85, 95, 90, 70, 92],
          borderColor: "hsl(40, 75%, 55%)",
          backgroundColor: "hsla(40, 75%, 55%, 0.15)",
          borderWidth: 2,
          pointRadius: 3,
          pointBackgroundColor: "hsl(40, 75%, 55%)",
        },
        {
          label: "Nowon",
          data: [60, 55, 65, 75, 40],
          borderColor: "hsl(200, 65%, 50%)",
          backgroundColor: "hsla(200, 65%, 50%, 0.1)",
          borderWidth: 2,
          pointRadius: 3,
          pointBackgroundColor: "hsl(200, 65%, 50%)",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "hsl(220, 22%, 14%)",
          titleColor: "hsl(40, 20%, 92%)",
          bodyColor: "hsl(40, 75%, 55%)",
          borderColor: "hsl(220, 15%, 22%)",
          borderWidth: 1,
        },
      },
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: { color: "hsl(220, 10%, 55%)", font: { size: 10 }, backdropColor: "transparent" },
          grid: { color: "hsl(220, 15%, 22%)" },
          angleLines: { color: "hsl(220, 15%, 22%)" },
          pointLabels: { color: "hsl(40, 20%, 85%)", font: { size: 12 } },
        },
      },
    },
  });
}
