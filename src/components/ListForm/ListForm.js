import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';
import shortid from 'shortid';

const ListForm = () => {
    const dispatch = useDispatch();
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addList({ id: shortid(), title, description }));
        setTitle('');
        setDescription('');
    };

    return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <span>Title:</span>
            <TextInput
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <span>Description:</span>
            <TextInput
                type='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <Button>Add list</Button>
        </form>
    );
};
export default ListForm;