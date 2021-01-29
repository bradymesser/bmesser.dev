"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class IpLogsSchema extends Schema {
  up() {
    this.create("ip_logs", (table) => {
      table.increments();
      table.date("date");
      table.string("ip");
      table.integer("pageID");
      table.timestamps();
    });
  }

  down() {
    this.drop("ip_logs");
  }
}

module.exports = IpLogsSchema;
