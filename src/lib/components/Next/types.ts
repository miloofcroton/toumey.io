import React from 'react';
import { NextPageContext } from 'next';

/** An alternative to `NextPage`
 * Is it worthwhile?
 */
export interface NextFC<P> extends React.FunctionComponent<P> {
	getInitialProps?: (ctx: NextPageContext) => any;
}
