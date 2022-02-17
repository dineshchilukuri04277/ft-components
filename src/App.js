import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/firstCoponent'

function SharedComponent({name}) {
  return (
    <div className="App">
      <FirstComponent name={name ? name : 'John'} />
    </div>
  );
}

export default SharedComponent;
