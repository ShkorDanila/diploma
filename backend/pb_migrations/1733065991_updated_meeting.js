/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1682349779")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1543981623",
    "hidden": false,
    "id": "relation1902735506",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "participants",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1682349779")

  // remove field
  collection.fields.removeById("relation1902735506")

  return app.save(collection)
})
