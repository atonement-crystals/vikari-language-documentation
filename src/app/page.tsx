import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Vikari Language Documentation'
}

let github_account_link = 'https://github.com/atonement-crystals'
let github_repo_vikari_link = 'https://github.com/atonement-crystals/Vikari'
let github_repo_vide_link = 'https://github.com/atonement-crystals/Vide'

export default function Page() {
    return (
        <div className='doc-page'>
            <section>
                <h2>What is Vikari?</h2>
                <p>
                    Vikari is an original programming language designed and written by <a href={github_account_link}>Aaron Michael Carson</a>. Its
                    design goals were to be somewhat original in its use of characters for operators and syntactical design. Some influences were
                    drawn from Java and Python, among others.
                </p>
                <p>
                    Over 700 hours have been spent in designing and implementing Vikari. The language&apos;s design has been mostly completed. But
                    its implementation is still well underway. All completed and planned features are thereby documented on this site. Please use
                    the sidebar to the left to navigate all language documentation.
                </p>
                <p>
                    The interpreter features the capacity to lex, parse, and interpret all interpreted language features. Code can be executed
                    from a file, or from a text string provided directly to the program. Vikari also features a REPL mode, in which successive
                    statements can be entered and then sequentially interpreted as they are written.
                </p>

                <h2>Links</h2>
                <ul>
                    <li>Official GitHub repository: <a href={github_repo_vikari_link}>{github_repo_vikari_link}</a></li>
                    <li>Vide, the official code editor: <a href={github_repo_vide_link}>{github_repo_vide_link}</a></li>
                </ul>
            </section>
        </div>
    )
}
