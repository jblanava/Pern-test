import ShallowRenderer from 'react-test-renderer/shallow';
import {fireEvent, screen} from '@testing-library/react';
import {render} from '@testing-library/react';
import InputUser from './InputUser';


const mockOnSubmit = jest.fn();

beforeEach(() => {
    jest.clearAllMocks();
});

afterEach(() => {
    jest.clearAllMocks();
});

it('renders Input connection without crashing', () => {
  const utils = ShallowRenderer.createRenderer();
  utils.render(<InputUser onSubmitForm={mockOnSubmit}></InputUser>);
})

it('renders all elements', () => {
  render(<InputUser onSubmitForm={mockOnSubmit}></InputUser>);
 
  const Titles =  screen.getAllByTestId('inputUserTitle');
  expect(Titles.length).toBe(1);

  const inputs =  screen.getAllByRole('textbox');
  expect(inputs.length).toBe(1);

  const buttons =  screen.getAllByRole('button');
  expect(buttons.length).toBe(1);
})

it('calls the onSubmit function', () => {
  render(<InputUser onSubmitForm={mockOnSubmit}></InputUser>);
  const AddButton = screen.getByRole('button');
 
  const clickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  })
  fireEvent(AddButton,clickEvent); // triggers Add button
  expect(mockOnSubmit).toHaveBeenCalledTimes(1);
})