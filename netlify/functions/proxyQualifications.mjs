import axios from 'axios';

export const handler = async () => {
  const url = process.env.API_URL;

  try {
    const date = axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(date.data),
    };
  } catch (err) {
    throw new Error(err);
  }
};
