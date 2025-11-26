const swaggerAutogen = require("swagger-autogen")();
const outputFile = "./swagger_output.json";
endpointsFiles = ["./index.js"];
swaggerAutogen(outputFile, endpointsFiles);
