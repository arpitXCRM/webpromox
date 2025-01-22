import { model } from "@medusajs/framework/utils"

const Organization = model.define("organization", {
  id: model.id().primaryKey(),
  org: model.text(),
  storeId: model.array()
})

export default Organization;