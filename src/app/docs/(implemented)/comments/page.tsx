import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Comments'
}

export default function Page() {
    return (
        <div className='doc-page'>
            <section>
                <div className='implemented-since-version-number'>
                    Available since:&nbsp;&nbsp;<strong>v0.5.4</strong>.
                </div>
                <h2>{metadata.title as String}</h2>
                <p>
                    Comments are tokens that are elided completely from the parser and interpreter phases. These are used to add notes about the
                    implementation of a certain section of code, just as comments are used in any other programming language. Comments begin
                    with <span className='vikari-comment'>~:</span> and end with <span className='vikari-comment'>:~</span>. Comments can be either
                    single-line or multiline. Comments can be nested.
                </p>
                <p>
                    Because comments can be nested, blocks of code containing closed comments can be commented out by enclosing the entire section
                    with <span className='vikari-comment'>~:</span> at the start and <span className='vikari-comment'>:~</span> at the end. Comments
                    that do not close every <span className='vikari-comment'>~:</span> token with a matching <span className='vikari-comment'>:~
                    </span> token will comment out all code all the way to the end of the file or Vikari code snippet.
                </p>
                <p>
                    Comments can be interspersed with ordinary Vikari code. They can begin, exist in the middle of, or end a statement. Comments
                    that intersect a statement work as <Link href='/docs/line-continuations'>line continuations</Link> if they are a multiline comment.
                </p>

                <h2>Examples</h2>
                <p>
                    The following demonstrates various usages of comments.
                </p>
                <div className='vikari-code'>
                    <span className='vikari-comment'>~:This&nbsp;is&nbsp;a&nbsp;single-line&nbsp;comment.:~</span><br />
                    <br />
                    <span className='vikari-comment'>~:This&nbsp;is&nbsp;a&nbsp;comment&nbsp;that&nbsp;spans</span><br />
                    <span className='vikari-comment'>across&nbsp;two&nbsp;lines.:~</span><br />
                    <br />
                    <span className='vikari-comment'>~:</span><br />
                    <span className='vikari-comment'>The&nbsp;opening&nbsp;and&nbsp;closing&nbsp;tokens</span><br />
                    <span className='vikari-comment'>can&nbsp;exist&nbsp;on&nbsp;their&nbsp;own&nbsp;line</span><br />
                    <span className='vikari-comment'>and&nbsp;still&nbsp;be&nbsp;a&nbsp;valid&nbsp;comment.</span><br />
                    <span className='vikari-comment'>:~</span><br />
                    <br />
                    <span className='vikari-comment'>~:This&nbsp;is&nbsp;an&nbsp;outer&nbsp;comment&nbsp;~:that</span><br />
                    <span className='vikari-comment'>encloses&nbsp;an&nbsp;inner&nbsp;comment:~&nbsp;within</span><br />
                    <span className='vikari-comment'>its&nbsp;bounds.:~</span><br />
                    <br />
                    <span className='vikari-comment'>~:</span><br />
                    <span className='vikari-comment'>~:This&nbsp;comment&nbsp;encloses&nbsp;a&nbsp;comment</span><br />
                    <span className='vikari-comment'>as&nbsp;well&nbsp;as&nbsp;valid&nbsp;Vikari&nbsp;code.:~</span><br />
                    <span className='vikari-comment'>foo:Integer&nbsp;&lt;&lt;&nbsp;22</span><br />
                    <span className='vikari-comment'>:[foo&nbsp;/&nbsp;7.0]:</span><br />
                    <span className='vikari-comment'>:~</span>
                </div>
                <p>
                    The following demonstrates comments interspersed with Vikari code.
                </p>
                <div className='vikari-code'>
                    <span className='vikari-comment'>~:A&nbsp;comment&nbsp;may&nbsp;be&nbsp;on&nbsp;a&nbsp;separate&nbsp;line&nbsp;from&nbsp;a&nbsp;Vikari&nbsp;statement.:~</span><br />
                    <span className='vikari-variable'>foo</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>AtonementCrystal</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>2</span><br />
                    <br />
                    <span className='vikari-comment'>~:A&nbsp;comment&nbsp;may&nbsp;begin&nbsp;a&nbsp;statement.:~</span>&nbsp;<span className='vikari-punctuation'>:</span><span className='vikari-variable'>foo</span><span className='vikari-punctuation'>:</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>+</span>&nbsp;<span className='vikari-literal'>2</span><span className='vikari-separator'>]</span>&nbsp;<span className='vikari-comment'>~:A&nbsp;comment&nbsp;may&nbsp;end&nbsp;a&nbsp;statement.:~</span><br />
                    <br />
                    <span className='vikari-variable'>foo</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>Integer</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-separator'>[</span><span className='vikari-literal'>5</span>&nbsp;<span className='vikari-operator'>+</span>&nbsp;<span className='vikari-literal'>22</span>&nbsp;<span className='vikari-comment'>~:A&nbsp;multi-line&nbsp;comment</span><br />
                    <span className='vikari-comment'>functions&nbsp;as&nbsp;a&nbsp;line&nbsp;continuation:~</span>&nbsp;<span className='vikari-operator'>/</span>&nbsp;<span className='vikari-literal'>7.0</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span><br />
                    <br />
                    <span className='vikari-comment'>~:A&nbsp;statement:~</span>&nbsp;<span className='vikari-variable'>bar</span>&nbsp;<span className='vikari-comment'>~:may&nbsp;contain:~</span>&nbsp;<span className='vikari-punctuation'>:</span>&nbsp;<span className='vikari-comment'>~:as&nbsp;many:~</span><br />
                    <span className='vikari-type'>Float</span>&nbsp;<span className='vikari-comment'>~:comments:~</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-comment'>~:as&nbsp;you:~</span>&nbsp;<span className='vikari-literal'>6.28</span>&nbsp;<span className='vikari-comment'>~:desire.:~</span>
                </div>
            </section>
        </div>
    )
}
