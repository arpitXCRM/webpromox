import { Migration } from '@mikro-orm/migrations';

export class Migration20250116135546 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table if not exists "org_store" ("id" text not null, "org" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "org_store_pkey" primary key ("id"));');
    this.addSql('CREATE INDEX IF NOT EXISTS "IDX_org_store_deleted_at" ON "org_store" (deleted_at) WHERE deleted_at IS NULL;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "org_store" cascade;');
  }

}
