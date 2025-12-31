//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

//? Output
// { A: 5, C: 3, B: 5, D: 1 }


//TODO initiate empty object 
//TODO check if the response already exist or not 
//TODO if it exists then increment the count 
//TODO if not then initialize with 1

const count = surveyResponses.reduce((table, response ) => {
    if(table[response]){
        table[response] += 1;

    } else{
        table[response] = 1;
    }
    return table;
} , {});
console.log(count);


//another way
const count2 = surveyResponses.reduce((table, response ) => {
    table[response] = (table[response] || 0) + 1;
    return table;
} , {});
console.log(count2);