import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Grouping Expressions'
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
                    Grouping expressions group other sub-expressions using <span className='vikari-separator'>[</span> and <span className='vikari-separator'>]</span> like
                    other languages typically use parentheses. This allows for example arithmetic expressions to specify order of operations beyond the
                    standard execution order of operators.
                </p>
                <table>
                    <tbody>
                        <tr><th>Operator Name</th><th>Symbol</th><th>Function</th></tr>
                        <tr><td>Left Square Bracket</td><td><span className='vikari-separator'>[</span></td><td>Begin a grouping expression.</td></tr>
                        <tr><td>Left Square Bracket</td><td><span className='vikari-separator'>]</span></td><td>End a grouping expression.</td></tr>
                    </tbody>
                </table>

                <h2>Examples</h2>
                <p>
                    Any expression can be grouped together using <span className='vikari-separator'>[</span> and <span className='vikari-separator'>]</span>.
                    For example, arithmetic expressions can be grouped together for complete clarity in order of operations. 
                </p>
                <div className='vikari-code'>
                <span className='vikari-comment'>~:Grouping arithmetic in an assignment expression.:~</span><br/>
                    <span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-separator'>[</span><span className='vikari-literal'>2.7</span>&nbsp;<span className='vikari-operator'>+</span>&nbsp;<span className='vikari-literal'>5.2</span><span className='vikari-separator'>]</span><br/>
                    <span className='vikari-variable'>bar</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>9.4</span>&nbsp;<span className='vikari-operator'>/</span>&nbsp;<span className='vikari-separator'>[</span><span className='vikari-literal'>3.2</span>&nbsp;<span className='vikari-operator'>-</span>&nbsp;<span className='vikari-literal'>6.1</span><span className='vikari-separator'>]</span><br/>
                </div>
                <p>
                    Or more complex expressions can be grouped together to ensure a proper order or execution of each part of the overall expression, such as
                    with logical and comparison operators.
                </p>
                <div className='vikari-code'>
                    <span className='vikari-comment'>~:Nested groupings with logical operators in a print statement.:~</span><br/>
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-separator'>[</span><span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>=</span>&nbsp;<span className='vikari-literal'>5</span><span className='vikari-separator'>]</span>&nbsp;<span className='vikari-operator'>^</span>&nbsp;<span className='vikari-separator'>[</span><span className='vikari-variable'>bar</span>&nbsp;<span className='vikari-operator'>&apos;=</span>&nbsp;<span className='vikari-literal'>7</span><span className='vikari-separator'>]</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span>
                </div>
            </section>
        </div>
    )
}
