import data from "./data.js";

let barChart;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("ageFilter").addEventListener("change", applyFilters);
    document.getElementById("genderFilter").addEventListener("change", applyFilters);
    document.getElementById("startDate").addEventListener("change", applyFilters);

    applyFilters();
});

function applyFilters() {
    const ageFilter = document.getElementById("ageFilter").value;
    const genderFilter = document.getElementById("genderFilter").value;
    const selectedDate = document.getElementById("startDate").value;

    const formattedDate = selectedDate ? selectedDate.split("-").reverse().join("/") : null;

    if (ageFilter === "All" && genderFilter === "All" && !selectedDate) {
        updateCharts(data, true);
        return;
    }

    const filteredData = data.filter((item) => {
        const matchesDate = !formattedDate || item.day === formattedDate;
        const matchesAge = ageFilter === "All" || item.age === ageFilter;
        const matchesGender = genderFilter === "All" || item.gender === genderFilter;
        return matchesDate && matchesAge && matchesGender;
    });

    updateCharts(filteredData, false);
}

function updateCharts(filteredData, showAllDays) {
    const processData = (data) => {
        const groupedData = {};
        data.forEach(({ day, values }) => {
            groupedData[day] = groupedData[day] || new Array(values.length).fill(0);
            values.forEach((val, i) => (groupedData[day][i] += val));
        });
        return groupedData;
    };

    const labels = showAllDays ? Object.keys(processData(data)) : filteredData.map(({ day }) => day);
    const datasets = Array.from({ length: 6 }, (_, i) => ({
        label: `Feature ${String.fromCharCode(65 + i)}`,
        data: labels.map((label, index) => showAllDays ? processData(data)[label][i] : filteredData[index]?.values[i]),
        backgroundColor: `rgba(${i * 40 + 75}, 192, 192, 0.5)`,
        borderColor: `rgba(${i * 40 + 75}, 192, 192, 1)`,
        borderWidth: 1,
        barPercentage: 0.5,
        categoryPercentage: 0.8,
    }));

    if (barChart) barChart.destroy();

    barChart = new Chart(document.getElementById("lineChart"), {
        type: "bar",
        data: { labels, datasets },
        options: {
            responsive: true,
            scales: {
                x: { stacked: false, title: { display: true, text: "Dates" } },
                y: { title: { display: true, text: "Values" } },
            },
            plugins: {
                title: { display: true, text: showAllDays ? "Features Displayed Separately" : "Filtered Data Displayed" },
                tooltip: { mode: "index", intersect: false },
            },
        },
    });
}


function setChartHeight() {
    const canvas = document.getElementById("lineChart");
    const screenWidth = window.innerWidth;
    if (screenWidth < 450) {
        canvas.height = 900;
    } else if (screenWidth < 768) {
        canvas.height = 600;
    }
    else {
        canvas.height = 550;
    }
}

window.addEventListener('resize', setChartHeight);
setChartHeight();

