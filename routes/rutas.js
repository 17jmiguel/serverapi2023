import express from 'express'
//Voy a separar y personalizar las rutas de cada servicio de la API

export let rutas=express.Router()

rutas.get('/buscarhabitaciones', function (req, res) {
    res.send('estoy buscando todas las habitaciones')
  })
  
rutas.get('/buscarhabitacion', function (req, res) {
      res.send('estoy buscando una habitacion')
    })
  
rutas.post('/registrarhabitacion', function (req, res) {
      res.send('estoy registrando una habitacion')
    })
  
rutas.put('/editandohabitacion', function (req, res) {
      res.send('estoy actualizando una habitacion')
    })
  
    //reservas
  
rutas.get('/buscarreserva', function (req, res) {
      res.send('estoy buscando una reserva')
    })
  
rutas.get('/buscarreservaid', function (req, res) {
      res.send('estoy buscando una reserva por id')
    })
  
rutas.post('/registrarreserva', function (req, res) {
      res.send('estoy estoy registrando una reserva')
    })
  
rutas.put('/editarreserva', function (req, res) {
      res.send('estoy editando una reserva')
    })
  
rutas.put('/eliminarreserva', function (req, res) {
      res.send('estoy eliminando una reserva')
    })