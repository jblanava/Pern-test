import ShallowRenderer from 'react-test-renderer/shallow';
import {screen} from '@testing-library/react';
import {fireEvent} from '@testing-library/react';
import {render} from '@testing-library/react';
import InputUser from '../../components/Users/InputUser';
import ListUsers from '../../components/Users/ListUsers';
import { User } from './User';

beforeEach(() => {
    jest.clearAllMocks();
});

afterEach(() => {
    jest.clearAllMocks();
});

it('renders User without crashing', () => {
    const utils = ShallowRenderer.createRenderer();
    utils.render(<User></User>);
})

// it('click add button with a user and add it', () => {
//     let mockedUsers = [{usuario_id: 1, name: 'Javi'}];
//     const mockOnSubmit = jest.fn((user) => {
//         mockedUsers.concat({usuario_id: 2, name: user.name})
//     });
//     render(<InputUser onSubmitForm={mockOnSubmit}></InputUser>);
//     render(<ListUsers users={mockedUsers}></ListUsers>);

//     const addButton = screen.getByText('Add');
//     const inputText = screen.getByTestId('inputUserName');
//     inputText.textContent = "Javi";

//     const clickEvent = new MouseEvent('click', {
//         bubbles: true,
//         cancelable: true,
//       })
//     fireEvent(addButton,clickEvent(inputText.textContent));

//     const listUsers = screen.getByTestId('listUser');

//     console.log(listUsers.childElementCount);
// })