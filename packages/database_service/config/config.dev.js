const { PORT } = process.env;

module.exports = {
  port: PORT || 4000,
  mongoURI:
    'mongodb://db_user:password1!@website.com:47078/microservice_db'
};
