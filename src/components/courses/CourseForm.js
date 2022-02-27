import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../../responsive';
import { addCourse } from '../../redux/courses/coursesSlice';
import { setSliderIndex } from '../../redux/utils/actions/sliderActions';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0rem 2rem;
  width: 100%;
`;

const FormRow = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1.5rem;
  ${mobile({
    'flex-direction': 'column',
  })};
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1rem;
`;

const InputLabel = styled.div`
  font-family: 'Urbanist', 'Arial', cursive;
  font-size: 22px;
  font-weight: 600;
  color: black;
  margin-bottom: 1rem;
`;

const Input = styled.input.attrs((props) => ({
  placeholder: props.placeholder,
  defaultValue: props.value || '',
  id: props.id,
}))`
  background-color: white;
  padding: 0.5rem;
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: grey;
  box-shadow: 0px 3px 7px -2px rgba(79,79,79,0.64);
`;

const CreateButton = styled.button`
  justify-self: end;
  align-self: center;
  width: 150px;
  background-color: #97BF11;
  padding: 0.6rem 1.5rem;
  border-radius: 20px;
  border: none;
  margin-bottom: 1rem;
  margin-top: auto;
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-align: center !important;
  color: grey;
  color: white !important;
  &:hover {
    color: white !important;
    background-color: #97BF11;
    cursor: pointer;
  } 
`;

const CourseForm = () => {
  const { data } = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitCourse = (event) => {
    event.preventDefault();
    dispatch(setSliderIndex(data.length));
    dispatch(addCourse(event.target));
    navigate('/courses', { replace: true });
  };

  return (
    <Container onSubmit={(e) => submitCourse(e)}>
      <FormRow>
        <InputWrapper>
          <InputLabel>
            Course Details
          </InputLabel>
          <Input type="text" name="title" placeholder="title" id="car-title" />
          <Input type="text" name="course-type" placeholder="course type" id="car-type" />
          <Input type="text" name="image" placeholder="Image Url" id="car-image" />
          <Input type="number" step="0.01" name="price_daily" placeholder="Course Price Daily" id="price-daily" />
          <Input type="number" step="0.01" name="price_monthly" placeholder="Course Price Monthly" id="price-monthly" />
        </InputWrapper>
        <InputWrapper>
          <CreateButton type="submit">
            Create
          </CreateButton>
        </InputWrapper>
      </FormRow>
    </Container>
  );
};

export default CourseForm;
