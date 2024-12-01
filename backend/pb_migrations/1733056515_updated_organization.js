/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2524325754")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "listRule": "",
    "updateRule": "",
    "viewRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2524325754")

  // update collection data
  unmarshal({
    "createRule": "@request.query.token ?= @collection.users.tokenKey",
    "deleteRule": "@request.query.token ?= @collection.users.tokenKey",
    "listRule": "@request.query.token ?= @collection.users.tokenKey",
    "updateRule": "@request.query.token ?= @collection.users.tokenKey",
    "viewRule": "@request.query.token ?= @collection.users.tokenKey"
  }, collection)

  return app.save(collection)
})
