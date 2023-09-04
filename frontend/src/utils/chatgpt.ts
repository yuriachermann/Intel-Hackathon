import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export async function chatGpt(messages: any) {
  const response = await openai.createCompletion({
    model: 'gpt-3.5-turbo',
    messages: messages,
  });

  return response.choices[0].message.content;
}
