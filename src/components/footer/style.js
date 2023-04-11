const footerLayout = (theme) => ({
    container: {
        display: 'flex',
        minHeight: '100px',
        justifyContent: 'space-between',

        padding: "0.75rem",
        backgroundColor: theme.palette.primary.main,
        paddingBottom: "2rem",
        fontSize: "13px",
        color: theme.palette.secondary.main
    },
    // style for form container
    copyRight: {
        minHeight: "100px",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        paddingBottom: "20px",
        textAlign: "center",
    },
    extraInfo: {
        paddingTop: "5px",
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "20px"
    },
    smallFont: {
        fontSize: "10px",
    },
    anchor: {
        '& >a': {
            textDecoration: "none",
            color: theme.palette.secondary.main,
        }
    }
});
export default footerLayout;