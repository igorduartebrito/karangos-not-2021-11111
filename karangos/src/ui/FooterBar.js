import { Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import LocalCafeTwoToneIcon from '@material-ui/icons/LocalCafeTwoTone';

const useStyles = makeStyles((theme) => ({
    text: {
      width: '100%',
      color: theme.palette.text.secondary
    },
    toolbar:{
        backgroundColor: theme.palette.background.paper,
        minHeight: '42px',
        width: '100%',
        position: 'fixed',
        bottom: 0
    },
    link:{
        color: theme.palette.secondary.light,
        textDecoration: 'none', //tira o sublinhado
        '&:hover':{ //hover mouse
            textDecoration: 'underline' //sublinhado
        }
    }
  }));

export default function FooterBar(){
    const classes = useStyles();
    return(
        <Toolbar className={classes.toolbar}>
            <Typography variant="caption" align="center" className={classes.text}>
            Developed by <LocalCafeTwoToneIcon fontSize="small" /> and <a href="mailto:igorduartebrito@gmail.com" className={classes.link}>Igor Duarte </a>
            </Typography>
        </Toolbar>
    )
}