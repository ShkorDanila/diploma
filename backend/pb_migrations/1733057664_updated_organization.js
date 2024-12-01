/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2524325754")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != ''",
    "deleteRule": "@request.auth.id != ''",
    "listRule": "@request.auth.id != ''",
    "updateRule": "@request.auth.id != ''",
    "viewRule": "@request.auth.id != ''"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2524325754")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "listRule": "  @request.query.password ?= @collection.users.password",
    "updateRule": "",
    "viewRule": "@request.query.password ?= @collection.users.password"
  }, collection)

  return app.save(collection)
})