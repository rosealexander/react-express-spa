const getUsers = async (req, res) => {
    try {
        return res.status( 200 );
    }
    catch (error) {
        return res.status( 500 )
    }
}

module.exports =
    {
        getUsers
    }
