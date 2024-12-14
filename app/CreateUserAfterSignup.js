import { insertUser } from '@/app/db/UserRepository'
import { findRoleById } from "@/app/db/RoleRepository"
import { db } from "@/lib/database/db";
import { userToWebUser } from "@/app/db/User"

export default async function CreateUserAfterSignup(user) {
    let webUser = null

        const insertedUser = await insertUser(db, {
            first_name: firstName,
            last_name: lastName,
            email: email,
            created_at: '2024-12-06',
            organisation: 1
        })

        webUser = userToWebUser(insertedUser)

    //get user's role
    const role = await findRoleById(db, webUser.id)
    if (role) {
        webUser.role = role.role
    }
    
    //console.log("webUser: " + JSON.stringify(webUser))

    return webUser

}