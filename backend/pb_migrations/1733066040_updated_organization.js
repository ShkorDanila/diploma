/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2524325754")

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1682349779",
    "hidden": false,
    "id": "relation1234508244",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "meetingIds",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2524325754")

  // remove field
  collection.fields.removeById("relation1234508244")

  return app.save(collection)
})
