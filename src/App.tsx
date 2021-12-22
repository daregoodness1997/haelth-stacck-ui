import Button from './components/buttons/Button';
import Input from './components/inputs/basic/Input';

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Button
        label='Click Me'
        showicon={false}
        onClick={() => console.log('Clicked')}
      />
      <Input type='text' />
      <Input type='number' step='0.1' />
    </div>
  );
}

export default App;
