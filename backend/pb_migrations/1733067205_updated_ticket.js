/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2696138989")

  // remove field
  collection.fields.removeById("relation753780855")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2696138989")

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1682349779",
    "hidden": false,
    "id": "relation753780855",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "meeting",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
