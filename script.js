const data = [
    { day: '04/10/2022', age: '15-25', gender: 'Male', values: [895, 499, 831, 530, 782, 724] },
    { day: '04/10/2022', age: '>25', gender: 'Male', values: [477, 200, 382, 387, 261, 300] },
    { day: '04/10/2022', age: '15-25', gender: 'Female', values: [640, 305, 208, 140, 721, 22] },
    { day: '04/10/2022', age: '>25', gender: 'Female', values: [606, 544, 156, 7, 82, 103] },
    { day: '05/10/2022', age: '15-25', gender: 'Male', values: [270, 388, 572, 769, 669, 0] },
    { day: '05/10/2022', age: '>25', gender: 'Male', values: [24, 371, 201, 825, 839, 256] },
    { day: '05/10/2022', age: '15-25', gender: 'Female', values: [762, 202, 198, 399, 407, 357] },
    { day: '05/10/2022', age: '>25', gender: 'Female', values: [702, 10, 948, 926, 573, 904] },
    { day: '06/10/2022', age: '15-25', gender: 'Male', values: [262, 585, 660, 461, 703, 771] },
    { day: '06/10/2022', age: '>25', gender: 'Male', values: [958, 191, 741, 613, 880, 128] },
    { day: '06/10/2022', age: '15-25', gender: 'Female', values: [880, 833, 595, 189, 871, 253] },
    { day: '06/10/2022', age: '>25', gender: 'Female', values: [849, 259, 133, 852, 356, 896] },
    { day: '07/10/2022', age: '15-25', gender: 'Male', values: [420, 313, 972, 380, 471, 358] },
    { day: '07/10/2022', age: '>25', gender: 'Male', values: [485, 523, 684, 225, 781, 61] },
    { day: '07/10/2022', age: '15-25', gender: 'Female', values: [819, 653, 290, 380, 105, 837] },
    { day: '07/10/2022', age: '>25', gender: 'Female', values: [156, 960, 794, 384, 41, 362] },
    { day: '08/10/2022', age: '15-25', gender: 'Male', values: [966, 459, 689, 800, 731, 319] },
    { day: '08/10/2022', age: '>25', gender: 'Male', values: [737, 357, 398, 99, 945, 666] },
    { day: '08/10/2022', age: '15-25', gender: 'Female', values: [405, 506, 994, 598, 10, 479] },
    { day: '08/10/2022', age: '>25', gender: 'Female', values: [770, 972, 987, 735, 449, 347] },
    { day: '09/10/2022', age: '15-25', gender: 'Male', values: [76, 920, 412, 996, 322, 711] },
    { day: '09/10/2022', age: '>25', gender: 'Male', values: [865, 802, 961, 846, 762, 370] },
    { day: '09/10/2022', age: '15-25', gender: 'Female', values: [151, 661, 559, 285, 693, 386] },
    { day: '09/10/2022', age: '>25', gender: 'Female', values: [93, 865, 889, 429, 890, 150] },
    { day: '10/10/2022', age: '15-25', gender: 'Male', values: [628, 258, 927, 449, 813, 358] },
    { day: '10/10/2022', age: '>25', gender: 'Male', values: [474, 851, 53, 261, 498, 122] },
    { day: '10/10/2022', age: '15-25', gender: 'Female', values: [548, 730, 483, 535, 670, 992] },
    { day: '10/10/2022', age: '>25', gender: 'Female', values: [903, 447, 766, 574, 962, 725] },
    { day: '11/10/2022', age: '15-25', gender: 'Male', values: [415, 874, 63, 603, 256, 110] },
    { day: '11/10/2022', age: '>25', gender: 'Male', values: [112, 448, 130, 623, 689, 368] },
    { day: '11/10/2022', age: '15-25', gender: 'Female', values: [288, 846, 144, 563, 264, 18] },
    { day: '11/10/2022', age: '>25', gender: 'Female', values: [978, 869, 378, 517, 994, 539] },
    { day: '12/10/2022', age: '15-25', gender: 'Male', values: [199, 438, 47, 276, 981, 16] },
    { day: '12/10/2022', age: '>25', gender: 'Male', values: [297, 920, 679, 916, 712, 54] },
    { day: '12/10/2022', age: '15-25', gender: 'Female', values: [572, 607, 812, 450, 578, 448] },
    { day: '12/10/2022', age: '>25', gender: 'Female', values: [728, 552, 989, 48, 425, 479] },
    { day: '13/10/2022', age: '15-25', gender: 'Male', values: [473, 324, 921, 327, 193, 433] },
    { day: '13/10/2022', age: '>25', gender: 'Male', values: [869, 1000, 333, 429, 735, 777] },
    { day: '13/10/2022', age: '15-25', gender: 'Female', values: [228, 225, 623, 320, 255, 798] },
    { day: '13/10/2022', age: '>25', gender: 'Female', values: [302, 979, 682, 702, 636, 337] },
    { day: '14/10/2022', age: '15-25', gender: 'Male', values: [725, 853, 85, 998, 238, 523] },
    { day: '14/10/2022', age: '>25', gender: 'Male', values: [308, 301, 42, 401, 330, 102] },
    { day: '14/10/2022', age: '15-25', gender: 'Female', values: [775, 986, 786, 424, 870, 43] },
    { day: '14/10/2022', age: '>25', gender: 'Female', values: [589, 170, 345, 118, 929, 518] },
    { day: '15/10/2022', age: '15-25', gender: 'Male', values: [98, 674, 835, 395, 799, 319] },
    { day: '15/10/2022', age: '>25', gender: 'Male', values: [10, 262, 494, 197, 676, 511] },
    { day: '15/10/2022', age: '15-25', gender: 'Female', values: [690, 580, 4, 694, 207, 243] },
    { day: '15/10/2022', age: '>25', gender: 'Female', values: [566, 473, 248, 882, 669, 627] },
    { day: '16/10/2022', age: '15-25', gender: 'Male', values: [800, 346, 728, 988, 957, 493] },
    { day: '16/10/2022', age: '>25', gender: 'Male', values: [409, 327, 540, 877, 394, 371] },
    { day: '16/10/2022', age: '15-25', gender: 'Female', values: [96, 175, 707, 221, 863, 418] },
    { day: '16/10/2022', age: '>25', gender: 'Female', values: [481, 170, 876, 705, 828, 727] },
    { day: '17/10/2022', age: '15-25', gender: 'Male', values: [260, 148, 41, 576, 12, 237] },
    { day: '17/10/2022', age: '>25', gender: 'Male', values: [280, 353, 379, 831, 769, 863] },
    { day: '17/10/2022', age: '15-25', gender: 'Female', values: [818, 56, 989, 753, 569, 537] },
    { day: '17/10/2022', age: '>25', gender: 'Female', values: [411, 275, 315, 376, 549, 176] },
    { day: '18/10/2022', age: '15-25', gender: 'Male', values: [112, 509, 106, 169, 181, 231] },
    { day: '18/10/2022', age: '>25', gender: 'Male', values: [523, 11, 899, 592, 310, 768] },
    { day: '18/10/2022', age: '15-25', gender: 'Female', values: [201, 527, 333, 748, 411, 504] },
    { day: '18/10/2022', age: '>25', gender: 'Female', values: [859, 810, 262, 398, 663, 134] },
    { day: '19/10/2022', age: '15-25', gender: 'Male', values: [235, 971, 255, 377, 803, 480] },
    { day: '19/10/2022', age: '>25', gender: 'Male', values: [178, 247, 642, 858, 339, 634] },
    { day: '19/10/2022', age: '15-25', gender: 'Female', values: [456, 350, 49, 760, 633, 894] },
    { day: '19/10/2022', age: '>25', gender: 'Female', values: [185, 798, 451, 811, 489, 8] },
]

