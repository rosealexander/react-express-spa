import {useContext, useState} from 'react';
import {BottomNavigation, BottomNavigationAction, Box, Button, Divider, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography} from "@mui/material";
import {RiQuillPenFill, RiQuillPenLine} from "react-icons/ri";
import {IoPersonCircle, IoPersonCircleOutline} from "react-icons/io5";
import axios from "../../axios";
import {PoetryContext} from "./Poetry";


const Prompt = () => {
    const [poetry, setPoetry] = useContext(PoetryContext).poetry
    const [authors, setAuthors] = useContext(PoetryContext).authors
    const [promptType, setPromptType] = useState("generate")
    const [poetryType, setPoetryType] = useState("haiku")
    const [authorType, setAuthorType] = useState("select")
    const [authorSelect, setAuthorSelect] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handlePromptTypeChange = (event, value) => {
        setPromptType(value)
    }

    const handleAuthorChange = (event) => {
        console.log(event.target.value)
        setAuthorSelect(event.target.value)
    }

    const handlePoemTypeChange = (event, value) => {
        setPoetryType(value)
    }

    const handleAuthorTypeChange = (event, value) => {
        setAuthorType(value)
    }

    const handleGeneratePoetry = async () => {
        setIsLoading(true)
        try {
            if (authorType === 'generate'){
                const generateAuthorRes = await axios.post('author/generate')
                const newAuthor = generateAuthorRes.data

                const params = {
                    authorId: newAuthor.id,
                    poemType: poetryType
                }
                const generatePoemRes = await axios.post('poem/generate', params)
                const newPoem = generatePoemRes.data

                setAuthors([newAuthor, ...authors])
                setPoetry([newPoem, ...poetry])
            }
            else if (authorType === 'select'){
                const authorId = (authors.find(author => author.name === authorSelect)).id
                const params = {
                    authorId: authorId,
                    poemType: poetryType
                }
                const generatePoemRes = await axios.post('poem/generate', params)
                const newPoem = generatePoemRes.data

                setPoetry([newPoem, ...poetry])
                setAuthorSelect("")
            }
        }
        finally {
            setIsLoading(false)
        }
    }

    const handleGenerateAuthor = async () => {
        setIsLoading(true)
        try {
            const generateAuthorRes = await axios.post('author/generate')
            const newAuthor = generateAuthorRes.data
            setAuthors([newAuthor, ...authors])
        }
        finally {
            setIsLoading(false)
        }
    }

    const handleRemovePoetry = async () => {
        setIsLoading(true)
        try {
            await axios.delete('poem/clear')
            setPoetry([])
            setAuthors([])
            setAuthorSelect('')
        }
        finally {
            setIsLoading(false)
            setPromptType('generate')
        }
    }


    return (
        <Paper variant='outlined'>
            <Box p={5}>
                <Grid
                    container
                    direction='column'
                    spacing={3}
                >
                    <Grid item>
                        <BottomNavigation
                            showLabels
                            value={promptType}
                            onChange={handlePromptTypeChange}
                        >
                            <BottomNavigationAction
                                label={ promptType === "generate" ?
                                    <Typography
                                        sx={{fontWeight: "bold"}}
                                        color='primary'
                                    >
                                        Generate&nbsp;new&nbsp;Poem
                                    </Typography>
                                    : "Generate new Poem"
                                }
                                value="generate"
                            />
                            <BottomNavigationAction
                                label={ promptType === "remove" ?
                                    <Typography
                                        sx={{fontWeight: "bold"}}
                                        color='primary'
                                    >
                                        Remove&nbsp;all&nbsp;Poetry
                                    </Typography>
                                    : "Remove all Poetry"
                                }
                                value="remove"
                            />
                        </BottomNavigation>
                    </Grid>
                    { promptType === "generate" &&
                        <Grid item>
                            <Grid
                                container
                                direction='column'
                                spacing={3}
                            >
                                <Grid item>
                                    <Typography
                                        variant='caption'
                                        color='textSecondary'
                                    >
                                        Poem Type
                                    </Typography>
                                    <Divider/>
                                    <BottomNavigation
                                        showLabels
                                        value={poetryType}
                                        onChange={handlePoemTypeChange}
                                    >
                                        <BottomNavigationAction
                                            label="Haiku"
                                            value="haiku"
                                            icon={poetryType === "haiku" ? <RiQuillPenFill/> : <RiQuillPenLine/>}
                                        />
                                        <BottomNavigationAction
                                            label="Limerick"
                                            value="limerick"
                                            icon={poetryType === "limerick" ? <RiQuillPenFill/> : <RiQuillPenLine/>}
                                        />
                                    </BottomNavigation>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant='caption'
                                        color='textSecondary'
                                    >
                                        Author
                                    </Typography>
                                    <Divider/>
                                    <BottomNavigation
                                        showLabels
                                        value={authorType}
                                        onChange={handleAuthorTypeChange}
                                    >
                                        <BottomNavigationAction
                                            label="Select"
                                            value="select"
                                            icon={authorType === "select" ? <IoPersonCircle/> : <IoPersonCircleOutline/>}
                                        />
                                        <BottomNavigationAction
                                            label="Generate"
                                            value="generate"
                                            icon={authorType === "generate" ? <IoPersonCircle/> : <IoPersonCircleOutline/>}
                                        />
                                    </BottomNavigation>
                                </Grid>
                                {(authorType === "select" && !!authors.length) &&
                                    <Grid item>
                                        <FormControl
                                            required
                                            fullWidth
                                            variant="standard"
                                        >
                                            <InputLabel>
                                                Select Author
                                            </InputLabel>
                                            <Select
                                                value={authorSelect}
                                                defaultValue=""
                                                onChange={handleAuthorChange}
                                            >
                                                {authors.sort().map(author =>
                                                    <MenuItem
                                                        key={author.id}
                                                        value={author.name}
                                                    >
                                                        {author.name}
                                                    </MenuItem>
                                                )}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                }
                                {(authorType === "select" && !authors.length) &&
                                    <Grid item>
                                        <Typography
                                            variant='caption'
                                            display='inline'
                                        >
                                            There are no
                                        </Typography>
                                        <Typography
                                            variant='caption'
                                            display='inline'
                                            color='primary'
                                            sx={{fontWeight: "bold"}}
                                        >
                                            &nbsp;authors
                                        </Typography>
                                        <Typography
                                            variant='caption'
                                            display='inline'
                                        >
                                            &nbsp;to select yet, are you ready to generate a
                                        </Typography>
                                        <Typography
                                            variant='caption'
                                            display='inline'
                                            color='primary'
                                            sx={{fontWeight: "bold"}}
                                        >
                                            &nbsp;totally new and random author
                                        </Typography>
                                        <Typography
                                            variant='caption'
                                            display='inline'
                                        >
                                            ?
                                        </Typography>
                                    </Grid>
                                }
                                {(authorType === "select" && !!authors.length && authorSelect) &&
                                    <Grid item>
                                        <Typography
                                            variant='caption'
                                            display='inline'
                                        >
                                            Are you ready to generate a new
                                        </Typography>
                                        <Typography
                                            variant='caption'
                                            display='inline'
                                            color='primary'
                                            sx={{fontWeight: "bold"}}
                                        >
                                            &nbsp;{poetryType}
                                        </Typography>
                                        <Typography
                                            variant='caption'
                                            display='inline'
                                        >
                                            &nbsp;by
                                        </Typography>
                                        <Typography
                                            variant='caption'
                                            display='inline'
                                            color='primary'
                                            sx={{fontWeight: "bold"}}
                                        >
                                            &nbsp;{authorSelect}
                                        </Typography>
                                        <Typography
                                            variant='caption'
                                            display='inline'
                                        >
                                            ?
                                        </Typography>
                                    </Grid>
                                }
                                {authorType === "generate" &&
                                    <Grid item>
                                        <Typography
                                            variant='caption'
                                            display='inline'
                                        >
                                            Are you ready to generate a new
                                        </Typography>
                                        <Typography
                                            variant='caption'
                                            display='inline'
                                            color='primary'
                                            sx={{fontWeight: "bold"}}
                                        >
                                            &nbsp;{poetryType}
                                        </Typography>
                                        <Typography
                                            variant='caption'
                                            display='inline'
                                        >
                                            &nbsp;by some
                                        </Typography>
                                        <Typography
                                            variant='caption'
                                            display='inline'
                                            color='primary'
                                            sx={{fontWeight: "bold"}}
                                        >
                                            &nbsp;totally new and randomly created author
                                        </Typography>
                                        <Typography
                                            variant='caption'
                                            display='inline'
                                        >
                                            ?
                                        </Typography>
                                    </Grid>
                                }
                                {(!!authors.length || authorType === 'generate') &&
                                    <Grid item>
                                        <Box py={2}>
                                            <Button
                                                fullWidth
                                                disabled={isLoading || (authorType === "select" && !authorSelect)}
                                                variant='outlined'
                                                onClick={handleGeneratePoetry}
                                            >
                                                Create some Poetry
                                            </Button>
                                        </Box>
                                    </Grid>
                                }
                                {(authorType === "select" && !authors.length) &&
                                    <Grid item>
                                        <Box py={2}>
                                            <Button
                                                fullWidth
                                                disabled={isLoading}
                                                variant='outlined'
                                                onClick={handleGenerateAuthor}
                                            >
                                                Create a new Author
                                            </Button>
                                        </Box>
                                    </Grid>
                                }
                            </Grid>
                        </Grid>
                    }
                    {promptType === "remove" &&
                        <Grid item>
                            <Grid
                                container
                                direction='column'
                                spacing={2}
                            >
                                <Grid item>
                                    <Typography
                                        variant='caption'
                                        color='textSecondary'
                                    >
                                    </Typography>
                                    <Divider />
                                </Grid>
                                {!!poetry.length &&
                                    <Grid item>
                                        <Typography
                                            variant='caption'
                                            display='inline'
                                        >
                                            Are you sure that you really want to remove all poems and authors? This action
                                            cannot be undone!
                                        </Typography>
                                    </Grid>
                                }
                                <Grid item>
                                    <Box py={2}>
                                        <Button
                                            fullWidth
                                            disabled={isLoading || !poetry.length}
                                            variant='outlined'
                                            color='primary'
                                            onClick={handleRemovePoetry}
                                        >
                                            Remove everything
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    }
                </Grid>
            </Box>
        </Paper>
    );
};

export default Prompt;
