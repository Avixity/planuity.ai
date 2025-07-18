const API_KEY = "AIzaSyBjmiHwpwLEXRVaIbiLTCLc8the5ohe8eQ";

const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;


document.getElementById('generate-btn').addEventListener('click', async () => {

  const topic = document.getElementById('topic').value.trim();
  const time = document.getElementById('time').value.trim();
  const grade = document.getElementById('grade').value.trim();
  const date = document.getElementById('date').value.trim();
  const exam = document.getElementById('exam').value.trim();

  const planOutput = document.getElementById('planOutput');

  if (!topic || !time || !grade || !date || !exam) {
    alert('Please fill in all fields!');
    return;
  }

  const prompt = `
You are an expert study coach.
Create a detailed day-by-day study plan for:

- Topic: ${topic}
- Time per day: ${time} minutes
- Grade level: ${grade}
- Start date: ${date}
- Exam date: ${exam}

Provide an evenly distributed schedule with daily tasks.
`;

  planOutput.textContent = "Generating study plan... Please wait.";

  try {
  
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const data = await response.json();

    if (data && data.candidates && data.candidates.length > 0) {
      planOutput.textContent = data.candidates[0].content.parts[0].text;
    } else {
      planOutput.textContent = "No study plan was generated. Please try again.";
    }

  } catch (error) {
    console.error('Error:', error);
    planOutput.textContent = "Error generating study plan. Check console for details.";
  }
});
