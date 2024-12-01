/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2524325754")

  // update collection data
  unmarshal({
    "listRule": "  @request.query.password ?= @collection.users.password",
    "viewRule": "@request.query.password ?= @collection.users.password"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2524325754")

  // update collection data
  unmarshal({
    "listRule": "@request.query.password = '11111111'",
    "viewRule": "@request.query.password = '11111111'"
  }, collection)

  return app.save(collection)
})
