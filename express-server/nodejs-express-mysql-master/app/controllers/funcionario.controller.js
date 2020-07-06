const Funcionario = require("../models/funcionario.model.js");

// Create and Save a new Funcionario
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Funcionario
  const funcionario = new Funcionario({
    dni: req.body.dni,
    nombre: req.body.nombre,
    sede: req.body.sede
  });

  // Save Funcionario in the database
  Funcionario.create(funcionario, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Funcionario."
      });
    else res.send(data);
  });
};

// Retrieve all Funcionario from the database.
exports.findAll = (req, res) => {
  Funcionario.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Funcionarios."
      });
    else res.send(data);
  });
};

// Find a single Funcionario with a funcionarioId
exports.findOne = (req, res) => {
  Funcionario.findById(req.params.funcionarioId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Funcionario with id ${req.params.funcionarioId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Funcionario with id " + req.params.funcionarioId
        });
      }
    } else res.send(data);
  });
};

// Update a Funcionario identified by the funcionarioId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Funcionario.updateById(
    req.params.funcionarioId,
    new Funcionario(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Funcionario with id ${req.params.funcionarioId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Funcionario with id " + req.params.funcionarioId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Funcionario with the specified funcionarioId in the request
exports.delete = (req, res) => {
  Funcionario.remove(req.params.funcionarioId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Funcionario with id ${req.params.funcionarioId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Funcionario with id " + req.params.funcionarioId
        });
      }
    } else res.send({ message: `Funcionario was deleted successfully!` });
  });
};

// Delete all Funcionarios from the database.
exports.deleteAll = (req, res) => {
  Funcionario.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Funcionarios."
      });
    else res.send({ message: `All Funcionarios were deleted successfully!` });
  });
};
