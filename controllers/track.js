const vehicleData = require("../helper/routes.json");

const getTrackController = async (req, res) => {
  let trackNo = req.params.trackNo - 1;
  if (trackNo <= 0 || trackNo >= vehicleData.length) trackNo = 0;
  const currentTrack = vehicleData.routes[trackNo];
  res.status(200).send(currentTrack);
};

module.exports = {
    getTrackController,
  };
  