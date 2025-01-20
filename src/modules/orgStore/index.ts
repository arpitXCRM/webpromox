import { Module } from "@medusajs/framework/utils"
import OrgStoreModuleService from "./service"

export const ORGSTORE_MODULE = "orgStore"

export default Module(ORGSTORE_MODULE, {
  service: OrgStoreModuleService,
})