import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Statement Separators'
}

export default function Page() {
    return (
        <div className='doc-page'>
            <section>
                <div className='implemented-since-version-number'>
                    Available since:&nbsp;&nbsp;<strong>v0.3.0</strong>.
                </div>
                <h2>{metadata.title as String}</h2>
                <p>
                    The statement separator <span className='vikari-punctuation'>,</span> is a comma. This is used to write multiple Vikari
                    statements on the same line. Otherwise, a newline is necessary to separate statements, and each statement must be then
                    written on separate lines.
                </p>
                <p>
                    Statements between commas can be blank, so multiple commas in a row are valid syntax. Also, statements may be optionally
                    terminated by commas to be more explicit that a statement has been terminated. However this is not necessary, as a newline
                    alone also explicitly terminates a statement.
                </p>
                <h2>Examples</h2>
                <p>
                    The following demonstrates the proper use of statement separators.
                </p>
                <div className='vikari-code'>
                    <span className='vikari-comment'>~:Two&nbsp;statements&nbsp;on&nbsp;one&nbsp;line.:~</span><br />
                    <span className='vikari-variable'>foo</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Integer</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>2</span><span className='vikari-punctuation'>,</span>&nbsp;<span className='vikari-punctuation'>:</span><span className='vikari-variable'>foo</span><span className='vikari-punctuation'>:</span><br />
                    <br />
                    <span className='vikari-comment'>~:Terminating&nbsp;a&nbsp;statement.:~</span><br />
                    <span className='vikari-variable'>bar</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Boolean</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>=</span>&nbsp;<span className='vikari-literal'>2</span><span className='vikari-punctuation'>,</span><br />
                    <br />
                    <span className='vikari-comment'>~:Multiple&nbsp;grouped&nbsp;commas&nbsp;is&nbsp;valid&nbsp;syntax.:~</span><br />
                    <span className='vikari-punctuation'>,</span><span className='vikari-punctuation'>,</span><span className='vikari-punctuation'>,</span><span className='vikari-punctuation'>:</span><span className='vikari-variable'>bar</span><span className='vikari-punctuation'>:</span><span className='vikari-punctuation'>,</span><span className='vikari-punctuation'>,</span><span className='vikari-punctuation'>,</span>
                </div>
            </section>
        </div>
    )
}
