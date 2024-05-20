import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Arithmetic Operators'
}

export default function Page() {
    return (
        <div className='doc-page'>
            <section>
                <div className='implemented-since-version-number'>
                    Available since:&nbsp;&nbsp;<strong>v0.1.1</strong>.
                </div>
                <h2>{metadata.title as String}</h2>
                <p>
                    Vikari supports the following binary arithmetic operators:
                </p>
                <table>
                    <tbody>
                        <tr><th>Operator Name</th><th>Symbol</th><th>Function</th></tr>
                        <tr><td>Add</td><td><span className='vikari-operator'>+</span></td><td>Add two numbers.</td></tr>
                        <tr><td>Subtract</td><td><span className='vikari-operator'>-</span></td><td>Subtract the second number from the first.</td></tr>
                        <tr><td>Multiply</td><td><span className='vikari-operator'>*</span></td><td>Multiply two numbers.</td></tr>
                        <tr><td>Left Divide</td><td><span className='vikari-operator'>\</span></td><td>Divide the left number by the right.</td></tr>
                        <tr><td>Right Divide</td><td><span className='vikari-operator'>/</span></td><td>Divide the right number by the left.</td></tr>
                    </tbody>
                </table>

                <h2>Promotion of Numeric Types in Arithmetic Expressions</h2>
                <p>
                    These enable expressions to apply the standard arithmetic operations against any of the numeric
                    datatypes. <span className='monospace'>Number</span> types are automatically promoted to the largest necessary type. So if
                    a <span className='monospace'>Float</span> and an <span className='monospace'>Integer</span> are added
                    (i.e. <span className='vikari-literal'>5</span>&nbsp;<span className='vikari-operator'>+
                    </span>&nbsp;<span className='vikari-literal'>2.7</span>) the result will be <span className='vikari-literal'>7.7</span> as
                    a <span className='monospace'>Float</span> value.
                </p>

                <h2>Examples</h2>
                <p>
                    The following demonstrates use of the arithmetic operators.
                </p>
                <div className='vikari-code'>
                    <span className='vikari-comment'>~:The&nbsp;add&nbsp;operator&nbsp;adds&nbsp;two&nbsp;numbers&nbsp;together.:~</span><br />
                    <span className='vikari-variable'>result</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>5</span>&nbsp;<span className='vikari-operator'>+</span>&nbsp;<span className='vikari-literal'>2.7</span><br />
                    <br />
                    <span className='vikari-comment'>~:The&nbsp;subtract&nbsp;operator&nbsp;subtracts&nbsp;the&nbsp;second&nbsp;number&nbsp;from&nbsp;the&nbsp;first.:~</span><br />
                    <span className='vikari-variable'>result</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>5</span>&nbsp;<span className='vikari-operator'>-</span>&nbsp;<span className='vikari-literal'>2.7</span><br />
                    <br />
                    <span className='vikari-comment'>~:The&nbsp;multiply&nbsp;operator&nbsp;*&nbsp;multiplies&nbsp;two&nbsp;numbers&nbsp;together.:~</span><br />
                    <span className='vikari-variable'>result</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>5</span>&nbsp;<span className='vikari-operator'>*</span>&nbsp;<span className='vikari-literal'>2.7</span><br />
                    <br />
                    <span className='vikari-comment'>~:The&nbsp;left&nbsp;divide&nbsp;operator&nbsp;divides&nbsp;the&nbsp;first&nbsp;number&nbsp;by&nbsp;the&nbsp;second.:~</span><br />
                    <span className='vikari-variable'>result</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>5</span>&nbsp;<span className='vikari-operator'>/</span>&nbsp;<span className='vikari-literal'>2.7</span><br />
                    <br />
                    <span className='vikari-comment'>~:The&nbsp;right&nbsp;divide&nbsp;operator&nbsp;divides&nbsp;the&nbsp;second&nbsp;number&nbsp;by&nbsp;the&nbsp;first.:~</span><br />
                    <span className='vikari-variable'>result</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>5</span>&nbsp;<span className='vikari-operator'>\</span>&nbsp;<span className='vikari-literal'>2.7</span>
                </div>
            </section>
        </div>
    )
}
