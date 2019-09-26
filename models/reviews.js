module.exports = function(sequelize, DataTypes) {
  // Creates a "reviews" model that matches up with DB
  var Reviews = sequelize.define("reviews", {
    reviewId: DataTypes.STRING,
    userId: DataTypes.STRING,
    businessId: DataTypes.STRING,
    date: DataTypes.STRING,
    text: DataTypes.STRING,
    stars: DataTypes.INTEGER,
    useful: DataTypes.INTEGER,
    funny: DataTypes.INTEGER,
    cool: DataTypes.INTEGER
  });

  return Reviews;
};
