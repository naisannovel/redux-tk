const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const services = [
  { id: 1, name:'Internal Transmission Repair'},
  { id: 2, name:'Wheel Alignment Special'},
  { id: 3, name:'Brake Fluid Flush Service'},
  { id: 4, name:'Engine Coolant Inspection'}
];

app.get("/api/services", (req, res) => {
  res.json(services);
});

app.post("/api/services", (req, res) => {
  const service = { ...req.body };
  services.push(service);

  res.json(service);
});

app.patch("/api/services/:id", (req, res) => {
  const index = services.findIndex(service => service.id === parseInt(req.params.id));
  services[index] = req.body;
  res.json(req.body);
});

app.listen(9001, () => {
  console.log("Node server started on port 9001.");
});
