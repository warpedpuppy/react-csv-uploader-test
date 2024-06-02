
import './App.css';
import Dropzone1 from './Dropzone1';
import CSVReader from 'react-csv-reader'
  
function App() {
  return (
    <div className="App">
	  <Dropzone1 />
	  <CSVReader onFileLoaded={(data, fileInfo, originalFile) => console.dir(data, fileInfo, originalFile)} />
    </div>
  );
}

export default App;
