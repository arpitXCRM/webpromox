import { model } from "@medusajs/framework/utils"

const Custom = model.define("OrgStore", {
  id: model.id().primaryKey(),
  org: model.text(),
})

export default Custom;