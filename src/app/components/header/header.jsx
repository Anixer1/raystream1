import Link from "next/link";
import styles from "../../page.module.css";

export default async function Header() {
	return (
		<main className={styles.main}>
			<div className={styles.header}>
				<div className={styles.left}>
					<Link
						href={"/"}
						style={{ textDecoration: "none", color: "white" }}
					>
						<p>Dramalama</p>
					</Link>
				</div>
				<div className={styles.right}>
					<Link href="/anime">Anime</Link>
					<Link href="/kdrama">Kdrama</Link>
					<Link href="/movies">Movies</Link>
					<Link href="">Welcome To RayStream Watch Anime, Kdrama, Movies, For Free</Link>
				</div>
			</div>
		</main>
	);
}
