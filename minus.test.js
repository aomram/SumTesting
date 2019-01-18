const minus = require('./minus');

// 5 - 3 เท่ากับ 2
test('5 - 3 เท่ากับ 2' , ()=> {
    expect(minus(5,3)).toBe(2);
});

// 1200 - 300 เท่ากับ 900
test('1200 - 300 เท่ากับ 900' , ()=> {
    expect(minus(1200,300)).toBe(900);
});

//300 - 500 เท่ากับ -200
test('500 - 300 ?' , ()=> {
    expect(minus(300,500)).toBe(-200);
});

//8.5 - 3.5 ?
test('850 - 350 ?' , ()=> {
    expect(minus(8.5,3.5)).toBe(5);
});

//10 - 15 ?
test('10 - 15 ?' , ()=> {
    expect(minus(10,15)).toBe(-5);
});