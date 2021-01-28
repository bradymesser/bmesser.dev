'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HitTrackingSchema extends Schema {
  up () {
    this.create('hit_trackings', (table) => {
      table.increments()
      table.date("date")
      table.string("ip")
      table.string("page")
      table.timestamps()
    })
  }

  down () {
    this.drop('hit_trackings')
  }
}

module.exports = HitTrackingSchema
