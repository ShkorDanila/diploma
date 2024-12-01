/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1682349779")

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3223787809",
    "hidden": false,
    "id": "relation2197559420",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "office_occupationId",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1682349779")

  // remove field
  collection.fields.removeById("relation2197559420")

  return app.save(collection)
})
