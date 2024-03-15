import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Restaurants extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    res_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    res_name: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    res_desc: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Restaurants',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "res_id" },
        ]
      },
    ]
  });
  }
}
