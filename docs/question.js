import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const components = {
	code: ({ children }) => <code>{children}</code>,
	pre: ({ children }) => (
		<pre>
			<code>{children}</code>
		</pre>
	),
};

const styles = {
	question: {
		paddingLeft: '20px',
		borderLeft: '4px solid var(--ifm-color-primary)',
		marginTop: '20px',
	},
};

const Question = ({ children }) => (
	<MDXProvider components={components}>
		<div style={styles.question}>{children}</div>
	</MDXProvider>
);

export default Question;
