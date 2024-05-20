import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Boolean Type'
}

export default function Page() {
    return (
        <div className='doc-page'>
            <section>
                <div className='implemented-since-version-number'>
                    Available since:&nbsp;&nbsp;<strong>v0.8.0</strong>.
                </div>
                <h2>{metadata.title as String}</h2>
                <p>
                    The <span className='monospace'>Boolean</span> type encompasses the literal values <span className='vikari-literal'>true
                    </span> and <span className='vikari-literal'>false</span>. This type inherits from <span className='monospace'>Value</span>.
                    The <span className='monospace'>Boolean</span> type is the return type of <Link href='/docs/-logical-operators'>logical
                    operator expressions</Link>. It is used to evaluate and process boolean logic and comparison expressions.
                </p>

                <h2>Examples</h2>
                <p>
                    The following demonstrates use of the The <span className='monospace'>Boolean</span> type.
                </p>
                <div className='vikari-code'>
                    <span className='vikari-comment'>~:Assignment&nbsp;statements:~</span><br />
                    <span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>true</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='vikari-comment'>~:Untyped&nbsp;variable:~</span><br />
                    <span className='vikari-variable'>foo</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Boolean</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>false</span>&nbsp;<span className='vikari-comment'>~:Typed&nbsp;variable:~</span><br />
                    <span className='vikari-variable'>foo</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Boolean</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>null</span>&nbsp;&nbsp;<span className='vikari-comment'>~:Null&nbsp;Boolean&nbsp;variable:~</span><br />
                    <span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-variable'>bar</span>&nbsp;<span className='vikari-operator'>^</span>&nbsp;<span className='vikari-literal'>true</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className='vikari-comment'>~:Result&nbsp;of&nbsp;a&nbsp;logical&nbsp;expression:~</span><br />
                    <span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-variable'>bar</span>&nbsp;<span className='vikari-operator'>=</span>&nbsp;<span className='vikari-literal'>7</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='vikari-comment'>~:Result&nbsp;of&nbsp;a&nbsp;comparison&nbsp;expression:~</span><br />
                    <br />
                    <span className='vikari-comment'>~:Print&nbsp;statements:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-literal'>true</span><span className='vikari-punctuation'>:</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>&quot;</span>&nbsp;<span className='vikari-literal'>false</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-variable'>bar</span>&nbsp;<span className='vikari-operator'>=</span>&nbsp;<span className='vikari-literal'>3.14</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span>
                </div>
            </section>
        </div>
    )
}
