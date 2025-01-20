import { defineLink } from "@medusajs/framework/utils"
import Orgs from "../modules/orgStore"
import StoreModule from "@medusajs/medusa/store"

export default defineLink(
  StoreModule.linkable.store,
  Orgs.linkable.orgStore
)