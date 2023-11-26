import { useState } from 'react';
import { toast } from 'react-toastify';
import { Input, Button, FormSearch } from 'components/Form/Form.styled';


export const Form = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');
  
  const handleSearchParams = e => {
    setQuery(e.target.value);
    };

  const handleSubmit = e => {
    e.preventDefault();
    
    if (query.trim() === '') {
      toast.info('Please, enter search movies!');
      return;
    }
    setSearchParams({query});
    reset();
  };

  const reset = () => {
    setQuery('');
  }

  return (
    <>
      <FormSearch onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search movie"
          autoFocus
          value={query}
          onChange={handleSearchParams}
        />
        <Button type="submit">
          Search
        </Button>
      </FormSearch>
    </>
   
  );
};