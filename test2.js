const rates = {
    Charter: { Daily: 1000.00, Hourly: 400.00, Distance: 3.50 },
    "Mini Bus": { Daily: 925.00, Hourly: 360.00, Distance: 3.25 },
    Sprinter: { Daily: 850.00, Hourly: 320.00, Distance: 3.00 },
    "Party Bus": { Daily: 775.00, Hourly: 280.00, Distance: 2.75 },
    Sedan: { Daily: 700.00, Hourly: 240.00, Distance: 2.50 },
    SUV: { Daily: 625.00, Hourly: 200.00, Distance: 2.25 },
    Limousine: { Daily: 550.00, Hourly: 160.00, Distance: 2.00 },
    Trolley: { Daily: 475.00, Hourly: 120.00, Distance: 1.75 }
};

const getQuote = (numberOfVehicles, vehicleType, pricingMethod, pricingUnits) => numberOfVehicles * rates[vehicleType][pricingMethod] * pricingUnits;

module.exports = {
    getQuote
};
