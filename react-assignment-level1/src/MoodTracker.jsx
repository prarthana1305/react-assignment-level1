import React, { useState } from "react";


const MoodTracker = () => {
  const [mood, setMood] = useState("");
  const [moodList, setMoodList] = useState([]);

  const moods = [
    { emoji: "😊", text: "Happy" },
    { emoji: "😒", text: "Annoyed" },
    { emoji: "😢", text: "Sad" },
  ];

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  const addMoodEntry = () => {
    if (!mood) return;
    const selectedMood = moods.find((m) => m.emoji === mood);
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      emoji: selectedMood.emoji,
      text: selectedMood.text,
    };
    setMoodList([newEntry, ...moodList]);
  };

  const clearMoods = () => {
    setMoodList([]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-950">
      <div className="max-w-lg w-full p-6 bg-white shadow-2xl rounded-lg">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Mood Tracker</h2>
        <div className="flex space-x-3 mb-6">
          <select
            className="p-3 border border-gray-400 rounded-lg w-full focus:ring focus:ring-blue-300"
            value={mood}
            onChange={handleMoodChange}
          >
            <option value="">Select a Mood</option>
            {moods.map((m, index) => (
              <option key={index} value={m.emoji}>
                {m.emoji} {m.text}
              </option>
            ))}
          </select>
          <button
            onClick={addMoodEntry}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Add
          </button>
        </div>
        {moodList.length > 0 && (
          <button
            onClick={clearMoods}
            className="bg-red-600 text-white px-6 py-3 mb-6 rounded-lg w-full hover:bg-red-700 transition duration-200"
          >
            Clear All
          </button>
        )}
        <ul className="space-y-4">
          {moodList.map((entry) => (
            <li
              key={entry.id}
              className="p-4 bg-gray-100 border-l-4 border-blue-500 shadow-md rounded-lg flex justify-between items-center"
            >
              <span className="text-gray-700 font-medium">{entry.date}</span>
              <span className="text-lg font-semibold">{entry.emoji} {entry.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoodTracker;
