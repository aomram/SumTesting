const sum = require('./sum');
// 1 + 2 เท่ากับ 3
test('1 + 2 เท่ากับ 3', ()=> {
  expect(sum(1,2)).toBe(3);
});

// 20 + 1 เท่ากับ 21
test('20 + 1 เท่ากับ 21', ()=> {
  expect(sum(20,1)).toBe(21);
});

// 2 + 5 เท่ากับ ?
test('2 + 5 เท่ากับ ?' , ()=> {
  expect(sum(2,5)).toBe(7);
});

// ทำอีก 3 อัน โดยการพิมพ์เอง อย่า copy

//100 + 100 เท่ากับ 200
test('100 + 100 เท่ากับ 200' , ()=> {
  expect(sum(100,100)).toBe(200);
});

//75 + 25 เท่ากับ 100
test('75 + 25 เท่ากับ 100' ,()=> {
  expect(sum(75,25)).toBe(100);
});

//1000 + 2000 เท่ากับ 3000
test('1000 + 2000 เท่ากับ 3000' , ()=>{
  expect(sum(1000,2000)).toBe(3000);
});