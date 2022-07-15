const {faker} = require("@faker-js/faker");
const express = require("express");
const app = express();
const port = 8000;

const users = [];

class User{
  constructor(){
    this._id = faker.datatype.uuid(),
    this.firstName = faker.name.firstName(),
    this.lastName = faker.name.lastName(),
    this.phoneNumber = faker.phone.number(),
    this.email = faker.internet.email(),
    this.password = faker.internet.password()
  }
}

const companies = [];

class Company{
  constructor(){
    this._id = faker.datatype.uuid(),
    this.name = faker.company.companyName(),
    this.address = { 
                      street : faker.address.streetAddress(), 
                      city : faker.address.city(),
                      state : faker.address.state(),
                      zipCode : faker.address.zipCodeByState(),
                      country : faker.address.country()
                    }
  }
}

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  console.log("PATH CALLED --> ","/api");
  res.json({ message: "Hello World" });
});

//Create a new User
app.post("/api/users/new", (req, res) => {
  console.log("PATH CALLED --> ","/api/users/new");
  let user = new User();
  users.push(user);
  res.json(user);
});

//Create a new Company
app.post("/api/company/new", (req, res) => {
  console.log("PATH CALLED --> ","/api/company/new");
  let company = new Company();
  companies.push(company);
  res.json(company);
});

//response with the latest created Company and latest created User
app.get("/api/users/company", (req, res) => {
  console.log("PATH CALLED --> ","/api/users/company");
  res.json( {'User':users[users.length-1], 'Company':companies[companies.length-1]} );
});

//Get All Users
app.get("/api/users", (req, res) => { 
  console.log("PATH CALLED --> ","/api/users");
  res.json( users );
});

//Get All Companies
app.get("/api/company", (req, res) => { 
  console.log("PATH CALLED --> ","/api/company");
  res.json( companies );
});

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const server = app.listen(// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`)));


