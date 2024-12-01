/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2524325754")

  // update collection data
  unmarshal({
    "listRule": "@collection.users.tokenKey ?= @request.query.token",
    "updateRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2524325754")

  // update collection data
  unmarshal({
    "listRule": "",
    "updateRule": "@request.query.token != ''"
  }, collection)

  return app.save(collection)
})