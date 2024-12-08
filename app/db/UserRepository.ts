import { Kysely } from 'kysely'
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