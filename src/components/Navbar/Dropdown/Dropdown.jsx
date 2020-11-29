import { withStyles } from '@material-ui/core/styles'
import { Menu } from '@material-ui/core'

export const StyledMenu = withStyles({
    paper: {
        // border: '1px solid #d3d4d5',
        backgroundColor: '#363954'
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));
