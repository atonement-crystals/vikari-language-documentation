import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Numeric Types'
}

let java_float_ref_link = 'https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Float.html#MAX_VALUE'
let java_double_ref_link = 'https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Double.html#MAX_VALUE'

export default function Page() {
    return (
        <div className='doc-page'>
            <section>
                <div className='implemented-since-version-number'>
                    Available since:&nbsp;&nbsp;<strong>v0.1.1</strong>.
                </div>
                <h2>{metadata.title as String}</h2>
                <p>
                    The <span className='monospace'>Number</span> type is the base type for all numeric types in Vikari. <span className='monospace'>
                    Number</span> inherits from <span className='monospace'>Value</span>. Vikari supports the following six concrete numeric types:
                </p>
                <div className='table-nowrap-div'>
                    <table>
                        <tbody>
                            <tr><th>Type Name</th><th>Example Literal Values</th><th>Explanation</th></tr>
                            <tr><td><span className='monospace'>Integer</span></td><td><span className='vikari-literal'>3</span><span className='vikari-punctuation'>,</span><span className='monospace'>&nbsp;</span><span className='vikari-literal'>22i</span><span className='vikari-punctuation'>,</span><span className='monospace'>&nbsp;</span><span className='vikari-literal'>314I</span></td><td>A 32-bit integer.</td></tr>
                            <tr><td><span className='monospace'>Long</span></td><td><span className='vikari-literal'>3i</span><span className='vikari-punctuation'>,</span><span className='monospace'>&nbsp;</span><span className='vikari-literal'>22I</span></td><td>A 64-bit integer.</td></tr>
                            <tr><td><span className='monospace'>BigInteger</span></td><td><span className='vikari-literal'>3b</span><span className='vikari-punctuation'>,</span><span className='monospace'>&nbsp;</span><span className='vikari-literal'>22B</span></td><td>An integer of arbitrarily large precision.</td></tr>
                            <tr><td><span className='monospace'>Float</span></td><td><span className='vikari-literal'>3.14f</span><span className='vikari-punctuation'>,</span><span className='monospace'>&nbsp;</span><span className='vikari-literal'>6.28F</span></td><td>A 32-bit floating point number.</td></tr>
                            <tr><td><span className='monospace'>Double</span></td><td><span className='vikari-literal'>3.14</span><span className='vikari-punctuation'>,</span><span className='monospace'>&nbsp;</span><span className='vikari-literal'>6.18d</span><span className='vikari-punctuation'>,</span><span className='monospace'>&nbsp;</span><span className='vikari-literal'>1.618D</span></td><td>A 64-bit floating point number.</td></tr>
                            <tr><td><span className='monospace'>BigDecimal</span></td><td><span className='vikari-literal'>3.14b</span><span className='vikari-punctuation'>,</span><span className='monospace'>&nbsp;</span><span className='vikari-literal'>6.28B</span></td><td>A floating point number of arbitrarily large precision.</td></tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Integer literals without a postscript character denoting its type default to the <span className='monospace'>Integer
                    </span> type. For example: <span className='vikari-literal'>5</span>. Floating-point literals without a postscript character
                    denoting its type default to the <span className='monospace'>Double</span> type. For example: <span className='vikari-literal'>
                    5.0</span>. Postscript characters of <span className='monospace'>I</span> and <span className='monospace'>L</span> denote
                    a <span className='monospace'>Integer</span> and <span className='monospace'>Long</span> literal respectively. While postscript
                    characters of <span className='monospace'>F</span> and <span className='monospace'>D</span> denote <span className='monospace'>
                    Float</span> and <span className='monospace'>Double</span> respectively. While <span className='monospace'>B</span> without a
                    decimal portion denotes a <span className='monospace'>BigInteger</span> literal, and <span className='monospace'>B</span> with
                    a decimal portion denotes a <span className='monospace'>BigDecimal</span>.
                </p>
                <p>
                    Postscript characters of numeric literals can be either uppercase or lowercase.
                </p>
                <p>
                    Calculations of numeric values in <Link href='/docs/arithmetic-operators'>arithmetic expressions</Link> are automatically
                    promoted to the smallest possible enclosing type. This is based on both the types of the operands, and the resulting value.
                    So if an <span className='monospace'>Integer</span> and a <span className='monospace'>Long</span> are added together, the
                    result will be a <span className='monospace'>Long</span> value. Unless the result is too large or small to be encompassed by
                    the type <span className='monospace'>Long</span>, in which case the result will then be a <span className='monospace'>BigInteger
                    </span>.
                </p>
                <p>
                    The same is the case for floating point numbers. Also, all floating point numbers are considered to be a larger enclosing
                    type then integer type numbers. So a <span className='monospace'>BigInteger</span> and a <span className='monospace'>Float
                    </span> added together will result in a <span className='monospace'>Float</span>. Unless the result is too large or small for
                    a <span className='monospace'>Float</span> type, in which case the result will be either <span className='monospace'>Double
                    </span> or <span className='monospace'>BigDecimal</span>, respectively. But the upper and lower bounds of values for
                    the <a href={java_float_ref_link}>Float </a> and the <a href={java_double_ref_link}>Double</a> types backing the type system used
                    by Vikari are exceedingly difficult to reach by most ordinary calculations, in comparison to integer type limits.
                </p>
                <p>
                    The result of assigning numeric values to a variable depends on that variable&apos;s declared type. Variables of
                    type <span className='monospace'>AtonementCrystal</span>, <span className='monospace'>Value
                    </span>, or <span className='monospace'>Number</span> will always hold the exact result of the assigned value. But
                    specifically typed variables of one of the six concrete types will automatically promote or demote the value to the
                    appropriate type before assignment. This will truncate the value, if necessary.
                </p>

                <h2>Examples</h2>
                <p>
                    The following demonstrates usage and properties of numeric types in Vikari.
                </p>
                <div className='vikari-code'>
                    <span className='vikari-comment'>~:Non&nbsp;concrete&nbsp;typed&nbsp;numeric&nbsp;variables.:~</span><br />
                    <span className='vikari-variable'>variable</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>0</span><br />
                    <span className='vikari-variable'>crystal</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>AtonementCrystal</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>1</span><br />
                    <span className='vikari-variable'>value</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Value</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>2</span><br />
                    <span className='vikari-variable'>number</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Number</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>3</span><br />
                    <br />
                    <span className='vikari-comment'>~:Default&nbsp;literal&nbsp;values&nbsp;(without&nbsp;postfix&nbsp;characters).:~</span><br />
                    <span className='vikari-variable'>foo</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Integer</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>42</span><br />
                    <span className='vikari-variable'>bar</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Double</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>3.14</span><br />
                    <br />
                    <span className='vikari-comment'>~:Literal&nbsp;values&nbsp;with&nbsp;postfix&nbsp;characters.:~</span><br />
                    <span className='vikari-variable'>int</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Integer</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>4I</span><br />
                    <span className='vikari-variable'>long</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Long</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>5L</span><br />
                    <span className='vikari-variable'>bigInt</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>BigInteger</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>6B</span><br />
                    <span className='vikari-variable'>float</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Float</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>7.0F</span><br />
                    <span className='vikari-variable'>double</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Double</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>8.0D</span><br />
                    <span className='vikari-variable'>bigDec</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>BigDecimal</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>9.0B</span><br />
                    <br />
                    <span className='vikari-comment'>~:Literal&nbsp;values&nbsp;can&nbsp;use&nbsp;lowercase&nbsp;postfix&nbsp;characters.:~</span><br />
                    <span className='vikari-variable'>int</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>10i</span><br />
                    <span className='vikari-variable'>long</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>11l</span><br />
                    <span className='vikari-variable'>bigInt</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>12b</span><br />
                    <span className='vikari-variable'>float</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>13.0f</span><br />
                    <span className='vikari-variable'>double</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>14.0d</span><br />
                    <span className='vikari-variable'>bigDec</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>15.0b</span><br />
                    <br />
                    <span className='vikari-comment'>~:BigInteger&nbsp;and&nbsp;BigDecimal&nbsp;literals&nbsp;can&nbsp;be&nbsp;of&nbsp;arbitrary&nbsp;size.:~</span><br />
                    <span className='vikari-variable'>largeInteger</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Number</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>314159265358979323846264338327950288419716939937510B</span><br />
                    <span className='vikari-variable'>largeDecimal</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Number</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>3.14159265358979323846264338327950288419716939937510B</span><br />
                    <br />
                    <span className='vikari-comment'>~:Arithmetic&nbsp;promotes&nbsp;the&nbsp;result&nbsp;to&nbsp;the&nbsp;largest&nbsp;referenced&nbsp;type.:~</span><br />
                    <span className='vikari-variable'>value</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-variable'>int</span>&nbsp;<span className='vikari-operator'>+</span>&nbsp;<span className='vikari-variable'>int</span>&nbsp;<span className='vikari-comment'>~:Result&nbsp;has&nbsp;type&nbsp;Integer.:~</span><br />
                    <span className='vikari-variable'>value</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-variable'>int</span>&nbsp;<span className='vikari-operator'>+</span>&nbsp;<span className='vikari-variable'>long</span>&nbsp;<span className='vikari-comment'>~:Result&nbsp;has&nbsp;type&nbsp;Long.:~</span><br />
                    <span className='vikari-variable'>value</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-variable'>int</span>&nbsp;<span className='vikari-operator'>+</span>&nbsp;<span className='vikari-variable'>float</span>&nbsp;<span className='vikari-comment'>~:Result&nbsp;has&nbsp;type&nbsp;Float.:~</span><br />
                    <span className='vikari-variable'>value</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-variable'>float</span>&nbsp;<span className='vikari-operator'>+</span>&nbsp;<span className='vikari-variable'>double</span>&nbsp;<span className='vikari-comment'>~:Result&nbsp;has&nbsp;type&nbsp;Double.:~</span><br />
                    <br />
                    <span className='vikari-comment'>~:Assignment&nbsp;uses&nbsp;the&nbsp;the&nbsp;variable&apos;s&nbsp;declared&nbsp;type.:~</span><br />
                    <span className='vikari-variable'>v1</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Integer</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-variable'>long</span>&nbsp;<span className='vikari-comment'>~:Result&nbsp;has&nbsp;type&nbsp;Integer.:~</span><br />
                    <span className='vikari-variable'>v2</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Integer</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-variable'>float</span>&nbsp;<span className='vikari-comment'>~:Result&nbsp;has&nbsp;type&nbsp;Integer.:~</span><br />
                    <span className='vikari-variable'>v3</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Long</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-variable'>double</span>&nbsp;<span className='vikari-comment'>~:Result&nbsp;has&nbsp;type&nbsp;Long.:~</span><br />
                    <span className='vikari-variable'>v4</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Double</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-variable'>long</span>&nbsp;<span className='vikari-comment'>~:Result&nbsp;has&nbsp;type&nbsp;Double.:~</span><br />
                    <span className='vikari-variable'>v5</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>BigDecimal</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-variable'>bigDec</span>&nbsp;<span className='vikari-comment'>~:Result&nbsp;has&nbsp;type&nbsp;BigInteger:~</span><br />
                    <span className='vikari-variable'>v6</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>BigInteger</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-variable'>bigInt</span>&nbsp;<span className='vikari-comment'>~:Result&nbsp;has&nbsp;type&nbsp;BigDecimal:~</span>
                </div>
            </section>
        </div>
    )
}
