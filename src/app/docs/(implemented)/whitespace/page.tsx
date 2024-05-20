import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Whitespace'
}

export default function Page() {
    return (
        <div className='doc-page'>
            <section>
                <div className='implemented-since-version-number'>
                    Available since:&nbsp;&nbsp;<strong>v0.5.2</strong>.
                </div>
                <h2>{metadata.title as String}</h2>
                <p>
                    Handling of whitespace in Vikari is divided into two parts: whitespace before a line (<Link href='/docs/indentation'>indentation
                    </Link>), and whitespace between other tokens. This page covers the latter.
                </p>
                <p>
                    If a line of text is not expected to be indented (i.e. no trailing <Link href='/docs/region-operator'>region operator
                    </Link> <span className='vikari-punctuation'>::</span> at the end of the previous line), then any preceding whitespace before
                    the first language token of a line is not allowed and considered a syntax error.
                </p>
                <p>
                    However, all other whitespace is considered optional. So any amount of arbitrary whitespace can be included between any two
                    other language tokens and still be valid Vikari code. However, it is convention to include up to only one space character
                    between any two language tokens as necessary to improve readability, besides trailing comments. Format your code as necessary,
                    however, to maximize readability by the viewer according to your own personal preferences.
                </p>
                <p>
                    An upcoming <Link href='/docs/code-formatter'>code formatter</Link> will be implemented to provide the official formatting
                    convention for any valid Vikari source code.
                </p>

                <h2>Examples</h2>
                <p>
                    The following demonstrates proper use of whitespace in Vikari code.
                </p>
                <div className='vikari-code'>
                    <span className='vikari-comment'>~:Whitespace&nbsp;is&nbsp;optional&nbsp;between&nbsp;language&nbsp;tokens.:~</span><br />
                    <span className='vikari-variable'>foo</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>AtonementCrystal</span><span className='vikari-operator'>&lt;&lt;</span><span className='vikari-separator'>[</span><span className='vikari-literal'>1</span><span className='vikari-operator'>+</span><span className='vikari-literal'>2</span><span className='vikari-separator'>]</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='vikari-comment'>~:This&nbsp;is&nbsp;valid,&nbsp;but&nbsp;looks&nbsp;cramped.:~</span><br />
                    <span className='vikari-variable'>bar</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>AtonementCrystal</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-separator'>[</span><span className='vikari-literal'>3</span>&nbsp;<span className='vikari-operator'>+</span>&nbsp;<span className='vikari-literal'>4</span><span className='vikari-separator'>]</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='vikari-comment'>~:This&nbsp;is&nbsp;valid,&nbsp;and&nbsp;is&nbsp;the&nbsp;correct&nbsp;style.:~</span><br />
                    <span className='vikari-variable'>baz</span>&nbsp;<span className='vikari-punctuation'>:</span>&nbsp;<span className='vikari-type'>AtonementCrystal</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-separator'>[</span>&nbsp;<span className='vikari-literal'>5</span>&nbsp;<span className='vikari-operator'>+</span>&nbsp;<span className='vikari-literal'>6</span>&nbsp;<span className='vikari-separator'>]</span>&nbsp;<span className='vikari-comment'>~:This&nbsp;is&nbsp;valid,&nbsp;but&nbsp;looks&nbsp;too&nbsp;spacious.:~</span><br />
                    <br />
                    <span className='vikari-comment'>~:Leading&nbsp;whitespace&nbsp;where&nbsp;indentation&nbsp;is&nbsp;not&nbsp;expected&nbsp;is&nbsp;not&nbsp;allowed.:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>+</span>&nbsp;<span className='vikari-variable'>bar</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className='vikari-comment'>~:This&nbsp;is&nbsp;a&nbsp;syntax&nbsp;error!:~</span>
                </div>
            </section>
        </div>
    )
}
