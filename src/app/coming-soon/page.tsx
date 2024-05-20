import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Planned Language Feature'
}

export default function Page() {
    return (
        <div className='doc-page'>
            <section>
                <h2>{metadata.title as String}</h2>
                <p>
                    This page is coming soon!
                </p>
            </section>
        </div>
    )
}
