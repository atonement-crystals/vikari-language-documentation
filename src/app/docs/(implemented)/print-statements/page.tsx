import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Print Statements'
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
                    Print statements use the print operator <span className='vikari-punctuation'>:</span> to print a series
                    of <span className='monospace'>AtonementCrystal</span> values to standard output. A print statement is a series of print
                    expressions. Each print expression is defined by a <span className='vikari-punctuation'>:</span> followed by an expression that
                    resolves to an <span className='monospace'>AtonementCrystal</span>. Print statements are then optionally terminated by a
                    final <span className='vikari-punctuation'>:</span> which then prints a newline at the end of the other printed values.
                </p>
                <p>
                    A print statement may also be a single <span className='vikari-punctuation'>:</span> with nothing else. Which then simply
                    prints a newline to standard output.
                </p>
                <h2>Examples</h2>
                <p>
                    The following demonstrates various usages of print statements.
                </p>
                <div className='vikari-code'>
                    <span className='vikari-comment'>~:Print&nbsp;a&nbsp;single&nbsp;newline&nbsp;to&nbsp;standard&nbsp;output.:~</span><br />
                    <span className='vikari-punctuation'>:</span><br />
                    <br />
                    <span className='vikari-comment'>~:Print&nbsp;a&nbsp;number&nbsp;to&nbsp;standard&nbsp;output.:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-literal'>0</span><br />
                    <br />
                    <span className='vikari-comment'>~:Print&nbsp;more&nbsp;numbers&nbsp;to&nbsp;standard&nbsp;output.:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-literal'>1</span><span className='vikari-punctuation'>:</span><span className='vikari-literal'>2</span><span className='vikari-punctuation'>:</span><span className='vikari-literal'>3</span><br />
                    <br />
                    <span className='vikari-comment'>~:Print&nbsp;a&nbsp;value&nbsp;to&nbsp;standard&nbsp;output,&nbsp;terminated&nbsp;by&nbsp;a&nbsp;newline.:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-literal'>true</span><span className='vikari-punctuation'>:</span><br />
                    <br />
                    <span className='vikari-comment'>~:Print&nbsp;multiple&nbsp;values&nbsp;to&nbsp;standard&nbsp;output,&nbsp;terminated&nbsp;by&nbsp;a&nbsp;new&nbsp;line.:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-literal'>5</span>&nbsp;<span className='vikari-operator'>+</span>&nbsp;<span className='vikari-literal'>2</span><span className='vikari-punctuation'>:</span><span className='vikari-literal'>9</span>&nbsp;<span className='vikari-operator'>/</span>&nbsp;<span className='vikari-literal'>3</span><span className='vikari-punctuation'>:</span><span className='vikari-literal'>8</span>&nbsp;<span className='vikari-operator'>-</span>&nbsp;<span className='vikari-literal'>4</span><span className='vikari-punctuation'>:</span><br />
                    <br />
                    <span className='vikari-comment'>~:Use&nbsp;groupings&nbsp;for&nbsp;increased&nbsp;clarity&nbsp;of&nbsp;printed&nbsp;expressions.:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-literal'>5</span>&nbsp;<span className='vikari-operator'>+</span>&nbsp;<span className='vikari-literal'>2</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-literal'>9</span>&nbsp;<span className='vikari-operator'>/</span>&nbsp;<span className='vikari-literal'>3</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span><span className='vikari-separator'>[</span><span className='vikari-literal'>8</span>&nbsp;<span className='vikari-operator'>-</span>&nbsp;<span className='vikari-literal'>4</span><span className='vikari-separator'>]</span><span className='vikari-punctuation'>:</span><br />
                    <br />
                    <span className='vikari-comment'>~:Print&nbsp;multiple&nbsp;newlines&nbsp;to&nbsp;standard&nbsp;output.:~</span><br />
                    <span className='vikari-punctuation'>:</span><br />
                    <span className='vikari-punctuation'>:</span><br />
                    <span className='vikari-punctuation'>:</span><br />
                    <br />
                    <span className='vikari-comment'>~:Use&nbsp;the&nbsp;statement&nbsp;separator&nbsp;to&nbsp;make&nbsp;the&nbsp;above&nbsp;statements&nbsp;more&nbsp;terse.:~</span><br />
                    <span className='vikari-punctuation'>:</span><span className='vikari-punctuation'>,</span><span className='vikari-punctuation'>:</span><span className='vikari-punctuation'>,</span><span className='vikari-punctuation'>:</span><br />
                </div>
            </section>
        </div>
    )
}
