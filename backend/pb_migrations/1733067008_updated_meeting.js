/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1682349779")

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2696138989",
    "hidden": false,
    "id": "relation753780855",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "agenda",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1543981623",
    "hidden": false,
    "id": "relation1902735506",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "participants",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file849144196",
    "maxSelect": 1,
    "maxSize": 50000000,
    "mimeTypes": [
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/msword",
      "text/plain"
    ],
    "name": "transcription",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1682349779")

  // remove field
  collection.fields.removeById("relation753780855")

  // update field
  collection.fields.addAt(1, new Field({
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

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file849144196",
    "maxSelect": 1,
    "maxSize": 50000000,
    "mimeTypes": [
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/msword",
      "text/plain"
    ],
    "name": "transcription",
    "presentable": false,
    "protected": false,
    "required": true,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
