import A from './A'
import styles from '../styles/A.module.scss'
import Head from 'next/head'
const MainContainer = ({children,keywords}) => {
    return (
        <>
         <Head>
            <title>Samer Lagha</title>
            <meta keywords={'samer lagha , resume' +keywords}></meta>
        </Head>
               <div className={styles.navbar}>
                <A href={'/'} text='Home' />
               
                <A href={'/info'} text='Resume'/>
                <A href={'/portfolio'} text='Portfolio'/>
                <A href={'/contact'} text='Contact'/>
          
        </div>
        <div>
            {children}
        </div>
        </>
    );
};

export default MainContainer;