import { makeStyles } from '@material-ui/core/styles';
import HeroImage from '../../images/hero-image.jpg';

const colors = {
    spaceGrey: '#333',
    white: '#fff',
};

export const useStyles = makeStyles({
    header: {
        backgroundColor: colors.spaceGrey,
    },
    footer: {
        backgroundColor: colors.spaceGrey,
        minHeight: 64,
    },
    footerTypography: {
        color: colors.white,
    },
    heroContent: {
        background: `url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    heroText: {
        color: colors.white,
    },
    categoryTitleText: {
        color: colors.spaceGrey,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    }, cardMedia: {
        paddingTop: '56.25%',
    },
    cardContent: {
        flexGrow: 1,
    },
    cartIcon: {
        color: colors.white,
    },
});
