import React from "react";
import AppAppBar from "./AppAppBar/"

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
        height: 50
    },    
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));


const Layout = ({
    title = "Title",
    description = "Description",
    className="",
    children
}) => {
    const classes = useStyles();
    return (
        <div id="back-to-top-anchor">            
            <AppAppBar/>
            <div className={className}>{children}</div>
        </div>
    )
};

export default Layout;