import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Line Continuations'
}

export default function Page() {
    return (
        <div className='doc-page'>
            <section>
            <div className='implemented-since-version-number'>
                    Available since:&nbsp;&nbsp;<strong>v0.6.0</strong>.
                </div>
                <h2>{metadata.title as String}</h2>
                <p>
                    The line continuation operator <span className='vikari-punctuation'>~</span> is the deletion operator placed at the very end of
                    a line of code. This in effect &quot;deletes&quot; the newline, which is the line terminator for statements in Vikari. This
                    allows a line of code to be continued to the next line. This enables long lines to be written across multiple lines.
                </p>

                <h2>Examples</h2>
                <p>
                    The following demonstrates various ways a statement can be split using the line continuation operator.
                </p>
                <div className='vikari-code'>
                    <span className='vikari-comment'>~:The&nbsp;example&nbsp;statement&nbsp;being&nbsp;split.:~</span><br />
                    <span className='vikari-variable'>foo</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Integer</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>7</span>&nbsp;<span className='vikari-operator'>*</span>&nbsp;<span className='vikari-separator'>[</span><span className='vikari-literal'>5</span>&nbsp;<span className='vikari-operator'>-</span>&nbsp;<span className='vikari-literal'>2</span><span className='vikari-separator'>]</span><br />
                    <br />
                    <span className='vikari-comment'>~:Splitting&nbsp;the&nbsp;statement&nbsp;across&nbsp;two&nbsp;lines.:~</span><br />
                    <span className='vikari-variable'>foo</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Integer</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-punctuation'>~</span><br />
                    <span className='vikari-literal'>7</span>&nbsp;<span className='vikari-operator'>*</span>&nbsp;<span className='vikari-separator'>[</span><span className='vikari-literal'>5</span>&nbsp;<span className='vikari-operator'>-</span>&nbsp;<span className='vikari-literal'>2</span><span className='vikari-separator'>]</span><br />
                    <br />
                    <span className='vikari-comment'>~:Splitting&nbsp;the&nbsp;statement&nbsp;across&nbsp;three&nbsp;lines.:~</span><br />
                    <span className='vikari-variable'>foo</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Integer</span>&nbsp;<span className='vikari-punctuation'>~</span><br />
                    <span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>7</span>&nbsp;<span className='vikari-operator'>*</span>&nbsp;<span className='vikari-punctuation'>~</span><br />
                    <span className='vikari-separator'>[</span><span className='vikari-literal'>5</span>&nbsp;<span className='vikari-operator'>-</span>&nbsp;<span className='vikari-literal'>2</span><span className='vikari-separator'>]</span><br />
                    <br />
                    <span className='vikari-comment'>~:You&nbsp;can&nbsp;include&nbsp;blank&nbsp;lines.:~</span><br />
                    <span className='vikari-variable'>foo</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Integer</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-punctuation'>~</span><br />
                    <span className='vikari-punctuation'>~</span><br />
                    <span className='vikari-literal'>7</span>&nbsp;<span className='vikari-operator'>*</span>&nbsp;<span className='vikari-separator'>[</span><span className='vikari-literal'>5</span>&nbsp;<span className='vikari-operator'>-</span>&nbsp;<span className='vikari-literal'>2</span><span className='vikari-separator'>]</span>
                </div>
            </section>
        </div>
    )
}
