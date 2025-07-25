window.onload = function () {
  // input with id username on change
  document.getElementById("username").addEventListener("change", function () {
    var username = document.getElementById("username").value;
    console.log("Username changed to:", username);

    // regex to check if username has a least 1 capital letter, 1 special character and 1 number
    var regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/;
    if (regex.test(username)) {
      //set de username input border to green
      document.getElementById("username").style.borderColor = "green";
    } else {
      document.getElementById("username").style.borderColor = "red";
    }
  });

  document.getElementById("download").addEventListener("click", function () {
    var canvas = document.getElementById("myChart");
    var image = canvas.toDataURL("image/png");
    var link = document.createElement("a");
    link.href = image;
    link.download = "chart.png";
    link.click();
  });

  // Initialize chart with current values
  var ctx = document.getElementById("myChart").getContext("2d");
  var { incomeValues, expensesValues } = getIncomeAndExpenses();

  var myChart = new Chart(ctx, {
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
          data: incomeValues,
          backgroundColor: "rgba(54, 162, 235, 0.7)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
        {
          label: "Expenses",
          data: expensesValues,
          backgroundColor: "rgba(255, 99, 132, 0.7)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: { beginAtZero: true },
      },
    },
  });

  // Atualiza o gráfico ao clicar na aba "Chart"
  const chartTab = document.getElementById("chart-tab");
  chartTab.addEventListener("shown.bs.tab", function () {
    const { incomeValues, expensesValues } = getIncomeAndExpenses();

    myChart.data.datasets[0].data = incomeValues;
    myChart.data.datasets[1].data = expensesValues;
    myChart.update();

    console.log("Chart updated with:", { incomeValues, expensesValues });
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

  myChart.data.datasets[0].data = incomeValues;
  myChart.data.datasets[1].data = expensesValues;

  myChart.update();
};