function formatDateToYYYYMMDD(dateStr) {
    const [day, month, year] = dateStr.split("/");
    return `${year}-${month}-${day}`;
}

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
    if (showAllDays) {
        const groupedData = {};
        data.forEach((item) => {
            if (!groupedData[item.day]) {
                groupedData[item.day] = new Array(item.values.length).fill(0);
            }
            item.values.forEach((value, index) => {
                groupedData[item.day][index] += value;
            });
        });

        const labels = Object.keys(groupedData);
        const datasets = [];
        for (let i = 0; i < 6; i++) {
            datasets.push({
                label: `Feature ${String.fromCharCode(65 + i)}`, 
                data: labels.map((label) => groupedData[label][i]),
                backgroundColor: `rgba(${i * 40 + 75}, 192, 192, 0.5)`,
                borderColor: `rgba(${i * 40 + 75}, 192, 192, 1)`,
                borderWidth: 1,
                barPercentage: 0.5, 
                categoryPercentage: 0.8, 
            });
        }

        const chartData = { labels, datasets };

        if (barChart) {
            barChart.destroy();
        }

        barChart = new Chart(document.getElementById("lineChart"), {
            type: "bar",
            data: chartData,
            options: {
                responsive: true,
                scales: {
                    x: {
                        stacked: false, 
                        title: {
                            display: true,
                            text: "Dates",
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Values",
                        },
                    },
                },
                plugins: {
                    title: {
                        display: true,
                        text: "Features Displayed Separately",
                    },
                    tooltip: {
                        mode: "index",
                        intersect: false,
                    },
                },
            },
        });
    } else {
        const labels = filteredData.map((item) => item.day); 
        const datasets = [];
        for (let i = 0; i < 6; i++) {
            datasets.push({
                label: `Feature ${String.fromCharCode(65 + i)}`, 
                data: filteredData.map((item) => item.values[i]),
                backgroundColor: `rgba(${i * 40 + 75}, 192, 192, 0.5)`,
                borderColor: `rgba(${i * 40 + 75}, 192, 192, 1)`,
                borderWidth: 1,
                barPercentage: 0.5,
                categoryPercentage: 0.8, 
            });
        }

        const chartData = { labels, datasets };

        if (barChart) {
            barChart.destroy();
        }

        barChart = new Chart(document.getElementById("lineChart"), {
            type: "bar",
            data: chartData,
            options: {
                responsive: true,
                scales: {
                    x: {
                        stacked: false, 
                        title: {
                            display: true,
                            text: "Dates",
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Values",
                        },
                    },
                },
                plugins: {
                    title: {
                        display: true,
                        text: "Filtered Data Displayed",
                    },
                    tooltip: {
                        mode: "index",
                        intersect: false,
                    },
                },
            },
        });
    }
}

function setChartHeight() {
    const canvas = document.getElementById("lineChart");
    const screenWidth = window.innerWidth;
    if (screenWidth < 450) {
        canvas.height = 900;
    } else if (screenWidth < 768) {
        canvas.height = 600;
    } 
    else{
        canvas.height = 550;
    }
}

window.addEventListener('resize', setChartHeight);
setChartHeight();

