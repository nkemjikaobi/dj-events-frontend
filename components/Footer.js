import React from 'react';
import styles from '@/styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p>Copywright &copy; DJ Events 2021</p>
			<p>
				<Link href='/about'>About This Project</Link>
			</p>
		</footer>
	);
};

export default Footer;
