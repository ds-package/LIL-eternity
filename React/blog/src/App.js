import logo from './logo.svg';
import './App.css';


function App() {

  let posts = '블로그 다시 만들자';

  function test() {
    return 100
  }


  return (
    <div className="App">
      <div className="head-sty">
        함 맛보자 리액트
      </div>

      <h2> {posts} </h2>
      <div style={{ color: '#0064FF', fontSize: '12px' }}> 자바스크립트부터 해야겠다 </div>

    </div>
  );
}



export default App;
