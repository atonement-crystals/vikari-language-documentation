import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Null Type'
}

export default function Page() {
    return (
        <div className='doc-page'>
            <section>
                <div className='implemented-since-version-number'>
                    Available since:&nbsp;&nbsp;<strong>v0.7.0</strong>.
                </div>
                <h2>{metadata.title as String}</h2>
                <p>
                    The <span className='monospace'>Null</span> type represents the absence of a value. It is a special type that is a subtype of
                    every other type. This allows variables of type <span className='monospace'>Null</span> to be assignable to variables of any
                    type. So a null <span className='monospace'>Integer</span> is not the same as a null <span className='monospace'>Float</span>,
                    as their inheritance hierarchies are different.
                </p>
                <p>
                    Nulls in Vikari have a length property. This enables a null value to carry more information in other languages, and makes them
                    more useful. So an algorithm can convey something meaningful in the form of an integer value along with a null result.
                </p>
                <p>
                    There are three ways of writing a null literal value in Vikari: The first form is to use the <span className='vikari-literal'>
                    null</span> keyword. This produces a null value of length zero. The second form is to use a series of sequential underscores,
                    known as a sword crystal. This produces a null value with a length equal to the number of underscores. The third form is to
                    use a sword followed by a left square bracket <span className='vikari-sword'>_</span><span className='vikari-separator'>[
                    </span> followed by an integer literal followed by a right square bracket followed by another                    sword <span className='vikari-separator'>]</span><span className='vikari-sword'>_</span>. This produces a null value with a
                    length equal to the provided integer.
                </p>
                <p>
                    Declaring a variable without an initializer expression sets it to a null value of length zero. This is equivalent to using
                    the <span className='vikari-literal'>null</span> keyword. Variables declared with type <span className='monospace'>Null
                    </span> inherit from <span className='monospace'>AtonementCrystal</span>. To test if a variable is null, use the comparison
                    operators <span className='vikari-operator'>=</span> or <span className='vikari-operator'>&apos;=</span> in conjunction with
                    the <span className='vikari-literal'>null </span> keyword. This will return true for null values of any length. To test instead
                    for a null of a specific length, use a sword or null literal expression of the desired length for the comparison, instead.
                </p>
                <p>
                    Any variable can be assigned null after being assigned a non-null value using one of the three null literal values. A null
                    variable&apos;s length can also be reassigned using one of the same three methods, as well.
                </p>

                <h2>Examples</h2>
                <p>
                    The following demonstrates use of the <span className='monospace'>Null</span> type.
                </p>
                <div className='vikari-code'>
                    <span className='vikari-comment'>~:Eliding&nbsp;an&nbsp;initializer&nbsp;expression&nbsp;sets&nbsp;a&nbsp;variable&nbsp;to&nbsp;null.:~</span><br />
                    <span className='vikari-variable'>foo</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>AtonementCrystal</span><br />
                    <br />
                    <span className='vikari-comment'>~:Using&nbsp;the&nbsp;null&nbsp;keyword.:~</span><br />
                    <span className='vikari-variable'>bar</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>AtonementCrystal</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-literal'>null</span><br />
                    <br />
                    <span className='vikari-comment'>~:Using&nbsp;a&nbsp;sword.:~</span><br />
                    <span className='vikari-variable'>baz</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>AtonementCrystal</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-sword'>____</span><br />
                    <br />
                    <span className='vikari-comment'>~:Using&nbsp;a&nbsp;null&nbsp;literal&nbsp;expression.:~</span><br />
                    <span className='vikari-variable'>buzz</span><span className='vikari-punctuation'>:</span><span className='vikari-type'>AtonementCrystal</span>&nbsp;<span className='vikari-operator'>&lt;&lt;</span>&nbsp;<span className='vikari-sword'>__</span><span className='vikari-separator'>[</span>&nbsp;<span className='vikari-literal'>-1</span><span className='vikari-separator'>]</span><span className='vikari-sword'>__</span><br />
                    <br />
                    <span className='vikari-comment'>~:Test&nbsp;that&nbsp;a&nbsp;variable&nbsp;is&nbsp;null,&nbsp;regardless&nbsp;of&nbsp;its&nbsp;length.:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-variable'>foo</span>&nbsp;<span className='vikari-operator'>=</span>&nbsp;<span className='vikari-literal'>null</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span><br />
                    <br />
                    <span className='vikari-comment'>~:Test&nbsp;that&nbsp;a&nbsp;variable&nbsp;is&nbsp;of&nbsp;a&nbsp;specified&nbsp;length.:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-variable'>bar</span>&nbsp;<span className='vikari-operator'>=</span>&nbsp;<span className='vikari-sword'>____</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-variable'>bar</span>&nbsp;<span className='vikari-operator'>=</span>&nbsp;<span className='vikari-sword'>__</span><span className='vikari-separator'>[</span><span className='vikari-literal'>4</span><span className='vikari-separator'>]</span><span className='vikari-sword'>__</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span><br />
                    <br />
                    <span className='vikari-comment'>~:Test&nbsp;that&nbsp;a&nbsp;variable&nbsp;is&nbsp;not&nbsp;null.:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-variable'>baz</span>&nbsp;<span className='vikari-operator'>&apos;=</span>&nbsp;<span className='vikari-literal'>null</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span>
                </div>
            </section>
        </div>
    )
}
