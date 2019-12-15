const students = [
    {
      name: 'Nam',
      age: 24,
      gender: 'male',
    },
    {
      name: 'Mai',
      age: 22,
      gender: 'female',
    },
    {
      name: 'Trang',
      age: 23,
      gender: 'female',
    },
    {
      name: 'An',
      age: 20,
      gender: 'male',
    },
    {
      name: 'Thien',
      age: 27,
      gender: 'male',
    },
  ];
  // #3
  const studentsCounts = students.reduce(function(obj, student){
    if (!obj[student.gender]) {
        obj[student.gender] = 1;
    } else {
        obj[student.gender]++;
    }
    return obj;
  }, {});

console.log(studentsCounts);
  // #4
  const copy=[];
  students.forEach(name => copy.push(name.name));
  console.log(copy);