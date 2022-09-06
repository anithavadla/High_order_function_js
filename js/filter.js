const days = [
  { day: 'Sunday', hours:'2' },
  { day: 'Monday', hours:'8' },
  { day: 'Tuesday', hours:'6' },
  { day: 'Wednesday', hours:'8' },
  { day: 'Thursday', hours:'8' },
  { day: 'Friday', hours:'5' },
  { day: 'Saturday', hours:'2' },
  
];
const days1 = [];
for(let i = 0; i < days.length; i++) {
  if(days[i].hours>= 5) {
    days1.push(days[i].day);
  }
}
console.log(days1);


//with Using a Higher-Order Function (Filter)
const days2 = [
  { day: 'Sunday', hours:'2' },
  { day: 'Monday', hours:'8' },
  { day: 'Tuesday', hours:'6' },
  { day: 'Wednesday', hours:'8' },
  { day: 'Thursday', hours:'8' },
  { day: 'Friday', hours:'5' },
  { day: 'Saturday', hours:'2' },
  
];
const days3 =days2.filter(day2 => day2.status == true);
console.log(days3);
