/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("categories", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable().unique();
      table.boolean("is_deleted").notNullable().defaultTo(false);
      table.timestamps(true, true);
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable("categories");
  };