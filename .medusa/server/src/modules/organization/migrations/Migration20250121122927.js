"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250121122927 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250121122927 extends migrations_1.Migration {
    async up() {
        this.addSql('create table if not exists "organization" ("id" text not null, "org" text not null, "storeId" text[] not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "organization_pkey" primary key ("id"));');
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_organization_deleted_at" ON "organization" (deleted_at) WHERE deleted_at IS NULL;');
    }
    async down() {
        this.addSql('drop table if exists "organization" cascade;');
    }
}
exports.Migration20250121122927 = Migration20250121122927;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTAxMjExMjI5MjcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9vcmdhbml6YXRpb24vbWlncmF0aW9ucy9NaWdyYXRpb24yMDI1MDEyMTEyMjkyNy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBa0Q7QUFFbEQsTUFBYSx1QkFBd0IsU0FBUSxzQkFBUztJQUVwRCxLQUFLLENBQUMsRUFBRTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMscVNBQXFTLENBQUMsQ0FBQztRQUNuVCxJQUFJLENBQUMsTUFBTSxDQUFDLG1IQUFtSCxDQUFDLENBQUM7SUFDbkksQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FFRjtBQVhELDBEQVdDIn0=