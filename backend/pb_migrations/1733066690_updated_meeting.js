/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1682349779")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "date2363064568",
    "max": "",
    "min": "",
    "name": "start_datetime",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // add field
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
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1682349779")

  // remove field
  collection.fields.removeById("date2363064568")

  // remove field
  collection.fields.removeById("file849144196")

  return app.save(collection)
})
