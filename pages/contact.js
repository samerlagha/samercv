import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
 import s  from '../styles/contact.module.scss'
 import MainContainer from '../components/MainContainer';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

const Contact=()=>{
    const classes = useStyles();
    return(
       
        <MainContainer >
            <section className={s.section}>
        <div className={s.qualifications}>
        <br/><br/>
			<h1>Samer Lagha</h1><br/><br/>
			<p>Phone# + 380730674311</p><br/><br/>
			<p>E-mail:  samerukr@gmail.com</p><br/><br/>
      

    <Typography className={classes.root}  ><br/><br/>
      <Link href="https://github.com/samerlagha"target="_blank" >
        <GitHubIcon/>
      </Link>
      <Link href="https://www.linkedin.com/in/samer-lagha-1a79ba199/" target="_blank"   color="inherit">
       <LinkedInIcon/>
      </Link>
      <Link href="https://www.facebook.com/samer.lagha.7" target="_blank"   variant="body2">
        <FacebookIcon/>
      </Link>
      <Link href="https://api.whatsapp.com/send?phone=380730674311" target="_blank"   variant="body2">
        <WhatsAppIcon/>
      </Link>
    </Typography>
    </div>
    </section>
		</MainContainer>
       
    )
}

export default Contact