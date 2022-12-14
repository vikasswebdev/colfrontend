module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8546ab2fa8791faf28228ab0bb199ea7'),
  },
});
