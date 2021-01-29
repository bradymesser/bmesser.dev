"use strict";
const SiteTraffic = use("App/Models/HitTracking");
const IPLog = use("App/Models/IpLog");

class SiteTrafficController {
  async getTrafficView({ request, response, view }) {
    const stats = await SiteTraffic.all();
    const totalTraffic = stats.rows.reduce(
      (total, curr) => total + curr.count,
      0
    );
    const uniqueVisitors = await IPLog.query().countDistinct("ip");
    response.send(
      view.render("traffic", {
        totalTraffic,
        uniqueVisitors: uniqueVisitors[0]["count(distinct `ip`)"],
        siteStats: stats.toJSON(),
      })
    );
  }
}

module.exports = SiteTrafficController;
