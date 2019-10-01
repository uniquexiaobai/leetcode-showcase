import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function Home() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;
	return (
		<Layout title={siteConfig.title} description={siteConfig.tagline}>
			<div className={classnames(styles.home)}>
				<main className={classnames(styles.main)}>
					<h1 className='hero__title'>{siteConfig.title}</h1>
					<p className='hero__subtitle'>{siteConfig.tagline}</p>
				</main>

				<footer className='footer footer--dark'>
					<div className='text--center'>
						<a className='footer__link-item' href='#'>
							leetcode-viewer
						</a>
						powerd by Docusaurus
					</div>
				</footer>
			</div>
		</Layout>
	);
}

export default Home;
