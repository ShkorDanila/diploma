/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2524325754")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.verified = true",
    "deleteRule": "@request.auth.verified = true",
    "updateRule": "@request.auth.verified = true"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2524325754")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "updateRule": ""
  }, collection)

  return app.save(collection)
})
