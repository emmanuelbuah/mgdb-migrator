import {
  MigrationOptions,
  Migration,
  Migrator,
  SyslogLevels,
} from './migration';

const migrator = new Migrator();

if (process.env.MIGRATE) {
  migrator.migrateTo(process.env.MIGRATE);
}

export { migrator, Migrator, Migration, MigrationOptions, SyslogLevels };
