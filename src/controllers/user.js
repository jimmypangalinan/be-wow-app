const { user, profile } = require("../../models");

// get users
exports.getUsers = async (req, res) => {
  try {
    const dataUser = await user.findAll();

    res.send({
      status: "Succes",
      message: "Get Data User Succces",
      user: dataUser,
    });
  } catch (error) {
    console.log(error);
  }
};

// get user
exports.getUser = async (req, res) => {
  try {
    const userExist = await user.findOne({
      where: {
        id: req.params.id,
      },
      include: {
        model: profile,
        as: "profile",
        attributes: {
          exclude: ["idUser", "createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (!userExist) {
      res.send({
        status: "Data No Exist",
      });
    } else {
      res.status(200).send({
        status: "Succes",
        user: userExist,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({
      status: "Bad Request",
    });
  }
};

// update user by id
exports.updateUser = async (req, res) => {
  try {
    const newUpdate = req.body;
    const updateUser = await user.update(newUpdate, {
      where: {
        id: req.params.id,
      },
    });

    if (!dataUser) {
      res.send({
        status: "Data not found",
      });
    } else {
      res.send({
        status: "Success",
        message: "Update Data Success",
        details: updateUser,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// delete user by id
exports.deleteUser = async (req, res) => {
  try {
    const dataUser = await user.destroy({
      where: {
        id: req.params.id,
      },
      include: {
        model: profile,
        as: "profile",
        attributes: {
          exclude: ["idUser", "createdAt", "updatedAt"],
        },
      },
    });

    if (!dataUser) {
      res.send({
        status: "Data not found",
      });
    } else {
      res.send({
        status: "Success",
        message: "Delete User Success",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
