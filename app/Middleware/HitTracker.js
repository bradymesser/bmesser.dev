'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const PageHit = use("App/Models/HitTracking")

class HitTracker {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request }, next) {
    const requestData = {
      date: Date.now(),
      ip: request.ip(),
      page: request.url()
    }
    await PageHit.create(requestData) // Don't need to await this 
    // call next to advance the request
    await next()
  }
}

module.exports = HitTracker