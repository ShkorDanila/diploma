/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2524325754")

  // update collection data
  unmarshal({
    "createRule": "@collection.users.tokenKey ?= @request.query.token",
    "deleteRule": "@collection.users.tokenKey ?= @request.query.token",
    "listRule": "@collection.users.tokenKey ?= @request.query.token",
    "updateRule": "@collection.users.tokenKey ?= @request.query.token",
    "viewRule": "@collection.users.tokenKey ?= @request.query.token"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2524325754")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": "",
    "updateRule": null,
    "viewRule": ""
  }, collection)

  return app.save(collection)
})
