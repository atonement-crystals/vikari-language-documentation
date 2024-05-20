import { Metadata } from 'next'

export const metadata: Metadata = {
    title: '404: This page could not be found'
}

export default function Page() {
    return (
        <div className='doc-page'>
            <section>
                <p>
                    <strong>404:</strong> This page could not be found.
                </p>
            </section>
        </div>
    )
}
