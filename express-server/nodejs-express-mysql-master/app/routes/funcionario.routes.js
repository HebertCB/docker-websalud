module.exports = app => {
  const funcionarios = require("../controllers/funcionario.controller.js");

  // Create a new Customer
  app.post("/api/funcionarios", funcionarios.create);

  // Retrieve all Customers
  app.get("/api/funcionarios", funcionarios.findAll);

  // Retrieve a single Customer with customerId
  app.get("/api/funcionarios/:funcionarioId", funcionarios.findOne);

  // Update a Customer with customerId
  app.put("/api/funcionarios/:funcionarioId", funcionarios.update);

  // Delete a Customer with customerId
  app.delete("/api/funcionarios/:funcionarioId", funcionarios.delete);

  // Delete all Customers
  app.delete("/api/funcionarios", funcionarios.deleteAll);
};
