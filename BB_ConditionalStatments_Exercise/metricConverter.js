function metricConverter(input) {
    const conversions = {"m": {"cm": 100, "mm": 1000}, "cm": {"m": 0.01, "mm": 10}, "mm": {"m": 0.001, "cm": 0.1}}
    console.log((input[0] * conversions[input[1]][input[2]]).toFixed(3))
}

metricConverter(["12","mm","m"])
metricConverter(["150","m","cm"])
metricConverter(["45","cm","mm"])
