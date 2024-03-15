import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _Foods from  "./Foods.js";
import _Orders from  "./Orders.js";
import _Restaurants from  "./Restaurants.js";
import _Users from  "./Users.js";
import _food_type from  "./food_type.js";
import _like_res from  "./like_res.js";
import _rate_res from  "./rate_res.js";
import _sub_food from  "./sub_food.js";

export default function initModels(sequelize) {
  const Foods = _Foods.init(sequelize, DataTypes);
  const Orders = _Orders.init(sequelize, DataTypes);
  const Restaurants = _Restaurants.init(sequelize, DataTypes);
  const Users = _Users.init(sequelize, DataTypes);
  const food_type = _food_type.init(sequelize, DataTypes);
  const like_res = _like_res.init(sequelize, DataTypes);
  const rate_res = _rate_res.init(sequelize, DataTypes);
  const sub_food = _sub_food.init(sequelize, DataTypes);

  Foods.belongsToMany(Users, { as: 'user_id_Users', through: Orders, foreignKey: "food_id", otherKey: "user_id" });
  Restaurants.belongsToMany(Users, { as: 'user_id_Users_like_res', through: like_res, foreignKey: "res_id", otherKey: "user_id" });
  Restaurants.belongsToMany(Users, { as: 'user_id_Users_rate_res', through: rate_res, foreignKey: "res_id", otherKey: "user_id" });
  Users.belongsToMany(Foods, { as: 'food_id_Foods', through: Orders, foreignKey: "user_id", otherKey: "food_id" });
  Users.belongsToMany(Restaurants, { as: 'res_id_Restaurants', through: like_res, foreignKey: "user_id", otherKey: "res_id" });
  Users.belongsToMany(Restaurants, { as: 'res_id_Restaurants_rate_res', through: rate_res, foreignKey: "user_id", otherKey: "res_id" });
  Orders.belongsTo(Foods, { as: "food", foreignKey: "food_id"});
  Foods.hasMany(Orders, { as: "Orders", foreignKey: "food_id"});
  sub_food.belongsTo(Foods, { as: "food", foreignKey: "food_id"});
  Foods.hasMany(sub_food, { as: "sub_foods", foreignKey: "food_id"});
  like_res.belongsTo(Restaurants, { as: "re", foreignKey: "res_id"});
  Restaurants.hasMany(like_res, { as: "like_res", foreignKey: "res_id"});
  rate_res.belongsTo(Restaurants, { as: "re", foreignKey: "res_id"});
  Restaurants.hasMany(rate_res, { as: "rate_res", foreignKey: "res_id"});
  Orders.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(Orders, { as: "Orders", foreignKey: "user_id"});
  like_res.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(like_res, { as: "like_res", foreignKey: "user_id"});
  rate_res.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(rate_res, { as: "rate_res", foreignKey: "user_id"});
  Foods.belongsTo(food_type, { as: "type", foreignKey: "type_id"});
  food_type.hasMany(Foods, { as: "Foods", foreignKey: "type_id"});

  return {
    Foods,
    Orders,
    Restaurants,
    Users,
    food_type,
    like_res,
    rate_res,
    sub_food,
  };
}
