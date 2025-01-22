import { Migration } from '@mikro-orm/migrations';

export class Migration20250121122927 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table if not exists "organization" ("id" text not null, "org" text not null, "storeId" text[] not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "organization_pkey" primary key ("id"));');
    this.addSql('CREATE INDEX IF NOT EXISTS "IDX_organization_deleted_at" ON "organization" (deleted_at) WHERE deleted_at IS NULL;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "organization" cascade;');
  }

}
