import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Equality Operators'
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
                    Vikari features the following binary operators for testing equality of expressions:
               </p>
               <table>
                    <tbody>
                        <tr><th>Operator Name</th><th>Symbol</th><th>Function</th></tr>
                        <tr><td>Equals</td><td><span className='vikari-operator'>=</span></td><td>Check that the two expressions are equal.</td></tr>
                        <tr><td>Not Equals</td><td><span className='vikari-operator'>&apos;=</span></td><td>Check that the two expressions are <em>not</em> equal.</td></tr>
                    </tbody>
                </table>
                <p>
                    The result of an equality expression is a <span className='monospace'>Boolean</span> value of <span className='vikari-literal'>
                    true</span> or <span className='vikari-literal'>false</span>. Any two expressions returning an <span className='monospace'>
                    AtonementCrystal</span> can be compared. Meaning any combination of <span className='monospace'>Value</span> literals or other
                    types.
                </p>

                <h2>Examples</h2>
                <p>
                    The following demonstrates usage of the equals operator.
                </p>
                <div className='vikari-code'>
                    <span className='vikari-comment'>~:Compare&nbsp;two&nbsp;numbers.:~</span><br />
                    <span className='vikari-variable'>int</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Integer</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>2</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-variable'>int</span>&nbsp;<span className='vikari-operator'>=</span>&nbsp;<span className='vikari-literal'>2</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span>&nbsp;<span className='vikari-comment'>~:Prints&nbsp;&quot;true&quot;.:~</span><br />
                    <br />
                    <span className='vikari-variable'>float</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Float</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>3.14</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-variable'>float</span>&nbsp;<span className='vikari-operator'>=</span>&nbsp;<span className='vikari-literal'>6.28</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span>&nbsp;<span className='vikari-comment'>~:Prints&nbsp;&quot;false&quot;.:~</span><br />
                    <br />
                    <span className='vikari-comment'>~:Any&nbsp;expression&nbsp;can&nbsp;be&nbsp;compared.:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-literal'>6.28</span>&nbsp;<span className='vikari-operator'>/</span>&nbsp;<span className='vikari-literal'>2</span><span className='vikari-separator'>]</span>&nbsp;<span className='vikari-operator'>=</span>&nbsp;<span className='vikari-separator'>[</span><span className='vikari-literal'>3</span>&nbsp;<span className='vikari-operator'>+</span>&nbsp;<span className='vikari-literal'>0.14</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span>&nbsp;<span className='vikari-comment'>~:Prints&nbsp;&quot;true&quot;.:~</span><br />
                    <br />
                    <span className='vikari-comment'>~:Logical&nbsp;expressions&nbsp;can&nbsp;be&nbsp;compared&nbsp;too.:~</span><br />
                    <span className='vikari-variable'>bar</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Boolean</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>true</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-variable'>bar</span>&nbsp;<span className='vikari-operator'>^</span>&nbsp;<span className='vikari-literal'>true</span><span className='vikari-separator'>]</span>&nbsp;<span className='vikari-operator'>=</span>&nbsp;<span className='vikari-separator'>[</span><span className='vikari-variable'>bar</span>&nbsp;<span className='vikari-operator'>&quot;</span>&nbsp;<span className='vikari-literal'>false</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span>&nbsp;<span className='vikari-comment'>~:Prints&nbsp;&quot;true.:~</span><br />
                    <br />
                    <span className='vikari-comment'>~:Variables&nbsp;of&nbsp;differing&nbsp;types&nbsp;can&nbsp;be&nbsp;compared.:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-literal'>22</span>&nbsp;<span className='vikari-operator'>=</span>&nbsp;<span className='vikari-literal'>true</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span>&nbsp;<span className='vikari-comment'>~:Prints&nbsp;&quot;false&quot;.:~</span><br />
                    <br />
                    <span className='vikari-comment'>~:Test&nbsp;if&nbsp;a&nbsp;value&nbsp;is&nbsp;null&nbsp;by&nbsp;comparing&nbsp;to&nbsp;the&nbsp;null&nbsp;keyword.:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>=</span>&nbsp;<span className='vikari-literal'>null</span><span className='vikari-separator'>]</span>&nbsp;<span className='vikari-comment'>~:Prints&nbsp;&quot;false&quot;.:~</span>
                </div>
                <p>
                    The following demonstrates usage of the <em>not equals</em> operator.
                </p>
                <div className='vikari-code'>
                    <span className='vikari-comment'>~:Compare&nbsp;two&nbsp;numbers.:~</span><br />
                    <span className='vikari-variable'>int</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Integer</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>2</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-variable'>int</span>&nbsp;<span className='vikari-operator'>&apos;=</span>&nbsp;<span className='vikari-literal'>2</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span>&nbsp;<span className='vikari-comment'>~:Prints&nbsp;&quot;false&quot;.:~</span><br />
                    <br />
                    <span className='vikari-variable'>float</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Float</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>3.14</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-variable'>float</span>&nbsp;<span className='vikari-operator'>&apos;=</span>&nbsp;<span className='vikari-literal'>6.28</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span>&nbsp;<span className='vikari-comment'>~:Prints&nbsp;&quot;true&quot;.:~</span><br />
                    <br />
                    <span className='vikari-comment'>~:Any&nbsp;expression&nbsp;can&nbsp;be&nbsp;compared.:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-literal'>6.28</span>&nbsp;<span className='vikari-operator'>/</span>&nbsp;<span className='vikari-literal'>2</span><span className='vikari-separator'>]</span>&nbsp;<span className='vikari-operator'>&apos;=</span>&nbsp;<span className='vikari-separator'>[</span><span className='vikari-literal'>3</span>&nbsp;<span className='vikari-operator'>+</span>&nbsp;<span className='vikari-literal'>0.14</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span>&nbsp;<span className='vikari-comment'>~:Prints&nbsp;&quot;false&quot;.:~</span><br />
                    <br />
                    <span className='vikari-comment'>~:Logical&nbsp;expressions&nbsp;can&nbsp;be&nbsp;compared&nbsp;too.:~</span><br />
                    <span className='vikari-variable'>bar</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Boolean</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>true</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-variable'>bar</span>&nbsp;<span className='vikari-operator'>^</span>&nbsp;<span className='vikari-literal'>true</span><span className='vikari-separator'>]</span>&nbsp;<span className='vikari-operator'>&apos;=</span>&nbsp;<span className='vikari-separator'>[</span><span className='vikari-variable'>bar</span>&nbsp;<span className='vikari-operator'>&quot;</span>&nbsp;<span className='vikari-literal'>false</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span>&nbsp;<span className='vikari-comment'>~:Prints&nbsp;&quot;false.:~</span><br />
                    <br />
                    <span className='vikari-comment'>~:Variables&nbsp;of&nbsp;differing&nbsp;types&nbsp;can&nbsp;be&nbsp;compared.:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-literal'>22</span>&nbsp;<span className='vikari-operator'>&apos;=</span>&nbsp;<span className='vikari-literal'>true</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span>&nbsp;<span className='vikari-comment'>~:Prints&nbsp;&quot;true&quot;.:~</span><br />
                    <br />
                    <span className='vikari-comment'>~:Test&nbsp;if&nbsp;a&nbsp;value&nbsp;is&nbsp;not&nbsp;null&nbsp;by&nbsp;comparing&nbsp;to&nbsp;the&nbsp;null&nbsp;keyword.:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>&apos;=</span>&nbsp;<span className='vikari-literal'>null</span><span className='vikari-separator'>]</span>&nbsp;<span className='vikari-comment'>~:Prints&nbsp;&quot;true&quot;.:~</span>
                </div>
            </section>
        </div>
    )
}
