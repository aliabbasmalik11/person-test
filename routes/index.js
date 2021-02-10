

const userController = require('../controllers').persons
const commentController = require('../controllers').contacts

module.exports = (app) => {
  app.post('/api/persons', userController.create);
  app.get('/api/persons', userController.list);
  app.post('/api/contacts/:userId/contact', commentController.create);
  app.get('/api/persons/contacts', userController.listWithComment);
  app.get('/api/persons/:userId', userController.getUserDetails);
  app.put('/api/persons/:userId', userController.update);
  app.delete('/api/persons/:userId', userController.destroy);
}
