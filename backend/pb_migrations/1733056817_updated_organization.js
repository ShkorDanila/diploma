/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2524325754")

  // update collection data
  unmarshal({
    "createRule": "@collection.users.tokenKey ?= @request.query.token",
    "listRule": "",
    "updateRule": "@request.query.token != ''",
    "viewRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2524325754")

  // update collection data
  unmarshal({
    "createRule": "",
    "listRule": "@request.query.token != ''",
    "updateRule": "",
    "viewRule": "@collection.users.tokenKey ?= @request.query.token"
  }, collection)

  return app.save(collection)
})
