import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Assignment Operators'
}

export default function Page() {
    return (
        <div className='doc-page'>
            <section>
            <div className='implemented-since-version-number'>
                    Available since:&nbsp;&nbsp;<strong>v0.4.0</strong>.
                </div>
                <h2>{metadata.title as String}</h2>
                <p>
                    Vikari supports the following binary assignment operators:
                </p>
                <table>
                    <tbody>
                        <tr><th>Operator Name</th><th>Symbol</th><th>Function</th></tr>
                        <tr><td>Left Assignment</td><td><span className='vikari-operator'>&lt;&lt;</span></td><td>Assign the right operand to the left operand.</td></tr>
                        <tr><td>Right Assignment</td><td><span className='vikari-operator'>&gt;&gt;</span></td><td>Assign the left operand to the right operand.</td></tr>
                    </tbody>
                </table>
                <p>
                    Assignment operators are used in <Link href='/docs/variable-declarations'>variable declaration statements</Link>, and assignment
                    expressions.
                </p>

                <h2>Examples</h2>
                <p>
                    The left assignment operator <span className='vikari-operator'>&lt;&lt;</span> assigns the right operand to the left operand. The
                    left operand must be a variable. If the variable does not yet exist, a new variable can be declared and assigned at the same time
                    using this operator.
                </p>
                <div className='vikari-code'>
                <span className='vikari-comment'>~:Declare and assign a new variable.:~</span><br/>
                    <span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>2.7</span><br/>
                    <br/>
                    <span className='vikari-comment'>~:Declare and assign a new variable (with type label).:~</span><br/>
                    <span className='vikari-variable'>bar</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Double</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>5.4</span><br/>
                    <br/>
                    <span className='vikari-comment'>~:Reassign an existing variable.:~</span><br/>
                    <span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-variable'>bar</span>
                </div>
                <p>
                    The right assignment operator <span className='vikari-operator'>&gt;&gt;</span> assigns the left operand to the right operand.
                    The right operand must be a variable. If the variable does not yet exist, a syntax error will be thrown.
                </p>
                <div className='vikari-code'>
                    <span className='vikari-comment'>~:Assign a new value to an existing variable.:~</span><br/>
                    <span className='vikari-literal'>3.14</span>&nbsp;<span className='vikari-operator'>&gt;&gt;</span>&nbsp;<span className='vikari-variable'>foo</span><br/>
                    <span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>&gt;&gt;</span>&nbsp;<span className='vikari-variable'>bar</span><br/>
                    <br/>
                    <span className='vikari-comment'>~:As baz has not been declared, the following is a syntax error.:~</span><br/>
                    <span className='vikari-literal'>6.28</span>&nbsp;<span className='vikari-operator'>&gt;&gt;</span>&nbsp;<span className='vikari-variable'>baz</span><br/>
                </div>
                <p>
                    Assignment operator expressions return the result of the value being assigned. They can therefore be used anywhere an expression
                    of that resulting type is then allowed. Chaining of left assignment operators is allowed without a grouping. However, due to
                    right-associativity of right assignment operators, a grouping is then necessary for chaining them together.
                </p>
                <div className='vikari-code'>
                    <span className='vikari-comment'>~:First,&nbsp;declare&nbsp;some&nbsp;variables&nbsp;to&nbsp;be&nbsp;used.:~</span><br />
                    <span className='vikari-variable'>foo</span><span className='vikari-punctuation'>,</span>&nbsp;<span className='vikari-variable'>bar</span><span className='vikari-punctuation'>,</span>&nbsp;<span className='vikari-variable'>baz</span><br />
                    <br />
                    <span className='vikari-comment'>~:Print&nbsp;the&nbsp;result&nbsp;of&nbsp;an&nbsp;assignment.:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>1</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span>&nbsp;<span className='vikari-comment'>~:Prints&nbsp;1.:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-literal'>1</span>&nbsp;<span className='vikari-operator'>&gt;&gt;</span>&nbsp;<span className='vikari-variable'>bar</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span>&nbsp;<span className='vikari-comment'>~:Also&nbsp;prints&nbsp;1.:~</span><br />
                    <br />
                    <span className='vikari-comment'>~:Chain&nbsp;a&nbsp;series&nbsp;of&nbsp;assignments.:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-variable'>bar</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-variable'>baz</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>2</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='vikari-comment'>~:Prints&nbsp;2.:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-separator'>[</span><span className='vikari-separator'>[</span><span className='vikari-literal'>3</span>&nbsp;<span className='vikari-operator'>&gt;&gt;</span>&nbsp;<span className='vikari-variable'>foo</span><span className='vikari-separator'>]</span>&nbsp;<span className='vikari-operator'>&gt;&gt;</span>&nbsp;<span className='vikari-variable'>bar</span><span className='vikari-separator'>]</span>&nbsp;<span className='vikari-operator'>&gt;&gt;</span>&nbsp;<span className='vikari-variable'>baz</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span>&nbsp;<span className='vikari-comment'>~:Prints&nbsp;3.:~</span>
                </div>
            </section>
        </div>
    )
}
