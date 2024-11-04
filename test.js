
test("One euro should be 1.07 dollars", function () {

    const { fromEuroToDollar } = require('./app.js');

  
    const dollars = fromEuroToDollar(3.5);

    
    const expected = 5 * 1.07;

    expect(fromEuroToDollar(5)).toBeCloseTo(5.35); 
})


test("One dollar should be 146.26 Yens", function () {

    const { fromDollarToYen } = require('./app.js');

    const yenes = fromDollarToYen(1);

    const expected = 1 * 146.26;


    expect(yenes).toBeCloseTo(expected);
})


test("one thousand Yen should be 5.5591 Pounds", function () {

    const { fromYenToPound } = require('./app.js');

    const pounds = fromYenToPound(1000);

    const expected = 1000 * 0.005559;

 
    expect(pounds).toBeCloseTo(expected);
})