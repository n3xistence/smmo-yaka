import DatabaseMigration from "../../types/DatabaseMigration";
import create from "../../database/functions/create";
import { versionUpdate } from "../../database/functions";
import fetchVersion from "../fetch/fetchVersion";

const installMigration = (event: any, migration: DatabaseMigration) => {
  for (const change of migration.changes) {
    switch (change.type) {
      case "create":
        create(change);
        break;
    }
  }

  versionUpdate(migration.version);
  fetchVersion(event);
};

export default installMigration;
