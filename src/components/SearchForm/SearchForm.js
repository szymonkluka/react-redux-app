import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/searchStringRedux';
import { searchStringValue } from '../../redux/searchStringRedux';

const SearchForm = () => {
    const dispatch = useDispatch();
    const currentSearchString = useSelector(searchStringValue);
    const [searchString, setSearchString] = useState(currentSearchString);
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(searchString));
        setSearchString('');
    };
    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={searchString} onChange={(e) => setSearchString(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;