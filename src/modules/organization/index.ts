import { Module } from "@medusajs/framework/utils"
import OrgService from "./service"

export const ORGANIZATION_MODULE = "organization"

export default Module(ORGANIZATION_MODULE, {
  service: OrgService,
})