const objArray = [{
  name: "Johny Walker", 
  birthDate: '1995-12-17'
}, {
  name: "Andrew", 
  birthDate: '2001-10-29'
}, {
  name: "Viktor", 
  birthDate: '1998-11-09'
}, {
  name: "Viktor",
  birthDate: "1999-09-11",
}];

const searchByNumber = (name) => {
  if(name) {
    const result = objArray.filter((element) => {
      if(element.name === name) {
        return element
      };
    });
    return result;
  } else {
    console.log('Please enter name');
    return false;
  };
};

const r = searchByNumber("Andrew");
console.log(r);