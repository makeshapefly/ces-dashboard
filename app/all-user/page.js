
import Layout from '@/components/layout/Layout'
import Link from "next/link"
import { getAllUsersByOrg } from '@/app/db/UserRepository'
import GetUser from '@/app/GetUser'
import { db } from "@/lib/database/db";
import { UserDelete } from '@/components/buttons/UserDelete'

export default async function AllUser() {

    const webUser = await GetUser()

    const users = await getAllUsersByOrg(db, webUser.organisation, webUser.email)

    return (
        <>

            <Layout breadcrumbTitleParent="User" breadcrumbTitle="All Users" attribute="All users" user={webUser}>
                <div className="wg-box">
                    <div className="flex items-center justify-between gap10 flex-wrap">
                        <div className="wg-filter flex-grow">
                            <form className="form-search">
                                <fieldset className="name">
                                    <input type="text" placeholder="Search here..." name="name" tabIndex={2} aria-required="true" required />
                                </fieldset>
                                <div className="button-submit">
                                    <button type="submit"><i className="icon-search" /></button>
                                </div>
                            </form>
                        </div>
                        <Link className="tf-button style-1 w208" href="/add-new-user"><i className="icon-plus" />Add new</Link>
                    </div>
                    <div className="wg-table table-all-user">
                        <ul className="table-title flex gap20 mb-14">
                            <li>
                                <div className="body-title">Name</div>
                            </li>

                            <li>
                                <div className="body-title">Action</div>
                            </li>
                        </ul>
                        <ul className="flex flex-column">
                            {users.map(function (user, i) {
                                return (
                                    <li className="user-item gap14">
                                        <div className="image">
                                            <img src="/images/avatar/user-6.png" alt="" />
                                        </div>
                                        <div className="flex items-center justify-between gap20 flex-grow">
                                            <div className="name">
                                                <Link href="#" className="body-title-2">{user.first_name} {user.last_name}</Link>
                                                <div className="text-tiny mt-3">Admin</div>
                                            </div>
                                            <div className="body-text">{user.email}</div>

                                            <div className="list-icon-function">
                                                <div className="item eye">
                                                    <i className="icon-eye" />
                                                </div>
                                                <div className="item edit">
                                                    <i className="icon-edit-3" />
                                                </div>
                                                <div className="item trash">
                                                    <UserDelete user={user.id}/>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="divider" />
                    <div className="flex items-center justify-between flex-wrap gap10">
                        <div className="text-tiny">Showing 10 entries</div>
                        <ul className="wg-pagination">
                            <li>
                                <Link href="#"><i className="icon-chevron-left" /></Link>
                            </li>
                            <li>
                                <Link href="#">1</Link>
                            </li>
                            <li className="active">
                                <Link href="#">2</Link>
                            </li>
                            <li>
                                <Link href="#">3</Link>
                            </li>
                            <li>
                                <Link href="#"><i className="icon-chevron-right" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </Layout>
        </>
    )
}