const dotenv = require("dotenv");

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(process.env.NODE_ENV == 'development') { 
  dotenv.config();
}

module.exports = {
  secret: process.env.SECRET,
  expiresIn: process.env.EXPIRESIN,
  stringConnection: process.env.DATABASE,
  port:process.env.PORT,
};
