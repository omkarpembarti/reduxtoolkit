import Product from './components/Product';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Product></Product>
      </Provider>
    </div>
  );
}

export default App;
