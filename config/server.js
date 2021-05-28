module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: "https://jinzhu.herokuapp.com",
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '54161cfdf412334a3045a2e31b9c517e'),
    },
  },
  cron: { enabled: false},
});
