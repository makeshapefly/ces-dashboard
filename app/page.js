import Layout from '@/components/layout/Layout'
import GetUser from '@/app/GetUser'

export default async function Home() {
    const webUser = await GetUser()

    return (
        <>
            <Layout user={webUser}>
                <div className="tf-section-4 mb-30">

                </div>
                <div className="tf-section-5 mb-30">

                </div>
                <div className="tf-section-6 mb-30">

                </div>
                <div className="tf-section-3">

                </div>
            </Layout>
        </>
    )
}