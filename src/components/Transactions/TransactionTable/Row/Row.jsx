import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import MoreHorizOutlined from '@material-ui/icons/MoreHorizOutlined';

// dropdown menu
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// style
import makeStyles from './style'


export default function Row(props) {
    const { row } = props;
    const classes = makeStyles();

    // Menu utility
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    // End of menu utility

    return (
        <React.Fragment>
            <TableRow className={`${classes.root} ${classes.tableHead}`}>

                <TableCell className={classes.tableCell} component="th" scope="row">
                    {row.no}
                </TableCell>
                <TableCell className={classes.tableCell} align="right">{row.users}</TableCell>
                <TableCell className={classes.tableCell} align="right">{row.buktiTransfer}</TableCell>
                <TableCell className={classes.tableCell} align="right">{row.remainingActive}</TableCell>
                <TableCell className={classes.tableCell} align="right">{row.statusUser}</TableCell>
                <TableCell className={classes.tableCell} align="right">{row.statusPayment}</TableCell>
                <TableCell className={classes.tableCell} align="right">
                    <MoreHorizOutlined style={{ cursor: 'pointer' }} onClick={handleClick} />
                    <Menu

                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem className={classes.menuItem} style={{ color: 'green' }} onClick={handleClose}>Approve</MenuItem>
                        <MenuItem className={classes.menuItem} style={{ color: 'red' }} onClick={handleClose}>Cancel</MenuItem>
                    </Menu>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
