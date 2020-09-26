import styles from '../../styles/Blog.module.css'
const Blogs = ({elements}) => {
    let ids = Object.keys(elements);
    console.log(ids);
    return (
        <div className={styles.blog_section}> 
            <p >
                {ids.map((id) => (<h3>{elements[id].content}</h3>))}
            </p>
        </div>
    );
}

export default Blogs;