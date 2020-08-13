import React from 'react';
import Layout from './Layout';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: 500,
        border: "solid",
        borderWidth:"2px"
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

const Page = () => {
    const classes = useStyles();
    return (
        <Layout
            title="TESTING PAGE"
            description="Menu for reuse"
            className={classes.root}
        >
            <div>
            <Container>
        <Box my={2}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>


        </div>
        </Layout>

    );
};

export default Page;