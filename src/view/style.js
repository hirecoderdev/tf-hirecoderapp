const bodyLayout = (theme) => ({
    container: {
        display: 'flex',
        minHeight: '100px',
        justifyContent: 'space-between',
        marginTop: "0rem",
        padding: "0.75rem",
        backgroundColor: `${theme.palette.optional.main} !important`,
        paddingBottom: "0rem",
        fontSize: "13px",
        color: theme.palette.secondary.main
    },
    form: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main
    },
    home: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 800,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        textAlign: "center",
        p: 4,
        marginTop: "5%",
    },
    bg: {
        backgroundColor: `${theme.palette.primary.main} !important`,

    }

});
export default bodyLayout;