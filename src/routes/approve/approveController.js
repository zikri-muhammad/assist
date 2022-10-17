// const bodyParser = require('body-parser')
const Absen = require("../../models/absenModel");


const get = async (req, res) => {
  const data = await Absen.find({type_kehadiran: 'sakit', type_kehadiran: 'cuti', status_acc: 0})
  try {
    res.status(200).json({message: true, data: data});
    
  } catch (error) {
    res.json({ message: err });
    
  }
}


const update = async (req, res) => {
  try {
    const update = await Absen.updateOne(
      { _id: req.params.approveId },
      {
        $set: {
          status_acc: parseInt(req.body.status_acc),
        },
      }
    );
    res.json({message: "updated!"});
  } catch (error) {
    res.json({ message: err });
  }
};

module.exports = {
  get,
  update,
};
