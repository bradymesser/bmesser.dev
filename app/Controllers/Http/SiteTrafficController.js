"use strict";
const SiteTraffic = use("App/Models/HitTracking");

class SiteTrafficController {
  async getTrafficView({ response, view }) {
    const stats = await SiteTraffic.all();
    var statDictionary = [];
    let iterableArray = [];
    stats.rows.forEach((element, index) => {
      statDictionary[element.page]
        ? statDictionary[element.page]++
        : (statDictionary[element.page] = 1);
    });

    // Need to find a better way to do this, edge templates don't like dictionaries
    // Maybe a .map .filter or .reduce?
    for (var key in statDictionary) {
      iterableArray.push({ page: key, count: statDictionary[key] });
    }

    response.send(
      view.render("traffic", {
        totalTraffic: await SiteTraffic.getCount(),
        siteStats: iterableArray,
      })
    );
  }
}

module.exports = SiteTrafficController;
