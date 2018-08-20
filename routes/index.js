var request = require('request');

var getElevation = (req,res) => {
    var lan = req.query.lan;
    var lng = req.query.lng;
    request({
        url:`https://maps.googleapis.com/maps/api/elevation/json?locations=${lan},${lng}&key=AIzaSyDgRrVctuNSkH5H0kynTmjjrDu1DEuMOxI`,
        json: true
    }, (err,result,body) => {
        elevationPnt = body.results[0].elevation;
        console.log(elevationPnt);
    })
}

var getHomepage = (req,res) =>{
    res.render('index.hbs',{});
}

var getMap = (req,res) =>{
    res.render('map.hbs',{});
}

var getBestSpots = (locations, targetArea) => {
  var areaList = [{
    numOfTiles,
    area
  }];
  for (var locationsIndex = 0; locationsIndex < locations.length; locationsIndex++) {
    var numOfTilesInRange = 0;

    for (var coordinate = 0; coordinate < locations[locationsIndex].length; coordinate++)
    {
      if !(coordinate.lat < targetArea[0].lat || coordinate.lat > targetArea[1].lat || coordinate.lng < targetArea[0].lng || coordinate.lng > targetArea[1].lng)
        // In range

        numOfTilesInRange++;
        areaList[locationsIndex].area.push(coordinate)
      }
      areaList[locationsIndex].numOfTiles = numOfTilesInRange

  }

}

[]
    module.exports = {
        getElevation,
        getHomepage,
        getMap,
        getBestSpots
    }
