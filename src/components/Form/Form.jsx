import { useState } from 'react';
import { toast } from 'react-toastify';



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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movie"
        autoFocus
        value={query}
        onChange={handleSearchParams}
      />
      <button type="submit">
        Search
      </button>
    </form>
  );
};