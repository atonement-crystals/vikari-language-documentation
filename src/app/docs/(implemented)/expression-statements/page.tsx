import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Expression Statements'
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
                    All expressions in Vikari can be executed as a separate statement. Expressions with no side effects will have no impact on the
                    running program. The primary example of an expression statement with side effects is
                    an <Link href='/docs/assignment-operators'>assignment expression</Link> assigning to a variable that has already been
                    declared. But arbitrary expressions are still valid Vikari statements.
               </p>

                <h2>Examples</h2>
                <p>
                    The following demonstrates expression statements with side effects.
                </p>
                <div className='vikari-code'>
                    <span className='vikari-comment'>~:First,&nbsp;declare&nbsp;some&nbsp;variables.:~</span><br />
                    <span className='vikari-variable'>foo</span><br />
                    <span className='vikari-variable'>bar</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Integer</span><br />
                    <span className='vikari-variable'>baz</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Boolean</span><br />
                    <br />
                    <span className='vikari-comment'>~:Use&nbsp;the&nbsp;assignment&nbsp;operator&nbsp;to&nbsp;write&nbsp;expression&nbsp;statements.:~</span><br />
                    <span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>2</span><br />
                    <span className='vikari-variable'>bar</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>5</span>&nbsp;<span className='vikari-operator'>+</span>&nbsp;<span className='vikari-literal'>7</span><br />
                    <span className='vikari-separator'>[</span><span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>&apos;=</span>&nbsp;<span className='vikari-variable'>bar</span><span className='vikari-separator'>]</span>&nbsp;<span className='vikari-operator'>&gt;&gt;</span>&nbsp;<span className='vikari-variable'>baz</span>
                </div>
                <p>
                    The following demonstrates expression statements <em>without</em> side effects.
                </p>
                <div className='vikari-code'>
                    <span className='vikari-comment'>~:These&nbsp;expression&nbsp;statements&nbsp;have&nbsp;no&nbsp;side&nbsp;effects.:~</span><br />
                    <span className='vikari-literal'>5</span>&nbsp;<span className='vikari-operator'>+</span>&nbsp;<span className='vikari-literal'>2</span><br />
                    <span className='vikari-separator'>[</span><span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>=</span>&nbsp;<span className='vikari-literal'>2</span><span className='vikari-separator'>]</span>&nbsp;<span className='vikari-operator'>^</span>&nbsp;<span className='vikari-separator'>[</span><span className='vikari-variable'>bar</span>&nbsp;<span className='vikari-operator'>&apos;=</span>&nbsp;<span className='vikari-literal'>false</span><span className='vikari-separator'>]</span>
                </div>
            </section>
        </div>
    )
}
