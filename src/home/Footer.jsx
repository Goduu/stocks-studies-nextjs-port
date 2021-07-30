import { Box, Container, Link, Typography } from "@material-ui/core";
import Copyright from "../Copyright";
import ProTip from "../ProTip";

function Footer() {
    return (
        <Container maxWidth="lg" >
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Nexit
                </Typography>
                <Typography color="secondary">
                    Your next level stocks study tool
                </Typography>
                <ProTip />
                <Copyright />
            </Box>
        </Container>

    )
}

export default Footer