import Head from 'next/head'
import Link from 'next/link'

const Layout = ({children, title = "Stonks Tracker"}) => {
    return (
      <div className="layout">
        <Head>
          <meta name="viewport" content="width=1000, user-scalable=no"/>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className="header">
          <Link href="/" passHref>
            <a>
            <img src="https://i.ibb.co/QKM8Yyv/stonks.png" alt="stonks" className="coin_logo"/>
            </a>
          </Link>
        </header>
        <main>{children}</main>
      </div>
    );
}; 

export default Layout;