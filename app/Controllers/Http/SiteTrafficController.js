"use strict";
const SiteTraffic = use("App/Models/HitTracking");

class SiteTrafficController {
  async getTrafficView({ response, view }) {
    const stats = await SiteTraffic.all();
    var statDictionary = [];
    let iterableArray = [];
    let visitorDictionary = []; // Used to count unique visitors
    stats.rows.forEach((element, index) => {
      statDictionary[element.page]
        ? statDictionary[element.page]++
        : (statDictionary[element.page] = 1);
      visitorDictionary[element.ip] = 1; // Value doesn't matter
    });

    // Need to find a better way to do this, edge templates don't like dictionaries
    // Maybe a .map .filter or .reduce?
    for (var key in statDictionary) {
      iterableArray.push({ page: key, count: statDictionary[key] });
    }
    response.send(
      view.render("traffic", {
        totalTraffic: await SiteTraffic.getCount(),
        uniqueVisitors: Object.keys(visitorDictionary).length,
        siteStats: iterableArray,
      })
    );
  }
}

module.exports = SiteTrafficController;
