const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/auth.controller');
const oAuthLogin = require('../../middlewares/auth').oAuth;
const {
  login,
  register,
  oAuth,
  refresh,
  sendPasswordReset,
  passwordReset,
} = require('../../validations/auth.validation');

const router = express.Router();

router.route('/register').post(validate(register), controller.register);

router.route('/login').post(validate(login), controller.login);

router.route('/refresh-token').post(validate(refresh), controller.refresh);

router
  .route('/send-password-reset')
  .post(validate(sendPasswordReset), controller.sendPasswordReset);

router
  .route('/reset-password')
  .post(validate(passwordReset), controller.resetPassword);

router
  .route('/facebook')
  .post(validate(oAuth), oAuthLogin('facebook'), controller.oAuth);

router
  .route('/google')
  .post(validate(oAuth), oAuthLogin('google'), controller.oAuth);

module.exports = router;
