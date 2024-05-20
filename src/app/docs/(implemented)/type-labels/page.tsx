import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Type Labels'
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
                    Type labels are an optional component of anywhere a variable is declared. Beginning with a <span className='vikari-punctuation'>
                    :</span> and followed by a type name (a capitalized Vikari identifier, and then followed by a sequence of uppercase letters,
                    lowercase letters, numbers, or underscores), type labels provide type hints to the interpreter to provide additional type
                    checking for statements, functions, and type declarations. Presently the only implemented Vikari language feature that supports
                    type labels are <Link href='/docs/variable-declarations'>variable declaration statements</Link>.
                </p>
                <p>
                    If a type label is elided, the variable automatically has a declared type of <span className='monospace'>AtonementCrystal
                    </span>. Vikari also tracks the assigned type, which is simply the type of the initializer expression or the result of the
                    last assignment statement to the variable.
                </p>
                <h2>Examples</h2>
                <p>
                    The following demonstrates proper use of type labels in variable declaration statements.
                </p>
                <div className='vikari-code'>
                    <span className='vikari-comment'>~:Declaring&nbsp;variables&nbsp;of&nbsp;the&nbsp;default&nbsp;type.:~</span><br />
                    <span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>null</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='vikari-comment'>~:Has&nbsp;type&nbsp;AtonementCrystal.:~</span><br />
                    <span className='vikari-variable'>bar</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>AtonementCrystal</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>null</span>&nbsp;<span className='vikari-comment'>~:Also&nbsp;has&nbsp;type&nbsp;AtonementCrystal.:~</span><br />
                    <br />
                    <span className='vikari-comment'>~:Assignment&nbsp;is&nbsp;allowed&nbsp;to&nbsp;subtypes&nbsp;of&nbsp;the&nbsp;type&nbsp;label.:~</span><br />
                    <span className='vikari-variable'>v1</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>AtonementCrystal</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>1</span><br />
                    <span className='vikari-variable'>v2</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Value</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>2</span><br />
                    <span className='vikari-variable'>v3</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Number</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>3</span><br />
                    <span className='vikari-variable'>v4</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Integer</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>4</span><br />
                    <br />
                    <span className='vikari-comment'>~:Assignment&nbsp;of&nbsp;an&nbsp;incorrect&nbsp;type&nbsp;is&nbsp;not&nbsp;allowed.:~</span><br />
                    <span className='vikari-variable'>int</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Integer</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>true</span>&nbsp;<span className='vikari-comment'>~:Syntax&nbsp;error!:~</span><br />
                    <span className='vikari-variable'>bool</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Boolean</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>5</span>&nbsp;&nbsp;&nbsp;<span className='vikari-comment'>~:Syntax&nbsp;error!:~</span>
                </div>
            </section>
        </div>
    )
}
