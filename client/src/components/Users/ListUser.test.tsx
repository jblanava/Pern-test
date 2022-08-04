import ShallowRenderer from 'react-test-renderer/shallow';
import {screen} from '@testing-library/react';
import {render} from '@testing-library/react';
import ListUsers from './ListUsers';

const mockListUsers: any[] = [];

const mockListUsersFilled: any[] = [{usuario_id: 1 , name: 'Javi'},
                                    {usuario_id: 2 , name: 'Pedro'},
                                    {usuario_id: 3 , name: 'Eva'},
                                    {usuario_id: 4 , name: 'Juan'},
                                    {usuario_id: 5 , name: 'Teresa'},
                                    {usuario_id: 6 , name: 'Manu'},];

beforeEach(() => {
    jest.clearAllMocks();
});

afterEach(() => {
    jest.clearAllMocks();
});

it('renders Input connection without crashing', () => {
  const utils = ShallowRenderer.createRenderer();
  utils.render(<ListUsers users={mockListUsers}></ListUsers>);
})

it('renders all ListConenction elements', () => {
  render(<ListUsers users={mockListUsers}></ListUsers>);
 
  const tables =  screen.getAllByRole('table');
  expect(tables.length).toBe(1);

  const columns =  screen.getAllByRole('columnheader');
  expect(columns.length).toBe(3);

  const rows =  screen.getAllByRole('row');
  expect(rows.length).toBe(mockListUsers.length + 1); // list.length + header

  const idHeader = screen.getByTestId('idHeader');
  expect(idHeader.tagName).toBe('TH');
  expect(idHeader.textContent).toBe('ID');

  const nameHeader = screen.getByTestId('nameHeader');
  expect(nameHeader.tagName).toBe('TH');
  expect(nameHeader.textContent).toBe('Name');

  const connectionsHeader = screen.getByTestId('connectionsHeader');
  expect(connectionsHeader.tagName).toBe('TH');
  expect(connectionsHeader.textContent).toBe('Connections');
})

it('renders all List users correctly', () => {
  render(<ListUsers users={mockListUsersFilled}></ListUsers>);
 
  const rows =  screen.getAllByRole('row');
  expect(rows.length).toBe(mockListUsersFilled.length + 1); // list.length + header

  for(let i = 1; i < mockListUsersFilled.length; i++){
    const idText = screen.getByTestId(`id ${mockListUsersFilled[i-1].usuario_id}`);
    expect(idText.tagName).toBe('TD');
    expect(idText.textContent).toBe((mockListUsersFilled[i-1].usuario_id).toString());

    const nameText = screen.getByTestId(`name ${mockListUsersFilled[i-1].usuario_id}`);
    expect(nameText.tagName).toBe('TD');
    expect(nameText.textContent).toBe(mockListUsersFilled[i-1].name);
    
    const currentButton = screen.getByTestId(`button ${mockListUsersFilled[i-1].usuario_id}`);
    expect(currentButton.tagName).toBe('BUTTON');
    expect(currentButton.textContent).toBe(mockListUsersFilled[i-1].name + " connections");
  }
})