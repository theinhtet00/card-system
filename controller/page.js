import { Staff } from "../Model/server";

const home = async (req, res) => {
  const staffs = await Staff.findAll();
  res.render("home", {
    staffs,
  });
};

const create = (req, res) => {
  res.render("create");
};

const store = async (req, res) => {
  const { StaffName, StaffCode } = req.body;
  const staff = await Staff.create({
    StaffName,
    StaffCode,
  });
  res.redirect("/");
};

const edit = async (req, res) => {
  const id = req.params.id;
  const staff = await Staff.findAll({ where: { StaffId: id } });
  res.render("edit", {
    staff: staff[0],
  });
};

const update = async (req, res) => {
  const id = req.params.id;
  const { StaffName, StaffCode } = req.body;
  const staff = await Staff.update(
    {
      StaffName,
      StaffCode,
    },
    { where: { staffId: id } }
  );
  res.redirect("/");
};

const destroy = async (req, res) => {
  const id = req.params.id;
  const staff = await Staff.destroy({ where: { staffId: id } });
  res.redirect("/");
};

module.exports = {
  home,
  create,
  store,
  edit,
  update,
  destroy,
};
