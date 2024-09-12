import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './signup.module.css';
import { RiContactsFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { IoLockClosedSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Signup({ clickFunc }) {
  return (
    <div className={styles.main}>
      <div>
        <img src="https://e7.pngegg.com/pngimages/486/136/png-clipart-desktop-computers-study-tables-angle-child-thumbnail.png" alt="" />
      </div>

      <Form>
        <h1>Sign up</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> <RiContactsFill /> </Form.Label>
          <Form.Control className={styles.input} type="email" placeholder="Enter email" /><br />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label><MdEmail /></Form.Label>
          <Form.Control className={styles.input} type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label><IoMdLock /></Form.Label>
          <Form.Control className={styles.input} type="password" placeholder="Confirm Your password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Link to="/login">
         <Button variant="primary" type="submit">
          Sign up
        </Button>
        </Link>
       <br />

        <Link to="/login">
          Already have an account? Login
        </Link>
      </Form>
    </div>
  );
}

export default Signup;
