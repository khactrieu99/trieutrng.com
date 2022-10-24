import client from "./Client";
import { CREATE_TAG, GET_ALL_TAGS, REMOVE_TAG } from "./EndPoints";

export const getAllTags = () => {
  const url = GET_ALL_TAGS;
  return client.get(url);
};

export const createTag = (tag) => {
  const url = CREATE_TAG;
  return client.post(url, new URLSearchParams({
    name: tag
  }));
}

export const removeTag = (tag) => {
  const url = REMOVE_TAG;
  return client.post(url, new URLSearchParams({
    name: tag
  }));
}