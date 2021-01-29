"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const PageHit = use("App/Models/HitTracking");
const IPLog = use("App/Models/IpLog");

class HitTracker {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request }, next) {
    const page = await PageHit.findOrCreate({ page: request.url() });
    page.count += 1;
    await page.save();

    const ipData = {
      date: Date.now(),
      ip: request.header("X-Forwarded-For"), // If developing locally this won't work caddy creates this header
      pageID: page.primaryKeyValue,
    };
    await IPLog.create(ipData);
    await next();
  }
}

module.exports = HitTracker;
