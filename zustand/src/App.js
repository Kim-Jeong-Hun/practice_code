// create 메소드를 가져와서
import { create } from 'zustand';

// 콜백 함수 내부에 객체를 만들어서 그 객체 내에 저장한 변수는 useStore()로 가져오기만 하면 어디서든 사용 가능
const useStore = create((set) => ({
  count: 0,
  증가() {
    set((state) => ({
      count: state.count + 1}))
    }
}))


function App() {
  const {count, 증가} = useStore();
  return (
    <div className="App">
      <p>구독자 {count}</p>
      <button onClick={
        ()=>{
          증가();
        }
      }>버튼</button>
      <Card />
    </div>
  );
}

function Card() {
  const {count} = useStore();
  return (
    <div className="App">
      <p>카드 {count}</p>
    </div>
  );
}

export default App;
