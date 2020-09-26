import styles from '../../styles/nav.module.css'
const Blog_nav = ({elements}) => 
{
    let ids = Object.keys(elements);

    return (
        <div className={styles.nav_section}>
            <ul >
                {ids.map((id) => (<li className={styles.nav_item}>
                    <a href="#">
                        <h3>{elements[id].title}</h3>
                    </a>
                </li>))}
            </ul>
        </div>  
    );
}
export default Blog_nav;
