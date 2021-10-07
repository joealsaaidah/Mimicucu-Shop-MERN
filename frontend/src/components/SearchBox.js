import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(keyword.trim());
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    <Form onSubmit={submitHandler} className='d-flex'>
      <Form.Control
        inline
        type='text'
        name='q'
        placeholder='Search Products ...'
        className='mr-sm-2 ml-sm-5'
        onChange={(e) => setKeyword(e.target.value)}
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2'>
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
