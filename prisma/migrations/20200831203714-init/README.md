# Migration `20200831203714-init`

This migration has been generated by William Sedlacek at 8/31/2020, 1:37:14 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Example" (
    "id" TEXT NOT NULL,
    "hello" TEXT NOT NULL,
PRIMARY KEY ("id")
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200831203714-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,16 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Example {
+  id    String @id @default(cuid())
+  hello String
+}
```


