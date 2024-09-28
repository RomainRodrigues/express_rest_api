const express = require('express')
const router = express.Router()

router.get('/', getBasic)
function getBasic(req, res, next) {
    try {
      res.status(200).json('get basic /')
    } catch (error) {
      console.error(`>>> ${error} ${error.stack}`)
      res.status(404).send(`Ressource Not Found`)
    }
  }


  

router.get('/:name',getByName)
function getByName(req, res, next) {
    try {
      const name = req.params.name;
      console.log(`controller tries to get by the name of ${name}, ${req.params}`)
      res.status(200).json('get by name')
    } catch (error) {
      console.error(`>>> ${error} ${error.stack}`)
      res.status(404).send(`Ressource Not Found`)
    }
  }


router.patch('/:name',patchByName)
function patchByName(req, res, next) {
    try {
      const name = req.params.name;
      console.log(`controller tries to patch by the name of ${name}, ${req.params}`)
      res.status(200).json('patch by name')
    } catch (error) {
      console.error(`>>> ${error} ${error.stack}`)
      res.status(404).send(`Ressource Not Found`)
    }
  }
  


router.delete('/:name',deleteByName)
function deleteByName(req, res, next) {
    try {
      const name = req.params.name;
      console.log(`controller tries to delete by the name of ${name}, ${req.params}`)
      res.status(202).json('delete by name')
    } catch (error) {
      console.error(`>>> ${error} ${error.stack}`)
      res.status(404).send(`Ressource Not Found`)
    }
  }


router.post('/', add)
function add(req, res, next){
    try {
      console.log(`controller tries to add ${req.body}`)
      res.status(201).json('add')
    } catch (error) {
      console.error(`>>> ${error} ${error.stack}`)
      res.status(500).send('Internal Server Error')
    }
  }


module.exports = router