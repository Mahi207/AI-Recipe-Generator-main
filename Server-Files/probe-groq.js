require('dotenv').config({ path: require('path').resolve(process.cwd(), '.env') });
const { groq } = require('./config/gemini');

const ingredients = ['tomato', 'onion'];
const dietaryPreference = 'vegetarian';
const dietFilter = dietaryPreference ? `The recipe MUST be${dietaryPreference}-friendly.` : '';

const prompt = `You are a professional chef and nutritionist. Based on these ingredients:${ingredients.join(', ')}.
${dietFilter}

Generate a detailed recipe in the following JSON format (return ONLY valid JSON, no markdown):
{
  "title": "Recipe Name",
  "ingredients": [{"name": "ingredient name", "quantity": "amount needed"}],
  "instructions": [{"step": 1, "description": "Step description"}],
  "nutrition": {
    "calories": "approximate calories per serving",
    "protein": "protein in grams",
    "carbs": "carbs in grams",
    "fat": "fat in grams",
    "fiber": "fiber in grams"
  },
  "servings": "number of servings",
  "prepTime": "preparation time",
  "cookTime": "cooking time",
  "difficulty": "Easy/Medium/Hard",
  "dietaryTags": ["applicable tags from: vegan, vegetarian, keto, gluten-free, dairy-free, low-carb, high-protein, paleo"],
  "servingSuggestions": ["suggestion 1", "suggestion 2"]
}`;

groq.chat.completions.create({
  model: 'llama-3.3-70b-versatile',
  messages: [{ role: 'user', content: prompt }],
  max_tokens: 1500,
}).then((r) => {
  const text = r.choices[0].message.content;
  console.log('TEXT START');
  console.log(text);
  console.log('TEXT END');
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  console.log('MATCH', jsonMatch ? jsonMatch[0].slice(0, 400) : 'NONE');
}).catch((e) => {
  console.error(e);
  process.exit(1);
});
