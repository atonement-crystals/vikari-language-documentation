import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Logical Operators'
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
                    Vikari supports the following boolean logic operators:
                </p>
                <table>
                    <tbody>
                        <tr><th>Operator Name</th><th>Symbol</th><th>Function</th></tr>
                        <tr><td>And</td><td><span className='vikari-operator'>^</span></td><td>Binary operator that applies the AND operation.</td></tr>
                        <tr><td>Or</td><td><span className='vikari-operator'>&quot;</span></td><td>Binary operator that applies the OR operation.</td></tr>
                        <tr><td>Not</td><td><span className='vikari-operator'>&apos;</span></td><td>Unary operator that applies the NOT operation.</td></tr>
                    </tbody>
                </table>
                <p>
                    Rather than using <span className='vikari-operator'>&apos;</span> and <span className='vikari-operator'>&quot;</span> for
                    quotation purposes, Vikari uses them as logical operators. Backtick tokens with a pattern of <span className='vikari-literal'>`
                    </span> and <span className='vikari-literal'>``</span> etc. are used instead for quotations of character and string literals,
                    respectively.
                </p>
                <p>
                    Logical operator expressions require operands with the <span className='monospace'>Boolean</span> type, and also have a return
                    type of <span className='monospace'>Boolean</span>. This means they can have operands that are
                    a <span className='monospace'>Boolean</span> variable, a literal value of <span className='vikari-literal'>true
                    </span> or <span className='vikari-literal'>false</span>, another logical expression, or a comparison operator expression.
                </p>

                <h2>Examples</h2>
                <p>
                    The following demonstrates usage of the logical operators.
                </p>
                <div className='vikari-code'>
                    <span className='vikari-comment'>~:Usage&nbsp;of&nbsp;the&nbsp;AND&nbsp;operator.:~</span><br />
                    <span className='vikari-variable'>foo</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Boolean</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>true</span>&nbsp;<span className='vikari-operator'>^</span>&nbsp;<span className='vikari-literal'>true</span>&nbsp;<span className='vikari-comment'>~:Assigns&nbsp;&quot;true&quot;&nbsp;to&nbsp;foo:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>^</span>&nbsp;<span className='vikari-literal'>false</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span>&nbsp;<span className='vikari-comment'>~:Prints&nbsp;&quot;false&quot;:~</span><br />
                    <br />
                    <span className='vikari-comment'>~:Usage&nbsp;of&nbsp;the&nbsp;OR&nbsp;operator.:~</span><br />
                    <span className='vikari-variable'>bar</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Boolean</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>true</span>&nbsp;<span className='vikari-operator'>&quot;</span>&nbsp;<span className='vikari-literal'>false</span>&nbsp;<span className='vikari-comment'>~:Assigns&nbsp;&quot;true&quot;&nbsp;to&nbsp;bar:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-variable'>bar</span>&nbsp;<span className='vikari-operator'>&quot;</span>&nbsp;<span className='vikari-literal'>false</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span>&nbsp;<span className='vikari-comment'>~:Prints&nbsp;&quot;true&quot;:~</span><br />
                    <br />
                    <span className='vikari-comment'>~:Usage&nbsp;of&nbsp;the&nbsp;NOT&nbsp;operator.:~</span><br />
                    <span className='vikari-variable'>baz</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Boolean</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-operator'>&apos;</span><span className='vikari-literal'>true</span>&nbsp;<span className='vikari-comment'>~:Assigns&nbsp;&quot;false&quot;&nbsp;to&nbsp;baz:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-operator'>&apos;</span><span className='vikari-variable'>baz</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span>&nbsp;<span className='vikari-comment'>~:Prints&nbsp;&quot;true&quot;:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-operator'>&apos;</span><span className='vikari-separator'>[</span><span className='vikari-literal'>true</span>&nbsp;<span className='vikari-operator'>&quot;</span>&nbsp;<span className='vikari-literal'>false</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span>&nbsp;<span className='vikari-comment'>~:Prints&nbsp;&quot;false&quot;:~</span><br />
                    <br />
                    <span className='vikari-comment'>~:Usage&nbsp;with&nbsp;the&nbsp;comparison&nbsp;operators.:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>=</span>&nbsp;<span className='vikari-literal'>true</span><span className='vikari-separator'>]</span>&nbsp;<span className='vikari-operator'>^</span>&nbsp;<span className='vikari-separator'>[</span><span className='vikari-variable'>bar</span>&nbsp;<span className='vikari-operator'>&apos;=</span>&nbsp;<span className='vikari-literal'>null</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span>&nbsp;<span className='vikari-comment'>~:Prints&nbsp;&quot;true&quot;:~</span><br />
                    <br />
                    <span className='vikari-comment'>~:Chaining&nbsp;all&nbsp;logical&nbsp;operators&nbsp;together.:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-operator'>&apos;</span><span className='vikari-separator'>[</span><span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>^</span>&nbsp;<span className='vikari-variable'>bar</span><span className='vikari-separator'>]</span>&nbsp;<span className='vikari-operator'>&quot;</span>&nbsp;<span className='vikari-separator'>[</span><span className='vikari-operator'>&apos;</span><span className='vikari-variable'>baz</span>&nbsp;<span className='vikari-operator'>^</span>&nbsp;<span className='vikari-variable'>foo</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span>&nbsp;<span className='vikari-comment'>~:Prints&nbsp;&quot;true&quot;:~</span>
                </div>
            </section>
        </div>
    )
}
