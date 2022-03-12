const { profile, user } = require("../../models");

//  get data profile user
exports.getProfile = async (req, res) => {
  try {
    const dataProfile = await profile.findAll({
      include: {
        model: user,
        as: "user",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["idUser", "createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "Success",
      dataProfile,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
    });
  }
};

//  add profle user
exports.addProfile = async (req, res) => {
  try {
    const newProfile = req.body;
    await profile.findAll(newProfile);
    res.send({
      status: "Success",
      newProfile,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
    });
  }
};
