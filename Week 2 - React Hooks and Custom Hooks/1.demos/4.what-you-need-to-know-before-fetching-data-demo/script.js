console.log('Another customer is approaching');

// use third party API to get data , while we wait for the data to come back, we can do other things
fetch('https://randomuser.me/api/?results=1')
    .then(response => response.json())
    .then(data => console.log(data));

// while we wait for the data to come back, we can do other things
console.log(`Our valued customer, please
    give me a moment while I get some
    information back from the Records Dept`);