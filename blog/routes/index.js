var express = require('express');
var router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage,  limits: {fileSize: 20 * 1024 * 1024}});
const postController = require('../controllers/post.js');
const userController = require('../controllers/user.js');
const sessionController = require('../controllers/session.js');
// autologout
router.all('*',sessionController.deleteExpiredUserSession);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blog' });
});
// Routes for the resource /session
router.get('/login',    sessionController.new);     // login form
router.post('/login',   sessionController.create);  // create sesion
router.delete('/login', sessionController.destroy); // close sesion
/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/users');
});
//author
router.get('/author', function(req, res, next) {
  res.render('author', { title: 'author' });
});
// Autoload for routes using :postId y userId
router.param('postId', postController.load);
router.param('userId', userController.load);
// Routes for the resource /posts
router.get('/posts', postController.index);
router.get('/posts/:postId(\\d+)', postController.show);
router.get('/posts/new', sessionController.loginRequired,
    postController.new);
router.post('/posts', upload.single('image'), postController.create);
router.get('/posts/:postId(\\d+)/edit', postController.adminOrAuthorRequired,
    postController.edit);
router.put('/posts/:postId(\\d+)', postController.adminOrAuthorRequired,
    upload.single('image'), postController.update);
router.delete('/posts/:postId(\\d+)', postController.adminOrAuthorRequired,
    postController.destroy);
// Route to post attachment
router.get('/posts/:postId(\\d+)/attachment', postController.attachment);
// Routes for the resource /users
router.get('/users', sessionController.adminRequired,
    userController.index);
router.get('/users/:userId(\\d+)', sessionController.adminRequired,
    userController.show);
router.get('/users/new', sessionController.adminRequired,        
    userController.new);
router.post('/users', sessionController.adminRequired,
    userController.create);
router.get('/users/:userId(\\d+)/edit',
    sessionController.loginRequired, sessionController.adminRequired,
    userController.edit);
router.put('/users/:userId(\\d+)', sessionController.loginRequired,
    userController.update);
router.delete('/users/:userId(\\d+)',   
    sessionController.loginRequired, sessionController.adminRequired,
    userController.destroy);
module.exports = router;