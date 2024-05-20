import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Variable Declarations'
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
                    In Vikari, a variable can be declared using a valid Vikari variable identifier followed by an optional type label and
                    initializer expression after a left assignment operator. After a variable has been declared, it can then be used in further
                    expressions and statements to reassign or use its value as desired.
                </p>
                <p>
                    All variables have both a declared type and an assigned type. The declared type is <span className='monospace'>AtonementCrystal
                    </span> if no type label is included. Otherwise the declared type matches the type of the type label. Meanwhile the assigned type
                    is matched against the concrete type of the result of the last assignment expression that assigned a value to the variable. Type
                    checking is done against the assigned type to ensure it is valid to assign that type to the declared type of the variable.
                </p>

                <h2>Examples</h2>
                <p>
                    The following demonstrates each form of a variable declaration.
                </p>
                <div className='vikari-code'>
                    <span className='vikari-comment'>~:The&nbsp;simplest&nbsp;form&nbsp;of&nbsp;a&nbsp;variable&nbsp;declaration.:~</span><br />
                    <span className='vikari-variable'>foo</span><br />
                    <br />
                    <span className='vikari-comment'>~:With&nbsp;type&nbsp;label.:~</span><br />
                    <span className='vikari-variable'>foo</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>AtonementCrystal</span><br />
                    <br />
                    <span className='vikari-comment'>~:With&nbsp;initializer&nbsp;expression.:~</span><br />
                    <span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>3</span><br />
                    <br />
                    <span className='vikari-comment'>~:With&nbsp;type&nbsp;label&nbsp;and&nbsp;initializer&nbsp;expression.:~</span><br />
                    <span className='vikari-variable'>foo</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Integer</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>3</span>
                </div>
            </section>
        </div>
    )
}
