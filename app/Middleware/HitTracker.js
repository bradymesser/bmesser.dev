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
    const requestData = {
      date: Date.now(),
      ip: request.header("X-Forwarded-For"), // If developing locally this won't work caddy creates this header
      page: request.url(),
    };
    await PageHit.create(requestData);
    // call next to advance the request
    await next();
  }
}

module.exports = HitTracker;
