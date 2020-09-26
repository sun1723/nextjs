import dynamic from "next/dynamic";
import styles from "../styles/github.module.css"

const BlogNav = dynamic(import("../components/nav/Blog_nav"))
const Blogs = dynamic(import("../components/blog/blog"))

const elements = [
    {
        title: "What is Git",
        content:"Git is a version control system keep track of the file in the project"
    }
]

const Github_learning = () => {
    return (
        <div className={styles.layout}>
            <BlogNav style={styles.nav} elements={elements}/>
            <main className={styles.main_content}>
                <Blogs elements={elements}/>
            </main>
            <div className={styles.add_button}>
                <a href="#"><h4>ADD</h4></a>
            </div>
        </div>
    );
}

export default Github_learning;