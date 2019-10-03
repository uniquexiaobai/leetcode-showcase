import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function Home() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;
	const { customFields } = siteConfig;
	const { user, progress } = customFields.guide;

	return (
		<Layout title={siteConfig.title} description={siteConfig.tagline}>
			<div className={classnames(styles.home)}>
				<main className={classnames(styles.main)}>
					<h1 className='hero__title'>{`${user.user_name}'s Leetcode Solutions`}</h1>
					<p className='hero__subtitle'>
						This website presents all my accepted Leetcode
						solutions. I've solved &nbsp;
						<span className='text--primary'>
							{progress.num_solved}
						</span>
						&nbsp;/&nbsp;
						<span className='text--primary'>
							{progress.num_total}
						</span>{' '}
						problems.
					</p>
				</main>

				<footer className='footer footer--dark'>
					<div className='text--center'>
						<a className='footer__link-item' href='#'>
							leetcode-viewer
						</a>
						&nbsp; powerd by Docusaurus
					</div>
				</footer>
			</div>
		</Layout>
	);
}

export default Home;
