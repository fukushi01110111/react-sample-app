import { useState } from 'react';
import './App.css';

function App() {
  const generateAnswer = () => Math.floor(Math.random() * 10) + 1;

  const [answer, setAnswer] = useState(generateAnswer());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState([]);

  const handleGuess = () => {
    const num = parseInt(guess);
    let result = '';

    if (isNaN(num)) {
      result = '⚠️ 数字を入力してください';
    } else if (num === answer) {
      result = '🎉 当たり！';
    } else if (num < answer) {
      result = 'もっと大きい数字だよ';
    } else {
      result = 'もっと小さい数字だよ';
    }

    setMessage(result);
    setHistory(prev => [...prev, { guess: num, result }]);
    setGuess('');
  };

  const handleReset = () => {
    setAnswer(generateAnswer());
    setGuess('');
    setMessage('');
    setHistory([]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 font-sans p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">🎯 数字当てゲーム</h1>
        <p className="mb-2">1〜10の数字を当ててみてね！</p>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          min="1"
          max="10"
          className="border rounded p-2 w-24 text-center"
        />
        <div className="flex gap-2 justify-center mt-4">
          <button
            onClick={handleGuess}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            判定する
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
          >
            もう一度遊ぶ
          </button>
        </div>
        <p className="mt-4 text-lg font-semibold">{message}</p>

        {history.length > 0 && (
          <div className="mt-6 text-left">
            <h2 className="text-md font-bold mb-2 text-gray-700">📝 回答履歴</h2>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {history.map((item, index) => (
                <li key={index}>
                  入力: {item.guess} → 結果: {item.result}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
