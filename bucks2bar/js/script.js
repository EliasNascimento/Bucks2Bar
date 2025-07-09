var ctx = document.getElementById("barChart").getContext("2d");
var barChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Income",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Replace with your data
        backgroundColor: "rgba(54, 162, 235, 0.7)",
      },
      {
        label: "Expenses",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Replace with your data
        backgroundColor: "rgba(255, 99, 132, 0.7)",
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true },
    },
  },
});

function getIncomeAndExpenses() {
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const incomeValues = months.map(
    (month) => Number(document.getElementById(`income-${month}`).value) || 0
  );

  const expensesValues = months.map(
    (month) => Number(document.getElementById(`expenses-${month}`).value) || 0
  );

  return { incomeValues, expensesValues };
}
