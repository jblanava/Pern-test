import ShallowRenderer from 'react-test-renderer/shallow';
import {fireEvent, screen} from '@testing-library/react';
import {render} from '@testing-library/react';
import InputConnection from './InputConnection';


const mockOnSubmit = jest.fn();

beforeEach(() => {
    jest.clearAllMocks();
});

afterEach(() => {
    jest.clearAllMocks();
});

it('renders Input connection without crashing', () => {
  const utils = ShallowRenderer.createRenderer();
  utils.render(<InputConnection onSubmitForm={mockOnSubmit}></InputConnection>);
})

it('renders all elements', () => {
  render(<InputConnection onSubmitForm={mockOnSubmit}></InputConnection>);
 
  const Titles =  screen.getAllByTestId('inputConnectionTitle');
  expect(Titles.length).toBe(1);

  const inputs =  screen.getAllByRole('textbox');
  expect(inputs.length).toBe(2);

  const buttons =  screen.getAllByRole('button');
  expect(buttons.length).toBe(1);
})

it('calls the onSubmit function', () => {
  render(<InputConnection onSubmitForm={mockOnSubmit}></InputConnection>);
  const AddButton = screen.getByRole('button');
 
  const clickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  })
  fireEvent(AddButton,clickEvent); // triggers Add button
  expect(mockOnSubmit).toHaveBeenCalledTimes(1);
})