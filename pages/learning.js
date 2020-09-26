import styles from '../styles/Learning.module.css'
import BlueInk from '../static/blue-ink.svg'
import LightBlueInk from '../static/light-blue.svg'
import PurpleInk from '../static/purple-ink.svg'
import YellowInk from '../static/yellow-ink.svg'
import Link from 'next/link'

const Learning = () =>(
    <>
        {/*header*/}
        <div className={styles.header}>
            <div className={styles.header_section}>
                <div>
                    <Link href="/github_learning">
                        <a >
                        <img src={BlueInk} alt="Blue Ink" />
                        <h2>Github Training</h2>
                        </a>
                    </Link>
                </div>
                <div>
                    <img src={LightBlueInk} alt="Luight Blue Ink" />
                    <h2>Introduce HTML</h2>
                </div>
                <div>
                    <img src={PurpleInk} alt="Purple Ink" />
                    <h2>Introduce CSS</h2>
                </div>
                <div>
                    <img src={YellowInk} alt="Yellow Ink" />
                    <h2>How Web work</h2>
                </div>
            </div>
        </div>
        {/*side*/}

        {/*main*/}

        {/*footer*/}
    </>
)
export default Learning;