import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Atonement Crystals'
}

let addendum_design_notes_link = 'https://github.com/atonement-crystals/Vikari?tab=readme-ov-file#addendum-design-notes'

export default function Page() {
    return (
        <div className='doc-page'>
            <section>
                <div className='implemented-since-version-number'>
                    Available since:&nbsp;&nbsp;<strong>v0.1.1</strong>.
                </div>
                <h2>{metadata.title as String}</h2>
                <p>
                    The base type for all other types is <span className='monospace'>AtonementCrystal</span>. Everything in Vikari is
                    an <span className='monospace'>AtonementCrystal</span>. This includes every operator and symbol represented by a sequence of
                    characters in Vikari code. However, only <span className='monospace'>Value</span> literals and variables can be assigned to
                    the <span className='monospace'>AtonementCrystal</span> type. For understanding the meaning behind the name of Atonement Crystal,
                    please see the <a href={addendum_design_notes_link}>Addendum: Design Notes</a> section of the Vikari GitHub repository README for
                    a succinct explanation.
                </p>
                <p>
                    All presently implemented built-in types follow the following inheritance structure:
                </p>
                <p className='monospace'>
                    &bull; AtonementCrystal<br />
                    &emsp;&bull; Value<br />
                    &emsp;&emsp;&bull; Boolean<br />
                    &emsp;&emsp;&bull; Number<br />
                    &emsp;&emsp;&emsp;&bull; Integer<br />
                    &emsp;&emsp;&emsp;&bull; Long<br />
                    &emsp;&emsp;&emsp;&bull; BigInteger<br />
                    &emsp;&emsp;&emsp;&bull; Float<br />
                    &emsp;&emsp;&emsp;&bull; Double<br />
                    &emsp;&emsp;&emsp;&bull; BigDecimal<br />
                </p>
                <p>
                    <span className='monospace'>Null</span> types are special, as each type has its own unique <span className='monospace'>Null</span> type that
                    can be assigned to values of that type.
                </p>

                <h2>Built-In Functions</h2>
                <p>
                    The <span className='monospace'>AtonementCrystal</span> type is planned to have a set of default functions that can be called on
                    any type in Vikari. However none of these have been implemented yet, as function calls are not yet implemented in Vikari.
                    See <Link href="/docs/atonement-crystal-functions">Atonement Crystal Functions</Link> for documentation on all planned functions
                    for the <span className='monospace'>AtonementCrystal</span> type.
                </p>
                <h2>Examples</h2>
                <p>
                    The following demonstrates use of the <span className='monospace'>AtonementCrystal</span> type.
                </p>
                <div className='vikari-code'>
                    <span className='vikari-comment'>~:An&nbsp;untyped&nbsp;variable&nbsp;automatically&nbsp;has&nbsp;the&nbsp;AtonementCrystal&nbsp;type.:~</span><br />
                    <span className='vikari-comment'>~:It&nbsp;can&nbsp;also&nbsp;be&nbsp;explicitly&nbsp;typed.:~</span><br />
                    <span className='vikari-variable'>foo</span><br />
                    <span className='vikari-variable'>foo</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>AtonementCrystal</span><br />
                    <br />
                    <span className='vikari-comment'>~:Any&nbsp;value&nbsp;can&nbsp;be&nbsp;assigned&nbsp;to&nbsp;a&nbsp;variable&nbsp;of&nbsp;type&nbsp;AtonementCrystal.:~</span><br />
                    <span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>2</span><br />
                    <span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>true</span><br />
                    <span className='vikari-variable'>foo</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>AtonementCrystal</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>3.14</span><br />
                    <span className='vikari-variable'>foo</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>AtonementCrystal</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>null</span><br />
                    <br />
                    <span className='vikari-comment'>~:Variables&nbsp;of&nbsp;type&nbsp;AtonementCrystal&nbsp;can&nbsp;be&nbsp;reassigned&nbsp;to&nbsp;any&nbsp;type.:~</span><br />
                    <span className='vikari-variable'>foo</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>AtonementCrystal</span><br />
                    <span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>4L</span><br />
                    <span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>false</span><br />
                    <span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>6.28F</span>
                </div>
            </section>
        </div>
    )
}
