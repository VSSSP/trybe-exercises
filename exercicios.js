// Exercicio 1

// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// console.log(planetDistanceFromSun(venus)); // B
// console.log(planetDistanceFromSun(jupiter)); // C
// correto

// Exercicio 2

// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // C
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // B

// Exercicio 3

// const getPlanet = () => {
//     setTimeout(() => {
//     const mars = {
//       name: "Mars",
//       distanceFromSun: {
//         value: 227900000,
//         measurementUnit: "kilometers",
//       },
//     };
//     console.log("Returned planet: ", mars);
// }, 4000)
//   };
  
//   getPlanet(); // imprime Marte depois de 4 segundos

// Exercicio 4

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
  
//     const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo

// const temperature = (callback, time) => {
//     setTimeout(() => console.log(`Mars temperature is: ${callback} degree Celsius`), time);
// }; // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// temperature(getMarsTemperature(), messageDelay());

// Exercicio 5 

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// const sendMarsTemperature = (callback) => console.log(callback);

// sendMarsTemperature(temperatureInFahrenheit(getMarsTemperature(toFahrenheit))); // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature(greet(getMarsTemperature())); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

// Exercicio 6 

const messageDelay = () => Math.floor(Math.random() * 1000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

const sendMarsTemperature = (sucess, error) => {
    const currentTemperature = getMarsTemperature();
    const messageSucessfulltSent = Math.random() <= 0.5;
    setTimeout(() => {
        messageSucessfulltSent ? sucess(currentTemperature) : error('Robot busy');
    }, messageDelay())
}

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);