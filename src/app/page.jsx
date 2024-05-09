import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
	return (
		<main className={styles.newbg}>
			<div className={styles.content}>
				<div className={styles.contentContainer}>
					<Link
						href={"/anime"}
						title="Click here to get redirected to the anime webpage"
					>
						<div className={styles.anime}>
							<h2>Anime</h2>
							<p></p>
						</div>
					</Link>
					<Link
						href={"/movies"}
						title="Click here to get redirected to the manga webpage"
					>
						<div className={styles.manga}>
							<h2>Movie</h2>
							<p></p>
						</div>
					</Link>
					<Link
						href={"/kdrama"}
						title="Click here to get redirected to the kdrama webpage"
					>
						<div className={styles.kdrama}>
							<h2>Kdrama</h2>
							<p></p>
						</div>
					</Link>
					<Link
						href={""}
						title=""
					>
						<div className={styles.movies}>
							<h2></h2>
							<p>Welcome To RayStream Watch Anime, Kdrama, Movies, For Free Enjoy Watching 🎞️📺📽️🎥🎬🎭🎫🎟️</p>
						</div>
					</Link>
				</div>
			</div>
		</main>
	);
}

// Test push
