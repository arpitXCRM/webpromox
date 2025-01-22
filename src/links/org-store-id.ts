import { defineLink } from "@medusajs/framework/utils"
import Orgs from "../modules/organization"
import StoreModule from "@medusajs/medusa/store"

export default defineLink(
  {linkable:StoreModule.linkable.store,
    isList:true
  },
  Orgs.linkable.organization
)