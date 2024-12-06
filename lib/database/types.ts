import { Generated, Selectable, Insertable, Updateable } from "kysely";

export interface Database {
  users: UsersTable;
  organisation: OrganisationTable;
}

export interface UsersTable {
  id: Generated<string>;
  first_name: string;
  last_name: string;
  email: string;
  organisation: number;
  created_at: Date;
}

export interface OrganisationTable {
  id: Generated<number>;
  org_name: string;
  created_at: Date;
}

export type Organisation = Selectable<OrganisationTable>
export type NewOrganisation = Insertable<OrganisationTable>
export type OrganisationUpdate = Updateable<OrganisationTable>

export type User = Selectable<UsersTable>
export type NewUser = Insertable<UsersTable>
export type UserUpdate = Updateable<UsersTable>