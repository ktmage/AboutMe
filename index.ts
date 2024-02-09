import { GoogleGenerativeAI } from '@google/generative-ai';
import { API_KEY } from './config';

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

async function run() {
	// For text-only input, use the gemini-pro model
	const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

	const prompt = '簡単なホームページのHTMLを生成してください。';

	const result = await model.generateContent(prompt);
	const response = await result.response;
	const text = response.text();
	console.log(text);
}

run();
