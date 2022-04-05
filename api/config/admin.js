module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e48297350f44670e641d3a92edee154d'),
  },
});
