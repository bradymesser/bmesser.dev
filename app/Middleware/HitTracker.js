"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const PageHit = use("App/Models/HitTracking");

class HitTracker {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request }, next) {
    const tempIP = request.ip();
    const headers = request.all();
    const requestData = {
      date: Date.now(),
      ip: request.ip(),
      page: request.url(),
    };
    console.log(tempIP, headers);
    await PageHit.create(requestData);
    // call next to advance the request
    await next();
  }
}

module.exports = HitTracker;
