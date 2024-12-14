import { Kysely } from 'kysely'
import { expressionBuilder } from 'kysely'
import { User, NewUser, UserUpdate, Database } from '@/lib/database/types'

export async function findUserByEmail(
    db: Kysely<Database>,
    email: string
): Promise<User | undefined> {
    const user = await db
        .selectFrom('users')
        .innerJoin('organisation', 'organisation.id', 'users.organisation')
        .selectAll()
        .where('email', '=', email)
        .select(['users.id', 'users.first_name', 'users.last_name', 'users.email', 'organisation.org_name'])
        .executeTakeFirst()

    return user
}

/*export async function getAllUsersByOrg(
    db: Kysely<Database>,
    org: number
): Promise<User[] | undefined> {
    const user = await db
        .selectFrom('users')
        .selectAll()
        .where('organisation', '=', org)
        .execute()

    return user
}*/

export async function getAllUsersByOrg(
    db: Kysely<Database>,
    org: number,
    email: string
): Promise<User[] | undefined> {
    const eb = expressionBuilder<Database, 'users'>()
    const user = await db
        .selectFrom('users')
        .selectAll()
        .where(({ eb }) =>
            eb('organisation', '=', org).and(
                eb('email', '!=', email)
            )
        )
        .execute()

    return user
}

/* create user after first sign-in/sign-up */
export async function insertUser(
    db: Kysely<Database>,
    user: NewUser
): Promise<User> {
    const insertedUser = await db
        .insertInto('users')
        .values(user)
        .returningAll()
        .executeTakeFirstOrThrow()

    return insertedUser
}

export async function deleteUserById(db: Kysely<Database>, id: string) {
    const result = await db
        .deleteFrom('users')
        .where('id', '=', id)
        .executeTakeFirst()

    return result.numDeletedRows
}
