/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2524325754")

  // update collection data
  unmarshal({
    "listRule": "@request.query.password = '11111111'",
    "viewRule": "@request.query.password = '11111111'"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2524325754")

  // update collection data
  unmarshal({
    "listRule": "@collection.users.password ?= @request.query.password",
    "viewRule": "@collection.users.password ?= @request.query.password"
  }, collection)

  return app.save(collection)
})
