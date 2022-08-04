import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';

test('renders learn react link', () => {
  const utils = ShallowRenderer.createRenderer();
  utils.render(<App />);

});
