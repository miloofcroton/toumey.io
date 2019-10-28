import fetch from 'isomorphic-unfetch';

export const fetchRaw = async (
  input: RequestInfo,
  init?: RequestInit,
) => {
  try {
    const data = await fetch(input, init).then((res) => res);
    return data;
  }
  catch (err) {
    throw new Error(err.message);
  }
};

export const fetchJson = async (
  input: RequestInfo,
  init?: RequestInit,
) => {
  try {
    const data = await fetch(input, init).then((res) => res.json());
    return data;
  }
  catch (err) {
    throw new Error(err.message);
  }
};

export const fetchMd = async (
  input: RequestInfo,
  init?: RequestInit,
) => {
  try {
    const data = await fetch(input, init).then((res) => res.text());
    return data;
  }
  catch (err) {
    throw new Error(err.message);
  }
};
