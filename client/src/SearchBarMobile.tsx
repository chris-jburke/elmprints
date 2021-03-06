import React, {useState} from 'react'
import {fade, makeStyles} from '@material-ui/core/styles'
import Search from '@material-ui/icons/Search'
import {InputBase} from '@material-ui/core'
import {useHistory} from 'react-router-dom'

type SearchBarComProps = {
    onChange:(value: string) => void
}

const useStyles = makeStyles(theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.80),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.90),
        },
        marginRight: theme.spacing(3),
        marginLeft: 0,
        marginTop: 5,
        marginBottom: 5,
        width: '75vw',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
        }
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '86%',
        marginLeft: 60,
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
    }
}));

const SearchBarCom: React.FC<SearchBarComProps> = (props) => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const classes = useStyles();
    const history = useHistory();

    // uplift search term, it has changed
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearchTerm(e.target.value)
    }

    // search term is submitted
    const handleOnSubmit = (e: React.FormEvent):any  => {
        e.preventDefault()
        props.onChange(searchTerm)
        history.push('/search')
    }

        return(
        <form onSubmit={(e: React.FormEvent): void => handleOnSubmit(e)}>
            <div className={classes.search} >
                <div className={classes.searchIcon}>
                    <Search />
                </div>
                <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
                />
            </div>
        </form>
        )
    }
export default SearchBarCom