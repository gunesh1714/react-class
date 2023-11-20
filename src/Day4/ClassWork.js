import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

const fruitOptions = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

function MyForm() {
  const [name, setName] = useState('');
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [greetingMessage, setGreetingMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFruitChange = (_, value) => {
    setSelectedFruit(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name && selectedFruit) {
      const message =` Hello, ${name}! Your favorite fruit is ${selectedFruit}.`;
      setGreetingMessage(message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          label="Name"
          data-testid="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <Autocomplete
          options={fruitOptions}
          getOptionLabel={(option) => option}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a fruit"
              data-testid="autocomplete"
            />
          )}
          value={selectedFruit}
          onChange={handleFruitChange}
        />
      </div>
      <div>
        <Button type="submit" variant="contained" color="primary" data-testid="button">
          Submit
        </Button>
      </div>
      {greetingMessage && <p>{greetingMessage}</p>}
    </form>
  );
}

export default MyForm;