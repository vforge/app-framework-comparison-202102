module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bf0e4a3b7b99e4934c88a8c881a4ab9b'),
  },
});
