import { makeStyles } from '@material-ui/core/styles';

const colors = {
    spaceGrey: '#333',
    white: '#fff',
}

export const useStyles = makeStyles({
    header: {
        backgroundColor: colors.spaceGrey,
    },
    footer: {
        backgroundColor: colors.spaceGrey,
    },
    footerTypography: {
        color: colors.white,
    },
});
