/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1682349779")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "bool3056497810",
    "name": "is_satisfied",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1682349779")

  // remove field
  collection.fields.removeById("bool3056497810")

  return app.save(collection)
})
